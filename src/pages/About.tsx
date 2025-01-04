

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to GameHub</h2>
          <p className="text-gray-600 mb-4">
            GameHub is your premier destination for free online browser games. We believe in making gaming accessible,
            fun, and engaging for everyone, regardless of their gaming experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to provide high-quality, entertaining games that can be enjoyed directly in your browser.
            We focus on creating games that are easy to learn but challenging to master.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>A diverse collection of browser-based games</li>
            <li>No downloads or installations required</li>
            <li>Free-to-play games</li>
            <li>Regular updates and new game additions</li>
            <li>Cross-device compatibility</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-600">
            We're more than just a gaming platform – we're a community. Join us and connect with other players,
            share your achievements, and discover new favorite games.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About; 