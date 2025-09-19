"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown, Phone, Calculator } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm relative">
      {/* Diagonal door bottom edge */}
      <div 
        className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-primary/20 to-secondary/15"
        style={{
          clipPath: 'polygon(0 0, 85% 0, 100% 100%, 15% 100%)',
          transform: 'translateZ(0)'
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 to-secondary/10" />
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu} className="flex items-center space-x-2">
          <Image
            src="/assets/logos/ceesolar-logo.png"
            alt="Ceesolar Energy Limited"
            width={140}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About Us</Link>
          <Link href="/approach" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Approach</Link>
          
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <span>Business Areas</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-3">
                <div className="px-3 py-2 text-xs font-semibold text-gray-900 uppercase tracking-wide border-b border-gray-100 mb-2">Our Solutions</div>
                <Link href="/mini-grids" className="block px-4 py-3 text-sm hover:bg-primary/5 hover:border-l-4 hover:border-l-primary rounded-md transition-all duration-200">
                  <div className="font-semibold text-gray-900 mb-1">Mini-Grids</div>
                  <div className="text-xs text-gray-900 leading-relaxed">Reliable and sustainable power to off-grid communities</div>
                </Link>
                <Link href="/energy-services" className="block px-4 py-3 text-sm hover:bg-primary/5 hover:border-l-4 hover:border-l-primary rounded-md transition-all duration-200">
                  <div className="font-semibold text-gray-900 mb-1">Energy Services</div>
                  <div className="text-xs text-gray-900 leading-relaxed">Solar solutions for Commercial and Industrial Clients</div>
                </Link>
                <Link href="/energy-management" className="block px-4 py-3 text-sm hover:bg-primary/5 hover:border-l-4 hover:border-l-primary rounded-md transition-all duration-200">
                  <div className="font-semibold text-gray-900 mb-1">Energy Management</div>
                  <div className="text-xs text-gray-900 leading-relaxed">Advisory services, energy audits, and project management</div>
                </Link>
              </div>
            </div>
          </div>
          
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden lg:flex">
            <Phone className="w-4 h-4 mr-2" />
            Customer Portal
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Calculator className="w-4 h-4 mr-2" />
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/about" onClick={closeMobileMenu} className="text-sm font-medium py-2 hover:text-primary transition-colors">About Us</Link>
              <Link href="/approach" onClick={closeMobileMenu} className="text-sm font-medium py-2 hover:text-primary transition-colors">Approach</Link>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-left text-sm font-medium py-2"
                >
                  <span>Business Areas</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-3 space-y-1 bg-gray-50 rounded-md p-3 ml-2">
                    <Link href="/mini-grids" onClick={closeMobileMenu} className="block text-sm font-medium text-black hover:text-primary hover:bg-white rounded-md px-3 py-2 transition-colors">
                      <div className="font-medium">Mini-Grids</div>
                      <div className="text-xs text-gray-900 mt-1">Community power solutions</div>
                    </Link>
                    <Link href="/energy-services" onClick={closeMobileMenu} className="block text-sm font-medium text-black hover:text-primary hover:bg-white rounded-md px-3 py-2 transition-colors">
                      <div className="font-medium">Energy Services</div>
                      <div className="text-xs text-gray-900 mt-1">Commercial & industrial solutions</div>
                    </Link>
                    <Link href="/energy-management" onClick={closeMobileMenu} className="block text-sm font-medium text-black hover:text-primary hover:bg-white rounded-md px-3 py-2 transition-colors">
                      <div className="font-medium">Energy Management</div>
                      <div className="text-xs text-gray-900 mt-1">Advisory & project management</div>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/contact" onClick={closeMobileMenu} className="text-sm font-medium py-2 hover:text-primary transition-colors">Contact</Link>
              
              <div className="pt-4 space-y-3 border-t">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Customer Portal
                </Button>
                <Button size="sm" className="w-full justify-start bg-primary hover:bg-primary/90">
                  <Calculator className="w-4 h-4 mr-2" />
                  Get Free Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;