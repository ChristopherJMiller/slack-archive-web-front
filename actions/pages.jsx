export const UPDATE_CHANNELS = 'UPDATE_CHANNELS'
export const CHANGE_PAGE = 'CHANGE_PAGE'


export function updateChannels(channels) {
  return {
    type: UPDATE_CHANNELS,
    channels
  }
}