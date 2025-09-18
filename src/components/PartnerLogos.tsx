import Image from 'next/image';

const PartnerLogos = () => {
    const partners = [
        {
            name: "Rural Electrification Agency",
            shortName: "REA",
            logo: "/assets/partners/rea-logo.png",
            height: "h-16" // Larger for REA
        },
        {
            name: "Schneider Electric",
            shortName: "SCHNEIDER",
            logo: "/assets/partners/schneider-logo.png",
            height: "h-12" // Standard size
        },
        {
            name: "Auxano Capital",
            shortName: "AUXANO",
            logo: "/assets/partners/auxano-logo.png",
            height: "h-12" // Standard size
        },
        {
            name: "Renewable Energy Association of Nigeria",
            shortName: "REAN",
            logo: "/assets/partners/rean-logo.png",
            height: "h-16" // Larger for REAN
        }
    ];

    return (
        <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            {partners.map((partner, index) => (
                <div key={partner.name} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={150}
                        height={80}
                        className={`${partner.height} w-auto object-contain filter brightness-0 invert`}
                        style={{ width: 'auto' }}
                    />
                </div>
            ))}
        </div>
    );
};

export default PartnerLogos;