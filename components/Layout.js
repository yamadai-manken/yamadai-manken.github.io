import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-1 max-w-4xl w-full mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
