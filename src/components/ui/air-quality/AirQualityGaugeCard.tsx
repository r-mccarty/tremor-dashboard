import { SensorReading } from "@/app/(main)/air-quality/page"
import { cx } from "@/lib/utils"

export type CardProps = {
    title: string
    value: string
    valueDescription: string
    ctaDescription: string
    ctaText: string
    ctaLink: string
    data: SensorReading[]
}

// Color mapping based on air quality status
const statusColors = {
    normal: "bg-green-500",
    warning: "bg-yellow-500",
    critical: "bg-red-500",
}

const statusTextColors = {
    normal: "text-green-500 dark:text-green-400",
    warning: "text-yellow-500 dark:text-yellow-400",
    critical: "text-red-500 dark:text-red-400",
}

export function AirQualityGaugeCard({
    title,
    value,
    valueDescription,
    ctaDescription,
    ctaText,
    ctaLink,
    data,
}: CardProps) {
    return (
        <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center gap-2">
                        <dt className="font-bold text-gray-900 sm:text-sm dark:text-gray-50 font-heading">
                            {title}
                        </dt>
                    </div>
                    <dd className="mt-2 flex items-baseline gap-2">
                        <span className="text-xl text-gray-900 dark:text-gray-50">
                            {value}
                        </span>
                        <span className="text-sm text-gray-500">{valueDescription}</span>
                    </dd>
                    <ul role="list" className="mt-6 space-y-4">
                        {data.map((item) => (
                            <li key={item.title} className="relative">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                        {item.title}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <span className={cx("h-2 w-2 rounded-full", statusColors[item.status])}></span>
                                        <span className={cx("text-sm font-medium", statusTextColors[item.status])}>
                                            {item.value}{item.unit}
                                        </span>
                                    </div>
                                </div>

                                {/* Gauge visualization */}
                                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-800">
                                    <div
                                        className={cx(
                                            "h-full rounded-full transition-all duration-500",
                                            item.status === "normal" ? "bg-green-500" :
                                                item.status === "warning" ? "bg-yellow-500" : "bg-red-500"
                                        )}
                                        style={{
                                            width: `${
                                                // Calculate width based on reading type
                                                item.title === "CO2"
                                                    ? Math.min(100, (item.value / 1500) * 100)
                                                    : item.title === "Temperature"
                                                        ? Math.min(100, ((item.value - 15) / 15) * 100)
                                                        : item.title === "Humidity"
                                                            ? Math.min(100, (item.value / 100) * 100)
                                                            : 50 // Default fallback
                                                }%`
                                        }}
                                    ></div>
                                </div>

                                {/* Gauge ticks */}
                                <div className="flex justify-between mt-1 px-1">
                                    {item.title === "CO2" && (
                                        <>
                                            <span className="text-xs text-gray-500">400</span>
                                            <span className="text-xs text-gray-500">700</span>
                                            <span className="text-xs text-gray-500">1000</span>
                                            <span className="text-xs text-gray-500">1500+</span>
                                        </>
                                    )}
                                    {item.title === "Temperature" && (
                                        <>
                                            <span className="text-xs text-gray-500">15°C</span>
                                            <span className="text-xs text-gray-500">20°C</span>
                                            <span className="text-xs text-gray-500">25°C</span>
                                            <span className="text-xs text-gray-500">30°C</span>
                                        </>
                                    )}
                                    {item.title === "Humidity" && (
                                        <>
                                            <span className="text-xs text-gray-500">0%</span>
                                            <span className="text-xs text-gray-500">30%</span>
                                            <span className="text-xs text-gray-500">60%</span>
                                            <span className="text-xs text-gray-500">100%</span>
                                        </>
                                    )}
                                    {item.title === "Living Room" && (
                                        <>
                                            <span className="text-xs text-gray-500">400</span>
                                            <span className="text-xs text-gray-500">700</span>
                                            <span className="text-xs text-gray-500">1000</span>
                                            <span className="text-xs text-gray-500">1500+</span>
                                        </>
                                    )}
                                    {item.title === "Bedroom" && (
                                        <>
                                            <span className="text-xs text-gray-500">400</span>
                                            <span className="text-xs text-gray-500">700</span>
                                            <span className="text-xs text-gray-500">1000</span>
                                            <span className="text-xs text-gray-500">1500+</span>
                                        </>
                                    )}
                                    {item.title === "Kitchen" && (
                                        <>
                                            <span className="text-xs text-gray-500">400</span>
                                            <span className="text-xs text-gray-500">700</span>
                                            <span className="text-xs text-gray-500">1000</span>
                                            <span className="text-xs text-gray-500">1500+</span>
                                        </>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="mt-6 text-xs text-gray-500">
                        {ctaDescription}{" "}
                        <a href={ctaLink} className="text-indigo-600 dark:text-indigo-400">
                            {ctaText}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}