import React from 'react'
import PropTypes from 'prop-types'
import { HiX, HiCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import PageAction from '../parrent/PageAction'
import { Button } from 'reactstrap'
import { navigateHomePageHandler } from '../../../Core/nav/Navigation'

function AddNewPageAction({ saveHandle }) {
  const navigate = useNavigate()

  return (
    <PageAction page="add-new-page">
      <>
        <Button
          className="action"
          type="button"
          title="Back"
          onClick={() => navigateHomePageHandler(navigate)}
        >
          <HiX />
        </Button>
        <Button
          className="action"
          type="button"
          title="Add"
          onClick={() => saveHandle()}
        >
          <HiCheck />
        </Button>
      </>
    </PageAction>
  )
}

AddNewPageAction.propTypes = {
  saveHandle: PropTypes.func.isRequired
}

export default AddNewPageAction
