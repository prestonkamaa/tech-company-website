import ButtonOutline from "../Components/Buttons/ButtonOutline";
import PartnersCard from "../Components/Cards/PartnersCard"; 
import PartnersLogo from "../Components/Cards/PartnersLogo";
import MenuBar from "../Components/MenuBar";
import TransferYourEnterprise from "../Components/TransferYourEnterprise";


export default function Partners() {
  return (
    <>
        <div className=" relative h-[32rem] text-white bg-[url('/assets/img/header/bg.jpg')] bg-cover bg-center">
            <div className=" absolute bg-primary/80 bottom-0 left-0 right-0 top-0 h-full w-full ">
                <MenuBar />
                <div className=" px-52 pt-12 items-center">
                    <p className=" my-5 font-medium">Home / Partners</p>
                    <p className=" font-bold text-5xl leading-snug w-[45rem] ">                   
                        Working with our partners to
                        bring digital innovations to your
                        business
                    </p>
                </div>                
            </div> 
        </div> 
        {/* <div className=" bg-primary h-[32rem] text-white bg-[url('/assets/img/bg.jpg')] bg-cover bg-center">
            <MenuBar />
            <div className=" px-52 pt-12 items-center">
                <p className=" my-5 font-medium">Home/Clients</p>
                <p className=" font-bold text-5xl leading-snug w-[45rem] ">                   
                    Working with our partners to
                    bring digital innovations to your
                    business
                </p>
            </div>
            
        </div>  */}

        <div className=" bg-black px-24 py-16">
            <p>
                Most important partners
            </p>
            <p>
                We have formed alliances with leading and technoloy partners 
                to provide you with innovative solutiions to the comple problems faced 
                by your business.
            </p>

            <div className=" flex gap-7">
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

        <div className=" bg-gray-50 px-24 py-16">
            <p className=" font-bold text-primary text-5xl">
                Other Partners
            </p>
            <p className=" text-secondary w-[920px] my-6 ">
                Since our fundation, client centricity has always been part of our mission to become a heading sector specialist for the international 
                technology industry became a leading sector specialist for the international technology industry.
            </p>

            <div className=" flex gap-7 ">
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
