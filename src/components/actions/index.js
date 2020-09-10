export const selectLibrary = (current, next) => {
  return {
    type: "select_library",
    payload: {current, next}
  }
}
