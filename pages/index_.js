import Link from 'next/link'

const Index = () => {
  return (

<div class="container border-3  border-black">
  <div class="flex flex-col  justify-center">
      
      <div class="flex-1 border-2 border-black  w-[300px] h-[600px] text-black ">

        
       <div class="  border-2 border-black  vertical-rl text-black">what is <br></br> 山大漫研</div>

      </div>    

      <div class=" flex-1 border-2 border-black w-[300px] h-[600px] text-center text-white p-2 m-1 ">
        Q&A
      </div>

      </div>


      <Link href="/linkSample">link Sample Page</Link>

</div>
  )
}

export default Index
