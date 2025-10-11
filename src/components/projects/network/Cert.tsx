'use client'

import "./style.scss"; // Import your styles


const Cert = () => {


    return (
        <div className="containerz mx-auto  overflow-hidden">



            <div className="topz mx-auto mt-[5%] ml-[25%]">
                <ul>
                    <li><a href="#img_1"><img src="/cert/c1.jpeg" className="" /></a></li>
                    <li><a href="#img_2"><img src="/cert/c2.jpeg" className="" /></a></li>
                    {/* <li><a href="#img_3"><img src="/cert/c4.jpeg" className="" /></a></li> */}
                </ul>
                <a href="#_1" className="lightbox trans" id="img_1"><img src="/cert/c1.jpeg" /></a>
                <a href="#_2" className="lightbox trans" id="img_2"><img src="/cert/c2.jpeg" /></a>
                {/* <a href="#_3" className="lightbox trans" id="img_3"><img src="/cert/c4.jpeg" /></a> */}
            </div>

        </div>
    );
};

export default Cert;
