'use client'
import React from "react"
import WishListSec from "@components/WishList"
import HeaderSection from "@components/HeaderSection"

const page = () => {
    return(
        <div>
            <HeaderSection pageName="WishList" />
            <WishListSec/>
        </div>
    )

}

export default page