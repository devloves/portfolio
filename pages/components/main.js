import Image from "next/image";
import Axios from 'axios';
import React from "react";

export default function MainHome() {
  const [qoute, setQoute] = React.useState('');
  const [auth, setAuth] = React.useState('')

  React.useEffect(() => {
    Axios('https://api.quotable.io/random').then((data)=>{
      return data.data;
    }).then((data)=>{
      console.log(data);
      setQoute(data.content);
      setAuth(data.author)
    }).catch((err)=>{
      console.log(err);
    });
  }, [])

  return (
    <>
      <section className="font-sans text-gray-700 body-font pb-20">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
              Hello there!{" "}
              <Image src="/pika-hey.gif" width="50" height="50" alt="" />
              <span className="hidden lg:inline-block">
                i am <span className="gradient-text">[Devster]</span>
              </span>
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a 17yr Designer & Full stack Web Developer. i always like to
              learn new stuff new technologies most of all i love to spread the
              knowledge i have so if you have any queries or need help contact
              me. i always love a new challenge and i always strive to slove it!
              :)
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                View My Work!
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-5/6">
            <div className="container-sm flex justify-center">
            <div className="flex relative">
                <div style={{background: '#A7489B'}}  className="w-80 h-52 transform transition-all -skew-y-12 absolute -top-4 -left-24 rounded-lg">
                </div>
                <div style={{background: '#476098'}}  className="w-80 h-52 transform transition-all -skew-y-12 absolute -top-8 -left-28 rounded-lg">
                </div>
                <div style={{background: '#8B9862'}}  className="w-80 h-52 transform transition-all -skew-y-12 absolute -top-12 -left-32 rounded-lg">
                </div>
                <div style={{background: '#F18F43'}} className="w-80 h-52 transform transition-all -skew-y-12 absolute -top-16 -left-36 rounded-lg">
                </div>
                <div className="pl-3 w-80 h-52 bg-white flex-row pt-4 justify-center items-center border-2 border-black transform transition-all -skew-y-12 absolute -top-20 -left-40 rounded-lg">
                  <p className="text-base">{qoute}</p>
                  <p>~ {auth}</p>
                  <span className="text-sm" style={{ color: 'rgba(0, 0, 0, 0.2)' }}>QOUTES ARE RANDOMLY GENERATED</span>
                </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}