"use client";

import { Button, Input, Link } from "@nextui-org/react";
import { useMemo } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useSearchParams } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import dynamic from "next/dynamic";
import { chinaContacts, usContacts } from "@/data/contacts";
import { Suspense } from 'react';

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
    <div>
      <div className="flex gap-2">
        <Input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <Button onClick={submit}>Submit</Button>
      </div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

const Newsletter = () => (
  <div>
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
              <h4 className="font-semibold mb-4">Subscribe to Our Newsletter</h4>
              <Newsletter />
            </div>
          </div>

          {/* Right Column: Sales Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="tel:4158511937" className="text-gray-600 text-sm">
                  (415) 851-1937
                </Link>
              </li>
              <li>
                <Link href="mailto:info@jytech.us" className="text-gray-600 text-sm">
                  info@jytech.us
                </Link>
              </li>
            </ul>
          </div>

          {/* US Sales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">🇺🇸 U.S. Sales</h3>
            <div className="space-y-6">
              {usContacts.map((contact, index) => (
                <div key={index}>
                  <div className="mb-2">
                    <p className="font-semibold text-lg">
                      {contact.name}
                    </p>
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
                      <p className="text-gray-600">
                        WeChat: {contact.wechat}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JY Tech. All rights reserved.
            {version && <span className="text-sm text-gray-500 ml-2">v{version}</span>}
          </p>
        </div>
      </div>
      <Chatbot />
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
