import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectItem from "./projectItem";

export default function Project() {
  return (
    <>
      <section className="text-gray-600 body-font" id="projects">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-5">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                My Projects
              </h1>
              <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            <ProjectItem
              subline={"Nextjs • NextAuth • PostgresDB"}
              name={"Advanced Todo App"}
              desc={"A Todo app made with Next.js, NextAuth.js & Postgres database"}
              img={"/git.png"}
              link={"https://github.com/devloves/advance-todoapp"}
            />
            <ProjectItem
              subline={"Nextjs"}
              name={"Personal Blog App"}
              desc={"My blog app, made using nextjs tech"}
              img={"/blog.png"}
              link={"https://github.com/devloves/my-blog-react-next.js"}
            />
            <ProjectItem
              subline={"Test"}
              name={"Test"}
              desc={"Test"}
              img={"/git.png"}
              link={"https://google.com"}
            />
            <ProjectItem
              subline={"Test"}
              name={"Test"}
              desc={"Test"}
              img={"/git.png"}
              link={"https://google.com"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
