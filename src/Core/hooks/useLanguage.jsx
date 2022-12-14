import { useContext } from 'react'
import LocaleContext from '../contexts/LocaleContext'
import content from '../../Utils/Content'

export default function useLanguage(page) {
  const { locale } = useContext(LocaleContext)

  return content[`${page}Page`][locale]
}

