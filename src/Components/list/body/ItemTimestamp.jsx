import React from 'react'
import PropTypes from 'prop-types'
import { FormatDateHandler } from '../../../Utils/utility'

export default function ItemTimestamp({ timestamp }) {
  return (
    <p className="note-item__createdAt">
      { FormatDateHandler(timestamp) }
    </p>
  )
}

ItemTimestamp.propTypes = {
  timestamp: PropTypes.string.isRequired
}
