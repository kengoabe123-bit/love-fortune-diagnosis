import { services, Service } from './services';

export interface Question {
  id: number;
  text: string;
  subtext?: string;
  options: Option[];
}

export interface Option {
  label: string;
  scores: Record<string, number>;
}

export interface DiagnosisResult {
  service: Service;
  score: number;
  matchRate: number;
  reason: string;
}

interface ConditionalReason {
  condition: (answers: number[]) => boolean;
  text: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: '今のあなたの恋の状況を教えて',
    subtext: 'ここは正直に 大丈夫だよ',
    options: [
      {
        label: '既婚者の彼と関係が続いている',
        scores: { 'coconala-phone': 4, 'miror': 3, 'coconala-mail': 2, 'spacia': 5, 'brillante': 3, 'destiny': 4, 'raffine': 5, 'etoile': 5 },
      },
      {
        label: '別れたけど まだ忘れられない',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 3, 'spacia': 4, 'brillante': 3, 'destiny': 5, 'raffine': 4, 'etoile': 4 },
      },
      {
        label: '片想い中 でも相手には家庭がある',
        scores: { 'coconala-phone': 3, 'miror': 5, 'coconala-mail': 3, 'spacia': 4, 'brillante': 4, 'destiny': 3, 'raffine': 5, 'etoile': 4 },
      },
      {
        label: '関係が曖昧で 彼の本気が分からない',
        scores: { 'coconala-phone': 4, 'miror': 4, 'coconala-mail': 2, 'spacia': 5, 'brillante': 3, 'destiny': 4, 'raffine': 4, 'etoile': 5 },
      },
    ],
  },
  {
    id: 2,
    text: '今 一番つらいのはどんなこと？',
    subtext: '全部つらいよね でも一番を選んでみて',
    options: [
      {
        label: '彼が本気なのか分からないこと',
        scores: { 'coconala-phone': 3, 'miror': 3, 'coconala-mail': 2, 'spacia': 5, 'brillante': 3, 'destiny': 4, 'raffine': 5, 'etoile': 5 },
      },
      {
        label: '誰にも相談できない孤独',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 4, 'spacia': 3, 'brillante': 5, 'destiny': 4, 'raffine': 3, 'etoile': 3 },
      },
      {
        label: 'この恋に未来があるのか不安',
        scores: { 'coconala-phone': 4, 'miror': 3, 'coconala-mail': 2, 'spacia': 4, 'brillante': 3, 'destiny': 5, 'raffine': 4, 'etoile': 5 },
      },
      {
        label: '自分を責めてしまう罪悪感',
        scores: { 'coconala-phone': 4, 'miror': 5, 'coconala-mail': 5, 'spacia': 3, 'brillante': 4, 'destiny': 3, 'raffine': 3, 'etoile': 3 },
      },
    ],
  },
  {
    id: 3,
    text: 'この恋のこと 誰かに話したことある？',
    options: [
      {
        label: '誰にも話せてない',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 3, 'spacia': 4, 'brillante': 5, 'destiny': 4, 'raffine': 3, 'etoile': 3 },
      },
      {
        label: '友達に話したけど否定された',
        scores: { 'coconala-phone': 4, 'miror': 3, 'coconala-mail': 2, 'spacia': 5, 'brillante': 3, 'destiny': 3, 'raffine': 5, 'etoile': 5 },
      },
      {
        label: 'ネットや掲示板に書いたことはある',
        scores: { 'coconala-phone': 2, 'miror': 4, 'coconala-mail': 5, 'spacia': 2, 'brillante': 5, 'destiny': 2, 'raffine': 2, 'etoile': 2 },
      },
      {
        label: '占い師に相談したことがある',
        scores: { 'coconala-phone': 3, 'miror': 3, 'coconala-mail': 2, 'spacia': 4, 'brillante': 3, 'destiny': 4, 'raffine': 5, 'etoile': 5 },
      },
    ],
  },
  {
    id: 4,
    text: '夜 ベッドの中でふと考えるのは？',
    subtext: '私もよくスマホ握りしめてた',
    options: [
      {
        label: '「彼は今 何してるんだろう」',
        scores: { 'coconala-phone': 4, 'miror': 3, 'coconala-mail': 2, 'spacia': 5, 'brillante': 3, 'destiny': 4, 'raffine': 5, 'etoile': 4 },
      },
      {
        label: '「この恋 どうなるんだろう」',
        scores: { 'coconala-phone': 4, 'miror': 4, 'coconala-mail': 3, 'spacia': 4, 'brillante': 3, 'destiny': 5, 'raffine': 4, 'etoile': 5 },
      },
      {
        label: '「もっと早く出会いたかった」',
        scores: { 'coconala-phone': 4, 'miror': 5, 'coconala-mail': 4, 'spacia': 3, 'brillante': 4, 'destiny': 3, 'raffine': 3, 'etoile': 3 },
      },
      {
        label: '「もう楽になりたい」',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 4, 'spacia': 3, 'brillante': 5, 'destiny': 4, 'raffine': 3, 'etoile': 3 },
      },
    ],
  },
  {
    id: 5,
    text: 'もし誰かに今の気持ちを聞いてもらうなら？',
    options: [
      {
        label: '声を聞いて リアルタイムで話したい',
        scores: { 'coconala-phone': 5, 'miror': 3, 'coconala-mail': 0, 'spacia': 5, 'brillante': 1, 'destiny': 5, 'raffine': 5, 'etoile': 5 },
      },
      {
        label: 'テキストで 自分のペースで伝えたい',
        scores: { 'coconala-phone': 1, 'miror': 4, 'coconala-mail': 5, 'spacia': 1, 'brillante': 5, 'destiny': 1, 'raffine': 1, 'etoile': 1 },
      },
      {
        label: 'まずは気軽に試してみたい',
        scores: { 'coconala-phone': 3, 'miror': 5, 'coconala-mail': 4, 'spacia': 2, 'brillante': 4, 'destiny': 3, 'raffine': 2, 'etoile': 2 },
      },
      {
        label: '「当たる」かどうかが一番大事',
        scores: { 'coconala-phone': 3, 'miror': 2, 'coconala-mail': 1, 'spacia': 5, 'brillante': 2, 'destiny': 4, 'raffine': 5, 'etoile': 5 },
      },
    ],
  },
  {
    id: 6,
    text: '占い師さんに一番求めるものは？',
    options: [
      {
        label: '「彼の気持ち」をズバッと教えてほしい',
        scores: { 'coconala-phone': 4, 'miror': 3, 'coconala-mail': 1, 'spacia': 5, 'brillante': 2, 'destiny': 4, 'raffine': 5, 'etoile': 5 },
      },
      {
        label: '「大丈夫だよ」って寄り添ってほしい',
        scores: { 'coconala-phone': 5, 'miror': 5, 'coconala-mail': 4, 'spacia': 3, 'brillante': 4, 'destiny': 3, 'raffine': 3, 'etoile': 3 },
      },
      {
        label: '具体的に「こうしたらいいよ」って導いてほしい',
        scores: { 'coconala-phone': 4, 'miror': 4, 'coconala-mail': 3, 'spacia': 4, 'brillante': 3, 'destiny': 5, 'raffine': 4, 'etoile': 5 },
      },
      {
        label: 'まずは黙って話を聞いてほしい',
        scores: { 'coconala-phone': 3, 'miror': 3, 'coconala-mail': 5, 'spacia': 2, 'brillante': 5, 'destiny': 3, 'raffine': 2, 'etoile': 2 },
      },
    ],
  },
  {
    id: 7,
    text: '今の自分に 一番必要なものは？',
    subtext: '直感で選んでね',
    options: [
      {
        label: '一歩踏み出す勇気',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 2, 'spacia': 4, 'brillante': 3, 'destiny': 4, 'raffine': 4, 'etoile': 5 },
      },
      {
        label: '「あなたは悪くない」という言葉',
        scores: { 'coconala-phone': 4, 'miror': 5, 'coconala-mail': 4, 'spacia': 3, 'brillante': 5, 'destiny': 3, 'raffine': 3, 'etoile': 3 },
      },
      {
        label: 'この恋の行方を知る手がかり',
        scores: { 'coconala-phone': 3, 'miror': 3, 'coconala-mail': 2, 'spacia': 5, 'brillante': 3, 'destiny': 5, 'raffine': 5, 'etoile': 5 },
      },
      {
        label: 'ひとりじゃないという安心感',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 4, 'spacia': 3, 'brillante': 4, 'destiny': 4, 'raffine': 3, 'etoile': 3 },
      },
    ],
  },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
  'coconala-phone': [
    { condition: (a) => a[1] === 1, text: '誰にも話せない孤独を抱えてるあなた 初回30分無料で今すぐ声を聞いてもらえるココナラ電話占いがぴったり' },
    { condition: (a) => a[0] === 1, text: '忘れられない彼への想い 実力派の占い師が声で寄り添いながら これからの道を一緒に考えてくれる' },
    { condition: (a) => a[6] === 3, text: 'ひとりじゃないって思いたいよね 初回無料で気軽に話せるココナラなら 深夜でも安心して相談できるよ' },
    { condition: () => true, text: '初回最大30分無料 声を聞きながら安心して相談できる 秘密の恋の悩みに寄り添う占い師が待ってるよ' },
  ],
  'miror': [
    { condition: (a) => a[1] === 3, text: '罪悪感で苦しいあなたを 否定せずに受け止めてくれる先生がMIRORにはいる 50万人が頼った実績は本物だよ' },
    { condition: (a) => a[5] === 1, text: '「大丈夫だよ」って言ってほしい気持ち 分かるよ 2000人以上の占い師から あなたに寄り添う先生が見つかる' },
    { condition: () => true, text: '利用者50万人突破 あなたに合う先生がきっと見つかる 秘密の恋でも安心して相談できるよ' },
  ],
  'coconala-mail': [
    { condition: (a) => a[4] === 1, text: '文章のほうが本音を伝えやすいよね 500円から自分のペースで気持ちを整理しながら相談できるよ' },
    { condition: (a) => a[5] === 3, text: 'まずは聞いてほしいだけ それでいい ココナラなら文章でゆっくり自分の気持ちを吐き出せるよ' },
    { condition: () => true, text: '500円からメールで相談できる 声を出すのが怖い夜でも 文章なら自分のペースで伝えられるよ' },
  ],
  'spacia': [
    { condition: (a) => a[5] === 0, text: '彼の気持ちをズバッと知りたいあなたに 霊感霊視で彼の本音を読み取る力がスペーシアにはあるよ' },
    { condition: (a) => a[0] === 0, text: '既婚者との関係で揺れる心 霊感霊視に特化したスペーシアなら 彼の本当の気持ちが見えてくるよ' },
    { condition: (a) => a[3] === 0, text: '「彼は今 何してるんだろう」 その答え 霊感霊視の力で読み解いてくれる先生がいるよ' },
    { condition: () => true, text: '霊感霊視に特化した電話占い 秘密の恋の相手の気持ちを深く読み取ってくれるよ' },
  ],
  'brillante': [
    { condition: (a) => a[4] === 1, text: '深夜にテキストで気持ちを吐き出したいあなたに ブリランテなら今すぐチャットで相談できるよ' },
    { condition: (a) => a[3] === 3, text: '「もう楽になりたい」その気持ち分かるよ 深夜でもチャットで寄り添ってもらえるブリランテがおすすめ' },
    { condition: (a) => a[1] === 1, text: '誰にも話せない気持ち チャットなら声を出さずに本音を伝えられる 記録も残るから読み返せるよ' },
    { condition: () => true, text: 'チャット形式で深夜でも相談OK 文字で記録が残るから 占い師のアドバイスを何度でも読み返せるよ' },
  ],
  'destiny': [
    { condition: (a) => a[2] === 1, text: 'この恋の未来が知りたいあなたに 的中率で評判のデスティニーなら この先の道筋が見えてくるよ' },
    { condition: (a) => a[5] === 2, text: '「こうしたらいいよ」って具体的に導いてほしいあなたに デスティニーの占い師は的確なアドバイスをくれるよ' },
    { condition: () => true, text: '恋愛に特化した電話占い 的中率の高い鑑定で あなたの秘密の恋の行方を教えてくれるよ' },
  ],
  'raffine': [
    { condition: (a) => a[4] === 3, text: '「当たる」ことが一番大事なあなた 厳しい採用基準をクリアした本物の占い師だけが在籍するラフィネなら信頼できるよ' },
    { condition: (a) => a[2] === 3, text: '占い経験があるからこそ 本物を求めたいよね ラフィネは厳選された霊感占い師だけが在籍してるよ' },
    { condition: () => true, text: '厳しい採用基準をクリアした実力派占い師だけが在籍 本物の鑑定で あなたの恋の真実を深く読み解いてくれるよ' },
  ],
  'etoile': [
    { condition: (a) => a[0] === 0, text: '既婚者との複雑な恋こそ トップクラスの鑑定師の力が必要 エトワールの至高の鑑定で道が見えてくるよ' },
    { condition: (a) => a[4] === 3, text: '当たるかどうかが一番大事なあなたに エトワールにはトップクラスの鑑定師だけが在籍してるよ' },
    { condition: (a) => a[6] === 0, text: '一歩踏み出す勇気がほしいあなたに トップ鑑定師が的確な言葉で背中を押してくれるよ' },
    { condition: () => true, text: 'トップクラスの鑑定師だけが在籍する至高の電話占い 複雑な恋の悩みに 精度の高い鑑定で応えてくれるよ' },
  ],
};

