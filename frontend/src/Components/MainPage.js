import React, { useState } from 'react'

import MenuBar from './MenuBar';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import { CiSearch } from 'react-icons/ci';
import { VscAccount } from 'react-icons/vsc';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import { SiWindows11 } from 'react-icons/si';
import { FaRegListAlt } from 'react-icons/fa';
import { BsBank } from 'react-icons/bs';
import { FiLink, FiMenu } from 'react-icons/fi'
import { MdKeyboardArrowRight } from 'react-icons/md'



export default function MainPage() {


    const [isSaved, setisSaved] = useState(false);
    const [state, setState] = useState({
        left: false,
    });


//   Drawer Function for MenuBar

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


// Content for MenuBar Drawer in Mobile Screen

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className='border-0 border-r-2 border-gray-200 sm1:flex flex-col pl-5'>
                    <BiArrowBack />
                    <div className='flex mt-5 justify-between mb-5'>
                        <div className='flex'>
                            <SiWindows11 />
                            <p className='pl-4'>My DashBoard</p>
                        </div>
                        <MdKeyboardArrowRight size={25} className='mr-4' />
                    </div>

                    <div className='flex justify-between mb-5'>
                        <div className='flex'>
                            <FiLink />
                            <p className='pl-4'>TOTM wlinks</p>
                        </div>
                        <MdKeyboardArrowRight size={25} className='mr-4' />
                    </div>

                    <div className='flex justify-between mb-5'>
                        <div className='flex'>
                            <FaRegListAlt />
                            <p className='pl-4'>Daily Summary</p>
                        </div>
                        <MdKeyboardArrowRight size={25} className='mr-4' />
                    </div>

                    <div className='flex justify-between mb-5'>
                        <div className='flex'>
                            <BsBank />
                            <p className='pl-4'>Bank Details</p>
                        </div>
                        <MdKeyboardArrowRight size={25} className='mr-4' />
                    </div>

                </div>
            </List>

        </Box>
    );





    return (


        <div>
            <div className='border-0 border-b-2 '>

            {/* Header with position fixed */}

                <div className='vsm:hidden sm:hidden sm1:flex  justify-between p-4 fixed bg-white w-full '>
                    <p className='font-bold'>Logo</p>
                    <p className='font-bold'>Home</p>
                    <p className='font-bold'>Services</p>
                    <p className='font-bold'>Blog</p>
                    <p className='font-bold'>Offers</p>
                    <p className='font-bold'>About Us</p>
                    <CiSearch size={22} />
                    <MdOutlineNotificationsActive size={22} />
                    <VscAccount size={22} />
                </div>
{/* ------------------------------------------------------------------------------------------------------------------------------- */}

            {/* MenuBar Icon for Mobile View with Drawer Navigation using Material UI */}

                <div className='vsm:flex sm1:hidden p-4 fixed bg-white w-full'>
                    <React.Fragment>
                        <Button onClick={toggleDrawer("left", true)}><FiMenu size={25} /></Button>
                        <Drawer
                            anchor="left"
                            open={state["left"]}
                            onClose={toggleDrawer("left", false)}
                        >
                            {list("left")}
                        </Drawer>
                    </React.Fragment>
                </div>

            </div>
{/* ------------------------------------------------------------------------------------------------------------------------------- */}



            <div className='flex justify-between border-0 border-b-2 p-4'>

            {/* Calling MenuBar component for  Web Screen */}

                <div className='w-1/4'>
                    <MenuBar/>
                </div>
{/* ------------------------------------------------------------------------------------------------------------------------------- */}


        {/* Bank Details Updation */}

                <div>
                    <p className='font-medium text-3xl pl-4 vsm2:pl-9 mt-12 sm1:mt-10'>Update Bank Details</p>
                    <p className='text-sm pl-9 w-5/6 sm1:w-3/5 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <form className='border-2 border-gray-300 pl-4 vsm2:pl-9 pt-5 mt-5 ml-5 vms2:ml-10 w-5/6 sm:w-4/5'>
                        <div>

                            <div className='LabelAndInput'>
                                <label className='label'>ACCOUNT HOLDER NAME</label>
                                <input type="text" placeholder='Account Holder Name' className='input'></input>
                            </div>
                            <div className='LabelAndInput'>
                                <label className='label'>ACCOUNT NUMBER</label>
                                <input type="number" placeholder='Account Number' className='input'></input>
                            </div>
                            <div className='LabelAndInput'>
                                <label className='label'>IFSC CODE</label>
                                <input type="text" placeholder='IFSC Code' className='input'></input>
                            </div>

                            <div className='LabelAndInput'>
                                <label className='label'>BANK NAME</label>
                                <input type="text" placeholder='Bank Name' className='input'></input>
                            </div>
                            <div className='LabelAndInput'>
                                <label className='label'>BANK CITY</label>
                                <input type="text" placeholder='Bank City' className='input'></input>
                            </div>
                            <div className='LabelAndInput'>
                                <label className='label'>BRANCH NAME</label>
                                <input type="text" placeholder='Branch Name' className='input'></input>
                            </div>
                            <div className='LabelAndInput'>
                                <label className='label'>RELATION WITH ACCOUNT HOLDER</label>
                                <input type="text" placeholder='Relation With Account Holder' className='input'></input>
                            </div>

                        </div>


{/* ------------------------------------------------------------------------------------------------------------------------------- */}

                        {/* Consent with conditional rendering on Clicking of Save Button */}

                        <div className='flex justify-between flex-col sm1:flex-row'>
                            <label className='label mt-5'>CONSENT</label>
                            <div className='flex border-2 input1'>
                                {
                                    !isSaved ? <input type="checkbox"></input> : null
                                }

                                <p className='pl-5'>I confirm that the information given in this form is true, complete and accurate. I understand that in case of incorrect details,
                                    Exambazaar will not be responsible for any loss of pay.

                                    {
                                        isSaved ? <p className='font-bold'>Filled on March 22, 2023</p> : null
                                    }
                                </p>
                            </div>

                        </div>
                        {
                            !isSaved ? <p className='button' onClick={() => setisSaved(true)}>Save</p> : null
                        }


                    </form>
                    <p className='w-4/5 ml-5 sm:ml-10 text-sm mt-2'>THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER
                        IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!</p>

                </div>
            </div>
        </div>
    )
}

