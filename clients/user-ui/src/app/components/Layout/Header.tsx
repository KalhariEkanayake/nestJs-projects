import React from "react";
import { Avatar } from "@nextui-org/avatar";
import styles from "../../../utils/style";
import NavItems from "./NavItems";
import ProfileDropDown from "./ProfileDropDown";

const Header = () => {
    return (
        <header className="w-full h-[80px] bg-[#0F1524] flex items-center">
            <div className="w-[90%] m-auto flex items-center justify-between">
                <h1 className={`${styles.logo}`}>
                Food-Delivery
                </h1>
                <NavItems />
                <ProfileDropDown />
            </div>
        </header>
    )
}

export default Header;