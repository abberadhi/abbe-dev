import type { MDXComponents } from "mdx/types";

const myComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="border-l-4 pl-4 border-[#d1716b] text-4xl tracking-wider py-4 mb-8">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-xl tracking-wider border-l-4 border-[#d1716b] my-4 mb-2 pl-2">
      {children}
    </h2>
  ),

  p: ({ children }) => (
    <p className="text-base leading-relaxed text-gray-400 mb-4">{children}</p>
  ),

  a: ({ children, ...props }) => (
    <a
      {...props}
      className="text-[#d1716b] hover:text-blue-800 underline transition-colors duration-200"
    >
      {children}
    </a>
  ),

  ul: ({ children }) => (
    <ul className="text-base list-disc list-inside pl-5 text-gray-400 space-y-2">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="text-base list-decimal list-inside pl-5 text-gray-400 space-y-2">
      {children}
    </ol>
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-gray-400 pl-4 italic text-gray-600">
      {children}
    </blockquote>
  ),

  pre: ({ children }) => (
    <pre className="bg-gray-800 p-4 my-4 rounded">{children}</pre>
  ),

  code: ({ children }) => (
    <code className="bg-gray-800 text-sm p-1 rounded font-mono">
      {children}
    </code>
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...myComponents,
    ...components,
  };
}
