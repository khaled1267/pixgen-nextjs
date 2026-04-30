import React from "react";
import Photocard from "./Photocard";

const Topcontainpic = async () => {
  const response = await fetch(
    "https://pixgen-nextjs-one.vercel.app/data.json",
  );
  const data = await response.json();
  console.log(data);
  const topphotos = data.slice(0, 8);
  console.log(topphotos);

  return (
    <div>
      <h1 className="text-3xl text-center md:text-6xl font-bold  max-w-2xl  mt-5">
        Top Generations
      </h1>
      <div className="w-11/12 mx-auto mt-16 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        {topphotos.map((photo) => (
          <Photocard key={photo.id} photo={photo}></Photocard>
        ))}
      </div>
    </div>
  );
};

export default Topcontainpic;
