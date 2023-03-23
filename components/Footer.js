import Link from 'next/link'

const Footer = () => {
  return (
	  <footer className="bg-gray-100">
		<div className=" w-full mx-auto h-24 flex items-center justify-center bg-black ">
		<Link href="https://twitter.com/yzmanken">
		<img src="/twitter-white.svg" width={44} height={44}  alt="twitter link" />
		</Link>

		<Link href="http://discord.gg/gj9aXgFTp5">
		<img src="/discord-white.svg" width={44} height={44}  alt="twitter link" />
		</Link>
			<div className="text-white">© 2023 松に鶴</div>
		</div>
		</footer>
  );
};

export default Footer;
