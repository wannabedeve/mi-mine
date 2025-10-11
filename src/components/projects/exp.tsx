// components/ProjectCard.tsx
import { Project } from "./types";
import React from "react";

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <div
            onClick={() => onClick(project)}
            className="group block overflow-hidden rounded-xl shadow-lg cursor-pointer"
        >
            <div className="relative">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold mb-2 text-slate-500">{project.title}</h3>
                {/* <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p> */}
                <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                    View Details →
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
