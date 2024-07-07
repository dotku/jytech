import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const version = publicRuntimeConfig?.version;

export default function Footer() {
  return (
    <footer className="flex justify-between p-3 my-4 text-body-secondary border-top text-sm">
      <div className="left">
        <address>
          <label className="text-lg">Address</label>
          <div>
            1846 E. Innovation Park Dr. Ste 100 <br />
            ORO VALLEY <br />
            Pima, AZ 85755 <br />
            United States
          </div>
        </address>
      </div>
      <div className="right self-center">
        <span>&copy;2023 JY Tech LLC, made in the US.</span>
        <span>v{version}</span>
      </div>
    </footer>
  );
}
