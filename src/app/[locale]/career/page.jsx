// gen a career page align with other pages style
// I want to add some hiring for recruiters
// eg. https://app.huntly.ai/

export default function CareerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Career Opportunities</h1>

      {/* Job Openings Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Open Positions</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            Full Stack Engineer Intern
          </h3>
          <p className="mb-4 text-gray-600">
            We&apos;re looking for an Full Stack Engineer Intern to join our
            team and help build modern web applications.
          </p>

          <div className="mb-4">
            <h4 className="font-medium mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Strong experience with React and JavaScript/TypeScript</li>
              <li>Experience with Node.js and REST APIs</li>
              <li>Familiarity with Vercel deployment and Supabase</li>
              <li>Understanding of modern web development practices</li>
              <li>Experience with Git and collaborative development</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            Digital Marketing Specialist Intern
          </h3>
          <p className="mb-4 text-gray-600">
            We&apos;re seeking a creative and data-driven Digital Marketing
            Specialist Intern to grow our brand presence and connect with
            potential clients in the food and travel industries.
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Has experience in social media management (LinkedIn, X/Twitter,
                Instagram)
              </li>
              <li>Strong content creation and copywriting skills</li>
              <li>
                Experience in B2B marketing, particularly in food/travel sectors
              </li>
              <li>Ability to build and maintain client relationships</li>
              <li>Knowledge of social media analytics and reporting</li>
              <li>Understanding of brand building and community engagement</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t">
          <p className="text-gray-600">
            Are you a recruiter? Visit our{" "}
            <a
              href="/career/recruiters"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              recruiters page
            </a>{" "}
            to learn more about working with us.
          </p>
        </div>
      </div>
    </div>
  );
}
