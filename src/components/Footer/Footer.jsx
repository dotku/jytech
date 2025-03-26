"use client";

import { Button, Input, Link } from "@nextui-org/react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useSearchParams } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import dynamic from "next/dynamic";
import { chinaContacts, usContacts } from "@/data/contacts";
import { Suspense } from "react";

const Chatbot = dynamic(() => import("@/components/Chatbot"), {
  loading: () => null,
  ssr: false,
});

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <Input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Enter your email"
          size="md"
          radius="sm"
          variant="flat"
          classNames={{
            base: "max-w-full",
            mainWrapper: "h-12",
            input: "text-small",
            inputWrapper: "h-12 bg-white border-1 border-gray-200 hover:border-gray-400 focus:border-gray-900"
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              submit();
            }
          }}
        />
        <Button 
          size="lg"
          radius="full"
          className="bg-gray-900 text-white font-medium shadow-sm hover:bg-gray-800 h-12 sm:min-w-[120px]"
          onClick={submit}
        >
          Subscribe
        </Button>
      </div>
      <div className="mt-3 min-h-[24px]">
        {status === "sending" && (
          <p className="text-sm text-blue-600 animate-pulse">Sending...</p>
        )}
        {status === "error" && (
          <p 
            className="text-sm text-red-600"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <p 
            className="text-sm text-green-600"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    </div>
  );
};

const Newsletter = () => (
  <div className="w-full max-w-xl mx-auto text-center">
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  </div>
);

function FooterContent(props) {
  const { version } = props;
  const searchParams = useSearchParams();
  const region = searchParams.get("region") || "us";
  const lang = region === "cn" ? "cn" : "us";

  return (
    <footer className="bg-gray-100 py-8">
      <Chatbot />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column: Company Info and Newsletter */}
          <div>
            <address className="not-italic">
              <div className="font-bold">JY Tech LLC</div>
              <div className="mt-2 text-sm">
                1846 E. Innovation Park Dr. Ste 100
                <br />
                ORO VALLEY
                <br />
                Pima, AZ 85755
                <br />
                United States
              </div>
            </address>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <a
                href="https://www.facebook.com/jytech.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaFacebook className="mr-2" />
                Facebook
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                Subscribe to Our Newsletter
              </h4>
              <Newsletter />
            </div>
          </div>

          {/* US Sales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">🇺🇸 U.S. Sales</h3>
            <div className="space-y-6">
              {usContacts.map((contact, index) => (
                contact.title?.toLowerCase().includes("sales") && (
                  <div key={index}>
                    <div className="mb-2">
                      <p className="font-semibold text-lg">{contact.name}</p>
                      {contact.title && (
                        <p className="font-normal text-gray-600 text-sm">
                          {contact.title}
                        </p>
                      )}
                      {contact.email && (
                        <p>
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {contact.email}
                          </a>
                        </p>
                      )}
                      {contact.phone && (
                        <p>
                          <a
                            href={`tel:${contact.phone}`}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {contact.phone}
                          </a>
                        </p>
                      )}
                    </div>
                    {contact.address && (
                      <address className="not-italic text-gray-600 text-sm">
                        {contact.address}
                      </address>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>

          {/* China Sales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">🇨🇳 中国区销售</h3>
            <div className="space-y-6">
              {chinaContacts.map((contact, index) => (
                <div key={index}>
                  <div className="mb-2">
                    <p className="font-semibold text-lg">{contact.name}</p>
                    {contact.email && (
                      <p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {contact.email}
                        </a>
                      </p>
                    )}
                    {contact.wechat && (
                      <p className="text-gray-600 text-sm">
                        WeChat: {contact.wechat}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <div className="mb-2">
              <p className="font-semibold text-lg">Jay Lin</p>
              <p className="font-normal text-gray-600 text-sm">Support Team</p>
              <p>
                <a
                  href="mailto:jay.lin@jytech.us"
                  className="text-blue-600 hover:text-blue-800"
                >
                  jay.lin@jytech.us
                </a>
              </p>
              <p>
                <a
                  href="tel:+14158511937"
                  className="text-blue-600 hover:text-blue-800"
                >
                  +1 (415) 851-1937
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JY Tech. All rights reserved.
            {version && (
              <span className="text-sm text-gray-500 ml-2">v{version}</span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer(props) {
  const { version } = props;
  return (
    <Suspense fallback={<div>Loading footer...</div>}>
      <FooterContent version={version} />
    </Suspense>
  );
}
