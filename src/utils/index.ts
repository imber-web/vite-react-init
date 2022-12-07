export const toggleTheme = () => {
  const style = document.documentElement.style
  if (
    !style.getPropertyValue('--theme-color') ||
    style.getPropertyValue('--theme-color') === '#000'
  ) {
    console.log(1)
    style.setProperty('--theme-color', '#fff')
    style.setProperty('--theme-background', '#000')
    return
  }
  console.log(2)
  style.setProperty('--theme-color', '#000')
  style.setProperty('--theme-background', '#f5f5f5')
}
