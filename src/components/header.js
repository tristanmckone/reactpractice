import React from 'react'
import Button from './Button'

const Header = () => {
  const onClick = () =>
  {
    console.log('Click')
  }
  return (
    <header className='headerName'>
        <h1>
            
           Tasks 
        </h1>
        <Button color='red' text='Add'
        onClick= {onClick} />
        
    </header>
  )
}

export default Header