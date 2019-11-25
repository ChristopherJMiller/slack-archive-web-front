export const CHANGE_THEME = 'CHANGE_THEME'
export const THEME_COOKIE = 'theme'

export function changeTheme(id, setCookie) {
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  setCookie(THEME_COOKIE, id, { expires: nextWeek })
  return {
    type: CHANGE_THEME,
    id
  }
}