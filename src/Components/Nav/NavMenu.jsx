import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AuthContext from '../../Core/contexts/AuthContext'
import useLanguage from '../../Core/hooks/useLanguage'
import LangToggle from '../Toggle/LangToggle'
import LogoutButton from '../Button/LogoutButton'
import ThemeToggle from '../Toggle/ThemeToggle'

export default function NavMenu() {
  const { auth } = useContext(AuthContext)
  const { pathname } = useLocation()
  const text = useLanguage('app')

  return (
    <>
      {
        auth ? (
          <nav className="navigation">
            <ul>
              <li>
                {
                  pathname !== '/archives' ? (
                    <Link
                      to="/archives"
                      title={text.nav.archives}
                    >
                      {text.nav.archives}
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      title={text.nav.archives}
                    >
                      {text.nav.home}
                    </Link>
                  )
                }
              </li>
            </ul>
          </nav>
        ) : ''
      }
      <LangToggle />
      <ThemeToggle />
      <LogoutButton />
    </>
  )
}
