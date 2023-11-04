import React from "react";
import SideBarOpen from "./SideBarOpen/SideBarOpen.js";
import SideBarClose from "./SideBarClose/SideBarClose.js";
import { getState } from "../../contexts/ContextController.js";
import { useAppSelector } from "../../store/hooks.js";
import { settingSelector } from "../../store/settingsSlice.js";

const SideBar = () => {
  const settingsStore = useAppSelector(settingSelector);
    return (
    <>
      {settingsStore.activeMenu ? (
        <>
          <SideBarOpen />
        </>
      ) : (
        <> 
        <SideBarClose />
        </>
      )}
    </>
  );
};

export default SideBar;
