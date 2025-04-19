import { addHours, format, subDays } from "date-fns"
import { AirQualityData } from "./schema"

// Generate sample air quality data for the last 30 days
export const airQualityData: AirQualityData[] = Array.from({ length: 30 }).map((_, index) => {
    const date = subDays(new Date(), 30 - index)

    // Base values
    const baseCO2 = 450
    const baseTemp = 21
    const baseHumidity = 40
    const basePM2_5 = 8
    const basePM10 = 15
    const baseVOC = 120
    const basePressure = 1013

    // Add some random variation to simulate real data
    // Time of day variation (higher CO2 during day, lower at night)
    const hourOfDay = date.getHours()
    const isDaytime = hourOfDay >= 8 && hourOfDay <= 20
    const dayFactor = isDaytime ? 1.2 : 0.8

    // Weekly variation (higher on weekdays, lower on weekends)
    const dayOfWeek = date.getDay()
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5
    const weekdayFactor = isWeekday ? 1.1 : 0.9

    // Random variation
    const randomFactor = () => 0.8 + Math.random() * 0.4 // 0.8-1.2 variation

    return {
        date: format(date, "yyyy-MM-dd"),
        CO2: Math.round(baseCO2 * dayFactor * weekdayFactor * randomFactor()),
        Temperature: +(baseTemp * randomFactor()).toFixed(1),
        Humidity: Math.round(baseHumidity * randomFactor()),
        PM2_5: +(basePM2_5 * randomFactor()).toFixed(1),
        PM10: +(basePM10 * randomFactor()).toFixed(1),
        VOC: Math.round(baseVOC * randomFactor()),
        Pressure: Math.round(basePressure * randomFactor()),
    }
})

// Generate hourly data for the heatmap (24 hours x 7 days)
export const hourlyData = Array.from({ length: 7 }).map((_, dayIndex) => {
    const day = subDays(new Date(), 6 - dayIndex)

    return Array.from({ length: 24 }).map((_, hourIndex) => {
        const datetime = addHours(day, hourIndex)
        const hourFactor = hourIndex >= 8 && hourIndex <= 18 ? 1.3 : 0.8 // Higher during working hours
        const randomValue = Math.random() * 0.4 // Random variation

        let co2Value = 450 // Base CO2 value

        // Add peaks during specific times (e.g., lunch, dinner)
        if (hourIndex === 12 || hourIndex === 18) {
            co2Value += 200
        }

        // Apply factors
        co2Value = Math.round(co2Value * hourFactor * (0.8 + randomValue))

        return {
            day: format(day, "EEE"),
            hour: hourIndex,
            value: co2Value,
            datetime,
        }
    })
})

// Generate today's hourly data for real-time charts
export const todaysHourlyData = Array.from({ length: 24 }).map((_, hourIndex) => {
    const now = new Date()
    const hour = now.getHours()
    const isPast = hourIndex <= hour

    let datetime
    if (isPast) {
        datetime = addHours(now, hourIndex - hour)
    } else {
        // Future hours are from yesterday
        datetime = addHours(subDays(now, 1), 24 + hourIndex - hour)
    }

    // Working hours have higher values
    const isWorkHour = hourIndex >= 8 && hourIndex <= 18
    const hourFactor = isWorkHour ? 1.3 : 0.8

    // Lunch and dinner spikes
    const isMealTime = hourIndex === 12 || hourIndex === 18
    const mealFactor = isMealTime ? 1.4 : 1

    // Random variation
    const randomFactor = 0.9 + Math.random() * 0.2

    const baseValue = isPast ? (400 + hourIndex * 2) : null // Only show values for past hours

    return {
        hour: format(datetime, "HH:mm"),
        CO2: baseValue ? Math.round(baseValue * hourFactor * mealFactor * randomFactor) : null,
        Temperature: baseValue ? +(21 + (hourIndex / 10) * randomFactor).toFixed(1) : null,
        Humidity: baseValue ? Math.round(40 * randomFactor) : null,
    }
})