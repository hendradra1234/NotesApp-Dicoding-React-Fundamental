import React, { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import HomepageAction from '../../Components/action/child/HomePageAction'
import { getActiveNotes } from '../../Core/Data/NetworkData'
import useInput from '../../Core/hooks/useInput'
import useLanguage from '../../Core/hooks/useLanguage'
import { NoteListDialog } from '../PageChildren/NoteListDialog'

export default function HomePages() {
  const [dataNotes, setDataNotes] = useState([])
  const [initNotes, setInitNotes] = useState(false)
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useInput('')
  const textApp = useLanguage('app')
  const textNote = useLanguage('note')

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

  const initNotesFromApi = () => {
    getActiveNotes()
      .then((res) => {
        if (!res.error) {
          setDataNotes(res.data)
          setNotes(res.data)
          setInitNotes(true)
          setLoading(false)
        }
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
  }

  return (
    <section className="homepage">
      <h2>{ textNote.header }</h2>
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
