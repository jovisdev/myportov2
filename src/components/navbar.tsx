"use client";
import Image from "next/image";
import SectionWrapper from "./lib/section-wrapper";
import Typography from "./lib/typography";

export default function Navbar(){
    return(
        <div className="border-b border-white">
            <SectionWrapper>
            <div className="flex justify-between items-center">
                <div>
                    <Typography variant="sub1" weight="semibold">
                        this.jovis;
                    </Typography>
                </div>
                <div className="flex space-x-3">
                    <p>Hero</p>
                    <p>Journey</p>
                    <p>skill</p>
                    <p>Works</p>
                </div>
            </div>
            </SectionWrapper>
        </div>
    )
}