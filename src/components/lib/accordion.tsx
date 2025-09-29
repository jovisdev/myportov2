"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from "./typography";
import Image from "next/image";

interface AccoItem {
    id: number;
    logo : string;
    name: string;
    desc: string;
}

interface AccordionState {
  [key: string]: boolean;
}

export default function Accordion({
  List = [], 
  onToggle,
}: {
  hasTitle?: boolean;
  List?: AccoItem[];
  onToggle?: (id: number | null) => void;}) {
  const [openItems, setOpenItems] = React.useState<AccordionState>({});

  const toggleItem = (index: number, id: number) => {
  setOpenItems((prev) => {
    const next = Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {});
    return { ...next, [index]: !prev[index] };
  });

  // panggil callback SETELAH update openItems dihitung
  setTimeout(() => {
    const isOpen = !openItems[index]; // pakai state lama
    if (onToggle) onToggle(isOpen ? id : null);
  }, 0);
};

  return (
      <div className="flex w-full flex-col">
        
        {/* List items */}
        <div className="w-full">
          {List.map((item, index) => (
            <div
              key={index}
              className={`mb-4 overflow-hidden ${
                openItems[index] ? "" : ""
              }`}
            >
              {/* FAQ Question (Header) */}
              <button
                onClick={() => toggleItem(index,item.id)}
                className="group flex w-full cursor-pointer items-center justify-between text-left focus:outline-none"
                aria-expanded={openItems[index] || false}
              >
                <div className="flex space-x-2">
                  <div className="">
                    <Image
                      src={item.logo}
                      alt="comp"
                      width={1000}
                      height={1000}
                      className="h-6 w-auto"
                    />
                  </div>

                  <Typography
                    variant="link"
                    as="p"
                    weight="medium"
                    mobileVariant="link"
                  >
                    {item.name}
                  </Typography>
                </div>

                <div className="relative ml-4 h-6 w-6 flex-shrink-0">
                  {/* Icon container with blue circle background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={false}
                      animate={{
                        rotate: openItems[index] ? 180 : 0,
                        opacity: openItems[index] ? 0 : 1,
                        scale: openItems[index] ? 0.5 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <AddIcon className="" sx={{ fontSize: "20px" }} />
                    </motion.div>

                    {/* Minus icon */}
                    <motion.div
                      initial={false}
                      animate={{
                        rotate: openItems[index] ? 0 : -180,
                        opacity: openItems[index] ? 1 : 0,
                        scale: openItems[index] ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <RemoveIcon className="" sx={{ fontSize: "20px" }} />
                    </motion.div>
                  </div>
                </div>
              </button>

              {/* List Desc (Content) */}
              <AnimatePresence initial={false}>
                {openItems[index] && (
                  <motion.div
                    className="overflow-hidden px-4 mt-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typography
                      variant="link"
                      as="p"
                      weight="regular"
                      className="pb-2 "
                      mobileVariant="link"
                    >
                      {item.desc}
                    </Typography>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
  );
}

