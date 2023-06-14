import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";

type psCard = {
    image: any;
    blogTag: string;
    title: string;
    writeup: string;
    btnName: string;
}

export default function BlogPost(props: psCard) {



  return (

    <div className=" border p-5 shadow-md bg-white">
        
    <Image
      src={props.image}
      alt=""
      width={550}
      height={550}
    />
    <p className=" py-1 px-3 bg-primary my-3 text-white inline-block">
        {props.blogTag}
    </p>
    <p className=" text-lg font-semibold text-darksecondary">
      {props.title}
    </p>

    <hr className=" border-2 rounded-full w-10 my-3" />

    <p className=" text-secondary">
      {props.writeup}
    </p>

    <p className=" flex items-center font-semibold text-darksecondary mt-3 ">
      {props.btnName} <MdOutlineArrowRightAlt />
    </p>

  </div>   
    

  )
}
