"use client"

import Banner from "@/components/lib/banner";
import SectionWrapper from "@/components/lib/section-wrapper";

export default function Cta(){
    return(
        <SectionWrapper>
            <div className="">
                <Banner title="#Let'sConnect" description="Let's connect and communicate about anything related to technology." image="/assets/images/linkedin.png" buttonMain="Connect" btnlink="https://linkedin.com/in/jovis-jocunda"/>
            </div>
        </SectionWrapper>
    )
}