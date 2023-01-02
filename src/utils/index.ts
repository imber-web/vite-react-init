export const toggleTheme = () => {
  const style = document.documentElement.style
  if (
    !style.getPropertyValue('--theme-color') ||
    style.getPropertyValue('--theme-color') === '#000'
  ) {
    console.log('白色主题')
    style.setProperty('--theme-color', '#fff')
    style.setProperty('--theme-background', '#000')
    return
  }
  console.log('黑色主题')
  style.setProperty('--theme-color', '#000')
  style.setProperty('--theme-background', '#f5f5f5')
}
