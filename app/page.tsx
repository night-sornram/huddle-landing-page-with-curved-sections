'use client'

import Image from "next/image";
import Link from 'next/link'
import { useState  } from "react";

import { FaFacebookSquare , FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Home() {
  const [email1,setEmail1] = useState('')
  const [invalid1,setInvalid1] = useState(false)
  const validateEmail1 = () => {
    email1.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? setInvalid1(false) : setInvalid1(true);
  };
  return (
    <div className=" font-poppins w-full flex flex-col">
      <div className=" w-full bg-desktop-top-2 bg-no-repeat bg-bottom bg-contain flex flex-col bg-white">
        <div className=" py-10 px-6 md:px-20 w-full px flex justify-between">
          <div>
            <Image
            src={"/images/logo.svg"}
            width={240}
            height={39}
            className=" w-40 md:w-40"
            alt="logo"/>
          </div>
          <button className=" py-3 px-6 lg:px-10 xl:px-16 text-xs md:text-xs lg:text-sm xl:text-base border border-custom-100  bg-white rounded-full text-custom-100 hover:text-custom-200 hover:border-custom-200 font-poppins font-semibold">
            Try It free
          </button>
        </div>
        <div className=" w-full flex flex-col ">
          <div className=" space-y-7 px-5 md:px-10 lg:px-20 w-full flex flex-col justify-center items-center">
            <div className=" text-center text-3xl font-semibold  md:text-3xl lg:text-4xl  xl:text-5xl text-custom-400">
              Build The Community Your Fans Will Love 
            </div>
            <div className="text-center w-10/12 md:w-1/2 text-sm  md:text-xs lg:text-sm  xl:text-base">
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </div>
            <button className=" py-3 px-6 md:px-6 lg:px-16 md:w-48 lg:w-64 xl:w-80  md:text-xs xl:text-base bg-custom-100 hover:bg-custom-200 rounded-full text-white font-poppins font-semibold">
              Get Started For Free
            </button>
          </div>
          <div className=" md:p-20 p-10  md:pr-10 w-full flex justify-center items-center">
            <Image
            src={"images/screen-mockups.svg"}
            width={1035}
            height={739}
            alt="mockup"/>
          </div>
        </div>
        <div className="  w-full flex space-y-16 md:space-y-0 flex-col md:flex-row pb-40">
          <div className=" w-full md:w-1/2 flex justify-center items-center">
            <div className=" flex flex-col space-y-5">
              <div>
                <Image
                src={"/images/icon-communities.svg"}
                width={47}
                height={41}
                alt="commu"/>
              </div>
              <div className=" text-custom-400 text-5xl md:text-7xl font-semibold font-opensan">
                1.4k+
              </div>
              <div className=" text-gray-500  text-center">
                Communities Formed
              </div>
            </div>
          </div>
          <div className=" w-full md:w-1/2 flex justify-center items-center">
            <div className=" flex flex-col space-y-5">
              <div>
                <Image
                src={"/images/icon-messages.svg"}
                width={47}
                height={41}
                alt="messages"/>
              </div>
              <div className=" text-custom-400 text-5xl md:text-7xl font-semibold font-opensan">
                2.7m+
              </div>
              <div className=" text-gray-500 text-center ">
                Messages Sent 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className=" w-full rounded-xl  flex flex-col-reverse md:flex-row bg-custom-500">
          <div className=" p-5 md:px-10 lg:px-20 space-y-5 w-full md:w-1/2 flex justify-center flex-col">
            <div className=" text-center md:text-start  md:text-xl lg:text-2xl xl:text-3xl font-semibold text-custom-400">
              Grow Together
            </div>
            <div className="text-center md:text-start   text-xs  lg:text-sm xl:text-base text-custom-400">
              Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
            </div>
          </div>
          <div className=" p-5 md:p-10 lg:p-20 w-full md:w-1/2 flex justify-center items-center">
            <Image
            src={"/images/illustration-grow-together.svg"}
            width={1023}
            height={838}
            className=" w-[400px]"
            alt="grow"/>
          </div>
        </div>
        <div className=" w-full rounded-xl py-20  flex flex-col-reverse bg-[url(/images/bg-section-top-desktop-1.svg),_url(/images/bg-section-bottom-desktop-2.svg)] bg-[position:bottom,top] bg-contain bg-no-repeat md:flex-row-reverse">
          <div className=" p-5 md:px-10 lg:px-20 space-y-5 w-full md:w-1/2 flex justify-center flex-col">
            <div className="text-center md:text-start   md:text-xl lg:text-2xl xl:text-3xl font-semibold text-custom-400">
              Flowing Conversations
            </div>
            <div className="text-center md:text-start    text-xs  md:text-xs  lg:text-sm xl:text-base text-custom-400">
              You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
            </div>
          </div>
          <div className=" p-5 md:p-10 lg:p-20 w-full md:w-1/2 flex justify-center items-center">
            <Image
            src={"/images/illustration-flowing-conversation.svg"}
            width={1125}
            height={801}
            className=" w-[400px]"
            alt="flowing"/>
          </div>
        </div>
        <div className=" w-full rounded-xl bg-custom-500  flex flex-col-reverse md:flex-row ">
          <div className=" p-5  md:px-10 lg:px-20 space-y-5 w-full md:w-1/2 flex justify-center flex-col">
            <div className="text-center md:text-start  md:text-xl lg:text-2xl xl:text-3xl font-semibold text-custom-400">
              Your Users
            </div>
            <div className="text-center md:text-start text-xs md:text-xs  lg:text-sm xl:text-base text-custom-400">
              It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.
            </div>
          </div>
          <div className=" p-5 md:p-10 lg:p-20 w-full md:w-1/2 flex justify-center items-center">
            <Image
            src={"/images/illustration-your-users.svg"}
            width={1078}
            height={813}
            className=" w-[400px]"
            alt="user"/>
          </div>
        </div>
        <div className=" w-full py-40 flex justify-center items-center bg-[url(/images/bg-footer-top-desktop.svg),_url(/images/bg-section-bottom-desktop-2.svg)] bg-[position:bottom,top] bg-contain bg-no-repeat">
          <div className=" flex flex-col items-center space-y-7 py-10">
            <div className=" text-center text-3xl text-custom-400 font-bold">
              Ready To Build Your Community?
            </div>
            <button className=" py-3 px-6 md:px-6 lg:px-16 md:w-48 lg:w-64 xl:w-80  md:text-xs xl:text-base bg-custom-100 hover:bg-custom-200 rounded-full text-white font-poppins font-semibold">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
      
      <div className=" px-10 md:px-20 py-10 space-y-20 md:space-y-5 w-full bg-custom-400 flex flex-col md:flex-row-reverse">    
        
        <div className=" w-full md:w-1/2 space-y-7">
          <div className=" text-3xl md:text-xl lg:text-2xl xl:text-3xl text-custom-500 uppercase font-semibold font-opensan">
            Newsletter 
          </div>
          <div className=" text-custom-500 font-opensan w-full md:w-2/3 md:text-xs lg:text-sm xl:text-base">
            To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address
          </div>
          <div className=" w-full flex flex-col h-16  md:flex-row space-y-5 md:space-y-0 md:space-x-7">
            <div className=" w-full flex flex-col ">
              <input onChange={(e)=>{setEmail1(e.currentTarget.value)}} type="text" className={!invalid1 ? " appearance-none outline-none h-11 w-full md:text-xs lg:text-sm xl:text-base px-5 py-3 md:py-0 border-2 border-black rounded" : " appearance-none outline-none h-11 w-full md:text-xs lg:text-sm xl:text-base px-5 py-3 md:py-0 border-2 border-red-500 rounded"} />
              <div className={invalid1 ? "text-xs mt-1 text-red-500 font-opensan" : "hidden"}>
                Check your email please
              </div>
            </div>
            <div className=" w-full md:w-5/12 flex justify-end"> 
              <button onClick={validateEmail1} className=" h-11 md:text-xs lg:text-sm xl:text-base bg-custom-100 hover:bg-custom-200 font-semibold text-white px-5 py-3 rounded ">
                Subscribe
              </button>
            </div>
            
          </div>
        </div>
        <div className=" w-full md:w-1/2 flex flex-col space-y-7">
          <div>
            <Image
            src={"/images/logo2.svg"}
            width={240}
            height={39}
            alt="logo2"/>
          </div>
          <div className=" text-custom-500 md:text-xs lg:text-sm xl:text-base w-full md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </div>
          <div className=" flex flex-row space-x-3">
            <div className="">
              <Image
              src={"/images/icon-phone.svg"}
              width={18}
              height={18}
              className=" "
              alt="phone"/>
            </div>
            <div className="  text-custom-500 md:text-xs lg:text-sm xl:text-base">
              Phone : +1-543-123-4567
            </div>
          </div>
          <div className=" flex flex-row space-x-3">
            <div className="">
              <Image
              src={"/images/icon-email.svg"}
              width={18}
              height={18}
              className=" "
              alt="email"/>
            </div>
            <div className=" text-custom-500 md:text-xs lg:text-sm xl:text-base">
              example@huddle.com
            </div>
          </div>
          <div className=" flex flex-row space-x-3">
            <Link href={"/"}>
              <FaFacebookSquare  className=" text-white hover:text-blue-400 w-6 h-6"/>
            </Link>
            <Link href={"/"}>
              <FaInstagram className=" text-white hover:text-blue-400 w-6 h-6"/>
            </Link>
            <Link href={"/"}>
              <FaSquareXTwitter className=" text-white hover:text-blue-400 w-6 h-6"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  )}
   