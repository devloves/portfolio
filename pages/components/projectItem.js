import React from "react";
import Image from "next/image";

export default function ProjectItem({ subline, name, desc, img, link }) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 justify-content-center p-6 rounded-lg">
        <Image
          src={img}
          width="500"
          className="w-46 mb-3 rounded"
          height="500"
          alt="github"
        />
        <h3 className="tracking-widest text-slate-500 text-xs font-medium title-font">
          {subline}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {name}
        </h2>
        <p className="leading-relaxed text-sm">
          {desc}
        </p>
        <a
          href={link}
          className="text-indigo-500 inline-flex items-center"
        >
          Visit Site
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
