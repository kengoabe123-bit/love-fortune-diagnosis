import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WebsiteSchema } from '@/components/StructuredData';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const SITE_NAME = '秘密の恋ノート';
const SITE_URL = 'https://himitsu-koi.com';

export const metadata: Metadata = {
  title: '秘密の恋ノート — 誰にも言えない恋に寄り添う無料占い診断',
  description: '誰にも言えない恋を抱えたあなたへ。7つの質問に答えるだけで、今のあなたに一番寄り添ってくれる占い師が見つかります。完全無料・個人情報不要。',
  verification: {
    google: 'MIqh5zm0FnokIIIavzUIGMbvBVSdL-3x8VQhTys_fuQ',
  },
  openGraph: {
    title: '秘密の恋ノート — 誰にも言えない恋に寄り添う無料占い診断',
    description: '誰にも言えない恋の苦しさ 7つの質問で あなたに合った相談相手が見つかります',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <WebsiteSchema
          siteName={SITE_NAME}
          siteUrl={SITE_URL}
          description="誰にも言えない恋を抱えたあなたへ。7つの質問に答えるだけで、今のあなたに一番寄り添ってくれる占い師が見つかります。"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
