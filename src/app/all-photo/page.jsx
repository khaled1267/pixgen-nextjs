import Photocard from '@/components/Photocard';
import React from 'react';

const Allphotopage = async() => {
    const response = await fetch('https://pixgen-nextjs-one.vercel.app/data.json');
    const photos = await response.json();

    return (
        <div>
            <h1 className="text-3xl text-center md:text-5xl font-bold  max-w-2xl  mt-5">All Photos</h1>
           <div className="w-11/12 mx-auto mt-16 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        
        {photos.map((photo) => (
          <Photocard key={photo.id} photo={photo}></Photocard>
        ))}
      </div>
        </div>
    );
};

export default Allphotopage;