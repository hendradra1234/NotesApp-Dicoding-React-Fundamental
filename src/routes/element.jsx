import React from 'react'
import { Navigate } from 'react-router-dom'
import RouteCoreMiddleware from '../Core/middleware/RouteCoreMiddleware'
import HomePages from '../Layouts/Main/HomePages'
import ArchivesPage from '../Layouts/Main/ArchivesPages'
import LoginPages from '../Layouts/User/LoginPages'
import NotFoundPages from '../Components/ErrorHandler/handler/NotFoundHandler'
import NewPages from '../Layouts/Main/NewPages'
import DetailPages from '../Layouts/Main/DetailPages'
import RegisterPages from '../Layouts/User/RegisterPages'

export function HomeElement() {
    return (
      <RouteCoreMiddleware middleware="auth">
        <HomePages />
      </RouteCoreMiddleware>
    )
}

export function LoginElement() {
    return (
      <RouteCoreMiddleware middleware="public">
        <LoginPages />
      </RouteCoreMiddleware>
    )
}

export function RegisterElement() {
    return (
      <RouteCoreMiddleware middleware="public">
        <RegisterPages />
      </RouteCoreMiddleware>
    )
}

export function ArchivesElement() {
    return (
      <RouteCoreMiddleware middleware="auth">
        <ArchivesPage />
      </RouteCoreMiddleware>
    )
}

export function NotesElement() {
    return (
      <RouteCoreMiddleware middleware="auth">
        <Navigate to="/" replace />
      </RouteCoreMiddleware>
    )
}

export function NewPagesElement() {
    return (
      <RouteCoreMiddleware middleware="auth">
        <NewPages />
      </RouteCoreMiddleware>
    )
}

export function DetailPagesElement() {
    return (
      <RouteCoreMiddleware middleware="auth">
        <DetailPages />
      </RouteCoreMiddleware>
    )
}

export function NotFoundElement() {
    return (
      <RouteCoreMiddleware middleware="auth">
        <NotFoundPages />
      </RouteCoreMiddleware>
    )
}