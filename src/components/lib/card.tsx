"use client"
import Image from "next/image";
import Typography from "./typography";
import React from "react";

interface CardProps {
    id?: number;
    desc?: string;
    image?: string | null;
}

const Card: React.FC<CardProps> = ({
    desc,
    image,
}: CardProps) => {
    return (
    <div className="rounded-lg border-2 h-full">
        <div className="overflow-hidden rounded-t-md">
        <Image
            src={image || "/assets/images/dev.jpg"}
            alt="dev"
            width={1000}
            height={1000}
            className="h-32 w-full object-cover transition-transform duration-300 hover:scale-110"
        />
        </div>
        <div className="p-2">
        <Typography variant="link" as="p">
            {desc}
        </Typography>
        </div>
    </div>
    );
}

export default Card