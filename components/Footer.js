import Image from 'next/image'
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className=" w-full mx-auto h-24 flex items-center justify-center bg-black ">
	<Link href="https://twitter.com/yzmanken">
	  <Image src="/twitter-white.svg" width={64} height={64}  alt="twitter link" />
	</Link>
        <div className="text-white">© 2023 松に鶴</div>
      </div>
    </footer>
  );
};

export default Footer;
