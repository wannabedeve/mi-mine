// import { Card } from "@/components/ui/card";
// import Image from "next/image";
// import './style.css';
// export default function About() {
//   return (
//     <Card className="relative flex flex-col text-primary dark:text-secondary w-full xs:w-9/12 h-full p-6 xs:p-12">
//       <h1 className="text-primary dark:text-secondary text-4xl font-semibold tracking-wide mb-6">
//         About Me
//       </h1>



//       <div className="flex flex-col justify-center my-0 mx-auto">
//         <section className="[height:96vh] flex items-center justify-center flex-col [width: 90%] lg:w-full bg-black rounded-2xl m-4 dark:bg-black dark:m-0 dark:h-screen dark:rounded-none;">
//           <div className="absolute bottom-20 z-40 p-3">
//             <h2 className="text-1xl md:text-1xl lg:text-3xl">"Khaled Ahmed AlKharashy"</h2>
//             <br />
//             <p className="text-sm md:text-xl lg:text-2xl leading-loose">
//               I’m a Full-Stack Web Developer with expertise in Javascript/Typescript Libraries and Frameworks
//               <br />
//               [ React, Next.js, Node.js (NestJS/Express), and .NET Core (C# + MSSQL) ],
//               <br />
//               building modern, scalable applications ranging from e-commerce platforms and APIs to CMS-driven websites with SEO and multilingual support.

//               My background in electronics, networking, and IoT gives me a unique systems-level perspective,
//               <br />
//               enabling me to design solutions that connect digital and physical systems. Additionally,
//               <br />
//               my academic foundation in education and sociology strengthens my problem-solving, communication, and adaptability.
//               <br />
//               qualities that drive me to continuously learn and deliver impactful digital solutions.
//             </p>
//           </div>

//           {/* <a id={isVisible ? "hide" : "nohide"} className="mouse-scroll z-50" href="#about"></a> */}

//           <button
//             // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="fixed right-3 lg:right-10 bottom-14 z-50 text-white dark:text-black rounded-full p-4 text-2xl bg-blue-200 dark:bg-blue-100"
//           // id={isVisible ? "nohide" : "hide"}
//           >
//             اثغ
//             {/* <MdKeyboardDoubleArrowUp /> */}
//           </button>

//           {/* <img className="absolute bottom-auto w-64 md:w-72 lg:w-96 lg:[bottom: 4vh]" src={"/assets/me.jpg"} alt="" /> */}
//           <div className="main-profile">
//             <Image
//               src="/assets/me1.jpg"
//               width={100} height={100} alt='Khaled'
//               // className='top-[7%] md:top-[18%]'
//               className=" w-[200px] h-[200px] rounded-full absolute 
//     left-1/2 -translate-x-1/2 -translate-y-1/2
//     text-4xl p-[3px] top-[27%] md:top-[18%]
//     border-l-[5px] border-b-[5px] border-l-white/50 border-b-white/50
//     bg-white/5 backdrop-brightness-60
//   "
//             />
//           </div>
//         </section>
//         {/* 
//         <section className="h-auto flex items-center justify-center flex-col text-white">

//           <About />

//         </section>


//         <section className="h-auto flex items-center justify-center flex-col text-white">

//           <Expand />

//         </section>


//         <section className="h-auto flex items-center justify-center flex-col text-white">

//           <Projects />

//         </section>

//         <section className="h-screen flex items-center justify-center flex-col text-white">

//           <ContactUs />

//         </section> */}
//       </div>
//       {/* 
//       <p className="leading-loose">
//         Hi, I&apos;m Mike, an experienced web developer specializing in frontend
//         technologies such as ReactJS, JavaScript, and TypeScript. I&apos;m
//         passionate about crafting user-friendly interfaces and have a proven
//         track record of delivering high-quality solutions that enhance the user
//         experience. In my free time, I enjoy playing football, exploring new
//         destinations, and recently discovered a passion for snowboarding. Feel
//         free to reach out if you share any of these interests!
//       </p> */}
//     </Card>
//   );
// }








