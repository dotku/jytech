"use client";

import { Button, Input } from "@nextui-org/react";
import { useEffect, useMemo } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { chinaContacts, usContacts } from "@/data/products";

const url =
  "https://jytech.us14.list-manage.com/subscribe/post?u=8911a369423d71b73d12ceef6&amp;id=9aa574bde6&amp;f_id=0061b0e5f0";

const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value,
    });
  return (
    <div className={className} style={style}>
      {status === "sending" && (
        <div className="m-1" style={{ color: "blue" }}>
          sending...
        </div>
      )}
      {status === "error" && (
        <div className="m-1" style={{ color: "red" }}>
          {message}
        </div>
      )}
      {status === "success" && (
        <div className="m-1" style={{ color: "green" }}>
          {message}
        </div>
      )}
      <div className="flex flex-row gap-3">
        <Input
          className="max-w-52"
          ref={(node) => (input = node)}
          type="email"
          placeholder="Your email"
        />
        <Button onClick={submit} variant="bordered">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </div>
    )}
  />
);

export default function Footer({ version }) {
  return (
    <>
      <footer>
        <div className="p-6 my-4 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-stretch">
            <div>
              <address>
                <label className="text-lg">Address</label>
                <div>
                  <span className="font-bold">JY Tech LLC</span>
                  <br />
                  1846 E. Innovation Park Dr. Ste 100 <br />
                  ORO VALLEY <br />
                  Pima, AZ 85755 <br />
                  United States
                </div>
              </address>
            </div>
            <div>
              <label className="text-lg">Links</label>
              <div className="mt-2">
                <a
                  href="/career"
                  className="hover:text-blue-600 transition-colors"
                >
                  Career
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="text-lg">Sales Contacts</label>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* China Sales */}
                <div>
                  <h4 className="font-medium mb-2">🇨🇳 中国区销售</h4>
                  <div className="space-y-3">
                    {chinaContacts.map((contact) => (
                      <div key={contact.id} className="space-y-1">
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-sm text-gray-600">WeChat: {contact.wechat}</div>
                        {contact.email && (
                          <div className="text-sm">
                            <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800">
                              {contact.email}
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* US Sales */}
                <div>
                  <h4 className="font-medium mb-2">🇺🇸 U.S. Sales</h4>
                  <div className="space-y-3">
                    {usContacts.map((contact) => (
                      <div key={contact.id} className="space-y-1">
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-sm">
                          <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800">
                            {contact.email}
                          </a>
                        </div>
                        <div className="text-sm">
                          <a href={`tel:${contact.phone}`} className="text-blue-600 hover:text-blue-800">
                            {contact.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500">
            <small>
              &copy; {new Date().getFullYear()} JY Tech LLC. All rights reserved.
              {version && <span> Version: {version}</span>}
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}
