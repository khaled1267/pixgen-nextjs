import React from 'react';


const Photodetails = async ({params}) => {
    const {id} = await params;
   
    const response = await fetch('https://pixgen-nextjs-one.vercel.app/data.json');
        const data = await response.json();
        console.log(data);
        const photodetails = data.find(photo => photo.id === parseInt(id));
        console.log(photodetails);
    return ( 
        <div>
            <h1>Photodetails</h1>
            <h2>{photodetails.title}</h2>
        </div>
    );
};

export default Photodetails;