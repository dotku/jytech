import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const version = publicRuntimeConfig?.version

export default function Footer() {
  return (
    <footer className="p-3 my-4 text-body-secondary border-top">
      <small>&copy;2023 JY Tech LLC, made in the US. v{version}</small>
    </footer>
  );
}
