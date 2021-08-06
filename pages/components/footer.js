import React from "react";
import Image from 'next/image'
import * as Icon from "react-feather";

export default function Foot() {
    return (
        <section className="text-gray-700 body-font bg-gray-100"  id="contact">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <h1>Connect with me on.</h1>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="mailto:tdevansh50@gmail.com" className="flex mr-5 ml-1 hover:text-gray-900">
                        <Icon.Mail className="mr-1" /> 
                    </a>
                    <a href="https://discords.com/bio/p/stardust" className="flex mr-5 ml-1 hover:text-gray-900">
                        <Image height="30" width="30" src="https://img.icons8.com/ios/50/000000/discord-logo--v1.png"/>
                    </a>
                </nav>
            </div>
        </section>
    )
}