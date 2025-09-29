"use client"

import Buttons from "@/components/lib/button";
import ImageSlider from "@/components/lib/image-slider";
import SectionWrapper from "@/components/lib/section-wrapper";
import { dataCertificate } from "@/components/lib/static";
import Typography from "@/components/lib/typography";
import Image from "next/image";
import { useState } from "react";

export default function Certification(){

    const certification = dataCertificate;

    const [current, setCurrent] = useState(0);

    return (
        <SectionWrapper>
            <div id="certification" className="mb-4">
                <Typography variant="h6" mobileVariant="sub1" weight="bold" as="h1">
                    Certification
                </Typography>
                <Typography variant="bd3" mobileVariant="sub2" weight="semibold">
                    yeah, I studied then got this.
                </Typography>
            </div>
            <div className="hidden lg:flex space-x-4">
                <div className="w-full">
                    <div className="flex flex-col space-y-3 w-fit">
                        {certification.map((item, index) => (
                            <Buttons key={item.id} type="simple-icon-hover" icon=">" onClick={() => setCurrent(index)} className={`${current === index ? "translate-x-3" : ""}`}>
                                <Typography variant="bd3" weight="semibold" className="text-start">
                                    {item.name}
                                </Typography>
                            </Buttons>
                        ))}
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex flex-col space-y-3">
                        <div>
                            <ImageSlider current={current} setCurrent={setCurrent}/>
                        </div>
                        <div>
                            {certification[current] && (
                                <div className="text-center">
                                    <Typography variant="bd1" weight="semibold">
                                        {certification[current].institute}
                                    </Typography>
                                    <Typography variant="link" weight="regular">
                                        {certification[current].desc}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="block lg:hidden">
                {certification.map((item) => (
                    <div key={item.id}>
                        <Image src={item.image} alt={item.name} width={1000} height={1000} className="w-full h-auto"/>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
}