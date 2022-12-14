import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../Core/contexts/AuthContext'
import useInput from '../../Core/hooks/useInput'
import useLanguage from '../../Core/hooks/useLanguage'
import { getUserLogged, login, putAccessToken } from '../../Core/Data/NetworkData'
import { Button, Input, Label } from 'reactstrap'
import { navigateHomePageHandler } from '../../Core/nav/Navigation'

export default function LoginPages() {
  const { setAuth } = useContext(AuthContext)
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const navigate = useNavigate()
  const textApp = useLanguage('app')
  const textLogin = useLanguage('login')

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
      .then((res) => {
        if (!res.error) {
          putAccessToken(res.data.accessToken)
          getUserLogged()
            .then((res) => {
              if (!res.error) {
                setAuth(res.data)
              } else {
                setAuth(null)
              }
              navigateHomePageHandler(navigate)
            })
            .catch(() => {
              alert(textApp.msg.error)
            })
        }
      })
  }

  return (
    <section className="login-page">
      <h2>{textLogin.header}</h2>
      <form className="input-login" onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          minLength="6"
          maxLength="255"
          onChange={onEmailChange}
          required
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          minLength="6"
          maxLength="255"
          onChange={onPasswordChange}
          required
        />
        <Button type="submit">Login</Button>
      </form>
      <p className="login-page__footer">
        { textLogin.footer }
        {' '}
        <Link to="/register">{ textLogin.footerRegisterLink }</Link>
      </p>
    </section>
  )
}
