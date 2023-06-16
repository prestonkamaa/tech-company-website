"use client"; 
import { BsFillRecordCircleFill } from "react-icons/bs"; 
import ClientsCard from "@/app/Components/Cards/ClientsCard"; 
import MenuBar from "@/app/Components/MenuBar";
import Image from "next/image"; 
import TestimonialCarousel from "@/app/Components/Carousel/TestimonialCarousel";  
import TransferYourEnterprise from "@/app/Components/TransferYourEnterprise";

export default function ClientsDetails() {
  return (
    <>
        <div className=" relative lg:h-[32rem] h-[20rem] text-white bg-[url('/assets/img/header/bg.jpg')] bg-cover bg-center">
            <div className=" absolute bg-primary/80 bottom-0 left-0 right-0 top-0 h-full w-full ">            
                <MenuBar />   
                <div className=" lg:px-52 lg:pt-12 p-5 items-center">
                    <p className=" my-5 font-medium">Home / Clients / Clients Details</p> 
                </div>

                <div className=" lg:ml-52 absolute bottom-0">               
                    <div className=" lg:mb-5 ">
                        <p className=" lg:ml-44 ml-28 font-medium lg:text-5xl text-xl">
                            Oriantal Wavers       
                        </p>
                        <p className=" lg:ml-44 ml-28 lg:pt-2 ">Manufacturing</p>                    
                    </div>
                    
                </div>

                <div className=" absolute lg:ml-52 ml-5 lg:-bottom-10 -bottom-5 lg:w-36 lg:h-36 w-20 h-20 bg-white rounded-lg">               

                    <Image
                        src={"/assets/img/footerlogo.png"}
                        alt=""
                        width={50}
                        height={50}
                        className=" mx-auto my-auto"
                    />

                </div>

            </div>
        </div> 

        <div className=" relative bg-black lg:px-52 lg:pt-20 lg:pb-16 p-5 -z-50">
            <BsFillRecordCircleFill className=" lg:w-36 lg:h-36 w-20 h-20 text-primary/10 absolute lg:top-5 lg:left-10 top-3 left-2"/>
            <p className=" font-bold text-primary text-4xl pt-5">
                Success Story
            </p>
            <p className=" text-primary/60 mt-6">
            Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
            need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code 
            until yesterday. Make it pop remember, the entirety is equal or better. We must build a queue system to ensure it 
            gets the data from our API so this will result in a delay. How does this indicator should look? Also please  
            answer to question from the next mail. Kind reminder. Please inform us where we are on this. After the release, 
            we will need to test it individually. This was the last time when you are allowed to promote something urgent 
            in the production when you was asked for.
            </p>

            <div className=" pt-8 grid lg:grid-cols-6 grid-cols-1 gap-y-10 lg:space-y-0 space-y-3 text-primary"> 
                <p className=" font-bold text-lg" >CHALLANGE</p>
                <p className=" col-span-5">
                Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
                need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code 
                until yesterday. Make it pop remember, the entirety is equal or better.                    
                </p>

                <p className=" font-bold text-lg" >SOLUTION</p>
                <p className=" col-span-5">
                Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
                need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code 
                until yesterday. Make it pop remember, the entirety is equal or better.                    
                </p>

                <p className=" font-bold text-lg" >RESULT</p>
                <p className=" col-span-5">
                Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
                need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code 
                until yesterday. Make it pop remember, the entirety is equal or better.                    
                </p>

                <p className=" font-bold text-lg" >PROJECTS</p>
                <p className=" col-span-5">
                Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
                need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code 
                until yesterday. Make it pop remember, the entirety is equal or better.                    
                </p>
            </div>
 

        </div>


        <div className=" bg-gray-100 lg:px-24 lg:py-16 p-5 relative">
            <BsFillRecordCircleFill className=" lg:w-36 lg:h-36 w-20 h-20 text-primary/10 absolute lg:top-5 lg:left-10 top-3 left-2"/>
            <p className=" font-bold text-primary text-4xl">
                Technology Used
            </p>
            <p className=" text-secondary my-6 ">
                Since our fundation, client centricity has always been part of our mission to become a heading sector specialist for the international 
                technology industry became a leading sector specialist for the international technology industry.
            </p>

            <div className=" grid lg:grid-cols-3 grid-cols-1 gap-x-7 lg:space-y-0 space-y-5 ">

                <ClientsCard  
                    title="Whiteboard web-enabled e-tailers"
                    writeup="Mp's who are leading the production of parliament for the campaign that will render the election significantly more"
                    btnName="READ MORE"
                
                />
                <ClientsCard  
                    title="Whiteboard web-enabled e-tailers"
                    writeup="Mp's who are leading the production of parliament for the campaign that will render the election significantly more"
                    btnName="READ MORE"
                
                /> 
                <ClientsCard  
                    title="Whiteboard web-enabled e-tailers"
                    writeup="Mp's who are leading the production of parliament for the campaign that will render the election significantly more"
                    btnName="READ MORE"
                
                /> 


 
            </div>




        </div>


        <div className=" bg-gray-100 lg:px-52 lg:py-16 p-5 relative">
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














            {/* <div className="bg-gray-200 min-h-screen">
                <div className="max-w-6xl mx-auto px-8 py-16">
                    <div className="relative">
                    <div className="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
                        <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                        <img className="absolute h-full w-full object-cover" src="https://stripe.com/img/v3/payments/overview/photos/slack.jpg" alt="" />
                        <div className="absolute inset-0 bg-indigo-900 opacity-75"></div>
                        <svg className="relative" width="200" height="120" viewBox="0 0 200 120">
                        <path fill="#fff" fill-rule="evenodd" d="M63.75 75.24l2.5-5.93c2.7 2.05 6.3 3.13 9.85 3.13 2.61 0 4.27-1.03 4.27-2.6-.04-4.37-15.7-.95-15.82-11.9-.04-5.58 4.8-9.86 11.66-9.86 4.08 0 8.16 1.03 11.06 3.38l-2.34 6.05c-2.66-1.73-5.97-2.97-9.12-2.97-2.13 0-3.55 1.03-3.55 2.36.04 4.28 15.82 1.94 15.98 12.4 0 5.7-4.72 9.69-11.5 9.69-4.96 0-9.52-1.2-12.99-3.75zm96.01-8.08a7.16 7.16 0 0 1-8.11 3.5 7.35 7.35 0 0 1-5.38-7.13c0-3.34 2.2-6.27 5.38-7.12 3.16-.85 6.5.58 8.11 3.5l6.9-3.93a15.02 15.02 0 0 0-17.03-7.42 15.42 15.42 0 0 0-11.33 14.97c0 7.04 4.66 13.2 11.33 14.97a15.02 15.02 0 0 0 17.04-7.43l-6.9-3.9zM91.71 35.25h8.64v43.16h-8.64V35.25zm78.34 0v43.16h8.65V65.48l10.25 12.93H200l-13.03-15.37 12.06-14.34h-10.58l-9.76 11.9V35.25h-8.64zm-43.82 31.1a8.14 8.14 0 0 1-6.83 3.56 7.24 7.24 0 0 1-7.33-7.16 7.24 7.24 0 0 1 7.33-7.15 8.1 8.1 0 0 1 6.83 3.67v7.08zm0-18v3.4c-1.43-2.36-5-4-8.72-4-7.7 0-13.76 6.64-13.76 14.96 0 8.33 6.07 15.04 13.76 15.04 3.73 0 7.3-1.63 8.72-4v3.4H135v-28.8h-8.77zM10.53 66.4A5.32 5.32 0 0 1 5.3 71.8 5.32 5.32 0 0 1 .04 66.4a5.32 5.32 0 0 1 5.25-5.38h5.25v5.38zm2.63 0a5.32 5.32 0 0 1 5.25-5.38c2.9 0 5.25 2.4 5.25 5.38v13.46a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39V66.4zm5.26-21.63a5.32 5.32 0 0 1-5.25-5.38A5.32 5.32 0 0 1 18.42 34c2.9 0 5.25 2.41 5.25 5.39v5.38h-5.25zm0 2.74c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38H5.25A5.32 5.32 0 0 1 0 52.9a5.32 5.32 0 0 1 5.25-5.39h13.17zm21.03 5.39a5.32 5.32 0 0 1 5.25-5.39c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38h-5.25V52.9zm-2.62 0a5.32 5.32 0 0 1-5.25 5.38 5.32 5.32 0 0 1-5.25-5.38V39.39A5.32 5.32 0 0 1 31.58 34c2.9 0 5.25 2.41 5.25 5.39v13.5zm-5.25 21.58c2.9 0 5.25 2.41 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39v-5.38h5.25zm0-2.7a5.32 5.32 0 0 1-5.25-5.38 5.32 5.32 0 0 1 5.25-5.38h13.17c2.9 0 5.25 2.4 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39H31.58z"/>
                        </svg>
                        </div>
                        <div className="relative lg:w-7/12 bg-white">
                        <svg className="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100"/>
                        </svg>
                        <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                            <p>
                            As <strong className="text-gray-900 font-medium">Slack</strong> grows rapidly, using Stripe helps them scale payments easily &mdash; supporting everything from getting paid by users around the world to enabling ACH payments for corporate customers.
                            </p>
                            <p className="mt-6">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-900">Learn more about our users &rarr;</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 left-0 lg:flex lg:items-center">
                        <button className="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
                        <svg className="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/>
                        </svg>
                    </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 lg:flex lg:items-center">
                        <button className="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
                        <svg className="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"/>
                        </svg>
                    </button>
                    </div>
                    </div>
                </div>
            </div> */}





           
            



        </div>

        <TransferYourEnterprise /> 


    </>
  )
}
