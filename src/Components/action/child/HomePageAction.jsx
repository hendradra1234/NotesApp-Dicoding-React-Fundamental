import { navigateNewPageHandler } from '../../../Core/nav/Navigation'
import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import PageAction from '../parrent/PageAction'

export default function HomePageAction() {
  const navigate = useNavigate()

  return (
    <PageAction page="homepage">
      <Button
        className="action"
        type="button"
        title="Add"
        onClick={() => navigateNewPageHandler(navigate)}
      >
        <HiPlus />
      </Button>
    </PageAction>
  )
}
