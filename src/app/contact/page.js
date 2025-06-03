function Contact() {
    return(
        <div  className="min-h-screen flex flex-col bg-background text-primary"> 
            <main className="flex-grow pt-16">
                <section id="contact" className="py-12 px-4 sm:px-8 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-accent">Get In Touch</h2>
                        <p className="text-secondary/80 max-w-2xl mx-auto">Have a question or want to work together? Send me a message and I'll get back to you as soon as possible.</p>
                    </div>
                    
                    <div className="bg-[#1a1919] border border-borders/30 rounded-xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
                        <form id="contact-form" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Your Name</label>
                                <input type="text" id="name" placeholder="John Doe" required 
                                    className="w-full px-4 py-3 bg-borders/10 border border-borders/30 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors outline-none text-primary"></input>
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Your Email</label>
                                <input type="email" id="email" placeholder="john@example.com" required 
                                    className="w-full px-4 py-3 bg-borders/10 border border-borders/30 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors outline-none text-primary"></input>
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Your Message</label>
                                <textarea id="message" rows="5" placeholder="I'd like to talk about..." required 
                                        className="w-full px-4 py-3 bg-borders/10 border border-borders/30 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors outline-none text-primary resize-none"></textarea>
                            </div>
                            
                            <div>
                                <button type="submit" className="w-full bg-gradient-to-r from-accent/30 to-accent/10 border border-accent/30 text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent/20 hover:border-accent/50 hover:shadow-[0_0_15px_-3px_rgba(0,255,178,0.1)] transition-all duration-300">
                                    Send Message
                                </button>
                            </div>
                            
                            <p id="form-status" className="text-center text-sm text-secondary/80 mt-4"></p>
                        </form>
                    </div>
                    
                    
                </section>
            </main>
        </div>
    );
}
    
export default Contact;