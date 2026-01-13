import React from 'react';

// Add sponsors logo here
//I am assuming that all sponsors have a website
const sponsors = [
  {
    id: 1,
    name: 'Sponsor 1',
    logo: 'https://via.placeholder.com/200x100?text=Sponsor+1',
    website: 'https://example.com',
  },
  {
    id: 2,
    name: 'Sponsor 2',
    logo: 'https://via.placeholder.com/200x100?text=Sponsor+2',
    website: 'https://example.com',
  },
  {
    id: 3,
    name: 'Sponsor 3',
    logo: 'https://via.placeholder.com/200x100?text=Sponsor+3',
    website: 'https://example.com',
  },
  {
    id: 4,
    name: 'Sponsor 4',
    logo: 'https://via.placeholder.com/200x100?text=Sponsor+4',
    website: 'https://example.com',
  },
  {
    id: 5,
    name: 'Sponsor 5',
    logo: 'https://via.placeholder.com/200x100?text=Sponsor+5',
    website: 'https://example.com',
  },
  {
    id: 6,
    name: 'Sponsor 6',
    logo: 'https://via.placeholder.com/200x100?text=Sponsor+6',
    website: 'https://example.com',
  },
];

const Sponsors = () => {
  return (
    <div className="max-w-[1250px] mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Our Sponsors</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're grateful to our sponsors for their continued support
        </p>
      </div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-shadow duration-300 aspect-video"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-w-full max-h-full object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
