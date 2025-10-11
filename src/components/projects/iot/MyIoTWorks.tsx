// components/MyWork.tsx
"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import { Project } from "../types";
import { iotProjects } from "./IoTProjects";
import ProjectCard from "../exp";

const MyIoTWork: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="">
            {/* py-16 px-4 md:px-8 lg:px-16 */}
            <h2 className="text-3xl font-bold mb-8 text-center">IoT Projects</h2>
            <br />
            {/* Project Grid */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {iotProjects.map((proj) => (
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



                {
                    selectedProject?.link[0] && (

                        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">


                            <iframe
                                src={selectedProject?.link[0] || ""}
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

export default MyIoTWork;



{/* <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Visit Project
                    </a> */}
