import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClipDays｜运动记忆基础设施",
  description: "ClipDays 为运动场馆提供捕捉、交付并商业化宾客个人回忆的一体化平台。",
};

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="zh-CN">{children}</div>;
}
