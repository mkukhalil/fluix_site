export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-gray-800 font-sans">
      <main className="container mx-auto px-4 md:px-6 py-24">
        <h1 className="text-5xl font-bold mb-8 font-heading text-primary">Privacy Policy</h1>
        <p className="mb-6">
          At Fluix, we respect your privacy and are committed to protecting your personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your data when you interact 
          with our AI automation services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Contact information such as name, email, and company details you provide via forms.</li>
          <li>Usage data such as your interaction with our website or services for analytics purposes.</li>
          <li>Cookies and similar technologies to improve website experience and performance.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To respond to inquiries and provide support for our AI automation solutions.</li>
          <li>To personalize and enhance your experience on our website.</li>
          <li>To send updates, marketing materials, or relevant service information if you opt-in.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
        <p className="mb-6">
          We implement industry-standard security measures to protect your data from unauthorized access, 
          alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
        <p className="mb-6">
          We may use third-party service providers to help operate our website or deliver services. 
          These providers have access to your information only to perform tasks on our behalf and are 
          obligated not to disclose or use it for other purposes.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your Consent</h2>
        <p className="mb-6">
          By using our website or services, you consent to our Privacy Policy and the practices described herein.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Last Updated: January 2026
        </p>
      </main>
    </div>
  );
}
