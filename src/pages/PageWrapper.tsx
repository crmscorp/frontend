import React from 'react'
import { Header } from "../components";
interface IPageWrapper {
    children: React.ReactNode,
    title: string,
    categorie: string
    
}
const PageWrapper: ({children, title, categorie}: IPageWrapper) => JSX.Element = ({children, title, categorie}) => {

  return (
    <div className="m-2 dark:bg-main-dark-bg p-4 bg-white  max-h-909  overflow-scroll">
    <Header category={categorie} title={title} />
    {children}
    </div>
  )
}

export default PageWrapper