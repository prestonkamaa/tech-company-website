import Image from "next/image"; 
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuBar() {
  return (
    <nav className=" flex items-center justify-between px-24 pt-10">
        <Image
            src="/assets/img/logo.png"
            alt=""
            width={50}
            height={50}
        />


<Link href="/"> Home </Link>
<Link href="/allclients"> client </Link>
<Link href="/allclients/clientdetails"> client details </Link>
<Link href="/partners"> partners </Link>
<Link href="/partners/partnersdetails"> partners details </Link> 
<Link href="/test"> Test </Link> 


        <div className=" flex text-white gap-x-3" >
            <BiSearch className=" w-6 h-6"/>
            <RxHamburgerMenu className=" w-6 h-6"/>
        </div>
        

        




    </nav>
  )
}
