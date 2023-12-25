import React from "react";
import Image from 'next/image'
import * as Icon from "react-feather";

export default function Foot() {
    return (
        <section className="text-gray-700 body-font bg-gray-100"  id="contact">
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                <h1>Connect with me on.</h1>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="mailto:tdevansh50@gmail.com" className="flex mr-5 ml-1 hover:text-gray-900">
                        <Icon.Mail className="mr-1" /> 
                    </a>
                </nav>
            </div>
        </section>
    )
}