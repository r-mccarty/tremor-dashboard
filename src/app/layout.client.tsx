"use client";

import { Sidebar } from "@/components/ui/navigation/Sidebar";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

export function RootLayoutClient({
    children
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    // Only show sidebar on pages that are not the landing page
    const isLandingPage = pathname === "/";

    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            {!isLandingPage && <Sidebar />}
            <main className={!isLandingPage ? "lg:pl-72" : ""}>
                {children}
            </main>
        </ThemeProvider>
    );
}