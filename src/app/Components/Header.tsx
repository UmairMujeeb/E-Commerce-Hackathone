import React from "react"

import { PhoneIcon } from "@heroicons/react/24/outline"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { FaInstagram } from "react-icons/fa"
import { RiYoutubeLine } from "react-icons/ri"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"





export default function TopFooter () {
    
    return (
        <div className="bg-[#252B42] w-[1589px] h-[56px] md:flex items-center justify-between sm:hidden">
           
                     {/* left contact section */}
            <div className="main-container w-[415px] h-[46px] gap-[10px] flex items-center justify-between">
                <div className="w-[145px] h-[44px] rounded-[5px] p-[10px] gap-[5px] ml-4 flex items-center">
                    <PhoneIcon className="text-white w-4 h-4"/>
                    <div>
                        <h6 className="w-[104px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#FFFFFF] 
                        flex items-center">(225) 555-0118</h6>
                    </div>
                </div>

                <div className="w-[260px] h-[44px] rounded-[5px] p-[10px] gap-[5px]">
                    <div className="flex items-center gap-4">
                        <EnvelopeIcon className="text-white w-4 h-4 ml-3"/>
                        <div>
                            <h6 className="w-[219px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-white ">michelle.rivera@example.com</h6>
                        </div>
                    </div>
                </div>
            </div>
            

        
            {/* center section */}
            <div className="w-[332px] h-[44px] p-[10px] gap-[10px]">
                <div>
                    <h6 className="w-[312px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] flex items-center">
                        Follow Us  and get a chance to win 80% off
                    </h6>
                </div>
            </div>


            {/* right social media icons section*/} 
            <div className="w-[233px] h-[46px] gap-[10px] flex items-center">
                <div>
                    <div className="flex items-center gap-1">
                        <h6 className="w-[83px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#FFFFFF]">Follow Us  :</h6>
                        <div className="w-[120px] h-[26px] flex items-center gap-3">
                            <FaInstagram  className="text-white w-4 h-4" />
                            <RiYoutubeLine className="text-white w-4 h-4" />
                            <FaFacebook  className="text-white w-4 h-4" />
                            <FaTwitter  className="text-white w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}