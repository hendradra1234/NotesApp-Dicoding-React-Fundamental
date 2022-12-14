import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

function RouteCoreMiddleware({ children, middleware }) {
  const { auth } = useContext(AuthContext)
  const location = useLocation()

  const listMiddleware = ['auth', 'public']

  if (!listMiddleware.includes(middleware)) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (middleware === 'auth' && !auth) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  if (middleware === 'public' && auth) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}

RouteCoreMiddleware.propTypes = {
  children: PropTypes.element.isRequired,
  middleware: PropTypes.string.isRequired
}

export default RouteCoreMiddleware
