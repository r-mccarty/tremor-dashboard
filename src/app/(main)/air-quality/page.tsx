"use client"
import { AirQualityChartCard } from "@/components/ui/air-quality/AirQualityChartCard"
import { AirQualityGaugeCard } from "@/components/ui/air-quality/AirQualityGaugeCard"
import { AirQualityHeatmapCard } from "@/components/ui/air-quality/AirQualityHeatmapCard"
import { Filterbar } from "@/components/ui/overview/DashboardFilterbar"
import { AirQualityData } from "@/data/schema"
import { cx } from "@/lib/utils"
import { subDays } from "date-fns"
import React from "react"
import { DateRange } from "react-day-picker"

export type PeriodValue = "previous-period" | "last-year" | "no-comparison"

const categories: {
    title: keyof AirQualityData
    type: "level" | "temperature" | "percent" | "pressure"
}[] = [
        {
            title: "CO2",
            type: "level",
        },
        {
            title: "Temperature",
            type: "temperature",
        },
        {
            title: "Humidity",
            type: "percent",
        },
        {
            title: "PM2_5",
            type: "level",
        },
        {
            title: "PM10",
            type: "level",
        },
        {
            title: "VOC",
            type: "level",
        },
        {
            title: "Pressure",
            type: "pressure",
        },
    ]

export type SensorReading = {
    title: string
    value: number
    status: "normal" | "warning" | "critical"
    unit: string
}

const currentReadings: SensorReading[] = [
    {
        title: "CO2",
        value: 680,
        status: "normal",
        unit: "ppm",
    },
    {
        title: "Temperature",
        value: 23.2,
        status: "normal",
        unit: "°C",
    },
    {
        title: "Humidity",
        value: 42.5,
        status: "normal",
        unit: "%",
    },
]

const roomReadings: SensorReading[] = [
    {
        title: "Living Room",
        value: 680,
        status: "normal",
        unit: "ppm",
    },
    {
        title: "Bedroom",
        value: 825,
        status: "warning",
        unit: "ppm",
    },
    {
        title: "Kitchen",
        value: 910,
        status: "warning",
        unit: "ppm",
    },
]

// Calculate maxDate as today
const today = new Date()

export default function AirQualityDashboard() {
    const [selectedDates, setSelectedDates] = React.useState<
        DateRange | undefined
    >({
        from: subDays(today, 7),
        to: today,
    })
    const [selectedPeriod, setSelectedPeriod] =
        React.useState<PeriodValue>("previous-period")

    const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
        categories.map((category) => category.title),
    )

    return (
        <>
            <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50 font-heading">
                    Air Quality Monitoring
                </h1>
            </div>

            <section aria-labelledby="current-air-quality">
                <h2
                    id="current-air-quality"
                    className="mt-8 scroll-mt-10 text-lg tracking-normal font-semibold text-gray-900 sm:text-xl dark:text-gray-50 font-heading"
                >
                    CURRENT READINGS
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-6 sm:mt-6 sm:grid-cols-2 lg:mt-8 xl:grid-cols-3">
                    <AirQualityGaugeCard
                        title="Air Quality"
                        value="Good"
                        valueDescription="Current air quality status"
                        ctaDescription="Last updated at 3:45 PM"
                        ctaText="View details"
                        ctaLink="#"
                        data={currentReadings}
                    />
                    <AirQualityGaugeCard
                        title="CO2 by Room"
                        value="825"
                        valueDescription="Average CO2 level (ppm)"
                        ctaDescription="2 rooms require ventilation"
                        ctaText="View all rooms"
                        ctaLink="#"
                        data={roomReadings}
                    />
                    <AirQualityHeatmapCard
                        title="24-hour Heatmap"
                        subtitle="CO2 levels (ppm)"
                        description="Today's hourly CO2 readings"
                    />
                </div>
            </section>

            <section aria-labelledby="air-quality-trends">
                <h2
                    id="air-quality-trends"
                    className="mt-16 scroll-mt-8 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50 font-heading"
                >
                    Air Quality Trends
                </h2>
                <div className="sticky top-16 z-20 flex items-center justify-between border-b border-gray-200 bg-white pb-4 pt-4 sm:pt-6 lg:top-0 lg:mx-0 lg:px-0 lg:pt-8 dark:border-gray-800 dark:bg-gray-950">
                    <Filterbar
                        maxDate={today}
                        minDate={subDays(today, 30)}
                        selectedDates={selectedDates}
                        onDatesChange={(dates) => setSelectedDates(dates)}
                        selectedPeriod={selectedPeriod}
                        onPeriodChange={(period) => setSelectedPeriod(period)}
                        categories={categories as any}
                        setSelectedCategories={setSelectedCategories}
                        selectedCategories={selectedCategories}
                    />
                </div>
                <dl
                    className={cx(
                        "mt-10 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
                    )}
                >
                    {categories
                        .filter((category) => selectedCategories.includes(category.title))
                        .map((category) => {
                            return (
                                <AirQualityChartCard
                                    key={category.title}
                                    title={category.title}
                                    type={category.type}
                                    selectedDates={selectedDates}
                                    selectedPeriod={selectedPeriod}
                                />
                            )
                        })}
                </dl>
            </section>
        </>
    )
}