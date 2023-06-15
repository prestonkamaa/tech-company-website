import ButtonOutline from "@/app/Components/Buttons/ButtonOutline";

export default function TransferYourEnterprise() {
  return (

    <div className=" relative h-56 bg-[url('/assets/img/header/bg.jpg')] bg-cover bg-center">
         <div className="absolute bg-primary/80 bottom-0 left-0 right-0 top-0 ">
 
                <div className=" flex justify-between px-40 py-20 items-center ">
                    <div className="">
                        <p className=" text-white block font-bold text-4xl">
                            Transfer Your Enterprise
                        </p> 
                        <p className="text-white">  
                            Talk to an expert about how Globe Glow Group meet your business needs. 
                        </p> 
                
                    </div>
                    <ButtonOutline name="Talk With Us"  btnColor="white" />  
                </div>            

        </div>    
    </div>

  )
}
