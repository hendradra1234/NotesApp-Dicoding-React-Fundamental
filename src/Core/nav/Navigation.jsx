export function navigateNewPageHandler(navigate, nav = true) {
  const route = '/notes/new'
  if (!nav) {
      return route
  }
  return navigate(route)
}

export function navigateHomePageHandler(navigate, nav = true) {
  const route = '/'
  if (!nav) {
      return route
  }
  return navigate(route)
}

export function navigateDetailPageHandler(navigate, id, nav = true) {
  const route = `/notes/${id}`
  if (!nav) {
      return route
  }
  return navigate(route)
}

export function navigateArchivePageHandler(navigate, nav = true) {
  const route = '/archives'
  if (!nav) {
      return route
  }
  return navigate(route)
}