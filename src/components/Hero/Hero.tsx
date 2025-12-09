// import React from 'react'
import Social from '../Social2/Social'
import './style.scss'
// import Social from '../Social2/Social'


export const Hero = () => {
    return (
        <div className=''>
            <div className="">
                {/* <h1>Hello, world!</h1>

                <p>Let me give you a wave...</p> */}
                <main>
                    <h1 className='headhe'>
                        {/* <span>Reinventing the wheel</span> */}
                        <div className="texth md:text-[2rem] text-[.9rem]">Khaled A. Al-Kharashy


                            {/* <hr className="gradient-line" /> */}
                        </div>
                    </h1>
                    <br />
                    <div className='texth text-[.8rem] font-semibold'>Full Stack Web Developer
                        <br />
                        <br />
                        IT System Administrator
                    </div><br />
                    <div className='texth'>(+20) 1025 44 0707</div><br /><br />
                    <div className='md:-mt-[12%] -mt-[32%]'>

                        <Social />
                    </div>

                </main>


                {/* <div className="container-about">
                    <div className="img-area">
                        <div className="inner-area">
                            <div className="componenth text-center">
                                <div className="texth md:text-[2rem] text-[1rem]">Khaled A. Al-Kharashy


                                    <hr className="gradient-line" />
                                </div>

                                <br />
                                <div className='texth text-[.8rem] font-semibold'>Full Stack Web Developer
                                    <br /><br />
                                    IT System Administrator
                                
                                </div><br />
                                <div className='texth'>(+20) 1025 44 0707</div><br /><br />

                                <div className='md:-mt-[8%] -mt-[32%]'>

                                    <Social />
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}



            </div>
        </div>
    )
}
