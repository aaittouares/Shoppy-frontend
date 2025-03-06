import getMe from './get-me'

export default async function Home() {
  const me = await getMe()
  console.log(me)

  return <h1>Page Home</h1>
}
