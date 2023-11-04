import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ISettingsJustBooleanValues {
  chat: boolean;
  cart: boolean;
  activeMenu: boolean;
  userProfile: boolean;
  settingsRight: boolean;
  notification: boolean;
}
export interface ISettings {
    chat: boolean;
    cart: boolean;
    activeMenu: boolean;
    userProfile: boolean;
    settingsRight: boolean;
    notification: boolean;
    currentColor: string;
    currentMode: string;
}
const initialState: ISettings = {
    chat: false,
    cart: false,
    activeMenu: true,
    userProfile: false,
    settingsRight: false,
    notification: false,
    currentColor: '#03C9D7',
    currentMode: 'Light',

}

function isValidKey(key: keyof ISettings): key is keyof ISettings {
  return key in initialState;
}

// const k = ["chat", "cart", "activeMenu", "userProfile", "settingsRight", "notification"] keyof ISettings
export const settingsSlice = createSlice({
  name: "toggleNavbar",
  initialState,
  reducers: {

    toggleSettings: (state, action: PayloadAction<keyof ISettingsJustBooleanValues>) => {
      state[action.payload] = !state[action.payload]
    },
    setThemeMode: (state, action: PayloadAction<string>) => {
      state.currentMode = action.payload
      console.log('in der thememode')
    },
    setThemeColor: (state, action: PayloadAction<string>) => {
      state.currentColor = action.payload
    }
  },
});
export const { toggleSettings, setThemeColor, setThemeMode} = settingsSlice.actions;
export const settingSelector = (state: RootState) => state.settingsReducer;
export default settingsSlice.reducer;