import GeneralLayout from "@/components/Layouts/GeneralLayout";
import { Card, CardBody, Image, Link } from "@nextui-org/react";

const partners = [
  {
    name: "SpectraForce",
    logo: "https://spectraforce.com/wp-content/uploads/spectraforce-logo.png",
    url: "https://www.spectraforce.com",
  },
  {
    name: "Persistent",
    logo: "https://www.persistent.com/wp-content/themes/persistent/dist/images/Persistent-Header-Logo-Black_460dd8e4.svg",
    url: "https://www.persistent.com",
  },
  {
    name: "US Tech Solutions",
    logo: "https://ustechsolutions.com/wp-content/uploads/2024/01/Ustech-sol-png-04-Artboard-1-Copy-2.png",
    url: "https://www.ustechsolutions.com",
  },
  {
    name: "Caspex",
    logo: "https://caspex.com/wp-content/uploads/caspex-logo.png",
    url: "https://www.caspex.com",
  },
  {
    name: "Crystal Equation",
    logo: "https://static.wixstatic.com/media/9acb84_f964437eaa6841bf9785fe520b36a524~mv2.png/v1/fill/w_332,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo-%20rectangle.png",
    url: "https://www.crystalequation.com",
  },
  {
    name: "Magnit Global",
    logo: "https://magnitglobal.com/content/dam/prounlimited/images/logos/Magnit_logo.svg",
    url: "https://magnitglobal.com/",
  },
  // {
  //   name: "Accenture",
  //   logo: "https://www.accenture.com/content/dam/accenture/final/images/icons/symbol/Acc_Logo_Black_Purple_RGB.png",
  //   url: "https://www.accenture.com/",
  // },
];

export default function ConsultantPage() {
  return (
    <GeneralLayout>
      <div className="px-6 space-y-12">
        <Image
          alt="jytech consultant banner"
          src="https://apptechhub.com/assets/images/bg/home1-banner.png"
          className="w-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold mb-6">
                Technical Consultation
              </h2>
              <p className="text-gray-700">
                Our expert consultants provide strategic guidance on technology
                solutions, helping you make informed decisions about your tech
                stack, architecture, and development processes.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold mb-6">Project Assessment</h2>
              <p className="text-gray-700">
                Get comprehensive evaluations of your existing projects or
                planned initiatives. We help identify potential risks,
                opportunities for optimization, and provide actionable
                recommendations.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold mb-6">Technology Strategy</h2>
              <p className="text-gray-700">
                Develop a clear technology roadmap aligned with your business
                goals. We help you plan for scalability, security, and future
                technological advancements.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold mb-6">Team Augmentation</h2>
              <p className="text-gray-700">
                Scale your development capabilities with our experienced
                consultants. We integrate seamlessly with your team to provide
                specialized expertise and accelerate project delivery.
              </p>
            </CardBody>
          </Card>
        </div>

        <section className="py-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Consulting Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="hover:scale-105 transition-transform p-4 flex items-center justify-center cursor-pointer"
                  style={{ aspectRatio: "1/1" }}
                >
                  <CardBody className="flex flex-col items-center justify-center p-0">
                    <div className="w-full h-full flex items-center justify-center mb-3">
                      <Image
                        alt={`${partner.name} logo`}
                        src={partner.logo}
                        className="object-contain w-full h-full p-2"
                        style={{ minHeight: "80px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </GeneralLayout>
  );
}
