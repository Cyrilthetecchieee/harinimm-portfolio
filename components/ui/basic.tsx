import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SpinningTextProps = {
    text: string;
    radius?: number;
    textClassName?: string;
    speed?: number;
    direction?: "normal" | "reverse";
    className?: string;
    fontSize?: string;
};

export const SpinningText: React.FC<SpinningTextProps> = ({
    text,
    radius = 40,
    textClassName = "",
    speed = 10,
    direction = "normal",
    className,
    fontSize = "8px",
}) => {
    // Generate a unique ID for the path to allow multiple instances
    const pathId = `circlePath-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full overflow-visible"
                animate={{ rotate: direction === "normal" ? 360 : -360 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <path
                    id={pathId}
                    d={`
            M 50,50
            m -${radius},0
            a ${radius},${radius} 0 1,1 ${radius * 2},0
            a ${radius},${radius} 0 1,1 -${radius * 2},0
          `}
                    fill="none"
                />
                <text
                    className={cn(
                        `uppercase font-normal fill-muted-foreground tracking-widest text-gray-200`,
                        textClassName,
                    )}
                    style={{ fontSize }}
                >
                    <textPath xlinkHref={`#${pathId}`} startOffset="0%">
                        {text}
                    </textPath>
                </text>
            </motion.svg>
        </div>
    );
};

const SpinningTextDemo = () => {
    return (
        <>
            <SpinningText
                text="DESIGN • ENGINEERING • AI • AUTOMATION • BUILDING DIGITAL PRODUCTS • REPEAT •"
                radius={20}
                textClassName="text-[6px]"
                speed={20}
                direction="normal"
                className="text-gray-400"
            />
        </>
    );
};

export default SpinningTextDemo;
