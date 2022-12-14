import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddNewPageAction from '../../Components/action/child/AddNewPageAction'
import { addNote } from '../../Core/Data/NetworkData'
import useInput from '../../Core/hooks/useInput'
import useLanguage from '../../Core/hooks/useLanguage'
import { Input } from 'reactstrap'
import { navigateHomePageHandler } from '../../Core/nav/Navigation'

export default function NewPages() {
  const textApp = useLanguage('app')
  const textNote = useLanguage('notesNew')
  const navigate = useNavigate()
  const [ title, setTitle ] = useInput('')
  const [ body, setBody ] = useInput('')

  const saveHandle = () => {
    console.log({ title, body })
    addNote({ title, body })
      .then((res) => {
        if (!res.error) {
          alert(textNote.msgSuccess)
          navigateHomePageHandler(navigate)
        }
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
  }

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <Input
          className="add-new-page__input__title"
          placeholder={textNote.titlePlaceholder}
          value={title}
          onChange={setTitle}
        />
        <Input
          className="add-new-page__input__body"
          placeholder="Description"
          type={"textarea"}
          value={body}
          onChange={setBody}
        />
      </div>
      <AddNewPageAction
        saveHandle={saveHandle}
      />
    </section>

  )
}
