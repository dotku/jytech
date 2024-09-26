"use client";

import { Button, Input } from "@nextui-org/react";
import { useEffect, useMemo } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-stretch">
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
              <CustomForm url={url} />
            </div>
          </div>
          <div className="flex justify-center md:justify-end items-end">
            <span>
              &copy;2002 - {new Date().getFullYear()} JY Tech LLC, made in the
              US.
            </span>{" "}
            {version ? <span className="ps-1">v{version}</span> : null}
          </div>
        </div>
      </footer>
    </>
  );
}
