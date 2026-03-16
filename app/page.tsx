import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>あなたの恋の運命を、<br />星が教えてくれる。</h1>
        <p>7つの質問に直感で答えるだけ。あなたの恋の悩みに寄り添い、運命の導きを占います。</p>
        <div className="hero-features">
          <span className="hero-feature">約30秒で完了</span>
          <span className="hero-feature">7問の簡単な質問</span>
          <span className="hero-feature">個人情報不要</span>
        </div>
        <Link href="/diagnosis" className="btn-primary" id="start-diagnosis-hero">
          無料で恋を占う
        </Link>
      </div>
    </section>
  );
}
