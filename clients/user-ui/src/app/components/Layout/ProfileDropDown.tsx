'use client'
import React from 'react';
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import AuthScreen from "../../../screens/AuthScreen";

const ProfileDropDown = () => {
    const [signedIn, setSignedIn] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <div className='flex items-center gap-4'>
            { signedIn ? (
                <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        as="button"
                        className='transition-transform'
                        src="https://avatars.githubusercontent.com/u/87035691?v=4"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat" className="text-white">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">support@foodie.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Profile</DropdownItem>
                    <DropdownItem key="all_orders">All Orders</DropdownItem>
                    <DropdownItem key="team_settings">Apply for seller account</DropdownItem>
                    <DropdownItem key="logout" color='danger'>Logout</DropdownItem>
                </DropdownMenu>

            </Dropdown>
            ) : (
               <CgProfile className="text-3xl cursor-pointer text-white"
               onClick={() => setOpen(!open)}
                />
            )
        }
         {open && (<AuthScreen />)}
        </div>
    )
}

export default ProfileDropDown