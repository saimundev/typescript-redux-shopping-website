import React from 'react'

interface IContainer{
    children:React.ReactNode
}

const Container:React.FC<IContainer>=({children}) => {
  return (
    <div className='container mx-auto px-6 md:px-12'>
        {children}
    </div>
  )
}

export default Container