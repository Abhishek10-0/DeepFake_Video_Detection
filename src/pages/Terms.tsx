const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using GameHub, you accept and agree to be bound by the
            terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. User Conduct</h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the service for lawful purposes only</li>
            <li>Not interfere with other users' enjoyment of the service</li>
            <li>Not attempt to gain unauthorized access to any part of the service</li>
            <li>Not use the service for commercial purposes without authorization</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p>
            All content, including games, graphics, and code, is the property of
            GameHub and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
          <p>
            GameHub shall not be liable for any indirect, incidental, special,
            consequential or punitive damages resulting from your use or inability
            to use the service.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms; 