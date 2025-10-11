// import React from 'react'
import Social from '../Social2/Social'
import './style.css'
// import Social from '../Social2/Social'


export const Hero = () => {
    return (
        <div className=''>
            <div className="">
                {/* <h1>Hello, world!</h1>

                <p>Let me give you a wave...</p> */}


                <div className="container-about">
                    <div className="img-area">
                        <div className="inner-area">
                            <div className="componenth text-center">
                                <div className="texth md:text-[2rem] text-[1rem]">Khaled A. Al-Kharashy</div>
                                <br />
                                <div className='texth text-[.8rem] font-semibold'>.NET Core | Javascript
                                    <br />
                                    Internet Of Things | Electronics</div><br />
                                <div className='texth'>(+20) 1025 44 0707</div><br /><br />
                                <div className="reflect md:text-[2rem] text-[1rem]">Khaled A. Al-Kharashy</div>
                                <Social />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
