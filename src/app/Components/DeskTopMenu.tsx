
import MenuBar from "./MenuBar";


export default function DeskTopMenu() {
  return ( 

    <div className=" bg-black h-screen ">
        <MenuBar /> 

        <p className=" pl-40 mt-12 mb-5 text-secondary">MENU</p>        

        <div className=" flex px-24">

          <div className=" flex pl-16 gap-20 mr-auto">
            <div className=" space-y-6 divide-primary"> 
              <p className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">About Us</p> 
              <p className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Services & Solutions</p> 
              <p className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Partners & Alliances</p> 
              <p className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">News & Events</p> 
              <p className=" font-semibold text-4xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Careers</p> 
            </div>

            <div>
              <p className=" font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">About GGG</p> 
              <p className=" font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">GGG values</p> 
              <p className=" font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">Our Companies</p> 
              <p className=" font-medium text-2xl text-white hover:underline underline-offset-8 decoration-primary rounded-full ">References</p>                        
            </div>
          </div>   
           
          <div className=" flex space-x-8 text-white text-sm rotate-90 mr-16"> 
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
                 
        </div>

        <div className=" flex text-white justify-between px-24 ">
          <p className=" mt-auto">&copy; Globe Grow Group, 2023. All copyrights reserved.</p>
          <div className=" space-y-3 text-right">
            <hr className="h-1 justify-end rounded-full w-8 bg-primary border-0" /> 
            <p>01234567890</p>
            <p>info@shiftlogiq.co.ke</p>
          </div>     
        </div>
            
        
    </div> 

  )
}
