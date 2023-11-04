import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { links } from '../../../assets/dummy';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {ISettings, settingSelector, toggleSettings} from '../../../store/settingsSlice'

const SideBarClose = () => {

  const settingsStore = useAppSelector(settingSelector);
  const dispatch = useAppDispatch();
    const activeLink: string =
    "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink: string =
    "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <>
    <div className="dark:bg-main-dark-bg h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-white  w-20 shadow-lg">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          onClick={() => {}}
          className="items-center justify-center gap-3 ml-3 mt-4 flex  text-xl font-extrabold tracking-tighter dark:text-white text-slate-900"
        >
          <MdOutlineSpaceDashboard /><span style={{visibility: 'hidden'}}>CRM</span>
        </Link>
      </div>

      <div className="mt-10">
        {links.map((items) => (
          <div key={items.titleClose}>
            <p className="text-gray-400 m-3 mt-4 uppercase">
              {items.titleClose}
            </p>
            {items.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={() => {}}
                style={({isActive}) => ({
                  backgroundColor: isActive? settingsStore.currentColor : '',
                  color: isActive? 'white' : ''
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <div className="flex gap-4 items-center">
                  {link.icon}
                  <span className="capitalize" style={{visibility: 'hidden'}}>{link.name}</span>
                </div>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-4 left-7">
      <TooltipComponent content="Menu" position="BottomCenter">
        <button
          onClick={() => {
            const key: keyof ISettings = "activeMenu"
            dispatch(toggleSettings(key))}}
          type="button"
          className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block "
        >
          <AiOutlineRight />
        </button>
      </TooltipComponent>
    </div>
  </>
  )
}

export default SideBarClose