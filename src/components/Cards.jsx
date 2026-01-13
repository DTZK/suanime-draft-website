import React from 'react';
import Gengar from '../assets/Gengar.png'
const Cards = () =>{
    const photos = [
        {id: 1, src: Gengar, alt:'Gengar 1'},
        {id: 2, src: Gengar, alt:'Gengar 2'},
        {id: 3, src: Gengar, alt:'Gengar 3'},
        {id: 4, src: Gengar, alt:'Gengar 4'},
        {id: 5, src: Gengar, alt:'Gengar 5'},
        {id: 6, src: Gengar, alt:'Gengar 6'},
        {id: 7, src: Gengar, alt:'Gengar 7'},
        {id: 8, src: Gengar, alt:'Gengar 8'},
        {id: 9, src: Gengar, alt:'Gengar 9'},

    ]
    return (
        <div className='w-full py-[10rem] px-4 #b6a6fc'>
            <div className='max-w-[900px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {photos.map((photo,index)=>(
                        <div key={photo.id}
                            className={`
                                bg-white p-4 pb-16 shadow-2xl
                                transition-all duration-300 ease-in-out
                                hover:-translate-y-3 hover:shadow-3xl
                                ${index % 2 === 0 ? 'rotate-[-2deg] hover:rotate-[-4deg]' : 'rotate-[2deg] hover:rotate-[4deg]'}
                            `}
                            style={{ transformStyle: 'preserve-3d' }}>
                                <img src={photo.src} alt={photo.alt} className='w-full h-[300px] object-cover bg-gray-100'
                                loading='lazy'/>
                                 <p className='text-center mt-4 font-mono text-gray-700'>
                                {photo.caption}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Cards