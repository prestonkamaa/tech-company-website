import Image from "next/image"
import { VscArrowSmallUp, VscTwitter } from "react-icons/vsc";
import { GrLinkedinOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { TiSocialFacebook } from "react-icons/ti";

export default function Footer() {
  return (
    <div className=" pt-16 pb-10 bg-gray-50">
        <div className=" px-40 flex  gap-7">
            <div className=" w-1/3">
                <Image
                    src={"/assets/img/footerlogo.png"}
                    alt={""}
                    width={"295"}
                    height={"95"}
                />
                <p className=" text-secondary pt-3">
                    Founded in 1997, Globe Grow Group (GGG)
                    comenced operations under a seniior
                    executive leadership with local and international
                    experience. 
                </p>
            </div>
            <div className=" w-2/3 grid grid-cols-4">
                <div className=" space-y-2 text-secondary">
                    <p className=" text-lg font-bold ">Company</p>
                    <p className=" hover:text-primary">About Us</p> 
                    <p className=" hover:text-primary">Our Team</p> 
                    <p className=" hover:text-primary">Blog</p> 
                    <p className=" hover:text-primary">Careers</p> 
                    <p className=" hover:text-primary">Parners</p> 
                </div>
                <div className=" space-y-2 text-secondary">
                    <p className=" text-lg font-bold ">Service</p>
                    <p className=" hover:text-primary">Infrustructure</p> 
                    <p className=" hover:text-primary">Cloud Products</p> 
                    <p className=" hover:text-primary">Security</p> 
                    <p className=" hover:text-primary">Data Center</p>  
                </div>
                <div className=" space-y-2 text-secondary">
                    <p className=" text-lg font-bold ">Media</p>
                    <p className=" hover:text-primary">News</p> 
                    <p className=" hover:text-primary">Press Release</p> 
                    <p className=" hover:text-primary">Events</p> 
                    <p className=" hover:text-primary">Blog</p> 
                </div>
                <div className=" space-y-2 text-secondary">
                    <p className=" text-lg font-bold ">Contact</p>
                    <p className="text-primary">0123456789</p> 
                    <p className="text-primary">info@shiftlogiq.co.ke</p> 
                    <p className=" hover:text-primary">Events</p> 
                    <p className=" hover:text-primary">Blog</p>  
                </div>
            </div>
        </div>


        <div className="flex items-center my-12">
            <div className="flex-grow bg bg-gray-200 h-0.5"></div>
            <div className=" flex bg-primary w-8 h-8 text-white items-center justify-center absolute right-16">
                <VscArrowSmallUp className=" w-5 h-5" />
            </div>
            <div className="flex-grow bg bg-gray-200 h-0.5"></div>
        </div>
        
         
        <div className=" flex text-secondary gap-10 items-center justify-center font-medium">
            <p>&copy; Globe Grow Group, 2023. All copyrights reserved.</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p className=" flex gap-2"> 
                <GrLinkedinOption className=" hover:text-primary w-4 h-4" /> 
                <FiInstagram className=" hover:text-primary w-4 h-4" /> 
                <TiSocialFacebook className=" hover:text-primary w-4 h-4" /> 
                <VscTwitter className=" hover:text-primary w-4 h-4" />
            </p>
        </div> 











         

    </div>
  )
}
