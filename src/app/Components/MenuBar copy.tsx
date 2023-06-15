"use client";
import { useState } from "react";
import Image from "next/image"; 
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx"; 
import { CgClose } from "react-icons/cg"; 

export default function MenuBar() {

  const[ open, setOpen] = useState(false)

  function openMenu(){
    setOpen(!open)
  }




{/* <Link href="/"> Home </Link>
<Link href="/allclients"> client </Link>
<Link href="/allclients/clientdetails"> client details </Link>
<Link href="/partners"> partners </Link>
<Link href="/partners/partnersdetails"> partners details </Link> 
<Link href="/test"> Test </Link>  */}


  return (   
    <nav className=" flex items-center justify-between px-24 pt-10">
      
        <Image
            src="/assets/img/logo.png"
            alt=""
            width={50}
            height={50}
        />
        <div className=" flex text-white gap-x-3 text-2xl" >

            <BiSearch />
            <div onClick={openMenu} className=" cursor-pointer" > 
                { open ?  <CgClose /> : <RxHamburgerMenu/> } 
            </div>
            
        </div>


 





         
    </nav>
  )
}
