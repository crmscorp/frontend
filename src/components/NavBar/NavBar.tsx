import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../../assets/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "..";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { settingSelector, toggleSettings } from "../../store/settingsSlice";

interface INavButton {
  title: string;
  customFunc: any;
  icon: any;
  dotColor: string;
}

const NavButton: ({
  title,
  customFunc,
  icon,
  dotColor,
}: INavButton) => JSX.Element = ({ title, customFunc, icon, dotColor }) => {
  const settingsStore = useAppSelector(settingSelector);
  return(
    <TooltipComponent content={title} position="BottomCenter">
    <button onClick={customFunc} style={{color:   settingsStore.currentColor}} className="relative text-xl rounded-full p-3">
      <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 hover:bg-light-gray shadow-md" />
      {icon}
    </button>
      </TooltipComponent>
  )

};

const NavBar = () => {

  return (
    <div className="flex justify-end px-6 py-3 relative dark:bg-main-dark-bg  bg-white">
      <div className="flex gap-6">
      <NavButton title="Notification" customFunc={() => toggleSettings('notification')}  icon={<RiNotification3Fill />} dotColor="green" key={"Notification"} />
      <TooltipComponent content="Profile" position="BottomCenter">
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray dark:hover:bg-secondary-dark-bg rounded-lg justify-center "
        onClick={() => toggleSettings('userProfile')}
        >
          <img src={avatar} className="rounded-full w-8 h-8"/>
          <p>
            <span className="text-gray-400 text-14">Hi, </span>
            <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </TooltipComponent>
      </div>
    </div>
  );
};

export default NavBar;
