"use client";
import React, { useContext, useEffect, useState } from "react";
import Input from "@components/input";
import Image from "next/image";
import { HeaderLogo } from "@lib/config";
import GraySearch from "@utilis/graySearch";
import SearchI from "@utilis/searchi";
import LikeI from "@utilis/likei";
import CartI from "@utilis/carti";
import ProfileI from "@utilis/profilei";
import { useDispatch, useSelector } from "react-redux";
import { modalChange } from "@lib/features/features";
import SideDrawer from "@components/SideDrawer";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { UserContext } from "@lib/context_provider";
import Cookies from "js-cookie";
import { Button, Menu, MenuItem } from "@mui/material";
import { Cookie } from "next/font/google";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About us", href: "/about", current: false },
  { name: "Products", href: "/products", current: false },
  { name: "Categories", href: "/category", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const HeaderSection = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const router = useRouter();
  const open = useSelector((state) => state.sideModal.modalStatus);

  const dispatch = useDispatch();

  const user = useContext(UserContext);
  const [navi, setNavi] = useState([...navigation]);

  const handleClick = (item) => {
    setNavi((prevNavi) =>
      prevNavi.map((navItem) => ({
        ...navItem,
        current: navItem.name === item.name,
      }))
    );
    router.push(item.href);
  };
  const toggleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  const handleRe = () => {
    dispatch(modalChange(true));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openModal = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLogOut = () => {
    Cookies.remove('token')
    handleClose()
  }

  const handleLogin = () => {
    router.push('/login')
    handleClose()
  }

  return (
    <div className="container">
      <div className="flex justify-between w-full text-base items-center py-[15px]">
        {isOpenSearch ? (
          <div className="max-sm:flex justify-center items-center">
            <Image
              src={HeaderLogo}
              width={100}
              height={100}
              alt="header-logo"
            />
          </div>
        ) : (
          <div className={isOpenSearch ? "border flex items-center" : ""}>
            <Input
              type="text"
              id="search"
              className={
                isOpenSearch ? "w-full pl-[5px] outline-none" : "hidden"
              }
              required
            />
            <div className="max-sm:flex">
              <button onClick={() => toggleSearch()} className="pr-[82px]">
                <SearchI
                  className={isOpenSearch ? "h-5 w-5 mr-4" : "h-5 w-5 mr-2"}
                />
              </button>
              <Disclosure as="nav" className="sm:hidden">
                {({ open }) => (
                  <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                      <div className="relative flex h-16 items-center justify-center">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                          {/* Mobile menu button*/}
                          <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                              <XMarkIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <Bars3Icon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch">
                          <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                              {navi.map((item) => (
                                <a
                                  key={item.name}
                                  onClick={() => handleClick(item)}
                                  className={classNames(
                                    item.current
                                      ? "bg-gradient-to-b  from-yellow-400 to-orange-600 text-transparent bg-clip-text"
                                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                    "px-3 py-2 text-sm font-medium"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                      <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "block rounded-md px-3 py-2 text-base font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        )}
        <div className="flex items-center flex-grow justify-center">
          {isOpenSearch ? (
            <div
              className={
                isOpenSearch ? "border bg-[#DDDDDD] flex items-center" : ""
              }
            >
              <Input
                type="text"
                id="search"
                placeholder="Search Products"
                className={
                  isOpenSearch
                    ? "w-[300px] bg-[#DDDDDD] px-[10px] py-[10px] font-medium text-[16px] leading-[24px] text-[#757575] outline-none max-sm:w-[109px] max-sm:h-[14px] max-sm:text-[5px] max-sm:py-[14px]"
                    : "hidden"
                }
                required
              />
              <button onClick={() => toggleSearch()} className="pr-[10px]">
                <GraySearch
                  className={isOpenSearch ? "h-5 w-5 mr-4 " : "h-5 w-5 mr-2"}
                />
              </button>
            </div>
          ) : (
            <div>
              <Image
                src={HeaderLogo}
                width={100}
                height={100}
                alt="header-logo"
              />
            </div>
          )}
        </div>

        <div className="flex">
            <div className="cursor-pointer">
              <Button
                id="fade-button"
                className="p-0"
                aria-controls={openModal ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openModal ? "true" : undefined}
                onClick={handleMenu}
              >
                <ProfileI className="h-5 w-5" />
              </Button>
              {Cookies.get('token') ? <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={openModal}
                onClose={handleClose}
                
              >
                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
              </Menu> : <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={openModal}
                onClose={handleClose}
                
              >
                <MenuItem onClick={handleLogin}>Log In</MenuItem>
              </Menu> }
          </div>
          <div className="cursor-pointer">
            <Button
            className="p-0 "
              onClick={() => {
                router.push("/wishlist");
              }}
            >
              <LikeI className="h-5 w-5" />
            </Button>
          </div>
          <div className="cursor-pointer">
            <Button onClick={() => handleRe()} className="p-0">
            
              <CartI className="h-5 w-5" />
            </Button>
          </div>
          {open && <SideDrawer user={user} />}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
