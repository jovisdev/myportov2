"use client"

import Typography from "./typography";
import SectionWrapper from "./section-wrapper";
import React from "react";
import Image from "next/image";
import LinkButton from "./link-button";

interface BannerPropsType {
  title: string;
  description: string;
  image: string;
  buttonMain?: string;
  button1?: string;
  button2?: string;
  buttonMainHref?: string;
  button1Href?: string;
  button2Href?: string;
  btnlink?: string;
}

const Banner = ({
  title,
  description,
  image,
  buttonMain,
  btnlink,
  button1,
  button2,
  buttonMainHref = "/coming-soon",
  button1Href = "/coming-soon",
  button2Href = "/coming-soon",
}: BannerPropsType) => {
  return (
    <SectionWrapper>
      <div className="shadow-blue-primary-500/20 relative my-8 md:h-[300px] w-full overflow-hidden rounded-lg px-8 py-8 shadow-lg md:mx-auto md:my-0">

        {/* Content container */}
        <div className="relative inline-flex h-full w-full flex-col gap-3 rounded-2xl sm:gap-4 sm:rounded-3xl sm:p-6 md:gap-8 md:rounded-[50px]">

            <div className="absolute bottom-20 right-0 md:-top-17 md:right-0">
                <Image src={"/assets/images/cat.gif"} alt="img" width={1000} height={1000} className="w-32 h-auto"/>
            </div>

            {/* Text content */}
            <div className="grid sm:grid-cols-2 self-stretch gap-2 sm:gap-3 md:gap-5">
                <div className="flex flex-col space-y-2">
                    <Typography
                        variant="h6"
                        mobileVariant="sub2"
                        weight="semibold"
                        >
                        {title}
                    </Typography>
                    <Typography
                        as="p"
                        variant="bd1"
                        mobileVariant="bd3"
                        weight="regular"
                        >
                        {description}
                    </Typography>
                    <div>
                        <LinkButton type="simple" link={btnlink}>
                            {buttonMain}
                        </LinkButton>
                    </div>
                </div>
                <div className="border-2 rounded-t-lg p-1">
                    <Image src={image} alt="img" width={1000} height={1000} className="w-[600px] h-auto rounded-t-lg"/>
                </div>
          </div>

          {/* Buttons */}
          {/* {buttonMain ? (
            <div className="mt-2 inline-flex w-full flex-col items-center justify-center gap-3 px-2 sm:mt-0 sm:flex-row sm:gap-4 sm:px-4 md:gap-6">
              <LinkButton
                href={buttonMainHref}
                type="gradient"
                className="md:px-4.5 md:py-3"
              >
                <Typography variant="bd3" as="p">
                  {buttonMain}
                </Typography>
              </LinkButton>
            </div>
          ) : (
            <div className="mt-2 flex w-full flex-col items-center justify-center gap-3 px-2 sm:mt-0 sm:flex-row sm:gap-4 sm:px-4 md:gap-6">
              <LinkButton
                href={button1Href}
                type="gradient"
                className="h-full md:px-6 md:py-3 w-full md:w-fit text-center"
              >
                <Typography variant="bd3" as="p">
                  {button1}
                </Typography>
              </LinkButton>
              {button2 && (
                <LinkButton
                  href={button2Href}
                  type="outline"
                  className="md:px-4.5 md:py-3"
                >
                  <Typography variant="bd3" as="p">
                    {button2}
                  </Typography>
                </LinkButton>
              )}
            </div>
          )} */}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Banner;
