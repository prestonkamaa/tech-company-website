"use client";
import { BsFillRecordCircleFill } from "react-icons/bs";
import ButtonOutline from "@/app/Components/Buttons/ButtonOutline";
import ClientsCard from "@/app/Components/Cards/ClientsCard"; 
import MenuBar from "@/app/Components/MenuBar";
import Image from "next/image"; 
import TestimonialCarousel from "@/app/Components/Carousel/TestimonialCarousel";
import TransferYourEnterprise from "@/app/Components/TransferYourEnterprise";

export default function PartnersDetails() {
  return (
    <>
        <div className=" relative lg:h-[32rem] h-[20rem] text-white bg-[url('/assets/img/header/bg.jpg')] bg-cover bg-center">
            <div className=" absolute bg-primary/80 bottom-0 left-0 right-0 top-0 h-full w-full ">
                <MenuBar />  
                <div className=" lg:px-52 lg:pt-12 px-5 items-center">
                    <p className=" my-5 font-medium">Home / Partners / Partners Details</p>
                    <div className=" flex lg:flex-row flex-col lg:justify-between lg:mt-16 ">
                        <Image
                            src={"/assets/img/footerlogo.png"}
                            alt=""
                            height={39}
                            width={120}
                        />
                        <p className=" font-medium lg:text-5xl text-3xl lg:leading-snug lg:w-[40rem] lg:pt-0 pt-3 ">                   
                            Driving innovation and digital 
                            transformation
                        </p>                    
                    </div>

                </div>
            </div> 
        </div> 

        <div className=" bg-black lg:px-52 lg:pt-20 lg:pb-16 p-5 relative">
            <BsFillRecordCircleFill className=" lg:w-36 lg:h-36 w-20 h-20 text-primary/10 absolute lg:top-5 lg:left-10 top-3 left-2"/>
            <p className=" font-bold text-primary text-4xl lg:pt-5">
                Story
            </p>
            <div className=" text-primary/60 mt-6 space-y-2">
                <p>
                Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
                need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code 
                until yesterday. Make it pop remember, the entirety is equal or better. We must build a queue system to ensure it 
                gets the data from our API so this will result in a delay. How does this indicator should look? Also please  
                answer to question from the next mail. Kind reminder. Please inform us where we are on this. After the release, 
                we will need to test it individually. This was the last time when you are allowed to promote something urgent 
                in the production when you was asked for. 
                </p>

                <p> 
                Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
                need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code 
                until yesterday. Make it pop remember, the entirety is equal or better. 
                </p>  
                <p> 
                Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
                need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code 
                until yesterday. Make it pop remember, the entirety is equal or better. 
                </p>  
                <p> 
                Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
                need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code 
                until yesterday. Make it pop remember, the entirety is equal or better. 
                </p>  
                <p> 
                Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
                need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code 
                until yesterday. Make it pop remember, the entirety is equal or better. 
                </p>  
                
            </div>


        </div>


        <div className=" bg-gray-50 lg:px-52 lg:pt-20 lg:pb-16 p-5 relative">
            <BsFillRecordCircleFill className=" lg:w-36 lg:h-36 w-20 h-20 text-primary/10 absolute lg:top-5 lg:left-10 top-3 left-2"/>
            <p className=" font-bold text-primary text-4xl">
                Taitanuim Partnership
            </p>
            <p className=" text-secondary my-6 ">
                Since our fundation, client centricity has always been part of our mission to become a heading sector specialist for the international 
                technology industry became a leading sector specialist for the international technology industry.
            </p>

            <div className=" grid lg:grid-cols-3 grid-cols-1 justify-center lg:gap-7 lg:space-y-0 space-y-5 ">
                <Image
                    src={"/assets/img/6.jpg"}
                    alt=""
                    width={300}
                    height={250}
                />
                <Image
                    src={"/assets/img/6.jpg"}
                    alt=""
                    width={300}
                    height={250}
                />
                <Image
                    src={"/assets/img/6.jpg"}
                    alt=""
                    width={300}
                    height={250}
                />


 
            </div>




        </div>


        <div className=" bg-gray-100 lg:px-52 lg:pt-20 lg:pb-16 p-5 relative">
            <BsFillRecordCircleFill className=" lg:w-36 lg:h-36 w-20 h-20 text-primary/10 absolute lg:top-5 lg:left-10 top-3 left-2"/>
            <p className=" font-bold text-primary text-4xl">
                Testimonial
            </p>
            <p className=" text-secondary my-6 ">
                See your international technology industries say about us.
            </p>

            <div className=" ">
                <TestimonialCarousel />
            </div> 

        </div>

        <TransferYourEnterprise />


    </>
  )
}
