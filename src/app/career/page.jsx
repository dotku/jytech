// gen a career page align with other pages style
// I want to add some hiring for recruiters
// eg. https://app.huntly.ai/

export default function CareerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Career Opportunities</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">For Recruiters</h2>
        <p className="mb-4">
          Are you a recruiter looking to connect with top tech talent? Register
          with Huntly to get started.
        </p>
        <a
          href="https://app.huntly.ai/auth/register/recruiter?referral_code=1e053f2d-c257-413d-ba84-c356234c2c4b"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Register as a Recruiter
        </a>
      </div>
    </div>
  );
}
