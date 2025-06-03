'use client';
import { useState } from 'react';
import Filter from '@/components/Filter';

export default function ProjectsGrid({ projects }) {
    const [filter, setFilter] = useState('All');

    const filteredProjects =
        filter === 'All'
        ? projects
        : projects.filter((project) =>
            project.techStack.some((tech) =>
                tech.toLowerCase().includes(filter.toLowerCase())
            )
        );

    return (
        <>
            <Filter onFilter={setFilter} filters = {['All', 'Java', 'Spring Boot', 'API Design', 'Microservices']} />
            <div className="grid-container">
                {filteredProjects.map((project) => (
                    <div  className="card  flex flex-col justify-between h-full p-3 rounded-md shadow bg-card">
                        <p className="text-sm text-secondary ml-2 mt-1">{project.date}</p>
                        <div className="card-content">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-description">
                            {project.description}
                            </p>
                            <div className="tech-stack">
                            {project.techStack.map((tech) => (
                                <span
                                key={tech}
                                className="tech-tag"
                                >
                                {tech}
                                </span>
                            ))}
                            </div>
                        </div>
                        <div className="flex gap-4 mt-auto pt-4 pb-1 border-t border-borders/20">
                        
                            {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"  className="card-link group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-chevron-right -mr-2 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github hover:text-accent transition-colors">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </a>
                            )}

                            {project.preview && (
                            <a href={project.preview} target="_blank" rel="noopener noreferrer" aria-label="Live Preview" className="card-link group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-chevron-right -mr-2 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link hover:text-accent transition-colors">
                                    <path d="M18 3h3v3"></path> 
                                    <path d="M21 3l-9 9"></path> 
                                    <path d="M15 3H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"></path>
                                </svg>
                            </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}