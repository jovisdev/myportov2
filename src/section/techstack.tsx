import SectionWrapper from "@/components/lib/section-wrapper";
import { dataTech } from "@/components/lib/static";
import Typography from "@/components/lib/typography";
import Image from "next/image";

export default function TechStack(){

    const techStack = dataTech;

    return(
        <SectionWrapper>
            <div id="skill" className="md:mb-4">
                <Typography variant="h6" mobileVariant="sub1" weight="bold" as="h1">
                    Tech Stack
                </Typography>
                <Typography variant="bd3" mobileVariant="sub2" weight="semibold">
                    they are just tools.
                </Typography>
            </div>
            
            <ol className="sm:flex justify-between space-x-4">
                {techStack.map((item)=> (
                    <li key={item.id} className="relative mb-6 sm:mb-0 w-full">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-4 shrink-0">
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8 flex flex-col space-y-2">
                            <Typography variant="sub2" weight="semibold">{item.category}</Typography>
                            <Typography variant="bd3">Year : {item.year}</Typography>
                            <div className="grid grid-cols-5 w-fit gap-2">
                                {item.stack.map((tech, index)=>(
                                    <div key={index}>
                                        <Image src={tech.icon} alt={tech.name} width={1000} height={1000} className="h-6 w-auto"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </SectionWrapper>
    )
}