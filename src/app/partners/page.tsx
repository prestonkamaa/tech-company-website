import ButtonOutline from "../Components/Buttons/ButtonOutline";
import PartnersCard from "../Components/Cards/PartnersCard"; 
import PartnersLogo from "../Components/Cards/PartnersLogo";
import MenuBar from "../Components/MenuBar";
import TransferYourEnterprise from "../Components/TransferYourEnterprise";
import { BsFillRecordCircleFill } from "react-icons/bs";


export default function Partners() {
  return (
    <>
        <div className=" relative lg:h-[32rem] h-[20rem] text-white bg-[url('/assets/img/header/bg.jpg')] bg-cover bg-center">
            <div className=" absolute bg-primary/80 bottom-0 left-0 right-0 top-0 h-full w-full ">
                <MenuBar />
                <div className=" lg:px-52 lg:pt-12 px-5 items-center">
                    <p className=" my-5 font-medium">Home / Partners</p>
                    <p className=" font-medium lg:text-5xl text-3xl lg:leading-snug lg:w-[40rem] ">                   
                        Working with our partners to
                        bring digital innovations to your
                        business
                    </p>
                </div>                
            </div> 
        </div>  

        <div className=" relative bg-black lg:px-24 lg:py-16 p-5 ">
            <BsFillRecordCircleFill className=" lg:w-36 lg:h-36 w-20 h-20 text-primary/10 absolute lg:top-5 lg:left-10 top-3 left-2"/>
            <p className=" font-bold text-white text-4xl py-5">
                Most important partners
            </p>
            <p className=" text-white pb-5">
                We have formed alliances with leading and technoloy partners 
                to provide you with innovative solutiions to the comple problems faced 
                by your business.
            </p>

            <div className=" grid lg:grid-cols-4 grid-cols-1 gap-x-7 lg:space-x-0 space-y-5">
                <PartnersCard 
                    image={"/assets/img/logo.png"} 
                    title="Level of Partnership"
                    writeup="Mp's who are leading the production of parliament for the campaign that will render the election significantly more"
                    btnName="READ MORE"
                />
                <PartnersCard 
                    image={"/assets/img/logo.png"} 
                    title="Level of Partnership"
                    writeup="Mp's who are leading the production of parliament for the campaign that will render the election significantly more"
                    btnName="READ MORE"
                />
                <PartnersCard 
                    image={"/assets/img/logo.png"} 
                    title="Level of Partnership"
                    writeup="Mp's who are leading the production of parliament for the campaign that will render the election significantly more"
                    btnName="READ MORE"
                />
                <PartnersCard 
                    image={"/assets/img/logo.png"} 
                    title="Level of Partnership"
                    writeup="Mp's who are leading the production of parliament for the campaign that will render the election significantly more"
                    btnName="READ MORE"
                />
            </div>





        </div>

        <div className=" relative bg-gray-50 lg:px-24 lg:py-16 p-5">
            <BsFillRecordCircleFill className=" lg:w-36 lg:h-36 w-20 h-20 text-primary/10 absolute lg:top-5 lg:left-10 top-3 left-2"/>
            <p className=" font-bold text-primary text-4xl">
                Other Partners
            </p>
            <p className=" text-secondary lg:w-[920px] my-6 ">
                Since our fundation, client centricity has always been part of our mission to become a heading sector specialist for the international 
                technology industry became a leading sector specialist for the international technology industry.
            </p>

            <div className=" grid lg:grid-cols-4 grid-cols-1 gap-x-7 lg:space-x-0 space-y-5 ">
                <PartnersLogo
                    image="/assets/img/footerlogo.png"
                    name="Level of Partnership"
                />
                <PartnersLogo
                    image="/assets/img/footerlogo.png"
                    name="Level of Partnership"
                />
                <PartnersLogo
                    image="/assets/img/footerlogo.png"
                    name="Level of Partnership"
                />
                <PartnersLogo
                    image="/assets/img/footerlogo.png"
                    name="Level of Partnership"
                />
            </div>




        </div>

        <TransferYourEnterprise /> 


    </>
  )
}
