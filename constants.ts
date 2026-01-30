import { Project, Experience, SkillCategory, SocialLink } from './types';
import { Code, Smartphone, Brain, Gamepad2, Database, Layout } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "李孟修 (Matthew)",
  title: "軟體工程師",
  email: "matthew930823@gmail.com",
  phone: "0973-707-125",
  location: "台灣台北 (士林區)",
  education: {
    school: "國立臺灣海洋大學 (NTOU)",
    major: "資訊工程學系",
    period: "2022/9 - 2026/6 (預計)"
  },
  bio: "我是國立臺灣海洋大學資工系的學生。熱衷於透過實作來驗證技能，擁有從前端到雲端、從行動應用到生成式 AI 的廣泛開發經驗。擅長學習新技術並獨立解決複雜問題。"
};

export const SKILLS: SkillCategory[] = [
  {
    title: "AI & GenAI",
    skills: ["Python", "Gemini API", "Stable Diffusion", "LLM Integration", "Reinforcement Learning", "Speech Recognition", "CosyVoice", "Live2D"],
    icon: "Brain"
  },
  {
    title: "行動開發 (Mobile)",
    skills: ["Flutter (Dart)", "SwiftUI", "iOS Development", "SwiftData", "TipKit", "Charts", "Mobile UI/UX"],
    icon: "Smartphone"
  },
  {
    title: "前端/網頁 (Web)",
    skills: ["HTML5", "CSS3", "JavaScript/jQuery", "MySQL", "React Concept", "Tailwind Concept"],
    icon: "Layout"
  },
  {
    title: "雲端 & 後端",
    skills: ["Kubernetes (K8s)", "Distributed Storage", "OM2M (IoT)", "REST APIs", "Automation Tools"],
    icon: "Database"
  },
  {
    title: "遊戲開發",
    skills: ["Unity (2D/3D)", "C#", "Animation Logic", "Game Physics"],
    icon: "Gamepad2"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "雲端儲存與分散式資料庫研究實習生",
    company: "中華電信研究院 (Chunghwa Telecom Laboratories)",
    period: "2025/7 - 2025/8 (暑期實習)",
    location: "台北，大安區",
    description: "開發了用於 Kubernetes 運維和分散式儲存驗證的自動化工具。在大型企業環境中獲得了軟體工程的實戰經驗。"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Ghote APP",
    description: "使用 Flutter 建構的 AI 輔助學習助手。從學習材料中提取核心知識，將其結構化，並使用主動回憶（字卡/測驗）來提升學習效率。",
    tags: ["Flutter", "AI", "Education", "Mobile"],
    link: "https://github.com/ghote-app/ghote",
    image: "https://picsum.photos/id/20/800/450"
  },
  {
    title: "互動式圖像生成助教",
    description: "畢業專案：結合 LLM 和圖像生成模型的教育平台。具有使用 CosyVoice 和 Live2D 的對話代理，引導使用者掌握 AI 圖像生成技術。",
    tags: ["Python", "LLM", "Stable Diffusion", "React/Web"],
    link: "https://github.com/matthew930823/AI-Image-Generation-Tutor",
    image: "https://picsum.photos/id/60/800/450"
  },
  {
    title: "LINE AI 聊天機器人",
    description: "整合 Python 與 LLM (Gemini) 及 Stable Diffusion，建立了一個能夠聊天並根據需求生成圖像的 LINE 機器人。",
    tags: ["Python", "GenAI", "Chatbot", "API Integration"],
    image: "https://picsum.photos/id/160/800/450"
  },
  {
    title: "iOS 應用程式套件",
    description: "開發了多個 SwiftUI 應用程式，包括記帳工具和音樂播放器。精通 SwiftData、Charts 和 Binding。",
    tags: ["SwiftUI", "iOS", "Mobile"],
    link: "https://medium.com/@matthew930823",
    image: "https://picsum.photos/id/119/800/450"
  },
  {
    title: "Unity 遊戲專案",
    description: "製作了各種 2D/3D 遊戲，實現了物理引擎、動畫邏輯和角色控制。探索遊戲引擎中的互動教學系統。",
    tags: ["Unity", "C#", "Game Design"],
    image: "https://picsum.photos/id/96/800/450"
  },
  {
    title: "AI 城市助手 (IoT)",
    description: "整合 OM2M 架構與交通/天氣 API 的物聯網專案，自動推播資訊並回覆市民查詢。",
    tags: ["IoT", "OM2M", "API"],
    image: "https://picsum.photos/id/180/800/450"
  }
];

export const SYSTEM_INSTRUCTION = `
你是一位熱情且樂於助人的 AI 助手，代表李孟修 (Matthew)。
你的目標是透過回答關於 Matthew 履歷的問題，給招募人員或訪客留下深刻印象。
請使用「繁體中文」回答所有問題。

以下是 Matthew 的背景資料：
- **姓名**: 李孟修 (Matthew)。21 歲。
- **狀態**: 國立臺灣海洋大學資工系學生，預計 2026 年畢業。
- **實習經歷**: 中華電信研究院 (Kubernetes, 分散式儲存)。
- **核心技能**: Flutter (Ghote App), iOS (SwiftUI), AI (GenAI, Stable Diffusion, LLM), Web (HTML/CSS/JS/MySQL)。
- **重點專案**: Ghote App (AI 學習工具), 互動式圖像生成導師 (畢業專案), LINE AI 機器人。
- **個性**: 熱愛新技術，獨立解決問題，喜歡透過實作驗證技能。
- **聯絡方式**: matthew930823@gmail.com。

規則：
1. 保持回答簡潔（盡量在 3 句話以內）。
2. 語氣專業但友善，展現技術熱情。
3. 如果被問及聯絡方式，請提供他的電子郵件。
4. 強調他建立全端和 AI 整合應用程式的能力。
`;
