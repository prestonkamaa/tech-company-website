"use client";
import { BsFillRecordCircleFill } from "react-icons/bs";
import ButtonOutline from "@/app/Components/Buttons/ButtonOutline";
import ClientsCard from "@/app/Components/Cards/ClientsCard"; 
import MenuBar from "@/app/Components/MenuBar";
import Image from "next/image"; 
import TestimonialCarousel from "@/app/Components/Carousel/TestimonialCarousel";

export default function PartnersDetails() {
  return (
    <>
        <div className=" bg-primary h-[32rem] text-white">
            <MenuBar />  
            <div className=" px-52 pt-12 items-center">
                <p className=" my-5 font-medium">Home / Clients / something</p>
                <div className=" flex justify-between mt-16">
                    <Image
                        src={"/assets/img/footerlogo.png"}
                        alt=""
                        height={39}
                        width={120}
                    />
                    <p className=" font-medium text-5xl w-[45rem] ">                   
                        Driving innovation and digital 
                        transformation
                    </p>                    
                </div>

            </div>
  

        </div> 

        <div className=" bg-black px-52 pt-20 pb-16 relative">
            <BsFillRecordCircleFill className=" w-36 h-36 text-primary/10 absolute top-5 left-36"/>
            <p className=" font-bold text-primary text-5xl pt-5">
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


        <div className=" bg-gray-50 px-52 py-16 relative">
            <BsFillRecordCircleFill className=" w-36 h-36 text-primary/10 absolute top-5 left-36"/>
            <p className=" font-bold text-primary text-5xl">
                Taitanuim Partnership
            </p>
            <p className=" text-secondary my-6 ">
                Since our fundation, client centricity has always been part of our mission to become a heading sector specialist for the international 
                technology industry became a leading sector specialist for the international technology industry.
            </p>

            <div className=" flex gap-7 justify-center ">
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


        <div className=" bg-gray-100 px-52 py-16 relative">
            <BsFillRecordCircleFill className=" w-36 h-36 text-primary/10 absolute top-5 left-36"/>
            <p className=" font-bold text-primary text-5xl">
                Testimonial
            </p>
            <p className=" text-secondary my-6 ">
                See your international technology industries say about us.
            </p>


            <div className=" ">
                <TestimonialCarousel />
            </div>







            



        </div>

        <div className="px-40 py-20 bg-primary">
            <div className="  flex justify-between items-center ">
                <div className="">
                    <p className=" text-white block font-bold text-4xl">
                        Transfer Your Enterprise
                    </p> 
                    <p className="text-white">  
                        Talk to an expert about how Globe Glow Group meet your business needs. 
                    </p> 
            
                </div>
                <ButtonOutline name="Talk With Us"  btnColor="white" />  
            </div>                   
        </div> 


    </>
  )
}