'use client';
import { useState } from 'react';
import Filter from '@/components/Filter';

export default function BlogGrid({ blogs }) {
    const [filter, setFilter] = useState('All');

    const filteredProjects =
        filter === 'All'
        ? blogs
        : blogs.filter((blog) =>
            blog.techStack.some((tech) =>
                tech.toLowerCase().includes(filter.toLowerCase())
            )
        );

  return (
    <>
        <Filter onFilter={setFilter} filters = {['All', 'Java', 'Spring Boot', 'Performance', 'Architecture']} />
        <div className="grid-container">
                {filteredProjects.map((blog) => (
                <div key={blog.title} className="card">
                    <div className="card-image">{blog.category}</div>
                    <div className="card-content">
                        <div className="text-accent text-sm mb-2">{blog.date}</div>
                        <h3 className="card-title">{blog.title}</h3>
                        <p className="card-description">{blog.description}</p>
                        <a href={blog.link} className="card-link">
                        Read Article
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline ml-1"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        ))}
        </div>
    </>
  );
}