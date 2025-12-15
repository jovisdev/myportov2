import CardLink from "@/components/lib/card-link";
import SectionWrapper from "@/components/lib/section-wrapper";
import { dataProjects } from "@/components/lib/static";
import Typography from "@/components/lib/typography";

export default function Project(){

    const projects = dataProjects;

    return(
        <SectionWrapper>
            <div id="works" className="mb-4 md:mb-0 flex flex-col space-y-4">
                <div>
                    <Typography variant="h6" mobileVariant="sub1" weight="bold" as="h1">
                        Projects
                    </Typography>
                    <Typography variant="bd3" mobileVariant="sub2" weight="semibold">
                        contributions and what I have made.
                    </Typography>
                </div>
                <div className="grid sm:grid-cols-5 gap-2">
                    {projects.map((item) => (
                        <div key={item.id}>
                            <CardLink 
                                image={item.image}
                                desc={item.description}
                                link={item.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}