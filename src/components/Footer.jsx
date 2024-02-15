import Link from "next/link.js";
import React from "react";
export default function Footer() {
    return(
        <>

<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/"> 
      <span className="ml-3 text-xl text-white">World Printers</span>
    </Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 World Printer —</p>
  </div>
</footer>

</>
     )
}