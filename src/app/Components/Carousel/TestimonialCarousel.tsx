import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

export default function TestimonialCarousel(){
    return(

        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={false}
            interval={6100}
        >

        <div className=" grid lg:grid-cols-6 grid-cols-1  mx-auto   "> 
            <div className=" lg:col-span-2">
                <Image
                    src={"/assets/img/6.jpg"}
                    alt=""
                    width={200}
                    height={550}
                />  
            </div>
 

            <div className=" bg-white p-10 lg:col-span-4 text-left text-secondary ">
                <p className="  italic ">
                    Its urgent, but we dont have time in the next two years to test it, but we must prioritize
                    it. At least we dont need to obfuscate it. You must rethink the whole process. We will give you
                    a slice of pizza if you finish the code until yesterday. Make it pop remember, the entirety is
                    equal or better. We must build a queue system to ensure it gets the data from our API so this
                    will result in a delay.
                </p>
                <p className=" text-right pt-10 font-bold text-lg">
                    MBUGWA FAIBA <br/>
                    <span className=" text-base font-normal"> Destop Support Technician</span>
                </p>
            </div>
        </div>
       
        <div className=" grid lg:grid-cols-6 grid-cols-1  mx-auto   "> 
            <div className=" lg:col-span-2">
                <Image
                    src={"/assets/img/6.jpg"}
                    alt=""
                    width={200}
                    height={550}
                />  
            </div>
 

            <div className=" bg-white p-10 lg:col-span-4 text-left text-secondary ">
                <p className="  italic ">
                    Its urgent, but we dont have time in the next two years to test it, but we must prioritize
                    it. At least we dont need to obfuscate it. You must rethink the whole process. We will give you
                    a slice of pizza if you finish the code until yesterday. Make it pop remember, the entirety is
                    equal or better. We must build a queue system to ensure it gets the data from our API so this
                    will result in a delay.
                </p>
                <p className=" text-right pt-10 font-bold text-lg">
                    MBUGWA FAIBA <br/>
                    <span className=" text-base font-normal"> Destop Support Technician</span>
                </p>
            </div>
        </div>



  


        
        
        
      </Carousel>


    //     <Carousel
    //         showArrows={true}
    //         infiniteLoop={true}
    //         showThumbs={false}
    //         showStatus={false}
    //         autoPlay={true}
    //         interval={6100}
    //     >
    //     <div>
    //       <Image  width={100} height={50} src={"/assets/img/footerlogo.png"} alt="" /> 
    //       <p className="legend">Legend 1</p>
    //     </div>
    //     <div>
    //       <Image  width={100} height={50} src={"/assets/img/footerlogo.png"} alt="" />
    //       <p className="legend">Legend 2</p>
    //     </div>
    //     <div>
    //       <Image width={100} height={50}  src={"/assets/img/footerlogo.png"} alt="" />
    //       <p className="legend">Legend 3</p>
    //     </div>
    //   </Carousel>
    )
}