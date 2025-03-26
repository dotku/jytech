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
  ssr: false
});

const url =
  "https://jytech.us12.list-manage.com/subscribe/post?u=YOUR_U&id=YOUR_ID";

const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  return (
    <form
      className={className}
      style={style}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitted({
          EMAIL: input.value,
        });
      }}
    >
      <div className="flex gap-2 max-w-sm">
        <Input
          ref={(node) => (input = node)}
          type="email"
          placeholder="Your email"
          required
          className="max-w-[200px]"
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  );
};

const CustomForm = ({ status, message, onSubmitted }) => (
  <div>
    <SimpleForm onSubmitted={onSubmitted} />
    {status === "sending" && (
      <div className="mt-2 text-blue-600">Sending...</div>
    )}
    {status === "error" && (
      <div
        className="mt-2 text-red-600"
        dangerouslySetInnerHTML={{ __html: message }}
      />
    )}
    {status === "success" && (
      <div className="mt-2 text-green-600">Subscribed!</div>
    )}
  </div>
);

function FooterContent() {
  const searchParams = useSearchParams();
  const region = searchParams.get("region") || "us";
  const lang = region === "cn" ? "cn" : "us";

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column: Company Info and Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">JY Tech</h3>
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
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onSubmitted={(formData) => subscribe(formData)}
                  />
                )}
              />
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
          </p>
        </div>
      </div>
      <Chatbot />
    </footer>
  );
}

export default function Footer() {
  return (
    <Suspense fallback={<div>Loading footer...</div>}>
      <FooterContent />
    </Suspense>
  );
}
