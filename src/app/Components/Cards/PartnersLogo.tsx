import Image from "next/image"

type levelPartners={
image: any,
name: string
}




export default function PartnersLogo(props:levelPartners){
    return(
        <div className=" bg-white p-5 border shadow-lg">
            <Image
                src={props.image}
                alt=""
                width={295}
                height={95}
            />
            <hr className=" border my-5 w-20" />
            <p className=" text-secondary">
                {props.name}
            </p>
        </div>
    )
}