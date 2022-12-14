import React from 'react'
import PropTypes from 'prop-types'
import CardItem from '../card/CardItem'

function NotesList({ notes }) {
  return (
    <section className="notes-list">
      {notes.map((note) => <CardItem key={note.id} note={note} />)}
    </section>
  )
}

NotesList.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.array]).isRequired
}

export default NotesList
