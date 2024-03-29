import Image from "next/image";
import * as Icon from "react-feather";
import React from "react";

export default function MainHome() {
  return (
    <>
      <section className="bg-my-gradient bg-cover bg-blend-multiply text-gray-700 body-font pb-20">
        <div className="container mx-auto flex px-5 py-36 md:flex-row flex-col items-center gardient-shadow">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:mr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-400">
              Nice to meet you, i am
            </h1>
            <h1 className="title-font sm:text-6xl text-2xl mb-4 font-bold text-slate-700">
              <span className="lg:inline-block">
                <span className="">Devansh Tiwari</span>
              </span>
            </h1>
            <h1 className="gradient-text title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              ✦ Front-End Developer & Designer ✦
            </h1>
            <p className="mb-4 font-medium leading-relaxed">
              A{" "}
              <span className="underline underline-offset-4">
                Developer and Tech enthusiast
              </span>{" "}
              who builds web solutions. I embrace independent work yet also
              value community. My passion lies in crafting{" "}
              <span className="underline underline-offset-4">
                interactive web experinces.
              </span>
            </p>
            <div className="mb-4 flex">
              <a
                href="https://github.com/devloves"
                id="twitter"
                className="flex justify-center items-center bg-white transform hover:-translate-y-3  border-2 w-36 h-12 rounded-full duration-500 text-gray-950 border-gray-700 hover:bg-gray-950 hover:text-white text-2xl"
              >
                <Icon.GitHub />
                <span className="ml-2 font-medium text-lg">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/devster/"
                id="twitter"
                className="flex justify-center items-center bg-white ml-2 transform hover:-translate-y-3  border-2 w-36 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl"
              >
                <Icon.Linkedin />
                <span className="ml-2 font-medium text-lg">Linkedin</span>
              </a>
              <a
                href="#projects"
                id="twitter"
                className="flex scroll-smooth justify-center items-center bg-white ml-2 transform hover:-translate-y-3  border-2 w-36 h-12 rounded-full duration-500 text-emerald-500 border-emerald-400 hover:bg-emerald-400 hover:text-white text-2xl"
              >
                <Icon.Code />
                <span className="ml-2 font-medium text-lg">Projects</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-5/6">
            <div
              className="relative w-4/5 rounded-full border-gray-300 order-1 border p-4 lg:p-7 xl:p-9"
              data-v-5e096964=""
            >
              <div
                className="relative w-96 rounded-full border-gray-300 border p-4 lg:p-7 xl:p-9"
                data-v-5e096964=""
              >
                <Image
                  className="w-full max-w-xs max-h-80 rounded-full"
                  src="/assets/avatar.png"
                  alt="my avatar"
                  width={500}
                  height={500}
                />
              </div>
              <ul
                className="absolute top-0 left-0 w-full h-full rounded-full"
                data-v-5e096964=""
              >
                <li
                  className="skill min-h-16 animate-float-up flex items-center justify-center absolute bg-white bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
                  title="vue"
                  data-v-5e096964=""
                >
                  <Image
                    src="/assets/typescript.svg"
                    alt="vue logo"
                    loading="lazy"
                    className="w-full max-w-12 grayscale-[50%]"
                    width={500}
                    height={500}
                    data-v-5e096964=""
                  />
                </li>
                <li
                  className="skill min-h-16 animate-float-up flex items-center justify-center absolute bg-white bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
                  title="figma"
                  data-v-5e096964=""
                >
                  <Image
                    src="/assets/figma.svg"
                    alt="figma logo"
                    className="w-full max-w-12 grayscale-[50%]"
                    loading="lazy"
                    width={500}
                    height={500}
                    data-v-5e096964=""
                  />
                </li>
                <li
                  className="skill min-h-24 animate-float-up flex items-center justify-center absolute bg-white bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
                  title="react"
                  data-v-5e096964=""
                >
                  <Image
                    src="/assets/nextjs.svg"
                    alt="react logo"
                    className="w-full max-w-15 grayscale-[50%]"
                    loading="lazy"
                    width={500}
                    height={500}
                    data-v-5e096964=""
                  />
                </li>
                <li
                  className="skill min-h-32 animate-float-up flex items-center justify-center absolute bg-white bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
                  title="sketch"
                  data-v-5e096964=""
                >
                  <Image
                    src="/assets/react.svg"
                    alt="sketch logo"
                    className="w-full max-w-20 grayscale-[50%]" 
                    width={500}
                    height={500}
                    loading="lazy"
                    data-v-5e096964=""
                  />
                </li>
                <li
                  className="skill min-h-14 animate-float-up flex items-center justify-center absolute bg-white bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
                  title="sass"
                  data-v-5e096964=""
                >
                  <Image
                    src="/assets/javascript.svg"
                    alt="sass logo"
                    className="w-full max-w-12 grayscale-[50%]"
                    loading="lazy"
                    width={500}
                    height={500}
                    data-v-5e096964=""
                  />
                </li>
                <li
                  className="skill min-h-16 animate-float-up flex items-center justify-center absolute bg-white bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
                  title="tailwind"
                  data-v-5e096964=""
                >
                  <Image
                    src="/assets/tailwind.svg"
                    alt="tailwind logo"
                    className="w-full max-w-12 grayscale-[50%]"
                    width={500}
                    height={50}
                    loading="lazy"
                    data-v-5e096964=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
