import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import CTASection from "@/components/CTASection";

// Default content for the homepage - Ceesolar branding
const defaultData = {
  heroHeadline: "Accelerating Energy Access in Africa",
  heroSubheading: "We develop innovative energy solutions that drive sustainable development, create economic opportunities, and empower communities across the continent.",
  heroSubpoints: ["Energy Innovation", "Community Impact", "Sustainable Growth"],
  servicesTitle: "Our Business Areas",
  servicesSubheading: "Comprehensive energy solutions driving sustainable development across Africa. We deliver innovative, scalable energy systems that empower communities and businesses.",
  services: undefined, // Will use default services from component
  ctaTitle: "Ready to Power Your Future?",
  ctaSubheading: "Partner with Africa's leading energy innovators. Let's develop sustainable energy solutions that drive your success and create lasting impact."
};

export default function Home() {
  return (
    <>
      <HeroSection 
        headline={defaultData.heroHeadline} 
        subheading={defaultData.heroSubheading}
        subpoints={defaultData.heroSubpoints} 
      />
      <ServicesOverview 
        title={defaultData.servicesTitle}
        subheading={defaultData.servicesSubheading} 
        services={defaultData.services} 
      />
      <CTASection 
        title={defaultData.ctaTitle}
        subheading={defaultData.ctaSubheading}
      />
    </>
  );
}
