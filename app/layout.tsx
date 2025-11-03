import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agentic Capabilities | Codex Assistant',
  description: 'Explore the breadth of what this AI assistant can deliver across product, design, and engineering workflows.',
  metadataBase: new URL('https://agentic-9a1a7c96.vercel.app'),
  openGraph: {
    title: 'Agentic AI Capabilities',
    description: 'Discover how this assistant accelerates product and engineering outcomes.',
    url: 'https://agentic-9a1a7c96.vercel.app',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic AI Capabilities',
    description: 'Discover how this assistant accelerates product and engineering outcomes.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
