"use client"
import Card from "@/components/lib/card";
import SectionWrapper from "@/components/lib/section-wrapper";
import Typography from "@/components/lib/typography";
import Image from "next/image";
import { dataWhoam } from "@/components/lib/static";
import Buttons from "@/components/lib/button";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import WorkIcon from '@mui/icons-material/Work';

export default function Aboutme(){

    const data = dataWhoam;

  const [clicked, setClicked] = useState(false);

    return (
        <SectionWrapper>
            <div className="grid sm:grid-cols-2 mb-4">
                <div className="flex h-full items-center">
                    <div className="flex flex-col space-y-4">
                        <Typography variant="h6" mobileVariant="sub1" weight="bold" as="h1">
                            About Me
                        </Typography>
                        <div className="grid sm:grid-cols-3 gap-2">
                            {data.map((item) => (
                                <div key={item.id}>
                                    <Card image={item.image} desc={item.description}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center relative">
                    <div className="relative z-10">
                        <Image
                        src="/assets/images/joviss.png"
                        alt="me"
                        width={1000}
                        height={1000}
                        className="h-96 w-auto"
                        />
                    </div>

                    {clicked ? (
                        <>
                        </>
                    ) : (
                        <div className="absolute bottom-20 left-20 border rounded-lg bg-white dark:bg-black ">
                            <Buttons type="simple">
                                try to click me
                            </Buttons>
                        </div>
                    )}

                    {/* float icon */}
                    <div className="hidden md:block">
                        <div className={`absolute top-60 left-60 transition duration-300 ${clicked ? '-translate-x-30 -translate-y-30' : ''}`}>
                            <CodeIcon sx={{ fontSize: "50px" }}/>
                        </div>
                        <div className={`absolute top-60 left-60 transition duration-300 ${clicked ? '-translate-x-20 -translate-y-50' : ''}`}>
                            <StorageIcon sx={{ fontSize: "50px" }}/>
                        </div>
                        <div className={`absolute top-60 left-60 transition duration-300 ${clicked ? 'translate-x-40 -translate-y-50' : ''}`}>
                            <CloudCircleIcon sx={{ fontSize: "50px" }}/>
                        </div>
                        <div className={`absolute top-60 left-60 transition duration-300 ${clicked ? 'translate-x-50 -translate-y-20' : ''}`}>
                            <WorkIcon sx={{ fontSize: "50px" }}/>
                        </div>
                    </div>

                    <div className="absolute z-50 bottom-20 left-20 border rounded-lg bg-black text-white dark:bg-white dark:text-black cursor-pointer transform transition-all hover:translate-x-0.5 hover:translate-y-0.5">
                        <Buttons type="simple" onClick={() => setClicked(true)}>
                            {clicked ? (
                               <Typewriter
                                words={["I enjoy contributing to the development of impactful products."]}
                                cursor
                                cursorStyle="|"
                                typeSpeed={30}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                            ) : (
                            "try to click me"
                            )}
                        </Buttons>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}