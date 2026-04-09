import Link from 'next/link';

export function BlogCTA() {
  return (
    <div className="blog-cta">
      <div className="blog-cta-inner">
        <p className="blog-cta-lead">あなたの恋に寄り添ってくれる占い師、見つかります</p>
        <p className="blog-cta-sub">7つの質問に答えるだけ。約60秒で診断完了。完全無料・個人情報不要。</p>
        <Link href="/diagnosis" className="blog-cta-button" id="blog-cta-diagnosis">
          無料で診断してみる
        </Link>
      </div>
    </div>
  );
}
