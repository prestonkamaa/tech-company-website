
import MenuBar from "./MenuBar";


export default function DeskTopMenu() {
  return ( 




<>




<ul className="w-full flex mt-20"> 
  <li className="group relative    px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
        <a>Dropdown</a>
        <div className="group-hover:block   absolute hidden h-auto">

        <ul className="top-0 ml-20 w-48 bg-white shadow px-6 py-8">
            <li className="py-1"><a className="block text-red-500 font-bold text-base uppercase hover:text-red-700 cursor-pointer">Item</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
        </ul>
        </div>
    </li>
    
</ul>




{/* <ul className="w-full flex"> 
  <li className="group relative dropdown  px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
        <a>Dropdown</a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">

        <ul className="top-0 w-48 bg-white shadow px-6 py-8">
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
        </ul>
        </div>
    </li>
    
</ul> */}
























     <div className=" bg-black h-screen ">
         <MenuBar /> 

         <p className=" pl-40 mt-12 mb-5 text-secondary">MENU</p>        

         <div className=" flex px-24">

           <div className=" flex pl-16 gap-20 mr-auto">
             <div className=" space-y-6 divide-primary"> 
               <div className=" group relative  font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">
                About Us
                
                <div className="group-hover:block  top-0 left-[27rem] w-full bg-whitee absolute hidden h-auto">
                  <div className="ml-[0rem] ">
                      {/* <li className="py-1"><a className="block text-red-500 font-bold text-base uppercase hover:text-red-700 cursor-pointer">Our Companies</a></li>
                      <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item0Item 0Item0Item </a></li>
                      <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Our Companies</a></li>
                      <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
                      <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
                   */}
                    <div>
                      <p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">About GGG</p> 
                      <p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">GGG Values</p> 
                      <p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Our Companies</p> 
                      <p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">References</p>                        
                    </div>                  
                  
                  
                  </div>
                </div>                
                
                </div> 

                
               <p className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Services & Solutions</p> 
               <p className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Partners & Alliances</p> 
               <p className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">News & Events</p> 
               <p className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Careers</p> 
             </div>

             {/* <div>
               <p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">About GGG</p> 
               <p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">GGG Values</p> 
               <p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Our Companies</p> 
               <p className=" block font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">References</p>                        
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


    </>








  )
}
