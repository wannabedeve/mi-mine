'use client';
import SectionTitle from '@/components/ui/Heading/SectionTitle';
import Social from '../Social/Social';
import './hero.scss'
import { ArrowDown, CheckCircle } from 'lucide-react';
export default function Hero() {

  return (
    <div className='mt-[50%] md:mt-[10%]'>
      <div className='relative z-10 overflow-hidden'>
        <div>



          <div className="items-center">
            <h1 className="shimmer">Khaled AlKharashi</h1>

            <div className="relative z-10 flex items-center justify-center">
              {/* <h2 className="logo headhe ml-[20%]" data-text="AlKharashi">AlKharashi</h2> */}
              {/* <h2 className="logo headhe" data-text="Khaled AlKharashi">Khaled AlKharashi</h2> */}
              <h1 className="text-center text-white text-3xl">Full-Stack Web Developer</h1>
              <br />

            </div>
            <br />
            <div className="relative z-10 flex items-center justify-center">
              <h1 className='w-[70%] text-[#d4c5a3] text-2xl text-center'>
                I build scalable business platforms, internal tools,
                <br />
                and dashboards that replace manual workflows.
              </h1>

            </div>

            {/* <h2 className="logo headhe -ml-[20%]" data-text="Khaled">Khaled</h2> */}
            {/* <h2 className="logo headhe" data-text="Khaled AlKharashi">Khaled AlKharashi</h2> */}
          </div>
          <br />
          <Social />
          <div className='text-center'>
            <SectionTitle title='+201025440707' />
          </div>
          <br />


        </div>












        {/* <ReadingHighlight>
          <article className="prose max-w-3xl mx-auto text-center px-[2%]">
            <p>
              I design and develop production-ready web applications, dashboards, CMS platforms, and workflow systems.
              <br />
              focused on reliability, security, and real operational value.
            </p>


          </article>
        </ReadingHighlight> */}

        {/* <div className='effeect-body mx-auto'>
        <h1 className="shimmer ">Khaled AlKharashi</h1>

      </div> */}
      </div>


      {/* <div className="start">Sticky Cards</div>

      <div className="one">Front-end</div>
      <div className="two">Back-end</div>
      <div className="three">Webdesign</div>

      <div className="end">Loïck</div> */}
      <div className='mt-[20%]'>
        <section className="section">
          <div className="title one">
            <figure className="quote mx-auto">
              <blockquote cite="" aria-hidden>
                <p className="colored-text">
                  <span>
                    Secure Backend APIs
                  </span>
                </p>

                <div className="cut-text-container">
                  <p className="cut-text">
                    <span>
                      Secure Backend APIs
                    </span>
                    <span>
                      React/Next.js Interfaces
                    </span>
                  </p>
                </div>

                <p className="colored-text second">
                  <span>
                    React/Next.js Interfaces
                  </span>
                </p>
              </blockquote>
              <figcaption aria-hidden><cite>WHAT I DO <ArrowDown size={30} color='#d4c5a3' /></cite></figcaption>

            </figure></div>
        </section>

        <section className="section">
          <div className="title two">
            <ul>
              <li className='points-home'>
                <CheckCircle />
                Build internal tools that replace manual workflows
              </li>
              <br />
              <li className='points-home'>
                <CheckCircle />
                Design secure backend APIs and role-based systems
              </li>

            </ul>
          </div>
        </section>
        <section className="section">
          <div className="title three">
            <ul>
              <li className='points-home'>
                <CheckCircle />
                Develop fast, maintainable React / Next.js interfaces
              </li>
              <br />
              <li className='points-home'>
                <CheckCircle size={30} />
                Integrate web platforms with cloud services and real-world systems
              </li>
            </ul>
          </div>
        </section>
      </div>


    </div>
  )

}