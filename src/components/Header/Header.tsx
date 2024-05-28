export default function Header() {
  return (
    <header className="pb-3 mb-4 border-bottom">
      <a
        href="/"
        className="align-items-center text-body-emphasis text-decoration-none d-inline"
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M100.08 16.44H75.44c-1.24 0-2.24 1-2.24 2.24v45.53c.31 10.84-.18 23.69-1.52 25.89c-.1.13-.2.28-.27.43c-1.6 3.33-6.9 6.78-12.99 6.78c-6.33 0-13.78-5.46-15.94-11.68a2.24 2.24 0 0 0-2.79-1.41l-20.47 6.41c-1.06.33-1.7 1.38-1.53 2.48c.01.07.03.14.04.2c2.32 17.58 18.94 29.38 41.46 29.38c22.53 0 39.16-11.81 41.48-29.4c.02-.1.04-.19.05-.29c1.56-15.02 1.58-28.71 1.58-28.85V18.68c.02-1.23-.98-2.24-2.22-2.24z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </header>
  );
}