import Buttons from "@/components/buttons/buttons";
import SectionTitle from "@/components/Heading/SectionTitle";
import Cert from "@/components/projects/network/Cert";
import Social from "@/components/Social2/Social";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import './style.css';
export default function About() {
    return (
        <>




            <Card className="glass relative flex flex-col items-center w-full xs:w-9/12 h-full p-6 xs:p-12">

                <h1 className="tracking-wide mb-6">

                    <SectionTitle title="About" progressBgClass="bg-primary"></SectionTitle>

                </h1>

                <p className="text-center texth">Khaled AlKharashi</p>




                <div className="flex justify-center  my-[4rem]">
                    <Image
                        src="/assets/me1.jpg"
                        width={200}
                        height={200}
                        alt="Khaled"
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full
                 border-l-[5px] border-b-[5px] border-l-cyan-200/50 border-b-cyan-600/50
                 bg-white/5 backdrop-brightness-60 object-cover"
                    />
                </div>


                <div className="leading-loose text-center font-mono text-xl font-light text-slate-800">
                    {/* I’m a Full-Stack Web Developer with expertise in React, Next.js, TypeScript, Node.js (NestJS/Express),
                    and .NET Core (C# + MSSQL),
                    <br />
                    building modern, scalable applications ranging from e-commerce platforms and APIs to CMS-driven websites
                    with SEO and multilingual support.
                    <br /><br />





                    Alongside software development,
                    my solid background in electronics, networking, and IoT gives me a unique systems-level perspective,
                    enabling me to design solutions that connect digital and physical systems.
                    <br />
                    with hands-on experience in IoT, circuit design, microcontrollers, and networking.
                    This blend of hardware and software knowledge allows me to build solutions that bridge
                    the gap between digital and physical systems, ensuring efficiency, reliability, and innovation
                    at every layer.

                    <br />
                    <br />
                    Additionally,
                    my academic foundation in education and sociology strengthens my problem-solving, communication,
                    and adaptability, qualities that drive me to continuously learn and deliver impactful digital solutions.
                    <br />
                    and passionate about educational applications and services,
                    where I see technology as a bridge to improve accessibility, engagement, and personalized learning.
                    My background in education allows me to approach edtech solutions not only from a technical perspective
                    but also with an understanding of pedagogy, user needs, and the importance of creating tools that truly
                    enhance the learning experience. */}


                    <div className="text-center texth">AS Full Stack Web Developer</div>
                    <div className="bg-white/20">
                        Full-Stack Web & Web Solutions Developer with real-world experience delivering enterprise-level applications
                        and IoT-integrated solutions. Worked on projects in Egypt, United Arab Emirates to digitize services and
                        streamline business processes. Strong expertise in JavaScript, Typescript frameworks and libraries
                        (Node.js, Nest.js, React, Next.js), with experience in cloud platforms (AWS, Google Cloud) and
                        database management (MongoDB, MySQL, PostgreSQL).
                        <br />
                        Additional exposure to Java and C# .NET technologies. Skilled in building scalable, secure,
                        and interactive web solutions that integrate frontend, backend, and IoT/cloud services.
                    </div>
                    <br /><br />
                    <div className="text-center texth">And AS System Administator</div>
                    <div className="bg-white/20">
                        I'm Highly motivated IT professional with a solid background in electronics, networking, VoIP systems,
                        and IoT  integrations, supported by hands-on experience in technical support and infrastructure operations.
                        Skilled in  managing and troubleshooting network devices, system hardware, and software environments,
                        as well as  configuring and maintaining LAN/WAN, routers, switches, and VoIP solutions. Adept at diagnosing
                        complex  technical issues, performing preventive maintenance, and delivering reliable support for daily
                        IT operations. With  strong problem-solving skills and a foundation in IoT and low-level technologies,
                        I bring a practical and  analytical approach to system administration tasks. Known for working effectively
                        under pressure, quickly  resolving issues, and ensuring stable and secure IT environments.
                    </div>
                </div>



                <br />
                <div className='float-right'>

                    <span className="signt">Best</span><br />
                    <span className='signt'>Khaled A.</span>
                </div>
                {/* <div className="mt-[10rem]"> */}
                {/* <div className="reflect2 md:text-[1.2rem] text-[1rem]">Download Resume (PDF)</div> */}

                <Social />
                {/* </div> */}

                <Cert />
                <br />
                <Buttons />
            </Card>
        </>

    );
}

