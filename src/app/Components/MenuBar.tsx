"use client";
import { useState } from "react";
import Image from "next/image"; 
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsFilterRight } from "react-icons/bs"; 
import { CgClose } from "react-icons/cg"; 
import { AiFillCaretRight } from "react-icons/ai"; 

export default function MenuBar() {

  const[ open, setOpen] = useState(false)

  function openMenu(){
    setOpen(!open)
  }




{/* <Link href="/"> Home </Link>
<Link href="/allclients  "> client </Link>
<Link href="/allclients/clientdetails"> client details </Link>
<Link href="/partners"> partners </Link>
<Link href="/partners/partnersdetails"> partners details </Link> 
<Link href="/test"> Test </Link>  */} 


  return (   
    <nav className=" flex items-center justify-between lg:px-24 lg:pt-10 p-5">
        <Link href="/">
        <Image
            src="/assets/img/logo.png"
            alt=""
            width={50}
            height={50}
        /></Link>
        <div className=" flex text-white gap-x-3 text-2xl" >

          <BiSearch className=" cursor-pointer"/>


          <div onClick={openMenu} className=" cursor-pointer" > 
              { open ?  <CgClose /> : <BsFilterRight/> }  
          </div> 
  
        </div>



        <div className={ `bg-black h-screen ${ open ? "block":"hidden"} absolute top-0 bottom-0 right-0 left-0 w-full h-full z-50`}> 

        <div className=" flex items-center justify-between px-24 pt-10 text-white">
          <Link href="/">
          <Image
              src="/assets/img/logo.png"
              alt=""
              width={50}
              height={50}
          /></Link> 

            <div className=" flex text-white gap-x-3 text-2xl" >

            <BiSearch className=" cursor-pointer"/> 

            <div onClick={openMenu} className=" cursor-pointer"> 
                { open ?  <CgClose /> : <BsFilterRight/> }  
            </div> 

            </div>
          </div>

  <p className=" pl-40 mt-12 mb-5 text-secondary">MENU</p>        

  <div className=" flex px-24">

    <div className=" flex pl-16 gap-20 mr-auto ">
      <div className=" space-y-6 "> 
        
      <div className=" flex group items-center relative font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">
        About Us <AiFillCaretRight className=" ml-2 h-3 w-3 group-hover:text-primary" />
        <div className="group-hover:block  top-0 left-[27rem] w-full bg-whitee absolute hidden h-auto"> 
          <div>
            <Link href="/allclients"><p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">About GGG</p></Link> 
            <Link href="/allclients/clientdetails "><p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">GGG Values</p></Link> 
            <Link href="/partners"><p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Our Companies</p></Link> 
            <Link href="/partners/partnersdetails"><p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">References</p></Link>                        
          </div>  
          </div>  
      </div> 

      <div className=" flex group items-center relative font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">
      Clients & Partners <AiFillCaretRight className=" ml-2 h-3 w-3 group-hover:text-primary" />
        <div className="group-hover:block  top-0 left-[27rem] w-full bg-whitee absolute hidden h-auto"> 
          <div>
            <Link href="/allclients"><p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Our Clientel</p></Link> 
            <Link href="/allclients/clientdetails "><p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Single Clients</p></Link> 
            <Link href="/partners"><p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Our Partners</p></Link> 
            <Link href="/partners/partnersdetails"><p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Single Partners</p></Link>                        
          </div>  
          </div>  
      </div> 





      <div className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Services & Solutions</div>  
      <div className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">News & Events</div> 
      <div className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Careers</div> 
      </div>

      <div className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
            <a className="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
        </div>



      {/* <div>
        <p className=" font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">About GGG</p> 
        <p className=" font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">GGG values</p> 
        <p className=" font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Our Companies</p> 
        <p className=" font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">References</p>                        
      </div> */}
    </div>   
    
    <div className=" flex space-x-8 text-white  text-sm rotate-90 mr-[2.25rem] "> 
      <p className=" hover:text-primary">Facebook</p>
      <p className=" hover:text-primary">Twitter</p>
      <p className=" hover:text-primary">LinkedIn</p>
    </div>
          
  </div>

  <div className=" flex text-white justify-between px-24 ">
    <p className=" mt-auto">&copy; Globe Grow Group, 2023. All copyrights reserved.</p>
    <div className=" space-y-3 text-right">
      <div className="h-1 float-right rounded-full w-8 bg-primary border-0" />  
      <p>01234567890</p>
      <p>info@shiftlogiq.co.ke</p>
    </div>     
  </div>
      
  
</div>
 





         
    </nav>
  )
}
