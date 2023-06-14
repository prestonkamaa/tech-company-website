import { MdOutlineArrowRightAlt } from "react-icons/md";

type btnOutline={
    name: string
    btnColor: string
}
export default function ButtonOutline(props: btnOutline) {
  return (
    <button className={` flex items-center outline px-4 py-1 
    ${(props.btnColor === "red") ? "outline-primary hover:bg-primary hover:text-white text-secondary" :
    (props.btnColor === "gray") ? "outline outline-gray-400 hover:bg-gray-400 hover:text-white text-gray-400" :
    (props.btnColor === "white") ? "outline-white hover:bg-white hover:text-primary text-white" : "" }
    `}>
        {props.name} <MdOutlineArrowRightAlt className=" pl-2 w-7 h-7"/>
    </button>
  )
}
