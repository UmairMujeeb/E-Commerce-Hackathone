import Image from "next/image"
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import { HiChevronRight } from "react-icons/hi"
import { HiChevronLeft } from "react-icons/hi"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


import SinProd1 from "@/app/Assets/SinProd1.png"
import SinProd2 from "@/app/Assets/Sinprod2.png"
import SinProd3 from "@/app/Assets/Sinprod3.png"
import HrLine from "@/app/Assets/HrLine.png"

export default function Product1 () {
    return (
        <div className="font-montserrat">
            <Header color="bg-[#23856D]"/>
            <Navbar />
            <div className="w-[1577px] h-[92px] py-6 bg-[#FAFAFA]">
                <div className="w-[509px] h-[44px] gap-[5px] ml-[270px]">
                    <div className="w-[509px] h-[44px] gap-[5px]">
                        <div className="w-[149px] h-[44px] py-[10px] gap-[15px] flex items-center mt-[100px]">
                            <a href="/" className="font-bold text-sm leading-[24px] tracking-[0.2px] text-[#252B42]">Home</a>
                            <HiChevronRight className="w-7 h-8 text-[#BDBDBD]"/>
                            <a href="/ProductList" className="font-bold text-sm leading-[24px] tracking-[0.2px] text-[#BDBDBD]">Shop</a>
                        </div>
                    </div>
                </div>

                <div className="w-[1577px] h-[598px] bg-[#FAFAFA]">
                    <div className="w-[1050px] h-[598px] ml-[270px] py-12 flex gap-5">
                        <div className="w-[510px] h-[550px] rounded-[5px]">
                            <Image src={SinProd1} alt="Prod" className="overflow-hidden"/>
                            <HiChevronLeft href="/" className="absolute w-16 h-20 text-white top-[500px] ovr"/>
                            <HiChevronRight href="/" className="absolute w-16 h-20 text-white top-[500px] ml-[450px] "/>
                            <div className="flex gap-5 mt-5">
                                <Image src={SinProd2} alt="Prod" />
                                <Image src={SinProd3} alt="Prod" />
                            </div>
                        </div>      

                        <div className="w-[510px] h-[471px] mt-[11px] ml-6">
                            <h1 className="w-[156px] h-[30px] font-normal text-xl leading-[30px] tracking-[0.2px] text-[#252B42]">Floating Phone</h1>
                            <div className="flex gap-2 mt-2 items-center">
                                <FaStar className="w-5 h-5 text-[#F3CD03]"/>
                                <FaStar className="w-5 h-5 text-[#F3CD03]"/>
                                <FaStar className="w-5 h-5 text-[#F3CD03]"/>
                                <FaStar className="w-5 h-5 text-[#F3CD03]"/>
                                <FaRegStar className="w-5 h-5 text-[#F3CD03]" />
                                <h1 className="w-[100px] h-[24px] font-bold text-sm leading-[24px] tracking-[0.2px] text-[#737373] ml-1">10 Reviews</h1>
                            </div> 

                            <h1 className="w-[108px] h-[32px] font-bold text-2xl tracking-[0.1px] mt-7">$1,139.33</h1>
                            
                            <div className="flex w-[170px] h-[24px] gap-[5px] mt-2">
                                <h1 className="w-[100px] h-[24px] font-bold text-sm leading-6 tracking-[0.2px]  text-[#737373]">Availability  :</h1>
                                <h1 className="w-[80px] h-[24px] font-bold text-sm leading-6 tracking-[0.1px] text-[#23A6F0]">In Stock </h1>
                            </div>        

                            <h1 className="w-[464px] h-[24px] font-normal text-sm leading-5 tracking-[0.2px] mt-10 text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey dolor 
                            do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                            Excitation venial consequent sent nostrum met.</h1>

                            <Image src={HrLine} alt="Line" className="w-[445px] border-[1px] text-[#BDBDBD] mt-20"/>
                            
                            <div className="flex gap-3 mt-6">
                                <div className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full"></div>
                                <div className="w-[30px] h-[30px] bg-[#2DC071] rounded-full"></div>
                                <div className="w-[30px] h-[30px] bg-[#E77C40] rounded-full"></div>
                                <div className="w-[30px] h-[30px] bg-[#252B42] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>  

                
            </div>
        </div>
    )
}