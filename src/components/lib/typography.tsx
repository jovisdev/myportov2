import clsx from "clsx";
import * as React from "react";

export enum TypographyVariant {
  "bd4",
  "bd3.5",
  "bd3",
  "bd2",
  "bd1",
  "sub2",
  "sub1",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hm",
  "link",
  "link2",
  "linkm",
}

export enum TypographyColor {
  "white",
  "surface",
  "outline",
  "inline",
  "disabled",
  "icon",
  "input",
  "dark",
  "gradient",
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum FontVariant {
  "inconsolata",
  "anton",
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum FontWeight {
  "thin",
  "regular",
  "medium",
  "semibold",
  "bold",
}

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  weight?: keyof typeof FontWeight;
  color?: keyof typeof TypographyColor;
  font?: keyof typeof FontVariant;
  variant?: keyof typeof TypographyVariant;
  upTabletVariant?: keyof typeof TypographyVariant;
  tabletVariant?: keyof typeof TypographyVariant;
  mobileVariant?: keyof typeof TypographyVariant;
  gradientFrom?: string;
  gradientTo?: string;
  gradientVia?: string;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  children,
  weight = "regular",
  className,
  color = "dark",
  font = "inconsolata",
  variant = "sub2",
  upTabletVariant = variant,
  tabletVariant = variant,
  mobileVariant = variant,
  gradientFrom,
  gradientTo,
  gradientVia,
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || "p";
  return (
    <Component
      className={clsx(
        // *=============== Font Type ==================
        [
          font === "inconsolata" && [
            "font-inconsolata",
            [
              weight === "thin" && "font-thin",
              weight === "regular" && "font-normal",
              weight === "medium" && "font-medium",
              weight === "semibold" && "font-semibold",
              weight === "bold" && "font-bold",
            ],
          ],
          font === "anton" && [
            "font-anton",
            [weight === "regular" && "font-normal"],
          ],
        ],

        // *=============== Font Variants ==================
        [
          variant === "link2" && ["xl:text-[10px] xl:leading-[16px]"],
          variant === "link" && ["xl:text-[11px] xl:leading-[17px]"],
          variant === "bd4" && ["xl:text-[12px] xl:leading-[18px]"],
          variant === "bd3.5" && ["xl:text-[14px] xl:leading-[18px]"],
          variant === "bd3" && ["xl:text-[16px] xl:leading-[24px]"],
          variant === "bd2" && ["xl:text-[18px] xl:leading-[28px]"],
          variant === "bd1" && ["xl:text-[20px] xl:leading-[32px]"],
          variant === "sub2" && ["xl:text-[24px] xl:leading-[36px]"],
          variant === "sub1" && ["xl:text-[32px] xl:leading-[38px]"],
          variant === "h6" && ["xl:text-[40px] xl:leading-[52px]"],
          variant === "h5" && ["xl:text-[64px] xl:leading-[76px]"],
          variant === "h4" && ["xl:text-[72px] xl:leading-[86px]"],
          variant === "h3" && ["xl:text-[120px] xl:leading-[132px]"],
          variant === "h2" && ["xl:text-[200px] xl:leading-[220px]"],
          variant === "h1" && ["xl:text-[230px] xl:leading-[253px]"],
        ],
        [
          upTabletVariant === "bd4" && ["xl:text-[12px] xl:leading-[18px]"],
          upTabletVariant === "bd3" && ["xl:text-[16px] xl:leading-[24px]"],
          upTabletVariant === "bd2" && ["xl:text-[18px] xl:leading-[28px]"],
          upTabletVariant === "bd1" && ["xl:text-[20px] xl:leading-[32px]"],
          upTabletVariant === "sub2" && ["xl:text-[24px] xl:leading-[36px]"],
          upTabletVariant === "sub1" && ["xl:text-[32px] xl:leading-[38px]"],
          upTabletVariant === "h6" && ["xl:text-[40px] xl:leading-[52px]"],
          upTabletVariant === "h5" && ["xl:text-[64px] xl:leading-[76px]"],
          upTabletVariant === "h4" && ["xl:text-[72px] xl:leading-[86px]"],
          upTabletVariant === "h3" && ["xl:text-[120px] xl:leading-[132px]"],
          upTabletVariant === "h2" && ["xl:text-[200px] xl:leading-[220px]"],
          upTabletVariant === "h1" && ["xl:text-[230px] xl:leading-[253px]"],
        ],
        // *=============== Font Tablet Variants ==================
        [
          tabletVariant === "bd4" && ["md:text-[12px] md:leading-[18px]"],
          tabletVariant === "bd3" && ["md:text-[16px] md:leading-[24px]"],
          tabletVariant === "bd2" && ["md:text-[18px] md:leading-[28px]"],
          tabletVariant === "bd1" && ["md:text-[20px] md:leading-[32px]"],
          tabletVariant === "sub2" && ["md:text-[24px] md:leading-[36px]"],
          tabletVariant === "sub1" && ["md:text-[32px] md:leading-[38px]"],
          tabletVariant === "h6" && ["md:text-[40px] md:leading-[52px]"],
          tabletVariant === "h5" && ["md:text-[64px] md:leading-[76px]"],
          tabletVariant === "h4" && ["md:text-[72px] md:leading-[86px]"],
          tabletVariant === "h3" && ["md:text-[120px] md:leading-[132px]"],
          tabletVariant === "h2" && ["md:text-[200px] md:leading-[220px]"],
          tabletVariant === "h1" && ["md:text-[230px] md:leading-[253px]"],
        ],
        // *=============== Font Mobile Variants ==================
        [
          mobileVariant === "linkm" && ["text-[11px] leading-[17px]"],
          mobileVariant === "bd4" && ["text-[12px] leading-[18px]"],
          mobileVariant === "bd3.5" && ["text-[14px] leading-[18px]"],
          mobileVariant === "bd3" && ["text-[16px] leading-[24px]"],
          mobileVariant === "bd2" && ["text-[18px] leading-[28px]"],
          mobileVariant === "bd1" && ["text-[20px] leading-[32px]"],
          mobileVariant === "sub2" && ["text-[24px] leading-[36px]"],
          mobileVariant === "sub1" && ["text-[32px] leading-[38px]"],
          mobileVariant === "h6" && ["text-[40px] leading-[52px]"],
          mobileVariant === "h5" && ["text-[64px] leading-[76px]"],
          mobileVariant === "h4" && ["text-[72px] leading-[86px]"],
          mobileVariant === "h3" && ["text-[120px] leading-[132px]"],
          mobileVariant === "h2" && ["text-[200px] leading-[220px]"],
          mobileVariant === "h1" && ["text-[230px] leading-[253px]"],
          mobileVariant === "hm" && ["text-[46px] leading-tight"],
        ],
        // *=============== Font Colors ==================
        color === "white" && ["text-typo-white"],
        color === "surface" && ["text-typo-surface"],
        color === "outline" && ["text-typo-outline"],
        color === "inline" && ["text-typo-inline"],
        color === "icon" && ["text-typo-icon"],
        color === "input" && ["text-typo-input"],
        color === "dark" && ["text-typo-dark"],
        color === "gradient" && [
          "bg-clip-text",
          "text-transparent",
          gradientFrom && gradientTo
            ? `bg-gradient-to-r ${gradientFrom && `from-${gradientFrom}`} ${
                gradientVia ? `via-${gradientVia}` : ""
              } ${gradientTo && `to-${gradientTo}`}`
            : "from-blue-primary-400 to-primary-main bg-gradient-to-r",
        ],

        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
