import Link from 'next/link'

const Index = () => {
  return (
    <> 
      <h1 class="text-4xl text-green-700 text-center font-semibold">Hello Tailwind</h1>
      <div>テストページ</div>
      <Link href="/linkSample">link Sample Page</Link>
    </>
  )
}

export default Index
