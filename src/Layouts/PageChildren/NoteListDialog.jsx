import ListEmptyHandler from "../../Components/ErrorHandler/handler/ListEmptyHandler"
import NotesList from "../../Components/list/NotesList"
import PropTypes from 'prop-types'
import LoadingIndicator from "../../Components/layout/LoadingIndicator"

export function NoteListDialog({notes, loading}) {
    return (
        <>
            {(notes.length > 0 && !loading) ? <NotesList notes={notes} /> : ''}
            {(notes.length === 0 && !loading) ? <ListEmptyHandler /> : ''}
            {loading ? <LoadingIndicator/> : ''}
        </>
    )
}

NoteListDialog.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.array]).isRequired,
  loading: PropTypes.bool.isRequired
}