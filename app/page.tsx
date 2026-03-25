import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">この気持ち 誰にも言えない—</p>
        <h1>あなたの恋の苦しさに<br />寄り添う占いを見つけます</h1>
        <p className="hero-description">
          7つの質問に正直に答えるだけ<br />
          今のあなたに一番合った相談相手を提案します
        </p>
        <div className="hero-features">
          <span className="hero-feature">約30秒で完了</span>
          <span className="hero-feature">完全無料</span>
          <span className="hero-feature">個人情報不要</span>
        </div>
        <Link href="/diagnosis" className="btn-primary" id="start-diagnosis-hero">
          無料で診断する 🔮
        </Link>
        <p className="hero-note">
          ※ あなたの回答が外部に共有されることはありません
        </p>
      </div>
    </section>
  );
}
