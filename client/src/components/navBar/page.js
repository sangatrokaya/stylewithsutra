'use client'
import React from 'react'
import Image from 'next/image'
import { IoSearchOutline } from "react-icons/io5";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import Link from 'next/link'
import { IoPersonOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import {logoutUser} from '@/redux/reducerSlice/userSlice'
import { useRouter } from 'next/navigation';


const NavBar = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { isLoggedIn } = useSelector(state => state.user)
    const handleLogout = () => {
        dispatch(logoutUser())
        router.push('/')
    }
    const LoggedInDrop = () => {
        return (
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">My Orders</DropdownItem>
                    <DropdownItem key="system">My Wishlist</DropdownItem>
                    <DropdownItem key="configurations">My Analytics</DropdownItem>
                    <DropdownItem key="help_and_feedback">Returns & Cancellations</DropdownItem>
                    <DropdownItem onClick={handleLogout} key="logout" color="danger">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
    const AuthIcon = () => {
        return (
            <a href='/register'>
                <IoPersonOutline className='h-6 w-6 cursor-pointer hover:text-orange-700' />
            </a>
        )
    }
    return (
        <div>
            <Navbar className='flex sm:justify-evenly'>
                <NavbarBrand className='cursor-pointer'>
                    {/* <AcmeLogo /> */}
                    <Image className="m-1" src="/Ecomlogo.png" width='42' height='42'></Image>
                    <p className=" font-bold text-xl ">Style With <span className='text-orange-700'>Sutra</span></p>
                </NavbarBrand>

                <NavbarContent className="gap-4 ">
                    <NavbarItem>
                        <Link className='hover:text-orange-700' color="secondary" href="#">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className='hover:text-orange-700' href="#" color="foreground">
                            Men
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className='hover:text-orange-700' color="foreground" href="#">
                            Women
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className='hover:text-orange-700' color="foreground" href="#">
                            Children
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link className='hover:text-orange-700' color="foreground" href="#">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent className='flex sm:justify-end'>
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[11rem] h-10 ",
                            mainWrapper: "h-full",
                            input: "text-small ",
                            inputWrapper: "h-full font-normal text-xs bg-default-400/20 bg-gray-200 hover:text-orange-700",
                        }}
                        placeholder="Type to search..."
                        size='sm'
                        startContent={<IoSearchOutline size={20} />}
                        type="search"
                    />
                    {isLoggedIn ? <LoggedInDrop /> : <AuthIcon />}


                    <FaCartPlus className='h-7 w-7 cursor-pointer text-orange-700 hover:text-green-800' />
                </NavbarContent>
            </Navbar>
        </div>


    )
}

export default NavBar