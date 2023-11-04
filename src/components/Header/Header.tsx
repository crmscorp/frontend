import React from 'react'
import { useAppSelector } from '../../store/hooks';
import { settingSelector } from '../../store/settingsSlice';

interface IHeader {
  title: string,
  category: string
}

const Header: ({title, category}:IHeader) => JSX.Element = ({title, category}) => {
  const settingsStore = useAppSelector(settingSelector);
  return (
    <div className='mb-10'>
      <p  className='text-gray-400'>
        {category}
      </p>
      <p style={{color: settingsStore.currentColor}}className='text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
    </div>
  )
}

export default Header