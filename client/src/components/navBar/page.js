'use client'
import React from 'react'
import Image from 'next/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import Link from 'next/link'
const page = () => {
    return (
        <Navbar className='justify-start'>
            <NavbarContent>
                <NavbarBrand className="mr-4">
                    {/* <AcmeLogo /> */}
                    <Image className="m-1" src="/Ecomlogo.png" width='42' height='42'></Image>
                    <p className="hidden sm:block font-bold text-xl mr-4">Style With Sutra</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4 m-4">
                    <NavbarItem>
                        <Link color="secondary" href="#">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" color="foreground">
                            Men
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Women
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Baby Collection
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link color="foreground" href="#">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>

            <NavbarContent>
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    type="search"
                />
                <Button color='success'>Login</Button>
                <Button as={Link} href='/register' color='secondary'>Register</Button>
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
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </NavbarContent>
        </Navbar>
    )
}

export default page