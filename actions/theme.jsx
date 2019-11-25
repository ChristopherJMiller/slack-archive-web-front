export const CHANGE_THEME = 'CHANGE_THEME'
export const CHANGE_SHADE = 'CHANGE_SHADE'
export const THEME_COOKIE = 'theme'
export const SHADE_COOKIE = 'shade'

export function changeTheme(id, setCookie) {
  const today = new Date()
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
  setCookie(THEME_COOKIE, id, { expires: nextWeek })
  return {
    type: CHANGE_THEME,
    id
  }
}

export function changeShade(shade, setCookie) {
  const today = new Date()
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
  setCookie(SHADE_COOKIE, shade, { expires: nextWeek })
  return {
    type: CHANGE_SHADE,
    dark: shade
  }
}