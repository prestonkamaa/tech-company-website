import { IoIosArrowDropright } from "react-icons/io";
import { BsFillRecordCircleFill } from "react-icons/bs"; 

type psCard = { 
    title: string;
    writeup: string;
    btnName: string;
}

export default function ClientsCard(props: psCard) {



  return (

    <div className=" border-4 p-5 shadow-md hover:bg-gray-50 bg-white">

    <BsFillRecordCircleFill className=" w-7 h-7 text-black/30 "/>
     
    <p className=" text-lg font-semibold text-darksecondary pt-5">
      {props.title}
    </p>

    <hr className=" border border-primary rounded-full w-24 my-5" />

    <p className=" text-secondary">
      {props.writeup}
    </p>

    <p className=" flex items-center font-semibold text-primary mt-5 ">
      {props.btnName} <IoIosArrowDropright className=" ml-2" />
    </p>

  </div>   
    

  )
}
