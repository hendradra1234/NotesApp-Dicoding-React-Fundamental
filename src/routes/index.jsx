import { useRoutes } from 'react-router-dom'
import { ArchivesElement, DetailPagesElement,
  HomeElement, LoginElement,
  NewPagesElement, NotesElement,
  NotFoundElement, RegisterElement } from './element'

const Routes = () => useRoutes([
  {
    path: '/',
    element: HomeElement()
  },
  {
    path: '/login',
    element: LoginElement()
  },
  {
    path: '/register',
    element: RegisterElement()
  },
  {
    path: '/archives',
    element: ArchivesElement()
  },
  {
    path: '/notes',
    element: NotesElement()
  },
  {
    path: '/notes/new',
    element: NewPagesElement()
  },
  {
    path: '/notes/:id',
    element: DetailPagesElement()
  },
  {
    path: '/*',
    element: NotFoundElement()
  }
])

export default Routes
