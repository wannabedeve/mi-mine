// import { useSelectiveFocusGsap } from "@/hooks/useSelectiveFocusGsap";
// import { useRef } from "react";

// type Props = {
//   image: string;
//   link: string;
//   title: string;
// };

// export const SelectiveFocusSection = ({ image, link, title }: Props) => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   useSelectiveFocusGsap(sectionRef, true);

//   return (
//     <div ref={sectionRef}>
//       <section className="">
//         {/* <h1>Scroll Down</h1> */}
//         <a href={link}>{title}</a>
//       </section>
//       <section className="maiin">
//         {/* <Test /> */}
//         <div className="contaiiner">
//           {/* <span className="mx-auto text-center z-50 text-amber-50 relative">hi</span> */}

//           <h2 className="filled-text">
//             SELECTIVE
//             <a href="/contact" className="inline-link">↗</a>

//           </h2>

//           <h2 className="outline-text">
//             SELECTIVE
//             <a href="/contact" className="inline-link">↗</a>

//           </h2>

//           <img className="image oimg" src={image} alt="Selective Focus" />

//         </div>
//       </section>

//       <section className="footer">
//         <h1 className="th1">Scroll Up</h1>
//       </section>
//     </div>
//   );
// };
import { useSelectiveFocusGsap } from "@/hooks/useSelectiveFocusGsap";
import { useRef } from "react";
import HomeLinks from "../HomeLinks/HomeLinks";

type Props = {
  image: string;
  link: string;
  title: string;
};

export const SelectiveFocusSection = ({ image, link, title }: Props) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useSelectiveFocusGsap(sectionRef, true);

  return (
    <div ref={sectionRef} className="sel-body">
      <section>
        <a href={link}>{title}</a>
      </section>

      <section className="maiin">
        <div className="contaiiner">
          <h2 className="filled-text">
            {title}
            <a href="/contact" className="inline-link">↗</a>


          </h2>
          <div className="home-btn">

            <HomeLinks link={link} />
          </div>
          <h2 className="outline-text">
            {title}
            <a href="/contact" className="inline-link">↗</a>

          </h2>

          <img className="image oimg" src={image} alt="Selective Focus" />
        </div>
      </section>

      <section className="footer">
        <h1 className="th1">Scroll Up</h1>
      </section>
    </div>
  );
};
