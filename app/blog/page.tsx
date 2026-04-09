import type { Metadata } from 'next';
import { getAllArticles } from '@/content/articles';
import { ArticleCard } from '@/components/ArticleCard';
import { BlogCTA } from '@/components/BlogCTA';

export const metadata: Metadata = {
  title: 'お役立ち記事 | 秘密の恋ノート',
  description: '誰にも言えない恋の悩み、電話占いの使い方、片思い、復縁、不倫の悩みに役立つ記事をまとめました。',
  openGraph: { title: 'お役立ち記事 | 秘密の恋ノート', description: '恋の悩みに役立つ記事をまとめました。', type: 'website', locale: 'ja_JP' },
};

export default function BlogPage() {
  const articles = getAllArticles();
  return (
    <main className="blog-page">
      <section className="blog-hero">
        <h1>恋の悩みに寄り添うお役立ち記事</h1>
        <p>片思い・復縁・不倫・電話占いの使い方まで、誰にも言えない恋の悩みに寄り添います。</p>
      </section>
      <section className="blog-list">
        {articles.map((article) => (
          <ArticleCard key={article.slug} slug={article.slug} title={article.title} description={article.description} publishedAt={article.publishedAt} category={article.category} />
        ))}
      </section>
      <BlogCTA />
    </main>
  );
}
