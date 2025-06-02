//B:\mytestProjects\ChankuConstructionsV2\src\components\Header.js

// Header.js
import React from "react";
//import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import ChankuGlobalLOGO from "../assets/images/ChankuGlobalLOGOcopy.jpeg";

const Header = () => {
  return (
    <header className="bg-[#020406] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src={ChankuGlobalLOGO}
            alt="Chanku Logo"
            className="h-14 w-full mr-2 rounded-xl"
            priority
          />
          {/* <h1 className="text-3xl font-bold">CHANKUGLAL</h1> */}
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
