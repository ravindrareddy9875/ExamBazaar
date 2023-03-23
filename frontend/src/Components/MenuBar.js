import React from 'react'

import { SiWindows11 } from 'react-icons/si';
import { FaRegListAlt } from 'react-icons/fa';
import { BsBank } from 'react-icons/bs';
import {FiLink} from 'react-icons/fi'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { BiArrowBack } from 'react-icons/bi';

const MenuBar = () => {
  return (
    <div>
          <div className='border-0 border-r-2 h-screen  border-gray-200 vsm:hidden sm:hidden sm1:flex flex-col mt-10'>
                <BiArrowBack/>
                <div className='flex mt-5 justify-between mb-5'>
                    <div className='flex'>
                        <SiWindows11/>
                        <p className='pl-4'>My DashBoard</p>
                    </div>
                        <MdKeyboardArrowRight size={25} className='mr-4'/>
                </div>

                <div className='flex justify-between mb-5'>
                    <div className='flex'>
                        <FiLink/> 
                        <p className='pl-4'>TOTM wlinks</p>
                    </div>
                        <MdKeyboardArrowRight size={25} className='mr-4'/>
                </div>

                <div className='flex justify-between mb-5'>
                        <div className='flex'>
                            <FaRegListAlt/>
                            <p className='pl-4'>Daily Summary</p>
                        </div>
                        <MdKeyboardArrowRight size={25} className='mr-4'/>
                </div>

                <div className='flex justify-between mb-5'>
                        <div className='flex'>
                            <BsBank/> 
                            <p className='pl-4'>Bank Details</p>
                        </div>
                        <MdKeyboardArrowRight size={25} className='mr-4'/>
                </div>

            </div>
    </div>
  )
}

export default MenuBar1
