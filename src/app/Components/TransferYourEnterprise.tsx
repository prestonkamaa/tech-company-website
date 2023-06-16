import ButtonOutline from "@/app/Components/Buttons/ButtonOutline";

export default function TransferYourEnterprise() {
  return (

    <div className=" relative lg:h-56 h-60 bg-[url('/assets/img/header/bg.jpg')] bg-cover bg-center">
         <div className="absolute bg-primary/80 bottom-0 left-0 right-0 top-0 ">
 
                <div className=" flex lg:flex-row flex-col justify-between lg:px-40 lg:py-20 p-5 items-center ">
                    <div className=" lg:text-start text-center">
                        <p className=" text-white block font-bold text-4xl">
                            Transfer Your Enterprise
                        </p> 
                        <p className="text-white  lg:my-0 my-3">  
                            Talk to an expert about how Globe Glow Group meet your business needs. 
                        </p> 
                
                    </div>
                    <div>
                        <ButtonOutline name="Talk With Us"  btnColor="white" />  
                    </div>
                    
                </div>            

        </div>    
    </div>

  )
}
