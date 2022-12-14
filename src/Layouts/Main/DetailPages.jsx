/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'
import parser from 'html-react-parser'
import DetailPageAction from '../../Components/action/child/DetailPageAction'
import NotFoundMessage from '../../Components/ErrorHandler/message/NotFoundMessage'
import { navigateHomePageHandler,
  navigateArchivePageHandler } from '../../Core/nav/Navigation'
import {
  archiveNote, deleteNote, getNote, unarchiveNote
} from '../../Core/Data/NetworkData'
import LoadingIndicator from '../../Components/layout/LoadingIndicator'
import useLanguage from '../../Core/hooks/useLanguage'
import { FormatDateHandler } from '../../Utils/utility'

export default function DetailPages() {
  const [loading, setLoading] = useState(true)
  const [note, setNote] = useState({})
  const { id } = useParams()
  const textApp = useLanguage('app')
  const textNote = useLanguage('notesId')
  const navigate = useNavigate()

  useEffect(() => {
    getNote(id)
      .then((res) => {
        if (!res.error) {
          setNote(res.data)
        } else {
          alert(textNote.notFound)
        }
        setLoading(false)
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
  }, [id, textApp.msg.error, textNote.notFound])


  const archiveHandle = () => {
    if (confirm(textApp.msg.confirm)) {
      let methods = null
      let navigateTo = navigateHomePageHandler(navigate, false)
      if (note.archived) {
        methods = unarchiveNote(id)
        navigateTo = navigateArchivePageHandler(navigate, false)
      } else {
        methods = archiveNote(id)
      }
      methods
        .then((res) => {
          if (!res.error) {
            navigate(navigateTo)
          }
        })
        .catch(() => {
          alert(textApp.msg.error)
        })
    }
  }

  const deleteHandle = () => {
    if (confirm(textApp.msg.confirm)) {
      deleteNote(id).then(res => {
        if (!res.error) {
          navigateHomePageHandler(navigate)
        }
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
    }
  }

  return (
    <section className="detail-page">
      { ('id' in note && !loading) ? (
        <>
          <Link
            to="/"
            title={textApp.back}
          >
            <HiArrowLeft />
            {' '}
            { textApp.back }
          </Link>
          <h3 className="detail-page__title">
            { note.title }
          </h3>
          <p className="detail-page__createdAt">
            {FormatDateHandler(note.createdAt)}
          </p>
          <div className="detail-page__body">
            { parser(note.body) }
          </div>
          <DetailPageAction
            archived={note.archived || false}
            archiveHandle={archiveHandle}
            deleteHandle={deleteHandle}
          />
        </>
      ) : ''}
      {(!('id' in note) && !loading) ? <NotFoundMessage /> : ''}
      {loading ? <LoadingIndicator /> : ''}
    </section>
  )
}
