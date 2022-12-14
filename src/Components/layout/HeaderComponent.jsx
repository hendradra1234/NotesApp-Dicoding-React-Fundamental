import React from 'react'
import { Link } from 'react-router-dom'
import useLanguage from '../../Core/hooks/useLanguage'
import NavMenu from '../Nav/NavMenu'

export default function HeaderComponent() {
  const text = useLanguage('app')

  return (
    <header>
      <h1>
        <Link to="/">{text.title}</Link>
      </h1>
      <NavMenu />
    </header>
  )
}
