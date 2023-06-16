import ClientScroll from "../Components/Cards/ClientScroll"; 
import MenuBar from "../Components/MenuBar"; 
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";
import { BsFillRecordCircleFill } from "react-icons/bs";
import AllClientsGroups from "../Components/Cards/AllClientsGroups";
import TransferYourEnterprise from "../Components/TransferYourEnterprise";


export default function AllClients() {
  return (
    <>
        <div className=" relative lg:h-[32rem] h-[20rem] text-white bg-[url('/assets/img/header/bg.jpg')] bg-cover bg-center">
            <div className=" absolute bg-primary/80 bottom-0 left-0 right-0 top-0 h-full w-full ">
                <MenuBar />
                <div className=" lg:px-52 px-5 lg:pt-12 items-center">
                    <p className=" my-5 font-medium">Home / All Clients</p> 
                    <p className=" font-medium lg:text-5xl text-3xl lg:leading-snug lg:w-[40rem] ">                   
                        Valued and trusted by the
                        world&lsquo;s leading technology 
                        institutions.
                    </p> 
                </div>
            </div>
 
        </div> 
 
        <div className=" bg-black lg:py-16">
            <div className=" flex lg:flex-row flex-col lg:px-52 p-5 pb-6 lg:items-center lg:justify-between">
                <div className=" flex-col">
                    <p className=" font-bold text-white text-4xl">
                        Clinet is the core of our mission
                    </p>
                    <p className=" text-secondary lg:w-[620px] lg:my-6 my-3">
                    Since our fundation, client centricity has always been part of our
                    mission to become a heading sector specialist insustry.
                    </p>
                </div>

                <div className=" flex gap-x-2">
                    <div className=" flex w-10 h-10 bg-secondary items-center justify-center text-white">
                        <FaChevronLeft />
                    </div>
                    <div className=" flex w-10 h-10 bg-primary items-center justify-center text-white">
                        <FaChevronRight />
                    </div>
                </div>

            </div>


            <div className=" flex lg:flex-row flex-col lg:px-0 px-5 lg:gap-x-7 lg:space-y-0 space-y-5 ">
                                  
                <ClientScroll
                image={"/assets/img/footerlogo.png"} 
                title="Gemeral Motors"
                writeup="Automotive"
                btnName="READ MORE"                 
                />
                <ClientScroll
                image={"/assets/img/footerlogo.png"} 
                title="Gemeral Motors"
                writeup="Automotive"
                btnName="READ MORE"                 
                />
                <ClientScroll
                image={"/assets/img/footerlogo.png"} 
                title="Gemeral Motors"
                writeup="Automotive"
                btnName="READ MORE"                 
                />
                <ClientScroll
                image={"/assets/img/footerlogo.png"} 
                title="Gemeral Motors"
                writeup="Automotive"
                btnName="READ MORE"                 
                />
                <ClientScroll
                image={"/assets/img/footerlogo.png"} 
                title="Gemeral Motors"
                writeup="Automotive"
                btnName="READ MORE"                 
                />

                
                 
            </div>

        </div>

        <div className=" bg-gray-100 lg:px-24 lg:py-16 p-5 relative">
            <BsFillRecordCircleFill className=" lg:w-36 lg:h-36 w-20 h-20 text-primary/10 absolute lg:top-5 lg:left-10 top-3 left-2"/>
            <p className=" font-bold text-primary text-4xl">
                All Clients
            </p>
 
            <div className="flex lg:pt-16 pt-8 lg:mx-20">
                <div className="border-r border-gray-200 dark:border-gray-700">
                    <nav className="flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
                    <button type="button" className="hs-tab-active:border-red-500 hs-tab-active:text-red-600 dark:hs-tab-active:text-red-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-red-600 active" id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
                        Automotive
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
                    
                    <div className=" px-5"> 

                        <p className=" font-bold text-primary text-2xl">
                            Automotive
                        </p>
                        <p className="  text-secondary mt-2 mb-4 ">
                            Its urgent, but we dont have time in the next two years to test it, but we must prioritize it. At least we dont 
                            need to obfuscate it. You must rethink the whole process. 
                        </p> 

                        <div className=" grid lg:grid-cols-4 grid-cols-1 lg:gap-7 gap-5"> 
                            <AllClientsGroups 
                                image={"/assets/img/footerlogo.png"} 
                                title={"General Motors"} 
                            />
                            <AllClientsGroups 
                                image={"/assets/img/footerlogo.png"} 
                                title={"Data Analytics"} 
                            />
                            <AllClientsGroups 
                                image={"/assets/img/footerlogo.png"} 
                                title={"Artificial Intelligence"} 
                            /> 
                            <AllClientsGroups 
                                image={"/assets/img/footerlogo.png"} 
                                title={"General Motors"} 
                            />
                            <AllClientsGroups 
                                image={"/assets/img/footerlogo.png"} 
                                title={"Data Analytics"} 
                            />
                            <AllClientsGroups 
                                image={"/assets/img/footerlogo.png"} 
                                title={"Artificial Intelligence"} 
                            />
                            <AllClientsGroups 
                                image={"/assets/img/footerlogo.png"} 
                                title={"General Motors"} 
                            /> 
 
                        </div>

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

        <TransferYourEnterprise />


    </>
  )
}
