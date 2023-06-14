import { IoIosArrowDropright } from "react-icons/io";
import { BsFillRecordCircleFill } from "react-icons/bs";
import Image from "next/image";

type psCard = {
    image: any;
    title: string;
    writeup: string;
    btnName: string;
}

export default function PartnersCard(props: psCard) {



  return (

    <div className=" group border-4 border-primary p-5 shadow-md hover:bg-primary/90 bg-primary/30">

    <BsFillRecordCircleFill className=" w-7 h-7 mb-3 text-primary/50 group-hover:text-white/50 "/>
        
    <Image
      src={props.image}
      alt=""
      width={50}
      height={50}
    />
    <p className=" text-lg font-semibold text-white pt-5">
      {props.title}
    </p>

    <hr className=" border border-primary group-hover:border-white rounded-full w-24 my-5" />

    <p className=" text-white">
      {props.writeup}
    </p>

    <p className=" flex items-center font-semibold text-white mt-5 ">
      {props.btnName} <IoIosArrowDropright className=" ml-2 group-hover:text-white text-primary" />
    </p>

  </div>   
    

  )
}
