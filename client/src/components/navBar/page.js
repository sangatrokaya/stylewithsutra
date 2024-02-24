'use client'
import React from 'react'
import Image from 'next/image'
import { IoSearchOutline } from "react-icons/io5";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import Link from 'next/link'
import { IoPersonOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

const NavBar = () => {
    return (
        <Navbar className='w-full '>
            <NavbarBrand className="mr-4 justify-start">
                {/* <AcmeLogo /> */}
                <Image className="m-1" src="/Ecomlogo.png" width='42' height='42'></Image>
                <p className="hidden sm:block font-bold text-xl mr-4">Style With <span className='text-orange-700'>Sutra</span></p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4 ml-4 justify-between">
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

            <NavbarContent className='justify-end'>
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10 ",
                        mainWrapper: "h-full ",
                        input: "text-small ",
                        inputWrapper: "h-full font-normal text-xs bg-default-400/20 dark:bg-default-500/20 hover:text-orange-700",
                    }}
                    placeholder="Type to search..."
                    size='sm'
                    startContent = {<IoSearchOutline size={18}/>}
                    type="search"
                />
                <a href='/register'>
                    <IoPersonOutline className='h-6 w-6 cursor-pointer hover:text-orange-700' />
                </a>
                <div>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
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
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <FaCartPlus className='h-7 w-7 cursor-pointer text-orange-600' />
            </NavbarContent>
        </Navbar>
    )
}

export default NavBar