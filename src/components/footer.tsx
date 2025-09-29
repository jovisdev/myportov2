"use client"

import SectionWrapper from "./lib/section-wrapper"
import Typography from "./lib/typography"

export default function Footer(){
    return(
        <div className="border-t-2 w-full">
            <SectionWrapper>
                <div className="flex justify-center">
                    <Typography variant="bd3">
                        &copy; jovis jocunda 2025.
                    </Typography>
                </div>
            </SectionWrapper>
        </div>
    )
}