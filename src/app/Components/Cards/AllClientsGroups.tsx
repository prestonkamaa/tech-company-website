 import Image from "next/image"

type psCard = { 
    image: any;
    title: string; 
}

export default function AllClientsGroups(props: psCard) {



  return (

    <div className=" inline-block group border-2 hover:border-primary p-5 shadow hover:bg-white bg-gray-100 ">

      <Image
        src={props.image}
        alt=""
        height={50}
        width={50}
        className=" mx-auto"
      />

      <hr className=" border border-primary rounded-full w-10 my-5 mx-auto" /> 
      
      <p className=" font-semibold group-hover:text-primary text-darksecondary text-center">
        {props.title}
      </p>
 
    </div>   
    

  )
}
