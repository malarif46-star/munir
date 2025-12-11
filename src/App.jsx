import React, { useState } from 'react';

function App() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Ready to train! Subscribed with: ${email}`);
        setEmail('');
    };

    return (
        <div className="min-h-screen bg-[#F5F5F7] text-gray-900 font-sans selection:bg-sport-primary selection:text-white">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b-2 border-sport-primary/10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-2 group">
                            <div className="w-8 h-8 bg-sport-primary skew-x-[-12deg] flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                                <span className="text-white font-bold text-lg skew-x-[12deg]">S</span>
                            </div>
                            <h1 className="text-2xl font-black italic tracking-tighter uppercase text-gray-900 group-hover:text-sport-primary transition-colors">
                                SportLife
                            </h1>
                        </div>
                        <div className="hidden md:flex space-x-8 font-bold uppercase tracking-wide text-sm">
                            <a href="#features" className="text-gray-600 hover:text-sport-primary transition-colors flex items-center gap-1">
                                <span className="w-2 h-2 bg-sport-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                Features
                            </a>
                            <a href="#about" className="text-gray-600 hover:text-sport-primary transition-colors">About</a>
                            <a href="#contact" className="text-gray-600 hover:text-sport-primary transition-colors">Contact</a>
                        </div>
                        <button className="bg-gray-900 text-white px-8 py-3 skew-x-[-12deg] hover:bg-sport-primary transition-all duration-300 shadow-lg hover:shadow-sport-primary/50">
                            <span className="block skew-x-[12deg] font-bold uppercase tracking-wider text-sm">Join Now</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gray-200/50 to-transparent skew-x-[-12deg] transform translate-x-1/4 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-sport-secondary/5 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-left z-10">
                            <div className="inline-block bg-sport-secondary/10 text-sport-secondary px-4 py-2 rounded-sm font-bold uppercase tracking-widest text-xs mb-6 border-l-4 border-sport-secondary">
                                Elevate Your Game
                            </div>
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black italic uppercase leading-none mb-8 text-gray-900">
                                Push <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sport-primary to-orange-600">Limits</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-lg font-medium leading-relaxed border-l-4 border-gray-200 pl-6">
                                Professional gear for those who refuse to settle. Experience the next level of improved performance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group relative px-8 py-4 bg-sport-primary overflow-hidden skew-x-[-12deg] shadow-xl hover:shadow-sport-primary/40 transition-shadow">
                                    <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <span className="relative block skew-x-[12deg] font-black uppercase text-white tracking-wider">Start Training</span>
                                </button>
                                <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 skew-x-[-12deg] hover:bg-gray-900 hover:text-white transition-all duration-300">
                                    <span className="block skew-x-[12deg] font-bold uppercase tracking-wider">View Catalog</span>
                                </button>
                            </div>
                        </div>

                        {/* Hero Image / Dynamic Visual */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 skew-x-[-6deg] hover:skew-x-0 transition-transform duration-500">
                                <div className="aspect-[4/5] bg-gray-900 rounded-sm shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-sport-primary/20 to-transparent mix-blend-overlay"></div>
                                    {/* Abstract Athletic Shape */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-64 h-64">
                                            <div className="absolute inset-0 border-[20px] border-white/10 rounded-full animate-pulse"></div>
                                            <div className="absolute inset-4 border-[20px] border-sport-secondary/20 rounded-full"></div>
                                            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-9xl italic">GO</div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="bg-white p-6 skew-x-[6deg] shadow-lg border-l-4 border-sport-primary">
                                            <p className="text-gray-500 text-sm font-bold uppercase mb-1">New Collection</p>
                                            <h3 className="text-2xl font-black italic text-gray-900 uppercase">Velocity Series X</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Background Shapes */}
                            <div className="absolute -top-10 -right-10 w-full h-full border-4 border-sport-primary/20 rounded-sm -z-10 skew-x-[-6deg]"></div>
                            <div className="absolute -bottom-10 -left-10 w-full h-full bg-gray-200 rounded-sm -z-10 skew-x-[-6deg]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-900 py-16 text-white skew-y-[-2deg] my-10 relative z-20 overflow-hidden">
                <div className="skew-y-[2deg] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800">
                        <div className="text-center p-4">
                            <div className="text-4xl md:text-5xl font-black italic text-sport-primary mb-2">01</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Ranked</div>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-4xl md:text-5xl font-black italic text-white mb-2">5K+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Athletes</div>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-4xl md:text-5xl font-black italic text-sport-secondary mb-2">24h</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Support</div>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-4xl md:text-5xl font-black italic text-sport-accent mb-2">100%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Guaranteed</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
                        <div className="max-w-2xl">
                            <span className="text-sport-primary font-bold uppercase tracking-widest">Why Choose Us</span>
                            <h2 className="text-4xl sm:text-5xl font-black italic uppercase text-gray-900 mt-2">
                                Dominate the Field
                            </h2>
                        </div>
                        <button className="mt-6 md:mt-0 font-bold uppercase text-gray-900 border-b-2 border-gray-900 hover:text-sport-primary hover:border-sport-primary transition-colors">
                            View All Features
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="group p-8 bg-gray-50 border border-transparent hover:border-sport-primary hover:bg-white transition-all duration-300 shadow-sm hover:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-gray-300 select-none group-hover:text-sport-primary transition-colors">01</div>
                            <div className="w-16 h-16 bg-white border-2 border-gray-200 flex items-center justify-center mb-8 skew-x-[-10deg] group-hover:bg-sport-primary group-hover:border-sport-primary transition-colors duration-300">
                                <svg className="w-8 h-8 text-gray-900 group-hover:text-white skew-x-[10deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black italic uppercase mb-4 text-gray-900">Maximum Power</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Engineered for explosive performance when you need it most. Push past your limits.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group p-8 bg-gray-50 border border-transparent hover:border-sport-secondary hover:bg-white transition-all duration-300 shadow-sm hover:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-gray-300 select-none group-hover:text-sport-secondary transition-colors">02</div>
                            <div className="w-16 h-16 bg-white border-2 border-gray-200 flex items-center justify-center mb-8 skew-x-[-10deg] group-hover:bg-sport-secondary group-hover:border-sport-secondary transition-colors duration-300">
                                <svg className="w-8 h-8 text-gray-900 group-hover:text-white skew-x-[10deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black italic uppercase mb-4 text-gray-900">Durability</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Built tough to withstand the most intense sessions. Gear that lasts as long as you do.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group p-8 bg-gray-50 border border-transparent hover:border-sport-accent hover:bg-white transition-all duration-300 shadow-sm hover:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-gray-300 select-none group-hover:text-sport-accent transition-colors">03</div>
                            <div className="w-16 h-16 bg-white border-2 border-gray-200 flex items-center justify-center mb-8 skew-x-[-10deg] group-hover:bg-sport-accent group-hover:border-sport-accent transition-colors duration-300">
                                <svg className="w-8 h-8 text-gray-900 group-hover:text-white skew-x-[10deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black italic uppercase mb-4 text-gray-900">Speed Demon</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Aerodynamic designs reduced to the essentials for pure unadulterated speed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-900 skew-y-2 transform origin-bottom-right scale-110"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-sport-primary/10 skew-x-12"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl sm:text-6xl font-black italic uppercase text-white mb-6">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sport-primary to-orange-500">Elite</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                        Sign up now for exclusive access to pro-tier equipment and training guides.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="YOUR EMAIL ADDRESS"
                            required
                            className="flex-1 px-8 py-5 bg-white text-gray-900 placeholder-gray-500 font-bold uppercase tracking-wide focus:outline-none focus:ring-4 focus:ring-sport-primary skew-x-[-12deg]"
                        />
                        <button
                            type="submit"
                            className="bg-sport-primary text-white px-10 py-5 font-black uppercase tracking-wider hover:bg-white hover:text-sport-primary transition-all duration-300 skew-x-[-12deg] shadow-lg hover:shadow-sport-primary/50"
                        >
                            <span className="block">Subscribe</span>
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t-8 border-sport-primary">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center space-x-2 group mb-6">
                                <div className="w-8 h-8 bg-gray-900 skew-x-[-12deg] flex items-center justify-center">
                                    <span className="text-white font-bold text-lg skew-x-[12deg]">S</span>
                                </div>
                                <h1 className="text-2xl font-black italic tracking-tighter uppercase text-gray-900">
                                    SportLife
                                </h1>
                            </div>
                            <p className="text-gray-500 font-medium">Fueling champions since 2025.</p>
                        </div>
                        <div>
                            <h4 className="font-black uppercase tracking-widest mb-6 text-gray-900">Products</h4>
                            <ul className="space-y-3 text-gray-500 font-bold">
                                <li><a href="#" className="hover:text-sport-primary transition-colors">Apparel</a></li>
                                <li><a href="#" className="hover:text-sport-primary transition-colors">Equipment</a></li>
                                <li><a href="#" className="hover:text-sport-primary transition-colors">Accessories</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black uppercase tracking-widest mb-6 text-gray-900">Company</h4>
                            <ul className="space-y-3 text-gray-500 font-bold">
                                <li><a href="#" className="hover:text-sport-primary transition-colors">Athletes</a></li>
                                <li><a href="#" className="hover:text-sport-primary transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-sport-primary transition-colors">Stories</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black uppercase tracking-widest mb-6 text-gray-900">Social</h4>
                            <ul className="space-y-3 text-gray-500 font-bold">
                                <li><a href="#" className="hover:text-sport-primary transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-sport-primary transition-colors">Twitter</a></li>
                                <li><a href="#" className="hover:text-sport-primary transition-colors">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 font-bold text-sm uppercase">
                        <p>&copy; 2025 SportLife Inc.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-gray-900">Privacy</a>
                            <a href="#" className="hover:text-gray-900">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
