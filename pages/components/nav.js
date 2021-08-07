import React from "react";
import * as Icon from "react-feather";
import Image from "next/image"

export default function Nav() {
  return (
    <header className="text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="*"
          target="_blank"
        >
          <span className="ml-2 gradient-text text-3xl font-black">[DEV]</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="https://dev.to/devster" className="flex mr-5 ml-1 hover:text-gray-900">
            <Icon.Feather className="mr-1" /> Blog
          </a>
          <a href="#projects" className="flex mr-5 ml-1 hover:text-gray-900">
            <Icon.Box className="mr-1" /> Projects
          </a>
          <a href="#contact" className="flex mr-5 ml-1 hover:text-gray-900">
            <Icon.Mail className="mr-1" /> Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}
