'use client'

import SectionTitle from "@/components/ui/Heading/SectionTitle";
import "./viewer.scss"; // Import your styles


const InteractiveNetowrk = () => {


    return (
        <div
        // className="-mb-[70%] md:-mb-[20%]"
        >

            <div className="containerz mx-auto">



                {/* <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2> */}
                <br />



                <div className="topz mx-auto mt-[15%]">
                    <ul className="flex flex-col">
                        {/* <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2> */}
                        <div className="text-center mb-[5%] text-[2rem]">

                            <SectionTitle title="Certifications" />
                        </div>

                        <li><a href="#img_1"><img src="/images/cert/c1.jpeg" className="" /></a></li>
                        <br />
                        <li><a href="#img_2"><img src="/images/cert/c2.jpeg" className="" /></a></li>
                        {/* <li><a href="#img_3"><img src="/images/cert/c4.jpeg" className="" /></a></li> */}
                    </ul>
                    <a href="#_1" className="lightbox trans" id="img_1"><img src="/images/cert/c1.jpeg" /></a>
                    <a href="#_2" className="lightbox trans" id="img_2"><img src="/images/cert/c2.jpeg" /></a>
                    {/* <a href="#_3" className="lightbox trans" id="img_3"><img src="/cert/c4.jpeg" /></a> */}
                </div>


                <div className="topz mx-auto mt-[5%]"
                // className="topz mx-auto md:-mt-[80%] -mt-[60%]"
                >
                    <ul>
                        <li><a href="#img_4"><img src="/images/cert/7.jpeg" className="" /></a></li>
                        <li><a href="#img_5"><img src="/images/cert/14.jpeg" className="" /></a></li>
                        <li><a href="#img_3"><img src="/images/cert/c4.jpeg" className="" /></a></li>
                    </ul>
                    <a href="#_4" className="lightbox trans" id="img_4"><img src="/images/cert/7.jpeg" /></a>
                    <a href="#_5" className="lightbox trans" id="img_5"><img src="/images/cert/14.jpeg" /></a>
                    <a href="#_3" className="lightbox trans" id="img_3"><img src="/images/cert/c4.jpeg" /></a>

                </div>





            </div>
        </div>
    );
};

export default InteractiveNetowrk;
