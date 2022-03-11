import React from 'react'
import Menu from './Menu'
import Alert from './Alert'
import Banniere from '../banniere/Banniere'
export default function Header() {
  return (
    <div className='MyHeader'>
      <Alert/>
      <Menu/>
      <Banniere/>
    </div>
  )
}
