import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

import './settingsButton.scss'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { settingSelector, toggleSettings } from "../../store/settingsSlice";


const SettingsButton = () => {
  const dispatch = useAppDispatch();
  const settingsStore = useAppSelector(settingSelector);
  return (
      <div className="fixed right-5 bottom-4 setting_container_inner">
        <TooltipComponent content="Settings" position="TopCenter">
          <button style={{backgroundColor: settingsStore.currentColor}} className="settings_button text-3xl p-3 hover:drop-shadow-xl text-white hover:bg-light-gray" onClick={() => dispatch(toggleSettings("settingsRight"))}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
    </div>
  );
};

export default SettingsButton;
