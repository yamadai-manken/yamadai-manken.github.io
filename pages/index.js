import Link from 'next/link'

const Index = () => {
  return (
    <> 
	  <div class="text-center mt-10">
		    <p className="text-purple-100">fontの色</p>
		    <p className='text-green-200'>fontの色</p>
		    <p class="text-green-300">fontの色</p>
		    <p class="text-green-400">fontの色</p>
		    <p class="text-green-500">fontの色</p>
		    <p class="text-green-600">fontの色</p>
		    <p class="text-green-700">fontの色</p>
		    <p class="text-green-800">fontの色</p>
		    <p class="text-green-900">fontの色</p>
	</div>

      <h1 class="text-4xl text-green-700 text-center font-semibold">Hello Tailwind</h1>
      <div>テストページ</div>
      <Link href="/linkSample">link Sample Page</Link>
    </>
  )
}

export default Index
