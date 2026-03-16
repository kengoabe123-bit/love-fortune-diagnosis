export interface Service {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  category: string;
  target: string;
  targetAge: string[];
  features: string[];
  pros: string[];
  cons: string[];
  recommended: string[];
  affiliateUrl: string;
  ctaText: string;
  color: string;
}

export const services: Service[] = [
  {
    id: 'coconala-phone',
    slug: 'coconala-phone',
    name: 'ココナラ電話占い',
    nameEn: 'Coconala Phone Fortune',
    tagline: '実力派占い師に、今すぐ電話で相談できる',
    description: 'TVCM放映の大手サービス。初回最大30分無料で、恋愛に強い占い師が多数在籍。声を聞きながら安心して相談できます。',
    category: '電話占い',
    target: '声を聞いて安心したい方に',
    targetAge: ['20代', '30代', '40代'],
    features: ['初回最大30分無料で気軽にお試し', '恋愛相談に強い占い師が多数在籍', '24時間いつでも相談可能'],
    pros: ['初回無料特典が手厚い', '占い師のレビューが豊富で選びやすい'],
    cons: ['人気占い師は待ち時間あり'],
    recommended: ['すぐに誰かに話を聞いてほしい', '電話で直接相談したい'],
    affiliateUrl: '#coconala-phone',
    ctaText: '詳細を見る',
    color: '#9b7ec8',
  },
  {
    id: 'ulana',
    slug: 'ulana',
    name: 'ULana（ウラナ）',
    nameEn: 'ULana',
    tagline: '電話・メールでいつでも鑑定',
    description: 'あの人の本当の気持ち、これからどうなるの？そんな不安に寄り添う電話占い。メール占いにも対応しているので、自分のペースで相談できます。',
    category: '電話占い・メール占い',
    target: '電話もメールも使いたい方に',
    targetAge: ['20代', '30代', '40代'],
    features: ['電話占いとメール占いの両方に対応', '初回無料相談で気軽にスタート', '恋愛・復縁の相談実績が豊富'],
    pros: ['電話が苦手でもメールで相談可能', '恋愛特化の占い師が多い'],
    cons: ['メール鑑定は返信に時間がかかる場合あり'],
    recommended: ['メールでじっくり相談したい', '電話もメールも選びたい'],
    affiliateUrl: '#ulana',
    ctaText: '詳細を見る',
    color: '#c47ea8',
  },
  {
    id: 'verite',
    slug: 'verite',
    name: '電話占いヴェリテ',
    nameEn: 'Verite',
    tagline: '少数精鋭の実力派占い師があなたを導く',
    description: '厳選された少数精鋭の占い師だけが在籍。一人ひとりに深く寄り添い、あなたの恋の行方を丁寧に鑑定してくれます。',
    category: '電話占い',
    target: '質の高い鑑定を求める方に',
    targetAge: ['20代', '30代', '40代'],
    features: ['厳選された少数精鋭の占い師', '初回クレジット3,000円分無料', '深い鑑定で的中率に定評あり'],
    pros: ['占い師の質が高い', '初回特典が充実'],
    cons: ['占い師の数は大手より少なめ'],
    recommended: ['当たる占い師に相談したい', '質の高い鑑定を受けたい'],
    affiliateUrl: '#verite',
    ctaText: '詳細を見る',
    color: '#8e6bb5',
  },
  {
    id: 'coconala-mail',
    slug: 'coconala-mail',
    name: 'ココナラ占い＆お悩み相談',
    nameEn: 'Coconala Mail Fortune',
    tagline: '500円から、心に寄り添うメール占い',
    description: '電話が苦手でも大丈夫。文章でじっくり自分の気持ちを整理しながら相談できるメール占い。占い師だけでなくカウンセラーにも相談可能。',
    category: 'メール占い・チャット占い',
    target: '文章で気持ちを整理したい方に',
    targetAge: ['20代', '30代', '40代'],
    features: ['500円からの手頃な料金設定', '占い・カウンセリング両方に対応', '自分のペースで好きな時に相談'],
    pros: ['電話不要で気軽に相談できる', '料金がリーズナブル'],
    cons: ['リアルタイムの対話は難しい'],
    recommended: ['電話が苦手', 'まずは気軽に試してみたい'],
    affiliateUrl: '#coconala-mail',
    ctaText: '詳細を見る',
    color: '#a87ec4',
  },
  {
    id: 'line-uranai',
    slug: 'line-uranai',
    name: 'LINE占い',
    nameEn: 'LINE Fortune',
    tagline: 'いつものLINEで、本格占い',
    description: '普段使い慣れたLINEアプリから、そのまま本格的な占いが受けられます。毎日の星占いから本格鑑定まで、手軽にスタートできます。',
    category: 'チャット占い',
    target: '手軽に占いを始めたい方に',
    targetAge: ['20代', '30代'],
    features: ['LINEアプリからそのまま利用可能', '毎日の無料占いコンテンツあり', 'チャット形式で気軽に相談'],
    pros: ['新しいアプリのダウンロード不要', '日常的に使える'],
    cons: ['深い鑑定には向かない場合も'],
    recommended: ['まずは気軽に始めたい', 'アプリを増やしたくない'],
    affiliateUrl: '#line-uranai',
    ctaText: '詳細を見る',
    color: '#7e9bc8',
  },
  {
    id: 'stella',
    slug: 'stella',
    name: 'Stella（ステラ）',
    nameEn: 'Stella',
    tagline: 'チャットで深夜でも、あなたの恋を占う',
    description: '深夜のモヤモヤも、チャットですぐに相談。恋愛に特化した占い師が、あなたの気持ちに寄り添いながら、未来への道筋を照らしてくれます。',
    category: 'チャット占い',
    target: '深夜に相談したい方に',
    targetAge: ['20代', '30代', '40代'],
    features: ['チャット形式で深夜でも相談可能', '恋愛特化の占い師が在籍', '初回特典で気軽にお試し'],
    pros: ['時間を気にせず相談できる', 'テキストで記録が残る'],
    cons: ['音声でのやり取りはなし'],
    recommended: ['夜に悩みが膨らむタイプ', 'テキストのほうが話しやすい'],
    affiliateUrl: '#stella',
    ctaText: '詳細を見る',
    color: '#b87ec4',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
