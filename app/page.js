export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-kenya-green to-kenya-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Match Nearby in Kenya
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Location-based dating for Nairobi, Mombasa, Kisumu, Kiambu and all 47 counties.
            Swipe, match, and chat with people close to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/discover"
              className="bg-kenya-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition"
            >
              Start Discovering
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-white hover:bg-white hover:text-kenya-green font-bold py-3 px-8 rounded-full text-lg transition"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How Location-Based Matching Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Share Location</h3>
            <p>Allow GPS access. We show people within your preferred distance (e.g. 5–50 km) or by county.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">👍</div>
            <h3 className="text-xl font-bold mb-2">Swipe & Match</h3>
            <p>Like profiles. When both people like each other, it’s a match and you can start chatting.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">Chat Safely</h3>
            <p>Real-time chat, photo verification ideas, report system, and filters for age, interests, tribe, religion, etc.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Built for Kenya</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Core Features</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>User registration & login</li>
                <li>Profile with photos, bio, interests</li>
                <li>GPS location + distance calculation</li>
                <li>Swipe / like / match</li>
                <li>Real-time chat</li>
                <li>Photo uploads</li>
                <li>Safety & report system</li>
                <li>Premium / boosts (M-Pesa ready)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Kenya Localizations</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Filter by all 47 counties</li>
                <li>Distance or town-based matching</li>
                <li>Tribe, religion, lifestyle filters</li>
                <li>Sheng-friendly UI options</li>
                <li>Student / Professional / Church modes</li>
                <li>M-Pesa payments for premium</li>
                <li>Nairobi, Mombasa, Kisumu, Kiambu focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to connect?</h2>
        <p className="mb-6 text-lg">This is the starter frontend. Connect Supabase next for full auth, database, location matching & chat.</p>
        <a
          href="/discover"
          className="bg-kenya-green hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full text-lg"
        >
          Try the Discover Page
        </a>
      </section>
    </div>
  );
}