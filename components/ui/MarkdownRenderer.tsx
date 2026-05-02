import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn('prose prose-neutral dark:prose-invert max-w-none', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-6 border-b pb-4" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl md:text-2xl font-semibold tracking-tight mt-10 mb-4" {...props} />,
          p: ({ node, ...props }) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground" {...props} />,
          ul: ({ node, ...props }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
          ol: ({ node, ...props }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
          li: ({ node, ...props }) => <li className="text-muted-foreground" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-bold text-foreground" {...props} />,
          blockquote: ({ node, children, ...props }) => {
            // Convert React nodes to text to check for TL;DR
            const getText = (nodes: React.ReactNode): string => {
              if (typeof nodes === 'string') return nodes;
              if (Array.isArray(nodes)) return nodes.map(getText).join('');
              if (React.isValidElement(nodes)) {
                const elementProps = nodes.props as { children?: React.ReactNode };
                return getText(elementProps.children);
              }
              return '';
            };
            
            const textContent = getText(children).trim();
            const isTLDR = textContent.startsWith('TL;DR:') || textContent.startsWith('摘要：');
            
            if (isTLDR) {
              return (
                <div className="my-8 overflow-hidden rounded-2xl border bg-muted/50 dark:bg-muted/20">
                  <div className="bg-primary/10 px-6 py-4 border-b border-primary/20">
                    <h4 className="text-primary font-bold flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                      {textContent.startsWith('TL;DR:') ? 'TL;DR' : '摘要'}
                    </h4>
                  </div>
                  <div className="p-6 text-foreground/90 font-medium leading-relaxed">
                    {/* Render the rest of the text without the "TL;DR:" prefix */}
                    {textContent.replace(/^(TL;DR:|摘要：)\s*/, '')}
                  </div>
                </div>
              );
            }

            // Regular pull quote styling
            return (
              <blockquote className="my-10 border-l-4 border-primary pl-6 italic text-xl text-foreground font-medium md:text-2xl opacity-90 py-2">
                {children}
              </blockquote>
            );
          },
          img: ({ node, alt, src, ...props }) => {
            if (!src) return null;
            return (
              <span className="block my-12 overflow-hidden rounded-xl border bg-muted">
                {/* We use standard img for responsive aspect ratio without knowing dimensions, 
                    but give it Vercel-like styling (rounded corners, border) */}
                <img
                  src={src}
                  alt={alt || ''}
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                  {...props}
                />
                {alt && (
                  <span className="block text-center text-sm text-muted-foreground py-3 px-4 border-t bg-background/50 backdrop-blur-sm">
                    {alt}
                  </span>
                )}
              </span>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
