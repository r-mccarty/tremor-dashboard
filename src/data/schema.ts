export type Usage = {
  owner: string
  status: string
  costs: number
  region: string
  stability: number
  lastEdited: string
}

export type OverviewData = {
  date: string
  "Rows written": number
  "Rows read": number
  Queries: number
  "Payments completed": number
  "Sign ups": number
  Logins: number
  "Sign outs": number
  "Support calls": number
}

export type AirQualityData = {
  date: string
  CO2: number
  Temperature: number
  Humidity: number
  PM2_5: number
  PM10: number
  VOC: number
  Pressure: number
}
