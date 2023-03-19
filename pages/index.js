import Link from 'next/link'

const Index = () => {
  return (

<div class="container border-2 border-black">
  <div class="border-r-2 mr-[35vw] border-black">test</div>
  <div class="flex">
      <div class="flex-1 bg-blue-400 text-center text-white p-2 m-1 after:[border-r-8 mr-10 border-black] ">
      </div>

      <div class="flex-1 bg-white-400 text-center text-black p-2 m-1 ">

        <ul >
          <li>現在は約23人により構成されている</li>
          <li>対面での活動、discordを使用したオンラインの活動を併用している</li>
          <li>アニメや漫画,ゲーム,ラノベなどが好きなメンバーが多い</li>
        </ul>
        
       <div class="border-2 border-black  vertical-rl text-black ">what is <br></br> 山大漫研</div>

      </div>    
      </div>


      <Link href="/linkSample">link Sample Page</Link>

</div>
  )
}

export default Index
