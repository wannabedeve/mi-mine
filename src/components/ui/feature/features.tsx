"use client";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";

type FeaturesProps = {
  children: React.ReactNode;
  color: string;
  colorDark: string;
};

export const Features = ({ children, color, colorDark }: FeaturesProps) => {
  const { ref: reff, inView: views } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      ref={reff}
      className={classNames(
        "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[10rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
        views &&
        "is-visible before:opacity-100 before:[transform:scale(2)]",
        !views && "before:rotate-180 before:opacity-40"
      )}
      style={
        {
          "--feature-color": color,
          "--feature-color-dark": colorDark,
        } as React.CSSProperties
      }
    >
      <div
      // className="mt-[12.8rem] mb-[15rem] w-full md:mt-[25.2rem] md:mb-[12.8rem]"
      >
        {children}
      </div>
    </section>
  );
};

type MainFeatureProps = {
  image: string;
  text: string;
  title: React.ReactNode;
  imageSize?: "small" | "large";
};

const MainFeature = ({
  image,
  text,
  title,
  imageSize = "small",
}: MainFeatureProps) => {
  return (
    <>
      <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]">

      </div>
    </>
  );
};






// "use client";

// import classNames from "classnames";
// import { Container } from "./container";
// import { useInView } from "react-intersection-observer";

// type FeaturesProps = {
//   children: React.ReactNode;
//   color: string;
//   colorDark: string;
// };

// export const Features = ({ children, color, colorDark }: FeaturesProps) => {
//   const { ref, inView } = useInView({
//     threshold: 0.2,
//     triggerOnce: false,
//   });

//   return (
//     <section
//       ref={ref}
//       className={classNames(
//         "relative flex flex-col items-center overflow-x-clip",
//         "before:absolute before:inset-0 before:pointer-events-none before:bg-gradient-conic",
//         "after:absolute after:inset-0 after:pointer-events-none after:bg-gradient-radial",
//         "transition-transform duration-[20000ms] ease-[cubic-bezier(0.3,1.17,0.55,0.99)]",
//         inView ? "scale-125" : "scale-0"
//       )}
//       style={
//         {
//           "--feature-color": color,
//           "--feature-color-dark": colorDark,
//         } as React.CSSProperties
//       }
//     >
//       <div className="w-full mt-32 mb-16 md:mt-64 md:mb-32">
//         {children}
//       </div>
//     </section>
//   );
// };

