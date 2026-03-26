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
        {/* 共感コピー */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '1.2rem',
          marginBottom: '1.5rem',
          textAlign: 'left' as const,
        }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', marginBottom: '0.8rem', textAlign: 'center' as const }}>
            こんな悩み、ありませんか？
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0.3rem 0' }}>「この気持ち、誰にも相談できない…」</p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0.3rem 0' }}>「ネットの占い、どれが当たるかわからない」</p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0.3rem 0' }}>「本当に自分の恋は叶うのか不安」</p>
        </div>
        {/* ソーシャルプルーフ */}
        <p style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#ffd700',
          textAlign: 'center' as const,
          marginBottom: '1rem',
        }}>
          🔮 10,000人以上が診断済み
        </p>

        <div className="hero-features">
          <span className="hero-feature">約60秒で完了</span>
          <span className="hero-feature">完全無料</span>
          <span className="hero-feature">個人情報不要</span>
        </div>
        <Link href="/diagnosis" className="btn-primary" id="start-diagnosis-hero">
          🔮 無料で診断する（60秒）
        </Link>
        
        <p style={{
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.4)',
          marginTop: '0.6rem',
          textAlign: 'center' as const,
        }}>
          ※ 登録不要・完全無料・結果はすぐに表示されます
        </p>
<p className="hero-note">
          ※ あなたの回答が外部に共有されることはありません
        </p>
      </div>
    </section>
  );
}
