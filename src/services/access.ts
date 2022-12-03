import localforage from 'localforage'
export async function getAccess() {
  const data = ['p', 'p1', 'p2']
  await localforage.setItem('access', data)
  const item = await localforage.getItem('access')
  return item
}
