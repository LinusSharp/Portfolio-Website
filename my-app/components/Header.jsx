import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        <Link href="/">
          <h1>
            Linus <span className="text-accent">.</span>
          </h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
