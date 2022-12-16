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
export function autoResponse() {
  const target = document.documentElement
  target.style.fontSize = '10px'
  // 采用左开右闭
  if (target.clientWidth >= 1920) {
    console.log('PC')
  } else if (target.clientWidth > 1024 && target.clientWidth <= 1920) {
    console.log('PAD')
  } else {
    console.log('H5')
  }
  //   target.style.fontSize = `${(target.clientWidth / width) * 100}px`
}
