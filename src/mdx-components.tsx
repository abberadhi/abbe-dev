import type { MDXComponents } from "mdx/types";

const myComponents: MDXComponents = {
  h1: ({ children }) => {
    return (
      <div className="flex flex-row items-center w-full">
        <span className="w-full border border-gray-500 rounded"></span>
        <h1 className="text-3xl text-center mx-12 text-nowrap tracking-wider">
          {children}
          <span className="text-[#d1716b] font-extrabold"> .</span>
        </h1>
        <span className="w-full border border-gray-500 rounded"></span>
      </div>
    );
  },
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...myComponents,
    ...components,
  };
}