function selectReason(serviceId: string, answers: number[], fallbackReason: string): string {
  const reasons = conditionalReasons[serviceId];
  if (reasons) {
    for (const r of reasons) {
      if (r.condition(answers)) return r.text;
    }
  }
  return fallbackReason;
}

export function calculateResults(answers: number[]): DiagnosisResult[] {
  const scoreMap: Record<string, number> = {};
  services.forEach((s) => { scoreMap[s.id] = 0; });
  answers.forEach((optionIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[optionIndex]) {
      Object.entries(question.options[optionIndex].scores).forEach(([serviceId, score]) => {
        if (scoreMap[serviceId] !== undefined) { scoreMap[serviceId] += score; }
      });
    }
  });
  const results: DiagnosisResult[] = services
    .map((service) => ({ service, score: scoreMap[service.id] || 0, matchRate: 0, reason: selectReason(service.id, answers, service.tagline) }))
    .sort((a, b) => b.score - a.score);
  const top3 = results.slice(0, 3);
  const topScore = top3[0]?.score || 1;
  return top3.map((r, i) => {
    const scoreRatio = topScore > 0 ? r.score / topScore : 0.5;
    let displayRate: number;
    if (i === 0) displayRate = 73 + Math.round(scoreRatio * 12);
    else if (i === 1) displayRate = 67 + Math.round(scoreRatio * 11);
    else displayRate = 60 + Math.round(scoreRatio * 12);
    return { ...r, matchRate: displayRate };
  });
}
