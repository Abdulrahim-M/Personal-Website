"use client";
import Image from "@/photos/1732565993245.jpg"
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Footer() {
    const [year, setYear] = useState("");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return(
        <>
            <footer  className="border-t border-borders bg-[#111111] backdrop-blur-sm py-8 px-4 sm:px-8 font-mono">
                <div  className="max-w-6xl mx-auto">
                    <div  className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                        <div  className="flex items-center group">
                            <div  className="relative h-12 w-12 rounded-full overflow-hidden border border-borders">
                                <img alt="Abdulrahim Abdulazim" loading="lazy" width="48" height="48" decoding="async"  className="object-cover w-full h-full" style={{ color: 'transparent' }} src={Image.src} />
                            </div>
                            <div  className="ml-4">
                                <h1  className="text-lg font-medium text-primary">Abdulrahim Abdulazim</h1>
                                <p  className="text-secondary text-sm mt-1">Backend Developer. Clean code, reliable APIs.</p>
                            </div>
                        </div>

                        <div  className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <div  className="flex items-center text-sm font-semibold text-primary mb-3">
                                    <span  className="text-accent mr-2">~</span>
                                    <span>Connect</span>
                                </div>

                                <ul  className="flex space-x-4">
                                    <li  className="group"> 
                                        <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"  className="flex items-center text-secondary hover:text-accent transition-colors" href="https://linkedin.com/in/abdulrahim-abdulazim">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-linkedin group-hover:text-accent transition-colors" aria-hidden="true">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect width="4" height="12" x="2" y="9"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="group">
                                        <a target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center text-secondary hover:text-accent transition-colors" href="https://github.com/Abdulrahim-M">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-github group-hover:text-accent transition-colors" aria-hidden="true">
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li  className="group">
                                        <a target="_blank" rel="noopener noreferrer" aria-label="Email"  className="flex items-center text-secondary hover:text-accent transition-colors" href="mailto:unvacc80@email.com">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-mail group-hover:text-accent transition-colors" aria-hidden="true">
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div  className="flex items-center text-sm font-semibold text-primary mb-3">
                                    <span  className="text-accent mr-2">~</span>
                                    <span>Site Links</span>
                                </div>

                                <ul  className="grid grid-cols-2 gap-2">
                                    <li  className="group">
                                        <Link  className="flex items-center text-secondary hover:text-accent transition-colors text-sm" href="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-chevron-right mr-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>Home
                                        </Link>
                                    </li>
                                    <li  className="group">
                                        <Link  className="flex items-center text-secondary hover:text-accent transition-colors text-sm" href="/blog">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-chevron-right mr-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>Blogs
                                        </Link>
                                    </li>
                                    <li  className="group">
                                        <Link  className="flex items-center text-secondary hover:text-accent transition-colors text-sm" href="/portfolio">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-chevron-right mr-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>Projects
                                        </Link>
                                    </li>
                                    <li  className="group">
                                        <Link  className="flex items-center text-secondary hover:text-accent transition-colors text-sm" href="/about">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-chevron-right mr-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>About
                                        </Link>
                                    </li>
                                    <li  className="group">
                                        <Link  className="flex items-center text-secondary hover:text-accent transition-colors text-sm" href="/contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="lucide lucide-chevron-right mr-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div  className="pt-6 border-t border-borders/20">
                        <div  className="flex flex-col sm:flex-row items-center justify-between text-xs text-secondary">
                            {/* <div  className="mb-4 sm:mb-0"> */}
                                <span>Copyright &copy; <year /> Abdulrahim-M</span>
                            {/* </div> */}
                            {/* <div  className="flex items-center">
                                <span  className="text-primary">Backend Developer Portfolio</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}