import React, { useEffect, useMemo, useState } from 'react'
import Routes from './routes'
import LocaleContext from './Core/contexts/LocaleContext'
import AuthContext from './Core/contexts/AuthContext'
import { getUserLogged } from './Core/Data/NetworkData'
import LoadingIndicator from './Components/layout/LoadingIndicator'
import HeaderComponent from './Components/layout/HeaderComponent'
import ThemeContext from './Core/contexts/ThemeContext'
import useTheme from './Core/hooks/useTheme'

export default function AppCore() {
  const [auth, setAuth] = useState(null)
  const [locale, setLocale] = useState('id')
  const [theme, changeTheme] = useTheme()
  const [loading, setLoading] = useState(true)

  const toggleLocale = () => {
    localStorage.setItem('locale', (locale === 'id' ? 'en' : 'id'))
    setLocale((prevLocale) => (prevLocale === 'id' ? 'en' : 'id'))
  }

  useEffect(() => {
    getUserLogged()
      .then((res) => {
        if (!res.error) {
          setAuth(res.data)
        } else {
          setAuth(null)
        }
        setLoading(false)
      })
      .catch(() => {
        alert('Error')
      })

    if (localStorage.locale && ['id', 'en'].includes(localStorage.locale)) {
      setLocale(localStorage.locale)
    }

    if (localStorage.theme) {
      changeTheme(localStorage.theme)
    } else {
      localStorage.setItem('theme', 'dark')
      changeTheme('dark')
    }
  }, [])

  const localeContextValue = useMemo(() => ({
    locale,
    toggleLocale
  }), [locale])

  const authContextValue = useMemo(() => ({
    auth,
    setAuth
  }), [auth])

  const themeContextValue = useMemo(() => ({
    theme,
    changeTheme
  }), [auth])

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <AuthContext.Provider value={authContextValue}>
          <div className="app-container">
            <HeaderComponent />
            <main>
              {
                loading ? (
                  <LoadingIndicator />
                ) : (
                  <Routes />
                )
              }
            </main>
          </div>
        </AuthContext.Provider>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  )
}
