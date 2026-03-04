import type { ReactNode } from "react";

interface PageLayoutProps {
    children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="relative grid min-h-screen grid-cols-[1fr_1rem_auto_0.75rem_1fr] md:grid-cols-[1fr_1.5rem_auto_1.5rem_1fr] lg:grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white dark:bg-gray-950">
            
            {/* Main Content Area - Centered */}
            <div className="col-start-3 row-start-3 flex flex-col bg-gray-50 dark:bg-gray-900/50">
                <div className="bg-white dark:bg-gray-950">
                    {children}
                </div>
            </div>
            
            {/* Left Vertical Border with Diagonal Pattern */}
            <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-gray-200 dark:border-x-gray-800 bg-[image:repeating-linear-gradient(315deg,_rgb(229_231_235)_0,_rgb(229_231_235)_1px,_transparent_0,_transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,_rgb(55_65_81)_0,_rgb(55_65_81)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
            
            {/* Right Vertical Border with Diagonal Pattern */}
            <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-gray-200 dark:border-x-gray-800 bg-[image:repeating-linear-gradient(315deg,_rgb(229_231_235)_0,_rgb(229_231_235)_1px,_transparent_0,_transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,_rgb(55_65_81)_0,_rgb(55_65_81)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
            
            {/* Top Horizontal Border */}
            <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-gray-200 dark:bg-gray-800"></div>
            
            {/* Bottom Horizontal Border */}
            <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-gray-200 dark:bg-gray-800"></div>
        </div>
    );
}