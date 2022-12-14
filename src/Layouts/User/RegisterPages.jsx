import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../../Core/hooks/useInput'
import useLanguage from '../../Core/hooks/useLanguage'
import { register } from '../../Core/Data/NetworkData'
import { Button, Input, Label } from 'reactstrap'

export default function RegisterPages() {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [confirmPassword, onConfirmPasswordChange] = useInput('')

  const navigate = useNavigate()

  const textApp = useLanguage('app')
  const textRegister = useLanguage('register')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Konfirmasi password tidak sesuai')
    }

    register({ name, email, password })
      .then((res) => {
        if (!res.error) {
          alert(textRegister.msg.registerSuccess)
          navigate('/login')
        }
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
  }

  return (
    <section className="register-page">
      <h2>{ textRegister.header }</h2>
      <form className="input-register" onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          minLength="6"
          maxLength="255"
          required
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          minLength="6"
          maxLength="255"
          required
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          minLength="6"
          maxLength="255"
          required
        />
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          minLength="6"
          maxLength="255"
          required
        />
        <Button type="submit">Register</Button>
      </form>
      <p className="register-page__footer">
        { textRegister.footer }
        {' '}
        <Link to="/login">{ textRegister.footerLoginLink }</Link>
      </p>
    </section>
  )
}
