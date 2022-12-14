import React, { useContext } from 'react'
import { MdGTranslate } from 'react-icons/md'
import { Button } from 'reactstrap'
import LocaleContext from '../../Core/contexts/LocaleContext'

export default function LangToggle() {
  const { locale, toggleLocale } = useContext(LocaleContext)

  return (
    <Button
      type="button"
      title={locale === 'id' ? 'Indonesia' : 'English'}
      className="toggle-locale"
      onClick={toggleLocale}
    >
      <MdGTranslate />
    </Button>
  )
}
