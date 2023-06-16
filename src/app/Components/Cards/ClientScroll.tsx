import { BsFillRecordCircleFill } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import Image from "next/image";

type ClientLogo = {
    image: any,  
    title: string, 
    writeup:string, 
    btnName: string, 

}

export default function ClientScroll(props: ClientLogo) {
  return (
    <div className=" group border-4 p-5 shadow-md hover:border-primary bg-white lg:w-80 h-60">
    
    <BsFillRecordCircleFill className=" w-7 h-7 mb-3 text-secondary/60 group-hover:text-primary/60   "/>
    <Image
        src={props.image}
        alt=""
        height={50}
        width={50}
        className="mx-auto"
    /> 
    <p className=" text-lg font-semibold text-primary pt-5 text-center">
      {props.title}
    </p>
 
    <p className=" text-secondary text-center my-5">
      {props.writeup}
    </p>

    <p className=" flex items-center font-semibold text-secondary justify-center group-hover:text-primary ">
      {props.btnName} <IoIosArrowDropright className=" ml-2" />
    </p>    
    </div>
  )
}
