import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HiChevronDown } from "react-icons/hi"
import { FaRegUser } from 'react-icons/fa6'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { IoHeartOutline } from 'react-icons/io5'
import Link from 'next/link'

export default function Navbar () {
    return (
        <div>
            <div className="Container w-[1589px] h-[58px] top-[70px]  absolute"> 
                
                {/* logo section */}
                <div className="w-[187px] h-[58px] left-[38px] absolute flex items-center">
                    <div>
                        <h3 className="w-[108px] h-8 top-[13px] font-montserrat font-bold text-2xl tracking-[0.1px] 
                         text-[#252B42] ">Bandage</h3>
                    </div>
                </div>

                 {/* menu section */}
                    <div className="w-[1155px] h-[58px] left-[265px] absolute flex items-center">
                        <div>
                            <ul className="w-[361px] h-[25px] top-[16.5px] gap-[15px] flex items-center">
                                <li className="w-[43px] h-[24px] font-montserrat font-bold text-sm leading-6 text-center tracking-[0.2px] text-[#737373]">
                                    <Link href='/'>Home</Link>
                                </li>

                                <Menu>
                                    <MenuButton className={"flex items-center w-42"}>
                                        <div>
                                            <h1 className="font-montserrat flex items-center text-sm font-medium leading-[28px] w-[38px] h-[28px]
                                            text-[#252B42] tracking-[0.2px] text-center">Shop</h1>
                                        </div>
                                    <HiChevronDown className="w-6 h-6 ml-2"/>
                                    </MenuButton>
                                        <MenuItems transition className="flex flex-col w-max rounded-lg ease-out
                                         bg-gray-200 justify-end absolute left-32 top-12 overflow-ellipsis">
                                        <MenuItem><a href="/ProductList" className="hover:border-y-[1px] border-black m-[1px] rounded-lg text-center">ProductList</a></MenuItem>
                                        <MenuItem><a href='/Product1' className="hover:border-y-[1px] border-black m-[1px] rounded-lg text-center">Products</a></MenuItem>
                                        <MenuItem><button className="hover:border-y-[1px] border-black m-[1px] rounded-lg text-center">Coats</button></MenuItem>
                                        <MenuItem><button className="hover:border-y-[1px] border-black m-[1px] rounded-lg text-center">Rings</button></MenuItem>
                                        <MenuItem><button className="hover:border-y-[1px] border-black m-[1px] rounded-lg text-center">Watches</button></MenuItem>
                                    </MenuItems>
                                </Menu>
                            <li className="w-[45px] h-[24px] font-montserrat font-bold text-sm leading-6 text-center tracking-[0.2px] text-[#737373]">
                                <Link href="/">About</Link>
                                <Link href="blog">Blog</Link>
                                <Link href="contact">Contact</Link>
                                <Link href="page">Pages</Link>
                            </li>
                            </ul>
                        </div>

                        <div className='w-[324px] h-[54px] top-[2px] left-[832px] absolute flex items-center ml-28'>
                            <div className='w-[166px] h-[54px] flex items-center gap-4'>
                                <FaRegUser className='w-3 h-3 text-[#23A6F0]'/>
                                <div>
                                    <div className='flex gap-2'>
                                        <a href='' className='text-[#23A6F0] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center'>Login</a>
                                        <h1 className="text-[#23A6F0] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center">/</h1>
                                        <a href='' className="text-[#23A6F0] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center">Register</a>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center gap-9'>

                                <MagnifyingGlassIcon className='w-6 h-6 text-[#23A6F0] ml-6 cursor-pointer hover:opacity-50'/>
                                <MdOutlineLocalGroceryStore className='w-6 h-6 text-[#23A6F0] cursor-pointer hover:opacity-50'/>
                                <h1 className='text-[#23A6F0] font-normal text-xs leading-4 absolute left-[265px]'>1</h1>
                                <IoHeartOutline className='w-6 h-6 text-[#23A6F0] cursor-pointer hover:opacity-50'/>
                                <h1 className='text-[#23A6F0] font-normal text-xs leading-4 absolute left-[320px]'>1</h1>
                            </div>
                        </div>

                    </div>
                

            </div>
        </div>
    )
}