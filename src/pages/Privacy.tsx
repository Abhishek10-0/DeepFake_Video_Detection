const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Game scores and achievements</li>
            <li>User preferences and settings</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our games</li>
            <li>Track game statistics and leaderboards</li>
            <li>Customize your gaming experience</li>
            <li>Analyze usage patterns and optimize performance</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p>
            We use cookies and similar technologies to enhance your gaming experience
            and collect usage data. You can control cookie settings through your browser
            preferences.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information
            against unauthorized access, alteration, or destruction.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 