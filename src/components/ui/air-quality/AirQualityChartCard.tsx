import { PeriodValue } from "@/app/(main)/air-quality/page"
import { Badge } from "@/components/Badge"
import { LineChart } from "@/components/LineChart"
import { airQualityData } from "@/data/air-quality-data"
import { AirQualityData } from "@/data/schema"
import { cx, percentageFormatter } from "@/lib/utils"
import {
    eachDayOfInterval,
    formatDate,
    interval,
    isWithinInterval,
} from "date-fns"
import { DateRange } from "react-day-picker"
import { getPeriod } from "../overview/DashboardFilterbar"

export type CardProps = {
    title: keyof AirQualityData
    type: "level" | "temperature" | "percent" | "pressure"
    selectedDates: DateRange | undefined
    selectedPeriod: PeriodValue
    isThumbnail?: boolean
}

// Custom formatting for different air quality metric types
const formattingMap = {
    level: (value: number) => `${value}`,
    temperature: (value: number) => `${value}°C`,
    percent: (value: number) => `${value}%`,
    pressure: (value: number) => `${value} hPa`,
}


export const getBadgeType = (value: number) => {
    if (value > 0) {
        return "success"
    } else if (value < 0) {
        if (value < -50) {
            return "warning"
        }
        return "error"
    } else {
        return "neutral"
    }
}

export function AirQualityChartCard({
    title,
    type,
    selectedDates,
    selectedPeriod,
    isThumbnail,
}: CardProps) {
    const formatter = formattingMap[type]
    const selectedDatesInterval =
        selectedDates?.from && selectedDates?.to
            ? interval(selectedDates.from, selectedDates.to)
            : null
    const allDatesInInterval =
        selectedDates?.from && selectedDates?.to
            ? eachDayOfInterval(interval(selectedDates.from, selectedDates.to))
            : null
    const prevDates = getPeriod(selectedDates, selectedPeriod)

    const prevDatesInterval =
        prevDates?.from && prevDates?.to
            ? interval(prevDates.from, prevDates.to)
            : null

    const data = airQualityData
        .filter((reading) => {
            if (selectedDatesInterval) {
                return isWithinInterval(new Date(reading.date), selectedDatesInterval)
            }
            return true
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const prevData = airQualityData
        .filter((reading) => {
            if (prevDatesInterval) {
                return isWithinInterval(new Date(reading.date), prevDatesInterval)
            }
            return false
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const chartData = allDatesInInterval
        ?.map((date, index) => {
            const dateStr = formatDate(date, "yyyy-MM-dd")
            const reading = data.find(d => d.date === dateStr)
            const prevReading = prevData[index]
            const value = reading ? reading[title] : null
            const previousValue = prevReading ? prevReading[title] : null

            return {
                title,
                date: date,
                formattedDate: formatDate(date, "dd/MM/yyyy"),
                value,
                previousDate: prevReading?.date,
                previousFormattedDate: prevReading
                    ? formatDate(new Date(prevReading.date), "dd/MM/yyyy")
                    : null,
                previousValue:
                    selectedPeriod !== "no-comparison" ? previousValue : null,
                evolution:
                    selectedPeriod !== "no-comparison" && typeof value === 'number' && typeof previousValue === 'number'
                        ? (value - previousValue) / previousValue
                        : undefined,
            }
        })
        .filter(item => item.value !== null)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const categories =
        selectedPeriod === "no-comparison" ? ["value"] : ["value", "previousValue"]

    // Get average value for the selected period
    const value =
        chartData && chartData.length > 0
            ? chartData.reduce((acc, item) => acc + (Number(item.value) || 0), 0) / chartData.length
            : 0

    const previousValue =
        chartData && chartData.length > 0 && selectedPeriod !== "no-comparison"
            ? chartData.reduce((acc, item) => acc + (Number(item.previousValue) || 0), 0) / chartData.length
            : 0

    const evolution =
        selectedPeriod !== "no-comparison" && previousValue !== 0
            ? (value - previousValue) / previousValue
            : 0

    // Colors based on metric type
    const chartColor = type === "level" ? "pink" :
        type === "temperature" ? "amber" :
            type === "percent" ? "blue" : "indigo"

    return (
        <div className={cx("transition rounded-xl border border-gray-200 p-6 dark:border-gray-800")}>
            <div className="flex items-center justify-between gap-x-2">
                <div className="flex items-center gap-x-2">
                    <dt className="font-bold text-gray-900 sm:text-sm dark:text-gray-50 font-heading">
                        {title}
                    </dt>
                    {selectedPeriod !== "no-comparison" && (
                        <Badge variant={getBadgeType(evolution)}>
                            {percentageFormatter(evolution)}
                        </Badge>
                    )}
                </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
                <dd className="text-xl text-gray-900 dark:text-gray-50">
                    {formatter(value)}
                </dd>
                {selectedPeriod !== "no-comparison" && (
                    <dd className="text-sm text-gray-500">
                        from {formatter(previousValue)}
                    </dd>
                )}
            </div>
            <LineChart
                className="mt-4 h-40"
                data={chartData || []}
                index="formattedDate"
                colors={[chartColor, "gray"]}
                startEndOnly={true}
                valueFormatter={(value) => formatter(value as number)}
                showYAxis={true}
                showLegend={false}
                categories={categories}
                showTooltip={isThumbnail ? false : true}
                autoMinValue
            />
        </div>
    )
}