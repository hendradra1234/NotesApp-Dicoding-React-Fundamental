/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react'
import { MdLogout } from 'react-icons/md'
import { Button } from 'reactstrap'
import AuthContext from '../../Core/contexts/AuthContext'
import useLanguage from '../../Core/hooks/useLanguage'

export default function LogoutButton() {
  const { auth } = useContext(AuthContext)
  const text = useLanguage('app')

  const handleLogout = () => {
    if (confirm(text.msg.confirm)) {
      localStorage.removeItem('accessToken')
      window.location = '/'
    }
  }

  return (
    <>
    {
      auth ? (
        <Button
          type="button"
          title="Logout"
          className="button-logout"
          onClick={handleLogout}
        >
          <MdLogout />
        </Button>
      ) : ''
    }
    </>
  )
}
