import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LoveFortune - あなたの恋の運命を占う無料診断',
  description: '7つの質問に答えるだけで、あなたの恋愛タイプと運命の導きがわかる。片想い・復縁・出会いなど、あなたの恋の悩みに最適な占いを提案します。',
  openGraph: {
    title: 'LoveFortune - あなたの恋の運命を占う無料診断',
    description: '7つの質問であなたの恋の運命がわかる。無料恋愛占い診断。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
