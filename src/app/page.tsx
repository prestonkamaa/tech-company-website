// "use client";
// import { useEffect } from "react";


import React from "react"
import MenuBar from "./Components/MenuBar"
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import ProductsServices from "./Components/Cards/ProductsServices";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import ButtonOutline from "./Components/Buttons/ButtonOutline"; 
import BlogPost from "./Components/Cards/BlogPost"; 
import TransferYourEnterprise from "./Components/TransferYourEnterprise";


export default function HomePage() {

  

  return (

    <>    

    <div className=" h-screen relative bg-[url('assets/img/header/bg.jpg')] bg-cover bg-center" >
      <div className="  absolute bg-primary/90 bottom-0 left-0 right-0 top-0 h-full w-full ">
        <MenuBar />

        <p className=" text-6xl text-white font-bold px-24 mt-32">
          One of Kenya&rsquo;s<br/>
          fatest growing<br/>
          IT companies
        </p>


        <div className=" flex absolute bg-gray-800 items-center bottom-0">
          <div className="font-semibold text-white pr-3 pl-24">
            Find out what we can do together
          </div>
          <div className=" bg-black p-5">
            <HiOutlineArrowNarrowDown className=" text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </div>


    <div className="px-40 pt-16 pb-16 relative bg-gray-50">

      <p className=" text-darksecondary text-sm -rotate-90 absolute top-24 left-16">
        BY WORKLOAD
      </p>

      <p className=" text-primary font-bold text-4xl">
        Products & Services
      </p>

      <p className=" text-secondary">
        Our Diversification products & srrvices can help your business thrive in the digital world
      </p>




    <div className="flex pt-10">
      <div className="border-r border-gray-200 dark:border-gray-700">
        <nav className="flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
          <button type="button" className="hs-tab-active:border-red-500 hs-tab-active:text-red-600 dark:hs-tab-active:text-red-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-red-600 active" id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
            Cloud Services
          </button>
          <button type="button" className="hs-tab-active:border-red-500 hs-tab-active:text-red-600 dark:hs-tab-active:text-red-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-red-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-2" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
            Security
          </button>
          <button type="button" className="hs-tab-active:border-red-500 hs-tab-active:text-red-600 dark:hs-tab-active:text-red-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-red-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
            Teamwork
          </button>
          <button type="button" className="hs-tab-active:border-red-500 hs-tab-active:text-red-600 dark:hs-tab-active:text-red-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-red-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-4" data-hs-tab="#vertical-tab-with-border-4" aria-controls="vertical-tab-with-border-4" role="tab">
            Artificial Inteligence
          </button>
        </nav>
      </div>

      <div className="ml-3">
        <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
          
          <div className=" grid grid-cols-3 gap-7 p-5">

          <ProductsServices 
            image={"/assets/img/footerlogo.png"} 
            title={"Data Analytics & Artificial Intelligence"}
            writeup={"GBG can understand your requirements, attend to your needs."}
            btnName={"Know more"}

          />
          <ProductsServices 
            image={"/assets/img/footerlogo.png"} 
            title={"Data Analytics & Artificial Intelligence"}
            writeup={"GBG can understand your requirements, attend to your needs."}
            btnName={"Know more"}

          />
          <ProductsServices 
            image={"/assets/img/footerlogo.png"} 
            title={"Data Analytics & Artificial Intelligence"}
            writeup={"GBG can understand your requirements, attend to your needs."}
            btnName={"Know more"}

          />
          <ProductsServices 
            image={"/assets/img/footerlogo.png"} 
            title={"Data Analytics & Artificial Intelligence"}
            writeup={"GBG can understand your requirements, attend to your needs."}
            btnName={"Know more"}

          />
          <ProductsServices 
            image={"/assets/img/footerlogo.png"} 
            title={"Data Analytics & Artificial Intelligence"}
            writeup={"GBG can understand your requirements, attend to your needs."}
            btnName={"Know more"}

          />
          <ProductsServices 
            image={"/assets/img/footerlogo.png"} 
            title={"Data Analytics & Artificial Intelligence"}
            writeup={"GBG can understand your requirements, attend to your needs."}
            btnName={"Know more"}

          /> 
          </div>

          

        </div>
        <div id="vertical-tab-with-border-2" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
          <p className="text-gray-500 dark:text-gray-400">
            This is the <em className="font-semibold text-gray-800 dark:text-gray-200">second</em> items tab body.
          </p>
        </div>
        <div id="vertical-tab-with-border-3" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
          <p className="text-gray-500 dark:text-gray-400">
            This is the <em className="font-semibold text-gray-800 dark:text-gray-200">third</em> items tab body.
          </p>
        </div>
        <div id="vertical-tab-with-border-4" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-4">
          <p className="text-gray-500 dark:text-gray-400">
            This is the <em className="font-semibold text-gray-800 dark:text-gray-200">Fourth</em> items tab body.
          </p>
        </div>
      </div>
    </div> 
 
    </div>








    <div className="px-40 pt-16 pb-16 relative">

      <p className=" text-darksecondary text-sm -rotate-90 absolute top-24 left-16">
        BY BUSINESS NEEDS
      </p>

      <div className=" flex items-center gap-24">
        <p className=" text-primary block font-bold text-4xl">
          Our Solutions <br/>
          <span className=" text-darksecondary">for your business</span>
        </p>

        <p className=" text-secondary w-[452px]">
          solutions support the demand of your business, website, or 
          application. Use the same solutions that empower.
        </p>        
      </div>



 
 
      <div className="border-b border-gray-200 dark:border-gray-700 pt-8">
  <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
    <button type="button" className=" flex-col hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
        <Image
          src={"/assets/img/footerlogo.png"} 
          alt={""} 
          width={"50"}
          height={"50"}
          
        />
        Finance
    </button>
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600" id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
      Tab 2
    </button>
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
      Tab 3
    </button>
  </nav>
</div>

<div className="mt-3">
  <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
    
    <div>
      <div className=" flex items-center pt-5">
        <div className=" w-1/4">
          <Image
            src={"/assets/img/6.jpg"}
            alt=""
            width={220}
            height={220}
          />
        </div>
        <div className=" text-secondary w-3/4">
          <p>
            KenTech Companies are disrupting traditional players thanks to the adoption of technology. GBG 
            provides highly available and cost-effective cloud services, allowing FinTech companies to more 
            efficiently manage their systems and focus on their core business operations.        
          </p>  

          <div className=" grid grid-cols-3 mt-5">
            <div className=" space-y-3">
              <p className=" flex items-center hover:text-primary">Credit Risk Managment <MdOutlineArrowRightAlt /></p>
              <p className=" flex items-center hover:text-primary">Backup and Archives <MdOutlineArrowRightAlt /> </p>
              <p className=" flex items-center hover:text-primary">Cloud migration <MdOutlineArrowRightAlt /></p>
            </div>

            <div className=" space-y-3">
              <p className=" flex items-center hover:text-primary">Blockchain Finance <MdOutlineArrowRightAlt /></p>
              <p className=" flex items-center hover:text-primary">End-To-End Security <MdOutlineArrowRightAlt /> </p>
              <p className=" flex items-center hover:text-primary">Inteligent Robot <MdOutlineArrowRightAlt /></p>
            </div>

            <div className=" space-y-3">
              <p className=" flex items-center hover:text-primary">Credit Risk Managment <MdOutlineArrowRightAlt /></p>
              <p className=" flex items-center hover:text-primary">Backup and Archives <MdOutlineArrowRightAlt /> </p>
              <p className=" flex items-center hover:text-primary">Cloud migration <MdOutlineArrowRightAlt /></p>
            </div>

          </div>      
        </div>        
      </div>



    </div>
    
  </div>
  <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
    <p className="text-gray-500 dark:text-gray-400">
      This is the <em className="font-semibold text-gray-800 dark:text-gray-200">second</em> items tab body.
    </p>
  </div>
  <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
    <p className="text-gray-500 dark:text-gray-400">
      This is the <em className="font-semibold text-gray-800 dark:text-gray-200">third</em> items tab body.
    </p>
  </div>
</div>









    </div>




      <div className=" relative h-96 bg-[url('/assets/img/header/bg.jpg')] bg-cover bg-center">

        <div className=" absolute px-40 py-16  bg-black/80 bottom-0 left-0 right-0 top-0 h-full w-full "> 

          <p className=" text-white text-sm -rotate-90 absolute top-24 left-16">
            OUR ACHIVEMENTS
          </p>

          <div className=" flex items-center gap-24">
            <p className=" text-white block font-bold text-4xl">
              Our Solutions <br/>
              for your business 
            </p>

            <p className=" w-[452px] text-secondary">
              solutions support the demand of your business, website, or 
              application. Use the same solutions that empower.
            </p>        
          </div>

          <div className=" grid grid-cols-4 pt-8">
            <div>
              <p className=" text-primary font-bold text-6xl">+500</p>
              <p className=" text-white my-2">Clients</p>
              <p className=" text-secondary">Won many awards for our works works</p>
            </div>
            <div>
              <p className=" text-primary font-bold text-6xl">+10K</p>
              <p className=" text-white my-2">Projects</p>
              <p className=" text-secondary">Won many awards for our works works</p>
            </div>
            <div>
              <p className=" text-primary font-bold text-6xl">50</p>
              <p className=" text-white my-2">Awards</p>
              <p className=" text-secondary">Won many awards for our works works</p>
            </div>
            <div>
              <p className=" text-primary font-bold text-6xl">50$</p>
              <p className=" text-white my-2">Revenue</p>
              <p className=" text-secondary">Won many awards for our works works</p>
            </div> 
          </div> 

        </div>

      </div>
      







    <div className="px-40 py-16 relative bg-gray-50">

      <div className=" pt-5 ">

        <div className=" flex-col items-center bg-white p-12 gap-24">
          <p className=" text-primary block font-bold text-4xl  w-[380px]">
            We&lsquo;re empowering
            the next generation of 
            Technology.
          </p>

          <p className=" w-[452px] text-secondary my-6">
            
            GBS was founded by software engineers, roboticist and products 
            managers from leading technology compnies.
          </p>    

          <div className=" grid grid-cols-4 mb-8">
              <Image
                src={"/assets/img/footerlogo.png"}
                alt={""}
                width={"295"}
                height={"95"}
                className=" border p-5"
              />
              <Image
                src={"/assets/img/footerlogo.png"}
                alt={""}
                width={"295"}
                height={"95"}
                className=" border p-5"
              />
              <Image
                src={"/assets/img/footerlogo.png"}
                alt={""}
                width={"295"}
                height={"95"}
                className=" border p-5"
              />
              <Image
                src={"/assets/img/footerlogo.png"}
                alt={""}
                width={"295"}
                height={"95"}
                className=" border p-5"
              />
              <Image
                src={"/assets/img/footerlogo.png"}
                alt={""}
                width={"295"}
                height={"95"}
                className=" border p-5"
              />
              <Image
                src={"/assets/img/footerlogo.png"}
                alt={""}
                width={"295"}
                height={"95"}
                className=" border p-5"
              />
              <Image
                src={"/assets/img/footerlogo.png"}
                alt={""}
                width={"295"}
                height={"95"}
                className=" border p-5"
              />
              <Image
                src={"/assets/img/footerlogo.png"}
                alt={""}
                width={"295"}
                height={"95"}
                className=" border p-5"
              />
          </div> 

          <ButtonOutline name=" View Customer Stories" btnColor="red" />

        </div>

        <div className=" mt-10">
          <div>
            <p className=" text-primary block font-bold text-4xl">
                Recent Update
            </p> 

            <div className=" flex justify-between my-5">
              <p className="text-secondary mt-auto">  
                  Our Diversification products & services can help your business trive in the digital world.
              </p> 
              <div className=" flex gap-4">
                <ButtonOutline name="Previous"  btnColor="gray" /> 
                <ButtonOutline name="Next" btnColor="red" />
              </div>            
            </div>
          
          </div>

          <div className=" flex mt-6 gap-7">
            <BlogPost
                image={"/assets/img/6.jpg"} 
                blogTag={"In Media"}
                title={"Data Analytics & Artificial Intelligence"}
                writeup={"GBG can understand your requirements, attend to your needs."}
                btnName={"Know more"}        
            />
            <BlogPost
                image={"/assets/img/6.jpg"} 
                blogTag={"Press Release"}
                title={"Data Analytics & Artificial Intelligence"}
                writeup={"GBG can understand your requirements, attend to your needs."}
                btnName={"Know more"}        
            />
            <BlogPost
                image={"/assets/img/6.jpg"} 
                blogTag={"Press Release"}
                title={"Data Analytics & Artificial Intelligence"}
                writeup={"GBG can understand your requirements, attend to your needs."}
                btnName={"Know more"}        
            />
            <BlogPost
                image={"/assets/img/6.jpg"} 
                blogTag={"Press Release"}
                title={"Data Analytics & Artificial Intelligence"}
                writeup={"GBG can understand your requirements, attend to your needs."}
                btnName={"Know more"}        
            />


          </div>
        
        </div>

      </div>

    </div>


    <TransferYourEnterprise />
      





    </>


  )
}
