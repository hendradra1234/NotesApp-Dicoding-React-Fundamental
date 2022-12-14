import React from 'react'
import PropTypes from 'prop-types'
import { HiOutlineTrash } from 'react-icons/hi'
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi'
import PageAction from '../parrent/PageAction'
import { Button } from 'reactstrap'

function DetailPageAction({
  archived, archiveHandle, deleteHandle
}) {
  return (
    <PageAction page="detail-page">
      <>
        <Button
          className="action"
          type="button"
          title={archived ? 'Restore' : 'Archive'}
          onClick={() => archiveHandle()}
        >
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </Button>
        <Button
          className="action"
          type="button"
          title="Delete"
          onClick={() => deleteHandle()}
        >
          <HiOutlineTrash />
        </Button>
      </>
    </PageAction>
  )
}

DetailPageAction.propTypes = {
  archived: PropTypes.bool.isRequired,
  archiveHandle: PropTypes.func.isRequired,
  deleteHandle: PropTypes.func.isRequired
}

export default DetailPageAction
