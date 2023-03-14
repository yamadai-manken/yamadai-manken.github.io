import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/">
          <a>山形大学工学部漫研　松に鶴</a>
        </Link>
        <div>Link</div>
      </div>
    </header>
  );
};

export default Header;
