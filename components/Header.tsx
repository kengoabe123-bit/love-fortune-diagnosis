import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="header-logo">秘密の恋ノート 🔮</Link>
        <nav className="header-nav">
          <Link href="/blog" className="header-nav-link">お役立ち記事</Link>
        </nav>
      </div>
    </header>
  );
}
