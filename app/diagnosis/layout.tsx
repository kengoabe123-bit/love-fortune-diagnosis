import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '恋の運命診断 | LoveFortune - あなたに最適な占いを見つけよう',
    description:
        '7つの質問に答えるだけで、あなたの恋の悩みに最適な占いがわかります。片想い・復縁・出会いを総合的に分析し、運命の導きをお伝えします。',
    openGraph: {
        title: '恋の運命診断 | LoveFortune',
        description: '7つの質問であなたの恋の運命を占う。30秒で結果がわかります。',
        type: 'website',
        locale: 'ja_JP',
    },
};

export default function DiagnosisLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
