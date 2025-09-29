"use client"

import SectionWrapper from "@/components/lib/section-wrapper";
import Typography from "@/components/lib/typography";
import ThemeToggle from "@/components/lib/theme/theme-toggle";
import { Typewriter } from "react-simple-typewriter";
import MotoBike from "@/components/lib/ux/motobike";

export default function Hero(){
    return(
        <SectionWrapper>
            <div id="i'm" className="grid grid-cols-1 lg:grid-cols-2 h-screen">
                <div className="flex flex-col space-y-4 justify-center">
                    <Typography variant="h6" weight="bold" as="h1">
                        Hello, I'm
                    </Typography>
                    <Typography variant="h4" mobileVariant="sub1" weight="bold">
                        <Typewriter
                            words={['Biker','Software Engineer', 'DevOps', 'IT Expert']}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </Typography>
                    <Typography variant="sub2" mobileVariant="sub2" weight="semibold">
                        “Passionate about transforming challenges into digital solutions.”
                    </Typography>
                </div>
                <div className="flex flex-col space-y-4 justify-center items-center">
                    <MotoBike/>
                    <ThemeToggle/>
                </div>
            </div>
        </SectionWrapper>
    )
}