// components/MyWork.tsx
"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import { Project } from "../types";
import { webProjects } from "./WebProjects";
import ProjectCard from "../exp";

const MyWebWork: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="">
            {/* py-16 px-4 md:px-8 lg:px-16 */}
            <h2 className="text-3xl font-bold mb-8 text-center">Web Projects</h2>
            <br />
            {/* Project Grid */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {webProjects.map((proj) => (
                    <ProjectCard
                        key={proj.id}
                        project={proj}
                        onClick={(p) => setSelectedProject(p)}
                    />
                ))}
            </div>

            {/* Modal for selected project */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title}
            >
                {/* <img
                    src={selectedProject?.imageUrl}
                    alt={selectedProject?.title}
                    className="w-full rounded-md mb-4"
                /> */}
                {/* <iframe
                    src={selectedProject?.link[0] || ""}
                    height="399"
                    width="480"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                ></iframe> */}

                <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">

                    <iframe
                        src={selectedProject?.link[0] || ""}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title="Embedded post"
                    ></iframe>


                </div>

                {
                    selectedProject?.link[1] && (

                        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">


                            <iframe
                                src={selectedProject?.link[1] || ""}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allowFullScreen
                                title="Embedded post"
                            ></iframe>

                        </div>
                    )
                }



                {
                    selectedProject?.link[2] && (

                        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">


                            <iframe
                                src={selectedProject?.link[2] || ""}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allowFullScreen
                                title="Embedded post"
                            ></iframe>

                        </div>
                    )
                }




                {
                    selectedProject?.link[3] && (

                        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">


                            <iframe
                                src={selectedProject?.link[3] || ""}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allowFullScreen
                                title="Embedded post"
                            ></iframe>

                        </div>
                    )
                }


                <p className="text-gray-700">{selectedProject?.description}</p>

                {/* Optional: external link */}
                {/* {selectedProject?.link && (
                    selectedProject?.link.map((lnk, index) => (
                        <a
                            key={index}
                            href={lnk[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Visit Project {index + 1}
                        </a>
                    ))
                )} */}
            </Modal>
        </section>
    );
};

export default MyWebWork;



{/* <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Visit Project
                    </a> */}
