"use client"

import Typography from "@/components/lib/typography"
import SectionWrapper from "@/components/lib/section-wrapper"
import Image from "next/image"
import LocationPinIcon from '@mui/icons-material/LocationPin';
import Accordion from "@/components/lib/accordion";
import { dataCompany } from "@/components/lib/static";
import React from "react";

export default function Journey(){

    const company = dataCompany;
    const [activeId, setActiveId] = React.useState<number | null>(null);

    // mapping
    const pinPositions: Record<string, { top?: string; left?: string; bottom?: string; }> = {
        1: {bottom: "23%", left: "32%"},
        2: {top: "9%", left: "12%"},
        3: {top: "9%", left: "12%"},
        4: {bottom: "28%", left: "28%"},
        5: {top: "22%", left: "20.5%"},
    };

    return(
        <SectionWrapper className="mb-4 md:mb-0">
            <div id="journey" className="mb-2 md:mb-4">
                <Typography variant="h6" mobileVariant="sub1" weight="bold" as="h1">
                    My Journey
                </Typography>
                <Typography variant="bd3" mobileVariant="sub2" weight="semibold">
                    in Indonesia.
                </Typography>
            </div>
            <div className="relative">
                <div className="hidden lg:block">
                    <Image src="/assets/images/map.png" alt="map" width={1000} height={1000} className="w-full h-auto"/>
                </div>

                {activeId && pinPositions[activeId] && (
                <div
                    className={`absolute hover:scale-110 transition-all duration-100 hidden md:block`}
                    style={pinPositions[activeId]}
                >
                    <LocationPinIcon sx={{ fontSize: "35px", color: "red" }}/>
                </div>
                )}

                {/* demo */}
                <div className="lg:absolute md:max-w-72 top-0 lg:right-10 bg-white dark:bg-black text-black dark:text-white border-2 shadow-md">
                    <div className="flex flex-col p-3">
                        <Typography variant="bd3" mobileVariant="bd1" weight="semibold" className="mb-3">
                            Journey
                        </Typography>
                        <Accordion 
                            List={company.map((item) => ({
                            id: item.id,
                            logo: item.logo,
                            name: item.name,
                            desc: item.desc,
                            }))}
                            onToggle={(id) => setActiveId(id)}/>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}