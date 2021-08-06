import React from "react";
import { useState, useEffect } from "react";

export default function Project() {

    return (
        <>
            <section class="text-gray-600 body-font" id="projects">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-5">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                My Projects
                            </h1>
                            <div class="h-1 w-20 bg-red-500 rounded"></div>
                        </div>
                    </div>

                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 justify-content-center p-6 rounded-lg">
                                <img
                                    src="/git.png"
                                    width="150"
                                    className="mb-3 object-fit object-center rounded"
                                    height="150"
                                    alt="github"
                                />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                    OPEN SOURCE PROJECTS
                                </h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                                    Github
                                </h2>
                                <p class="leading-relaxed text-sm">
                                    My github contains the public projects that i have worked on!
                                </p>
                                <a href="https://github.com/devloves" class="text-indigo-500 inline-flex items-center">Visit Site
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 justify-content-center p-6 rounded-lg">
                                <img
                                    src="/drib.png"
                                    width="150"
                                    className="mb-3 object-fit object-center rounded"
                                    height="150"
                                    alt="github"
                                />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                    DESIGN PROJECTS
                                </h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                                    Dribble
                                </h2>
                                <p class="leading-relaxed text-sm">
                                    Here i post some of my design work!
                                </p>
                                <a href="https://dribbble.com/xandermade" class="text-indigo-500 inline-flex items-center">Visit Site
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="xl:w-xl md:w-1/2 p-4">
                            <div class="bg-gray-100 justify-content-center p-6 rounded-lg">
                                <img
                                    src="/lock.jfif"
                                    width="129"
                                    className="mb-3 object-fit object-center rounded"
                                    height="129"
                                    alt="github"
                                />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                    TO BE POSTED PROJECTS
                                </h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                                    Private
                                </h2>
                                <p class="leading-relaxed text-sm">
                                    Personally contact me if you would like to see these project Mainly Designs | UI/UX | Programming
                                    they aren't posted for the reasons/under development or i just havent posted them these will be soon online.
                                </p>
                                <a class="text-indigo-500 inline-flex items-center">Contact Me.
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

