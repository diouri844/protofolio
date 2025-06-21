import React from "react"

type skillCategory = {
    icon: React.ReactNode;
    title: string;
    skills: string[];
};

type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    date: string;
};



type IntrestedArea = {
    icon: React.ReactNode;
    title: string;
    description: string;
    progress: number;
    technologies: string[];
};




export type { skillCategory, Project, IntrestedArea };