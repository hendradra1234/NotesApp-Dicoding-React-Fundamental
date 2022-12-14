import React from 'react'
import useLanguage from '../../Core/hooks/useLanguage'

export default function LoadingIndicator() {
  const text = useLanguage('app')

  return (
    <p className='loading-indicator'>{ text.msg.loading }</p>
  )
}