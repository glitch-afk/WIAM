import React from 'react'

interface IDefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
  return <div>{children}</div>
}

export default DefaultLayout
