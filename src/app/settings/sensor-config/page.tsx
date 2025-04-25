"use client"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/Select"
import { Switch } from "@/components/Switch"

export default function SensorConfig() {
    return (
        <>
            <div className="space-y-10">
                <section aria-labelledby="sensor-settings">
                    <form>
                        <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                            <div>
                                <h2
                                    id="sensor-settings"
                                    className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50 font-heading"
                                >
                                    Sensor Configurations
                                </h2>
                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Manage your sensor settings and configuration options.
                                </p>
                            </div>
                            <div className="md:col-span-2">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                                    <div className="col-span-full sm:col-span-3">
                                        <Label htmlFor="sensor-name" className="font-medium">
                                            Sensor Name
                                        </Label>
                                        <Input
                                            type="text"
                                            id="sensor-name"
                                            name="sensor-name"
                                            placeholder="Temperature Sensor"
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <Label htmlFor="sensor-id" className="font-medium">
                                            Sensor ID
                                        </Label>
                                        <Input
                                            type="text"
                                            id="sensor-id"
                                            name="sensor-id"
                                            placeholder="TEMP-001"
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <Label htmlFor="sensor-type" className="font-medium">
                                            Sensor Type
                                        </Label>
                                        <Select defaultValue="temperature">
                                            <SelectTrigger
                                                name="sensor-type"
                                                id="sensor-type"
                                                className="mt-2"
                                            >
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="temperature">Temperature</SelectItem>
                                                <SelectItem value="humidity">Humidity</SelectItem>
                                                <SelectItem value="pressure">Pressure</SelectItem>
                                                <SelectItem value="air-quality">Air Quality</SelectItem>
                                                <SelectItem value="motion">Motion</SelectItem>
                                                <SelectItem value="custom">Custom</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <Label htmlFor="polling-interval" className="font-medium">
                                            Polling Interval (seconds)
                                        </Label>
                                        <Input
                                            type="number"
                                            id="polling-interval"
                                            name="polling-interval"
                                            placeholder="60"
                                            className="mt-2"
                                            min="1"
                                            step="1"
                                        />
                                    </div>
                                    <div className="col-span-full">
                                        <Label htmlFor="location" className="font-medium">
                                            Location
                                        </Label>
                                        <Input
                                            type="text"
                                            id="location"
                                            name="location"
                                            placeholder="Building A, Floor 2"
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="col-span-full flex items-center justify-between">
                                        <div>
                                            <Label htmlFor="active-status" className="font-medium">
                                                Active Status
                                            </Label>
                                            <p className="text-sm text-gray-500">
                                                Enable or disable this sensor
                                            </p>
                                        </div>
                                        <Switch id="active-status" defaultChecked />
                                    </div>
                                    <div className="col-span-full mt-6 flex justify-end">
                                        <Button type="submit">Save Configuration</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <Divider />
                <section aria-labelledby="sensor-thresholds">
                    <form>
                        <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                            <div>
                                <h2
                                    id="sensor-thresholds"
                                    className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50 font-heading"
                                >
                                    Alert Thresholds
                                </h2>
                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Configure alert thresholds for your sensors.
                                </p>
                            </div>
                            <div className="md:col-span-2">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                                    <div className="col-span-full sm:col-span-3">
                                        <Label htmlFor="min-threshold" className="font-medium">
                                            Minimum Threshold
                                        </Label>
                                        <Input
                                            type="number"
                                            id="min-threshold"
                                            name="min-threshold"
                                            placeholder="0"
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <Label htmlFor="max-threshold" className="font-medium">
                                            Maximum Threshold
                                        </Label>
                                        <Input
                                            type="number"
                                            id="max-threshold"
                                            name="max-threshold"
                                            placeholder="100"
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="col-span-full flex items-center justify-between">
                                        <div>
                                            <Label htmlFor="alert-notifications" className="font-medium">
                                                Alert Notifications
                                            </Label>
                                            <p className="text-sm text-gray-500">
                                                Receive notifications when thresholds are exceeded
                                            </p>
                                        </div>
                                        <Switch id="alert-notifications" defaultChecked />
                                    </div>
                                    <div className="col-span-full mt-6 flex justify-end">
                                        <Button type="submit">Save Thresholds</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <Divider />
                <section aria-labelledby="data-logging">
                    <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                        <div>
                            <h2
                                id="data-logging"
                                className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50 font-heading"
                            >
                                Data Logging
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                Configure data storage and retention settings.
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <Card className="p-4">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50 font-heading">
                                                Enable Data Logging
                                            </h4>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Store sensor data in the database
                                            </p>
                                        </div>
                                        <Switch id="enable-logging" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-50 font-heading">
                                                Data Retention
                                            </h4>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Select how long to keep sensor data
                                            </p>
                                        </div>
                                        <Select defaultValue="90days">
                                            <SelectTrigger
                                                name="data-retention"
                                                id="data-retention"
                                                className="w-40"
                                            >
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="30days">30 Days</SelectItem>
                                                <SelectItem value="90days">90 Days</SelectItem>
                                                <SelectItem value="180days">180 Days</SelectItem>
                                                <SelectItem value="1year">1 Year</SelectItem>
                                                <SelectItem value="forever">Forever</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button type="submit">Save Settings</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
