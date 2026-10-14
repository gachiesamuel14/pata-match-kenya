import './globals.css';

export const metadata = {
  title: 'Pata Match Kenya | Location-Based Dating',
  description: 'Connect with people near you in Kenya. Location-based matchmaking for Nairobi, Mombasa, Kisumu, Kiambu and all 47 counties.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="bg-kenya-green text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Pata Match 🇰🇪</h1>
            <nav className="space-x-6">
              <a href="/" className="hover:underline">Home</a>
              <a href="/discover" className="hover:underline">Discover</a>
              <a href="#features" className="hover:underline">Features</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-kenya-black text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Pata Match Kenya. Built for Kenyans, by Kenyans.</p>
            <p className="text-sm mt-2 text-gray-400">Location-based matching • Safe • Local</p>
          </div>
        </footer>
      </body>
    </html>
  );
}