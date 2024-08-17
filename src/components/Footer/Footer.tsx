import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const version = publicRuntimeConfig?.version;

export default function Footer() {
  return (
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
          <div className="flex justify-center md:justify-end items-end">
            <span>&copy;2023 JY Tech LLC, made in the US.</span>{" "}
            <span className="ps-1">v{version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
