import React, { useEffect, useState } from 'react'
import HomepageAction from '../../Components/action/child/HomePageAction'
import useInput from '../../Core/hooks/useInput'
import useLanguage from '../../Core/hooks/useLanguage'
import { appPage } from '../../Utils/Content'
import { getArchivedNotes } from '../../Core/Data/NetworkData'
import { NoteListDialog } from '../PageChildren/NoteListDialog'
import { Input } from 'reactstrap'

export default function ArchivesPages() {
  const [dataNotes, setDataNotes] = useState([])
  const [initNotes, setInitNotes] = useState(false)
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useInput('')
  const text = useLanguage('archive')
  const textNote = useLanguage('note')

  const initNotesFromApi = () => {
    getArchivedNotes()
      .then((res) => {
        if (!res.error) {
          setDataNotes(res.data)
          setNotes(res.data)
          setInitNotes(true)
          setLoading(false)
        }
      })
      .catch(() => {
        // eslint-disable-next-line no-undef
        alert(appPage[locale].msg.error)
      })
  }

  useEffect(() => {
    if (!initNotes) {
      initNotesFromApi()
    }

    if (initNotes) {
      let tempDataNotes = [...dataNotes]
      if (search !== '') {
        tempDataNotes = tempDataNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
      }
      setNotes(tempDataNotes)
    }
  }, [search, dataNotes, initNotes])

  return (
    <section className="homepage">
      <h2>{ text.header }</h2>
      <section className="search-bar">
        <Input
          type="text"
          placeholder={textNote.searchPlaceholder}
          value={search}
          onChange={setSearch}
        />
      </section>
      <NoteListDialog
        notes = {notes}
        loading = {loading}
      />
      <HomepageAction />
    </section>
  )
}
