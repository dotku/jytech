export default function CNHLayout({ children }) {
  return (
    <div className="mx-4">
      <div className="flex flex-row items-center my-6 gap-3">
        <h1 className="text-2xl">
          <span>华人帮</span>
        </h1>
        <div>专门为华人提供的职场招募平台</div>
      </div>
      {children}
    </div>
  );
}
