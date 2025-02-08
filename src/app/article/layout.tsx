import { Header } from "@/app/components/header";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <Header />
      <article className="max-w-4xl m-auto my-24 text-lg p-4">
        {children}
      </article>
    </>
  );
}
