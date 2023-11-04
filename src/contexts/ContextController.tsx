import { useContext } from "react";
import { IdefaultValueState, StateContext } from "./ContextProvider";
import {IinitialState} from './ContextProvider'



export const getState: () => IdefaultValueState = () => {
    const {values, setContextState} = useContext<IinitialState>(StateContext)
    return values;
}

export const toggleSidebar: () => void = () => {
    const {values, setContextState} = useContext<IinitialState>(StateContext)
    setContextState({ ...values, activeMenu: !values.activeMenu });
}
