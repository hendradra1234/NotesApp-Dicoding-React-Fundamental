import React from 'react'
import { GrSun } from 'react-icons/gr'
import { IoMdMoon } from 'react-icons/io'
import { Button } from 'reactstrap'
import useTheme from '../../Core/hooks/useTheme'

export default function ThemeToggle() {
  const [theme, changeTheme] = useTheme()

  return (
    <Button
      type="button"
      className="toggle-theme"
      onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {
        theme === 'dark' ? <IoMdMoon /> : <GrSun />
      }
    </Button>
  )
}

