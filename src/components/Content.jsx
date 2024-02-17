import Image from 'next/image';

import React from "react";
export default function Content() {
    return(
        <>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Our printing work</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Experience the power of print! From vibrant photographs to crisp documents, your printer is a gateway to endless possibilities. With just a click, transform digital ideas into tangible masterpieces. Whether you&apos;re capturing memories or bringing presentations to life, let your imagination run wild. Embrace the convenience and versatility of your printer, and let your creativity soar on paper.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/img/imagee.png" width={400} height={400} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">img name</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/img/imagee.png" width={400} height={400} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">Gravure Printing</h2>
          <p className="leading-relaxed text-base">Involves engraving an image onto a cylinder, which is then used to transfer ink to the substrate.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/img/imagee.png" width={400} height={400} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">Laser Printing</h2>
          <p className="leading-relaxed text-base">Utilizes a laser beam to create an image on a photoreceptor drum or belt, which is then transferred and fused onto the printing surface.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">    
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/img/imagee.png" width={400} height={400} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">3D Printing</h2>
          <p className="leading-relaxed text-base">Builds three-dimensional objects layer by layer from digital files. It's used in various industries for prototyping and etc.</p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
     )
}