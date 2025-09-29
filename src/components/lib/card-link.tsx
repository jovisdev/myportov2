"use client"
import Image from "next/image";
import Typography from "./typography";
import React from "react";
import Link from "next/link";
import LaunchIcon from '@mui/icons-material/Launch';

interface CardProps {
  id?: number;
  desc?: string;
  image?: string | null;
  link?: string;
}

const CardLink: React.FC<CardProps> = ({ desc, image, link }: CardProps) => {
  return (
    <Link href={link || "#"} target={"_blank"} rel="noopener noreferrer">
      <div className="rounded-lg border-2 h-full hover:shadow-md transition-shadow duration-300">
        <div className="overflow-hidden rounded-t-md relative">
          <Image
            src={image || "/assets/images/dev.jpg"}
            alt="dev"
            width={1000}
            height={1000}
            className="h-32 w-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {link && (
            <div className="absolute top-2 right-2 bg-white/80 dark:bg-black/60 rounded-full p-1 shadow flex items-center">
              <LaunchIcon sx={{ fontSize: 18 }} />
            </div>
          )}
        </div>
        <div className="p-2">
          <Typography variant="link" as="p">
            {desc}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default CardLink;
