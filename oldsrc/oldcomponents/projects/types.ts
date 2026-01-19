// types/project.ts
export interface Project {
    id: string;
    title: string;
    description: string | React.ReactNode;
    imageUrl: string;
    link: string[];
}
