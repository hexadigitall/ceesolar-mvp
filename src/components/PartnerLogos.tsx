import Image from 'next/image';

const PartnerLogos = () => {
    const partners = [
        {
            name: "Rural Electrification Agency",
            shortName: "REA",
            logo: "/assets/partners/rea-logo.png",
            mobileHeight: "h-8",
            desktopHeight: "md:h-12"
        },
        {
            name: "Schneider Electric",
            shortName: "SCHNEIDER",
            logo: "/assets/partners/schneider-logo.png",
            mobileHeight: "h-6",
            desktopHeight: "md:h-10"
        },
        {
            name: "Auxano Capital",
            shortName: "AUXANO",
            logo: "/assets/partners/auxano-logo.png",
            mobileHeight: "h-6",
            desktopHeight: "md:h-10"
        },
        {
            name: "Renewable Energy Association of Nigeria",
            shortName: "REAN",
            logo: "/assets/partners/rean-logo.png",
            mobileHeight: "h-8",
            desktopHeight: "md:h-12"
        }
    ];

    return (
        <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {partners.map((partner) => (
                <div key={partner.name} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 px-2">
                    <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className={`${partner.mobileHeight} ${partner.desktopHeight} w-auto object-contain filter brightness-0 invert`}
                        style={{ width: 'auto' }}
                    />
                </div>
            ))}
        </div>
    );
};

export default PartnerLogos;