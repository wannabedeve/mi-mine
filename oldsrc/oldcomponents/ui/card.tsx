import { classMerge } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={classMerge(
          "card w-full h-[150px] rounded-[1.5rem] p-8",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export { Card };
