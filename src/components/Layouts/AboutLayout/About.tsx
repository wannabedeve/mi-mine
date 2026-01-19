import ReadingHighlight from '@/components/elements/Article/Article'
import './about.css'
// import SectionTitle from '@/components/ui/Heading/SectionTitle'
// import { BuildMomentum } from '@/components/ui/feature/Feature'
import Header from '@/components/ui/Header/Header'


export default function AboutLayout() {

    return (
        <>
            <Header
                textPage='About'
                textHead='I Build Software That Businesses Actually Use Daily'
            />
            <div className='text-white mt-[10%]'>
                {/* <SectionTitle title='About' />
                <SectionTitle title='Page' /> */}
            </div>
            <div id="celeste" className=''>
                <div className="top-left" />
                <div className="bottom-right" />

                <div className="celeste2">
                    <div className="celeste3">
                        <div className="celeste4">
                            <ReadingHighlight>
                                <div className="celeste-write md:mb-[20%] mb-[50%]">
                                    <div className="about-me">
                                        <div className="about-section">
                                            <h1>WHO I AM</h1>
                                            <p>
                                                I am a Full-Stack Web Developer specializing in
                                                <span className='hl'> business-critical
                                                    web systems</span> such as <span className='hl'> dashboards </span>,
                                                <span className='hl'> CMS platforms </span>, and
                                                <span className='hl'> internal tools </span>.
                                                <br />
                                                My focus is on building <span className='hl'>reliable, maintainable </span> applications that support
                                                real <span className='hl'> operational workflows </span>.
                                            </p>
                                        </div>
                                        {/* <BuildMomentum /><br /><br /><br /><br /> */}

                                        <div className="about-section">
                                            <h1>What I work on</h1>
                                            <p>
                                                I design and implement complete <span className="hl"> web solutions</span>,
                                                from <span className="hl"> frontend interfaces </span> to <span className="hl"> backend APIs </span> and <span className="hl"> databases</span>.
                                                <br />
                                                Most of my work involves transforming manual, fragmented,
                                                or inefficient processes into <span className="hl"> structured</span>, <span className="hl"> secure software platforms</span>.
                                            </p>
                                        </div>
                                        {/* <BuildMomentum /><br /><br /><br /><br /> */}

                                        <div className="about-section">
                                            <h1>My technical background</h1>
                                            <p>
                                                Before focusing fully on web development,
                                                I worked extensively with IT infrastructure, networking, IoT systems, and electronics.
                                                <br />
                                                This background gives me a <span className="hl"> strong understanding </span> of <span className="hl"> servers</span>, <span className="hl"> networks</span>, <span className="hl"> devices</span>,
                                                and <span className="hl"> real-world constraints</span>, allowing me to build software that <span className="hl"> performs reliably </span>
                                                in production environments.
                                            </p>
                                        </div>
                                        {/* <BuildMomentum /><br /><br /><br /><br /> */}
                                        <div className="about-section">
                                            <h1>How I work</h1>
                                            <p>
                                                I value clarity, <span className="hl"> long-term maintainability</span>, and measurable outcomes.
                                                <br />
                                                I am comfortable working <span className="hl"> remotely </span> with <span className="hl"> international teams </span> and <span className="hl"> clients </span>
                                                and prefer systems that scale cleanly rather than short-term <span className="hl"> technical fixes</span>.
                                            </p>
                                        </div>
                                    </div>

                                    {/* <h1>WHO I AM</h1>
                                    <p>
                                        I am a Full-Stack Web Developer specializing in business-critical
                                        web systems such as dashboards, CMS platforms, and internal tools.
                                        <br />
                                        My focus is on building reliable, maintainable applications that support
                                        real operational workflows.
                                    </p>
                                    <hr />
                                    <h1>What I work on</h1>
                                    <p>
                                        I design and implement complete web solutions,
                                        from frontend interfaces to backend APIs and databases.
                                        <br />
                                        Most of my work involves transforming manual, fragmented,
                                        or inefficient processes into structured, secure software platforms.
                                    </p>
                                    <hr />
                                    <h1>My technical background</h1>
                                    <p>
                                        Before focusing fully on web development,
                                        I worked extensively with IT infrastructure, networking, IoT systems, and electronics.
                                        <br />
                                        This background gives me a strong understanding of servers, networks, devices,
                                        and real-world constraints, allowing me to build software that performs reliably
                                        in production environments.
                                    </p>
                                    <hr />
                                    <h1>How I work</h1>
                                    <p>
                                        I value clarity, long-term maintainability, and measurable outcomes.
                                        <br />
                                        I am comfortable working remotely with international teams and clients
                                        and prefer systems that scale cleanly rather than short-term technical fixes.

                                    </p> */}

                                </div>
                            </ReadingHighlight>

                            <div className="celeste5">
                                <div className="celeste-iconn">
                                    <div
                                        className="celeste-iconnn"
                                        style={{
                                            backgroundImage:
                                                "url(/images/me/me3.jpg)",
                                        }}
                                    >
                                        <div className="celeste-iconnnn" />
                                        <div className="celeste-ball1" />
                                    </div>
                                </div>

                                <div className="celeste-lyrics">

                                    <sup>i've got that lightning inside me</sup>
                                    <h1>i'm like a titan that's rising</h1>
                                    <sub>
                                        this is how <b>legends</b> are made.
                                    </sub>

                                </div>

                            </div>
                            {/* <BuildMomentum /><br /><br /><br /><br /> */}

                        </div>

                    </div>
                </div>
            </div>


        </>
    )





}