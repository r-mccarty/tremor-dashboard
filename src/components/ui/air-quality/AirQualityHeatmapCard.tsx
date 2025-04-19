import { hourlyData } from "@/data/air-quality-data"
import { cx } from "@/lib/utils"

export type HeatmapCardProps = {
    title: string
    subtitle: string
    description: string
}

// Color scale for CO2 levels
const getColorForValue = (value: number) => {
    if (value < 600) return "bg-green-100 dark:bg-green-900"
    if (value < 800) return "bg-green-300 dark:bg-green-700"
    if (value < 1000) return "bg-yellow-300 dark:bg-yellow-700"
    if (value < 1200) return "bg-orange-300 dark:bg-orange-700"
    return "bg-red-400 dark:bg-red-700"
}

// Get text color for value display
const getTextColorForValue = (value: number) => {
    if (value < 600) return "text-green-800 dark:text-green-200"
    if (value < 800) return "text-green-800 dark:text-green-200"
    if (value < 1000) return "text-yellow-800 dark:text-yellow-200"
    if (value < 1200) return "text-orange-800 dark:text-orange-200"
    return "text-red-800 dark:text-red-200"
}

// Hours to display on the x-axis
const hours = [0, 3, 6, 9, 12, 15, 18, 21]

// Filter to just get the first day of data for the week heatmap
const lastDay = hourlyData[hourlyData.length - 1]

export function AirQualityHeatmapCard({ title, subtitle, description }: HeatmapCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
            <div className="flex flex-col h-full">
                <div className="mb-4">
                    <h3 className="font-bold text-gray-900 sm:text-sm dark:text-gray-50 font-heading">
                        {title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                </div>

                <div className="mt-2">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50 font-heading mb-3">
                        {subtitle}
                    </p>

                    {/* Hour labels */}
                    <div className="flex mb-1">
                        <div className="w-12 mr-1 text-right">
                            <span className="text-xs text-gray-500">Hour</span>
                        </div>
                        <div className="flex flex-1 justify-between">
                            {hours.map(hour => (
                                <div key={hour} className="text-xs text-gray-500 w-6 text-center">
                                    {hour}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Heatmap grid */}
                    <div className="flex mb-4 items-center">
                        <div className="w-12 mr-1 text-right">
                            <span className="text-xs text-gray-500 leading-relaxed">Today</span>
                        </div>
                        <div className="flex-1 grid grid-cols-24 gap-[1px]">
                            {lastDay.map((hourData, i) => (
                                <div
                                    key={i}
                                    className={cx(
                                        "aspect-square rounded-sm flex items-center justify-center relative group",
                                        getColorForValue(hourData.value)
                                    )}
                                >
                                    {/* Tooltip on hover */}
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block z-10">
                                        <div className="bg-gray-900 text-white text-xs rounded p-1 whitespace-nowrap">
                                            {hourData.hour}:00 - {hourData.value} ppm
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-end mt-2 gap-3">
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-sm bg-green-300 dark:bg-green-700 mr-1"></div>
                            <span className="text-xs text-gray-500">&lt;800</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-sm bg-yellow-300 dark:bg-yellow-700 mr-1"></div>
                            <span className="text-xs text-gray-500">&lt;1000</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-sm bg-orange-300 dark:bg-orange-700 mr-1"></div>
                            <span className="text-xs text-gray-500">&lt;1200</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-sm bg-red-400 dark:bg-red-700 mr-1"></div>
                            <span className="text-xs text-gray-500">&gt;1200</span>
                        </div>
                    </div>
                </div>

                {/* Weekly summary */}
                <div className="mt-auto pt-4">
                    <h4 className="text-xs font-medium text-gray-900 dark:text-gray-50 mb-2">
                        Weekly Pattern
                    </h4>
                    <div className="flex justify-between gap-1">
                        {hourlyData.map((dayData, i) => {
                            // Calculate average for the day
                            const sum = dayData.reduce((acc, hour) => acc + hour.value, 0);
                            const avg = Math.round(sum / dayData.length);

                            return (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="text-xs text-gray-500 mb-1">{dayData[0].day}</div>
                                    <div className={cx(
                                        "h-5 w-8 rounded",
                                        getColorForValue(avg)
                                    )}>
                                        <span className={cx(
                                            "text-xs font-medium",
                                            getTextColorForValue(avg)
                                        )}>
                                            {avg}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}