import { useState } from 'react'
import { setThemeGlobal } from '../Data/LocalStorage'

export default function useTheme() {
  const [theme, setTheme] = useState('dark')

  const changeTheme = (val) => {
    setTheme(val)
    const root = window.document.documentElement
    root.setAttribute('data-theme', val)
    setThemeGlobal(val)
  }
  return [theme, changeTheme]
}
