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
    text: '今のあなたの恋愛状況は？',
    subtext: '一番近いものを選んでください',
    options: [
      {
        label: '片想い中。気持ちを伝えられずにいる',
        scores: { 'coconala-phone': 4, 'miror': 5, 'coconala-mail': 3, 'spacia': 5, 'brillante': 3 },
      },
      {
        label: '復縁したい人がいる',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 3, 'spacia': 5, 'brillante': 3 },
      },
      {
        label: '恋人はいるけど、未来が不安',
        scores: { 'coconala-phone': 4, 'miror': 4, 'coconala-mail': 4, 'spacia': 3, 'brillante': 5 },
      },
      {
        label: 'フリー。運命の出会いを待っている',
        scores: { 'coconala-phone': 3, 'miror': 5, 'coconala-mail': 4, 'spacia': 3, 'brillante': 4 },
      },
    ],
  },
  {
    id: 2,
    text: 'その悩み、誰かに相談したことはありますか？',
    options: [
      {
        label: '誰にも話せていない',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 3, 'spacia': 5, 'brillante': 4 },
      },
      {
        label: '友達には話したけど、解決しなかった',
        scores: { 'coconala-phone': 4, 'miror': 5, 'coconala-mail': 3, 'spacia': 4, 'brillante': 4 },
      },
      {
        label: 'プロ（占い師やカウンセラー）に相談したことがある',
        scores: { 'coconala-phone': 3, 'miror': 4, 'coconala-mail': 4, 'spacia': 5, 'brillante': 3 },
      },
      {
        label: '自分の中で考えるタイプ',
        scores: { 'coconala-phone': 2, 'miror': 3, 'coconala-mail': 5, 'spacia': 2, 'brillante': 5 },
      },
    ],
  },
  {
    id: 3,
    text: '夜、ふと考えてしまうのはどんなこと？',
    subtext: '心の奥にある気持ちに正直に',
    options: [
      {
        label: 'あの人は今、何を思っているんだろう',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 3, 'spacia': 5, 'brillante': 4 },
      },
      {
        label: 'この恋は、うまくいくのかな',
        scores: { 'coconala-phone': 4, 'miror': 5, 'coconala-mail': 3, 'spacia': 4, 'brillante': 4 },
      },
      {
        label: '過去のあの瞬間に、戻れたらいいのに',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 3, 'spacia': 5, 'brillante': 3 },
      },
      {
        label: 'もっと素敵な人に出会えるのかな',
        scores: { 'coconala-phone': 3, 'miror': 5, 'coconala-mail': 4, 'spacia': 3, 'brillante': 4 },
      },
    ],
  },
  {
    id: 4,
    text: '相談するなら、どんなスタイルが安心する？',
    options: [
      {
        label: '声を聞いて、リアルタイムで話したい',
        scores: { 'coconala-phone': 5, 'miror': 3, 'coconala-mail': 0, 'spacia': 5, 'brillante': 1 },
      },
      {
        label: 'テキストで、自分のペースで伝えたい',
        scores: { 'coconala-phone': 1, 'miror': 4, 'coconala-mail': 5, 'spacia': 1, 'brillante': 5 },
      },
      {
        label: 'まずは軽く試してみたい',
        scores: { 'coconala-phone': 3, 'miror': 5, 'coconala-mail': 4, 'spacia': 2, 'brillante': 4 },
      },
      {
        label: '当たるかどうかが一番大事',
        scores: { 'coconala-phone': 4, 'miror': 3, 'coconala-mail': 2, 'spacia': 5, 'brillante': 3 },
      },
    ],
  },
  {
    id: 5,
    text: '心が揺れやすいのは、どんな時間？',
    options: [
      {
        label: '深夜、ひとりの時間',
        scores: { 'coconala-phone': 4, 'miror': 3, 'coconala-mail': 3, 'spacia': 3, 'brillante': 5 },
      },
      {
        label: '仕事帰り、ふと気が抜けた瞬間',
        scores: { 'coconala-phone': 4, 'miror': 4, 'coconala-mail': 4, 'spacia': 3, 'brillante': 4 },
      },
      {
        label: '休日、予定がなくて暇な時',
        scores: { 'coconala-phone': 3, 'miror': 5, 'coconala-mail': 5, 'spacia': 3, 'brillante': 3 },
      },
      {
        label: 'SNSであの人の投稿を見た時',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 3, 'spacia': 5, 'brillante': 4 },
      },
    ],
  },
  {
    id: 6,
    text: '占いに求めるものは？',
    options: [
      {
        label: 'ズバッと本音を教えてほしい',
        scores: { 'coconala-phone': 5, 'miror': 3, 'coconala-mail': 2, 'spacia': 5, 'brillante': 3 },
      },
      {
        label: '優しく寄り添ってほしい',
        scores: { 'coconala-phone': 4, 'miror': 5, 'coconala-mail': 5, 'spacia': 3, 'brillante': 5 },
      },
      {
        label: '具体的な行動のアドバイスがほしい',
        scores: { 'coconala-phone': 4, 'miror': 5, 'coconala-mail': 3, 'spacia': 4, 'brillante': 4 },
      },
      {
        label: '未来がどうなるか知りたい',
        scores: { 'coconala-phone': 4, 'miror': 4, 'coconala-mail': 3, 'spacia': 5, 'brillante': 3 },
      },
    ],
  },
  {
    id: 7,
    text: 'もし今、運命の導きがあるとしたら、あなたに必要なのは？',
    subtext: '直感で選んでください',
    options: [
      {
        label: '一歩踏み出す勇気',
        scores: { 'coconala-phone': 5, 'miror': 4, 'coconala-mail': 3, 'spacia': 5, 'brillante': 3 },
      },
      {
        label: '傷ついた心を癒す時間',
        scores: { 'coconala-phone': 4, 'miror': 5, 'coconala-mail': 5, 'spacia': 3, 'brillante': 5 },
      },
      {
        label: '迷いを断ち切る決断',
        scores: { 'coconala-phone': 4, 'miror': 3, 'coconala-mail': 2, 'spacia': 5, 'brillante': 3 },
      },
      {
        label: '未来への希望',
        scores: { 'coconala-phone': 3, 'miror': 5, 'coconala-mail': 4, 'spacia': 3, 'brillante': 4 },
      },
    ],
  },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
  'coconala-phone': [
    { condition: (a) => a[0] === 1, text: '復縁の悩みは、声で直接占い師に伝えることで、あの人の本当の気持ちが見えてきます。初回30分無料で、今すぐ相談できます。' },
    { condition: (a) => a[0] === 0, text: '片想いの苦しさを、実力派の占い師が電話で丁寧に紐解いてくれます。あの人の気持ちを知る第一歩に。' },
    { condition: (a) => a[3] === 0, text: '声を聞きながら相談したいあなたにぴったり。初回最大30分無料で、恋愛に強い占い師とリアルタイムで話せます。' },
    { condition: () => true, text: '恋愛相談に強い実力派占い師が多数在籍。初回30分無料で、あなたの恋の行方を占ってもらえます。' },
  ],
  'miror': [
    { condition: (a) => a[0] === 3, text: '運命の出会いを待つあなた。2000人以上の占い師の中から、出会い運に強い先生を見つけて相談してみませんか。' },
    { condition: (a) => a[1] === 1, text: '友達に相談しても解決しなかった悩み。50万人が利用するMIRORなら、口コミで評判の先生に出会えます。' },
    { condition: (a) => a[3] === 2, text: 'まずは気軽に試してみたいあなたに。2000人以上の占い師から、あなたに合った先生を見つけられます。' },
    { condition: () => true, text: '利用者50万人突破。2000人以上の占い師から、あなたの恋の悩みにぴったりの先生を見つけられます。' },
  ],
  'coconala-mail': [
    { condition: (a) => a[1] === 3, text: '自分の中で考えるタイプのあなた。文章で気持ちを整理しながら相談できるココナラなら、自分のペースで向き合えます。' },
    { condition: (a) => a[3] === 1, text: 'テキストで自分のペースで伝えたいあなたにぴったり。500円からの手頃な料金で、占いもカウンセリングも。' },
    { condition: () => true, text: '文章で気持ちを整理しながら相談したいあなたに。500円からの手頃な料金と、占い師の豊富な選択肢が魅力です。' },
  ],
  'spacia': [
    { condition: (a) => a[5] === 0, text: 'ズバッと本音が知りたいあなたに。霊感霊視に特化した占い師が、あの人の気持ちや恋の真実を直感で読み取ります。' },
    { condition: (a) => a[0] === 1, text: '復縁の可能性を霊感霊視で鑑定。当たると評判のスペーシアなら、あの人との未来が見えてきます。' },
    { condition: (a) => a[2] === 0, text: 'あの人が今何を思っているか。霊感霊視の力で、相手の心の奥を読み解いてくれます。' },
    { condition: () => true, text: '霊感霊視に特化した電話占い。当たると口コミで評判の占い師が、あなたの恋の行方を深く鑑定してくれます。' },
  ],
  'brillante': [
    { condition: (a) => a[4] === 0, text: '深夜にひとりで心が揺れるあなた。ブリランテなら深夜でもチャットですぐに恋愛相談ができます。' },
    { condition: (a) => a[5] === 1, text: '優しく寄り添ってほしいあなたに。チャットで気軽に相談でき、占い師のアドバイスを何度でも読み返せます。' },
    { condition: (a) => a[6] === 1, text: '傷ついた心を癒したいあなた。テキストで自分のペースで相談でき、優しく寄り添ってもらえます。' },
    { condition: () => true, text: 'チャット形式で深夜でも気軽に相談可能。テキストで記録が残るから、占い師のアドバイスを何度でも読み返せます。' },
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
