"use client"

import SectionWrapper from "@/components/lib/section-wrapper";
import Typography from "@/components/lib/typography";
import { Typewriter } from "react-simple-typewriter";

export default function Hero(){
    return(
        <SectionWrapper>
            <div>
                <Typography variant="h4" weight="bold">
                    Hello, I'm
                </Typography>
                <Typography variant="h6" weight="bold">
                    <Typewriter
                        words={['Web Developer', 'DevOps', 'IT Expert']}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </Typography>
            </div>
        </SectionWrapper>
    )
}