"use client";

import {
    RiArrowRightLine,
    RiDashboardLine,
    RiDatabase2Line,
    RiLineChartLine,
    RiPieChart2Line,
    RiTeamLine
} from "@remixicon/react";
import Link from "next/link";
import { siteConfig } from "./siteConfig";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            {/* Header */}
            <header className="border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <RiDashboardLine className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                        <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white font-heading">
                            {siteConfig.name}
                        </span>
                    </div>
                    <nav>
                        <Link href={siteConfig.baseLinks.overview} className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-heading dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                            DASHBOARD
                            <RiArrowRightLine className="ml-2 h-5 w-5" />
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div>
                            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading">
                                The only dashboard you will ever need
                            </h1>
                            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                                A powerful, flexible, and beautiful dashboard template built with Tremor components.
                                Perfect for visualizing your data and managing your application.
                            </p>
                            <div className="flex gap-4">
                                <Link href={siteConfig.baseLinks.overview} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-heading">
                                    GET STARTED
                                    <RiArrowRightLine className="ml-2 h-5 w-5" />
                                </Link>
                                <Link href={siteConfig.baseLinks.overview} className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-heading dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                                    LEARN MORE
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
                                <img
                                    src="https://assets.tremor.so/hero.png"
                                    alt="Dashboard Preview"
                                    className="rounded-md w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-indigo-600 dark:text-indigo-400 mb-2 font-heading text-sm uppercase tracking-widest">
                            POWERFUL FEATURES
                        </p>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Everything you need in one place
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                            Our dashboard template comes with everything you need to visualize your data,
                            manage your application, and make informed decisions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<RiLineChartLine className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
                            title="Advanced Analytics"
                            description="Visualize your data with beautiful charts and graphs to gain actionable insights."
                        />
                        <FeatureCard
                            icon={<RiDatabase2Line className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
                            title="Data Management"
                            description="Easily manage your data with powerful tables and filtering capabilities."
                        />
                        <FeatureCard
                            icon={<RiTeamLine className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
                            title="User Management"
                            description="Manage your users, roles, and permissions with a simple and intuitive interface."
                        />
                        <FeatureCard
                            icon={<RiPieChart2Line className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
                            title="Performance Metrics"
                            description="Track the performance of your application with real-time metrics and alerts."
                        />
                        <FeatureCard
                            icon={<RiDashboardLine className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
                            title="Customizable Dashboard"
                            description="Customize your dashboard to show the metrics and data that matter most to you."
                        />
                        <FeatureCard
                            icon={<RiArrowRightLine className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
                            title="And Much More"
                            description="Discover all the features and capabilities of our dashboard template."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-600 dark:bg-indigo-700">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white font-heading">
                        Ready to get started?
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8 text-indigo-100">
                        Start using our dashboard template today and take your application to the next level.
                    </p>
                    <Link href={siteConfig.baseLinks.overview} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white font-heading">
                        ACCESS DASHBOARD
                        <RiArrowRightLine className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 bg-gray-100 dark:bg-gray-950">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <RiDashboardLine className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                            <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white font-heading">
                                {siteConfig.name}
                            </span>
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">
                            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
                {description}
            </p>
        </div>
    );
}