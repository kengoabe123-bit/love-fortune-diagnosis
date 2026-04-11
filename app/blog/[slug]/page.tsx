import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllArticles, getArticleBySlug } from '@/content/articles';
import { BlogCTA } from '@/components/BlogCTA';
import { ArticleSchema, BreadcrumbSchema } from '@/components/StructuredData';

interface PageProps { params: Promise<{ slug: string }>; }

const SITE_NAME = '秘密の恋ノート';
const SITE_URL = 'https://love-fortune-diagnosis.pages.dev';

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: `${article.title} | ${SITE_NAME}`, description: article.description, keywords: article.keywords.join(', '), openGraph: { title: article.title, description: article.description, type: 'article', locale: 'ja_JP', publishedTime: article.publishedAt, modifiedTime: article.updatedAt } };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className="article-page">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`${SITE_URL}/blog/${slug}`}
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
        siteName={SITE_NAME}
        siteUrl={SITE_URL}
      />
      <BreadcrumbSchema
        items={[
          { name: 'ホーム', url: SITE_URL },
          { name: '記事一覧', url: `${SITE_URL}/blog` },
          { name: article.title, url: `${SITE_URL}/blog/${slug}` },
        ]}
      />
      <article className="article-content">
        <header className="article-header">
          <div className="article-header-meta">
            <span className="article-header-category">{article.category}</span>
            <time dateTime={article.publishedAt}>{article.publishedAt.replace(/-/g, '.')}</time>
          </div>
          <h1>{article.title}</h1>
          <p className="article-header-description">{article.description}</p>
        </header>
        <div className="article-body">
          {article.sections.map((section, index) => (
            <section key={index} className="article-section">
              <h2>{section.heading}</h2>
              {section.content.split('\n\n').map((paragraph, pIndex) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) return <p key={pIndex} className="article-bold">{paragraph.replace(/\*\*/g, '')}</p>;
                if (paragraph.startsWith('- ')) { const items = paragraph.split('\n').filter(l => l.startsWith('- ')); return <ul key={pIndex} className="article-list">{items.map((item, i) => <li key={i}>{item.replace(/^- /, '').replace(/\*\*/g, '')}</li>)}</ul>; }
                if (paragraph.startsWith('| ')) { const rows = paragraph.split('\n').filter(r => r.startsWith('|')); const headers = rows[0].split('|').filter(c => c.trim()).map(c => c.trim()); const dataRows = rows.slice(2); return <div key={pIndex} className="article-table-wrapper"><table className="article-table"><thead><tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead><tbody>{dataRows.map((row, ri) => { const cells = row.split('|').filter(c => c.trim()).map(c => c.trim()); return <tr key={ri}>{cells.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>; })}</tbody></table></div>; }
                const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                return <p key={pIndex}>{parts.map((part, pi) => part.startsWith('**') && part.endsWith('**') ? <strong key={pi}>{part.replace(/\*\*/g, '')}</strong> : <span key={pi}>{part}</span>)}</p>;
              })}
            </section>
          ))}
        </div>
        <BlogCTA />
        <nav className="article-nav"><Link href="/blog" className="article-back-link">← 記事一覧に戻る</Link></nav>
      </article>
    </main>
  );
}

