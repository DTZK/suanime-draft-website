import React from 'react';
import Gengar from '../assets/Gengar.png'
import { MdDescription } from 'react-icons/md';
const events =[
  {
    id:1,
    title: 'Welcome Stall Week 1',
    description: 'Meet us at our Welcome Stall',
    image: Gengar,
  },

  {
    id:2,
    title: 'Maid Cafe',
    description: 'We hosts our annual Maid Cafe',
    image: Gengar,
  },

  {
    id:3,
    title: 'Cards Against SUAnime',
    description: 'We hosts weekly sessions at the international Student Lounge from 1200 to 1600',
    image: Gengar
  }
]
const Events = () => {
  return (
    <div className="max-w-[1250px] mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-4">Events</h1>
      <p className="text-white mb-8">Check out our upcoming events!</p>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full md:w-1/3 h-64 object-cover"
            />

            <div className="p-6 flex flex-col justify-center">
              <p className="text-sm text-gray-400 mb-1">WELCOME WEEK</p>
              <h2 className="text-2xl font-semibold text-white mb-2">
                {event.title}
              </h2>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Events;