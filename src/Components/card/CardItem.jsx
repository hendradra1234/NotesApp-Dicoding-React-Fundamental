import React from 'react'
import PropTypes from 'prop-types'
import ItemTitle from '../list/body/ItemTitle'
import ItemTimestamp from '../list/body/ItemTimestamp'
import ItemBody from '../list/body/ItemBody'
import { extractContent } from '../../Utils/utility'

function CardItem({ note }) {
  return (
    <article className="note-item">
      <ItemTitle
        id={note.id}
        title={note.title}
      />
      <ItemTimestamp
        timestamp={note.createdAt}
      />
      <ItemBody
        body={extractContent(note.body)}
      />
    </article>
  )
}

CardItem.propTypes = {
  note: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default CardItem
