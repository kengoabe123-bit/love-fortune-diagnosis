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
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=3NN907+ASSJS2+2PEO+C4LLD',
    ctaText: '詳細を見る',
    color: '#9b7ec8',
  },
  {
    id: 'miror',
    slug: 'miror',
    name: 'MIROR（ミラー）',
    nameEn: 'MIROR',
    tagline: '利用者50万人突破、2000人以上の占い師が在籍',
    description: '利用者数50万人を突破した人気の占いサービス。2000人以上の占い師から自分にぴったりの先生を見つけられます。恋愛相談の実績が豊富です。',
    category: 'チャット占い・電話占い',
    target: '自分に合う占い師を見つけたい方に',
    targetAge: ['20代', '30代', '40代'],
    features: ['利用者数50万人突破の実績', '占い師2000人以上から選べる', '恋愛相談の実績が豊富'],
    pros: ['占い師の選択肢が圧倒的に多い', '口コミで自分に合う先生が見つかる'],
    cons: ['選択肢が多く迷う場合も'],
    recommended: ['多くの占い師から選びたい', '口コミを参考にしたい'],
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZHWA+4JQP42+4PWE+5YJRM',
    ctaText: '詳細を見る',
    color: '#c47ea8',
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
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZHWA+4HCYOY+2PEO+1BO6EQ',
    ctaText: '詳細を見る',
    color: '#a87ec4',
  },
  {
    id: 'spacia',
    slug: 'spacia',
    name: '恋愛応援スペーシア',
    nameEn: 'Spacia',
    tagline: '当たると評判の霊感霊視で、あなたの恋を鑑定',
    description: '霊感霊視に特化した電話占い。恋愛の悩みに深く寄り添い、相手の気持ちや未来の行方を鑑定してくれます。当たると口コミで評判のサービスです。',
    category: '電話占い（霊感霊視）',
    target: 'スピリチュアルな鑑定を求める方に',
    targetAge: ['20代', '30代', '40代'],
    features: ['霊感霊視に特化した占い師が在籍', '恋愛相談に強い実績', '当たると口コミで評判'],
    pros: ['霊感霊視で深い鑑定が受けられる', '恋愛特化で的確なアドバイス'],
    cons: ['占い師の数は大手より少なめ'],
    recommended: ['スピリチュアルな鑑定を受けたい', '相手の気持ちを深く知りたい'],
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZHWA+4IJTWI+3SKE+5YRHE',
    ctaText: '詳細を見る',
    color: '#8e6bb5',
  },
  {
    id: 'brillante',
    slug: 'brillante',
    name: 'チャット占いブリランテ',
    nameEn: 'Brillante',
    tagline: 'チャットで気軽に、本格恋愛占い',
    description: 'テキストベースで気軽に相談できるチャット占い。深夜でも相談可能で、文字で記録が残るので占い師のアドバイスを何度でも読み返せます。',
    category: 'チャット占い',
    target: 'テキストで気軽に相談したい方に',
    targetAge: ['20代', '30代', '40代'],
    features: ['チャット形式で深夜でも相談可能', 'テキストで記録が残る', '気軽にスタートできる'],
    pros: ['時間を気にせず相談できる', '文字で記録が残り読み返せる'],
    cons: ['音声でのやり取りはなし'],
    recommended: ['深夜に相談したい', 'テキストのほうが話しやすい'],
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZHWA+4G63HE+5SGG+5YJRM',
    ctaText: '詳細を見る',
    color: '#b87ec4',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
