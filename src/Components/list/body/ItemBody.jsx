import React from 'react'
import PropTypes from 'prop-types'
import { extractContent } from '../../../Utils/utility'

export default function ItemBody({ body }) {
  return (
    <p className="note-item__body">
      { extractContent(body) }
    </p>
  )
}

ItemBody.propTypes = {
  body: PropTypes.string.isRequired
}
