'use client';
import Link from "next/link";
import { useState } from 'react';
import { usePathname  } from 'next/navigation';
import TypingBox from "./Typemorph";

const navLinks = [
    { href: '/', label: 'Home'},
    { href: '/blog', label: 'Blogs' },
    { href: '/portfolio', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

const Home = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
const Blog = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
const Projects = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
const About = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 1 0-16 0"></path></svg>
const Contact = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>


const menuLinks = [
    { href: '/', label: Home + " Home" },
    { href: '/blog', label: Blog + " Blogs" },
    { href: '/portfolio', label: Projects + " Projects" },
    { href: '/about', label: About + "About" },
    { href: '/contact', label: Contact + "Contact" },
];

export default function Header() {
    const pathname = usePathname ();
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return(
        <div> 
            <nav className="fixed w-full z-50 border-b transition-colors bg-background/90 backdrop-blur-sm border-borders">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link className="text-accent text-xl font-bold hover:opacity-80 transition-opacity header" aria-label="Home" href="/">
                            <TypingBox phrases={/*["O_O", "^.^",'( ͠° ͟ʖ ͡°)','(ʘ ʖ̯ ʘ)','ಥ_ಥ','ᕦ(ò_óˇ)ᕤ','ಠ_ಠ','(¬_¬")','눈_눈']*/
                             ["O_O", "...", '눈_눈', "Thinking...", "^.^", '( ͠° ͟ʖ ͡°)', "This is a demo...",'ಥ_ಥ', "coding...", '(ʘ ʖ̯ ʘ)', 'ᕦ(ò_óˇ)ᕤ', "Coffee break...", "Not Real!!!", 'ಠ_ಠ', '(¬_¬")', "Well..."]} typeSpeed={20} deleteSpeed={150} afterWait={5000}/>
                            
                        </Link>


                        <ul className="hidden md:flex items-center space-x-8">
                            {navLinks.map(({ href, label }) => {
                                const isActive = pathname === href; // Check if current route matches link href

                                return (
                                <li key={href}>
                                    <Link
                                    href={href}
                                    className={`
                                        relative px-1 py-2 text-lg font-medium hover:text-accent transition-colors
                                        ${isActive ? 'text-accent after:w-full' : 'text-primary after:w-0 hover:after:w-full'}
                                        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300
                                    `}
                                    >
                                    {label}
                                    </Link>
                                </li>
                                );
                            })}
                        </ul>

                        
                        <button onClick={toggleMenu} className="md:hidden p-2 rounded-md text-primary hover:bg-borders/20 transition-colors" aria-label="Open menu" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true">
                                <line x1="4" x2="20" y1="12" y2="12"></line>
                                <line x1="4" x2="20" y1="6" y2="6"></line>
                                <line x1="4" x2="20" y1="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div id="mobile-menu-overlay" className={isOpen ? 'active' : ''} onClick={toggleMenu}></div>

            <div id="mobile-menu" className={isOpen ? 'open' : ''}>
                <div id="mobile-menu-content">
                    <button id="close-menu" onClick={toggleMenu} className="p-2 text-primary" aria-label="Close menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18"></path>
                            <path d="M6 6l12 12"></path>
                        </svg>
                    </button>
                    
                    <ul className="space-y-2">
                        <li>
                            <Link className="" href="\">
                                
                            </Link>
                        </li>
                        {navLinks.map(({ href, label }) => {
                                const isActive = pathname === href; // Check if current route matches link href

                                return (
                                <li key={href}>
                                    <Link
                                    href={href}
                                    className={`
                                        mobile-nav-item flex items-center text-primary 
                                        ${isActive ? 'current' : ''}
                                    `}
                                    >
                                    {label}
                                    </Link>
                                </li>
                                );
                            })}
                    </ul>
                    
                    <div className="mt-auto pt-4 border-t border-borders/30">
                        <div className="flex space-x-4 justify-center">
                            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/abdulrahim-abdulazim/" className="p-2 rounded-full bg-borders/10 hover:bg-borders/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Abdulrahim-M" className="p-2 rounded-full bg-borders/10 hover:bg-borders/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:unvacc80@email.com" className="p-2 rounded-full bg-borders/10 hover:bg-borders/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


