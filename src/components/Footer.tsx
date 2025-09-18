import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden">
            {/* Diagonal door top edge - matches header's bottom */}
            <div 
                className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-secondary/25 to-primary/20 z-10"
                style={{
                    clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
                    transform: 'translateZ(0)'
                }}
            />
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary/15 to-primary/15 z-10" />
            
            {/* Main footer background with primary-to-secondary gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
            
            {/* Glass refraction layers */}
            <div className="absolute inset-0 bg-gradient-to-l from-primary/40 via-emerald-400/30 to-teal-500/20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/20 to-emerald-900/40" />
            
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 backdrop-blur-[2px]">
                <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-emerald-300/5" />
                <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_70%_30%,transparent_0deg,rgba(90,185,99,0.1)_60deg,transparent_120deg)]" />
            </div>
            
            {/* Diagonal door effect - lower door (inverted from hero) */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tl from-primary/30 via-emerald-500/20 to-transparent transform skew-y-3 origin-bottom-left" />
                <div className="absolute bottom-0 right-0 w-2/3 h-3/4 bg-gradient-to-tr from-teal-400/15 via-primary/10 to-transparent transform -skew-y-2 origin-bottom-right" />
            </div>
            
            {/* Floating glass fragments */}
            <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-tl from-emerald-400/20 to-primary/30 rounded-full blur-xl opacity-50 animate-pulse" style={{animationDuration: '5s'}} />
            <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-bl from-teal-300/15 to-primary/25 rounded-full blur-lg opacity-60 animate-pulse" style={{animationDuration: '7s'}} />
            
            {/* Main Footer Content */}
            <div className="relative z-10 container py-16 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Image
                                src="/assets/logos/ceesolar-logo.png"
                                alt="Ceesolar Energy Limited"
                                width={120}
                                height={75}
                                className="brightness-0 invert"
                            />
                        </div>
                        <p className="text-white/90 mb-6 leading-relaxed">
                            Accelerating energy access across Africa through innovative solutions.
                            We empower communities and drive sustainable development with reliable, scalable energy systems.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Business Areas */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Business Areas</h3>
                        <ul className="space-y-3">
                            <li><Link href="/mini-grids" className="text-white/80 hover:text-white transition-colors">Mini-Grids</Link></li>
                            <li><Link href="/energy-services" className="text-white/80 hover:text-white transition-colors">Energy Services</Link></li>
                            <li><Link href="/energy-management" className="text-white/80 hover:text-white transition-colors">Energy Management</Link></li>
                            <li><Link href="/approach" className="text-white/80 hover:text-white transition-colors">Our Approach</Link></li>
                            <li><Link href="/experience" className="text-white/80 hover:text-white transition-colors">Experience</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/team" className="text-white/80 hover:text-white transition-colors">Our Team</Link></li>
                            <li><Link href="/careers" className="text-white/80 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/resources" className="text-white/80 hover:text-white transition-colors">Resources</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
                                <div className="text-white/80">
                                    <div>Plot 1143b, Adebiyi Olatoke Street</div>
                                    <div>Off Ajose Adeogun Street, Utako</div>
                                    <div>Abuja, Nigeria</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-white/70" />
                                <div className="text-white/80">
                                    <div>+234-704-758-8581</div>
                                    <div>+234-803-367-5293</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-white/70" />
                                <Link href="mailto:team@ceesolar.com" className="text-white/80 hover:text-white transition-colors">
                                    team@ceesolar.com
                                </Link>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="w-5 h-5 text-white/70" />
                                <div className="text-white/80">
                                    Mon - Fri: 9:00 AM - 5:00 PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="max-w-md mx-auto text-center">
                        <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
                        <p className="text-white/80 mb-6">Get insights on energy innovation and sustainable development across Africa.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40"
                            />
                            <Button className="px-6 py-2 bg-white text-primary hover:bg-white/90 border-0">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar with glass effect */}
            <div className="relative py-6 bg-black/20 backdrop-blur-sm border-t border-white/10">
                <div className="container relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
                        <div className="mb-4 md:mb-0">
                            <p>&copy; 2024 Ceesolar Energy Limited. All rights reserved. | RC - 1428136</p>
                        </div>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;