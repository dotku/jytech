import type { Locale } from "@/i18n";

export type Section = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: { label: string; href: string; external?: boolean }[];
};

export type LocalizedPost = {
  title: string;
  description: string;
  body: Section[];
};

export type Post = {
  slug: string;
  date: string;
  cover: string;
  tags: string[];
  liveUrl?: string;
  i18n: Record<Locale, LocalizedPost>;
};

export const posts: Post[] = [
  {
    slug: "claude-rag-local-memory-for-claude-code",
    date: "2026-05-02",
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600",
    tags: ["AI", "MCP", "RAG", "Open Source", "Python"],
    liveUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7456414951415619584/",
    i18n: {
      en: {
        title: "claude-rag: giving Claude Code a long-term memory, fully local",
        description:
          "We built a small open-source MCP server that indexes every past Claude Code conversation on your machine and lets Claude search them — no cloud, no API keys, ~350 lines of Python.",
        body: [
          {
            heading: "The problem",
            paragraphs: [
              "Anyone who uses Claude Code daily runs into the same wall: the model is sharp inside a single session, but it has no memory of last week's session in the same repo. You end up re-explaining the same architectural decisions, the same workaround for that one flaky test, the same reason you picked library A over library B — over and over.",
              "Claude Code already writes every turn to disk under ~/.claude/projects/**/*.jsonl. The transcripts are right there. The only thing missing is a way for Claude to actually look at them.",
            ],
          },
          {
            heading: "What we built",
            paragraphs: [
              "claude-rag is a tiny RAG layer over those local transcripts, exposed as an MCP server so Claude can query it from inside the IDE.",
            ],
            bullets: [
              "Parses every JSONL transcript under ~/.claude/projects/, strips IDE/system-reminder wrappers, and chunks by character (1500 char chunks, 200 overlap)",
              "Embeds chunks with sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2 — runs on CPU via fastembed, supports both English and Chinese queries",
              "Stores vectors in a local Chroma PersistentClient — cosine similarity, ~50 MB after a few months of use",
              "Incremental: only re-embeds JSONL files whose mtime/size changed since the last run",
              "MCP server (stdio) exposes three tools: search_conversations, get_session_window, reindex",
            ],
          },
          {
            heading: "Why it matters",
            paragraphs: [
              "Once registered, Claude can answer things like \"do you remember what we decided about X\" or \"回忆一下我之前是怎么处理 Y 的\" by calling search_conversations on its own — no manual copy-paste, no separate UI to open. The relevant chunks come back into the current context window and the conversation continues.",
              "The whole thing is also a useful pattern in itself: a small, single-purpose MCP server, no SaaS, no telemetry, fits inside one developer's machine. Easy to fork and adapt.",
            ],
          },
          {
            heading: "Privacy",
            paragraphs: [
              "Nothing leaves the machine. The embedding model runs locally, the vector DB is a file on disk, and the MCP server only talks to Claude Code over stdio. No API keys are required and none are used.",
              "The Chroma DB does store the full chunk text — same sensitivity profile as the original transcripts — so it lives under ~/.claude-rag/ and is excluded from sync by default.",
            ],
          },
          {
            heading: "The numbers",
            bullets: [
              "~350 lines of Python total",
              "~220 MB embedding model (downloaded once, cached)",
              "~50 MB index after several months of daily use",
              "5–10 minutes for a first full index on CPU",
              "Incremental re-index in seconds for a normal workday",
            ],
          },
          {
            heading: "Try it",
            paragraphs: [
              "It's open source. Clone, install with uv, run the indexer, register the MCP server, and Claude has its memory back.",
            ],
            links: [
              {
                label: "Original announcement on LinkedIn",
                href: "https://www.linkedin.com/feed/update/urn:li:activity:7456414951415619584/",
                external: true,
              },
            ],
          },
        ],
      },
      zh: {
        title: "claude-rag：给 Claude Code 一份完全本地的长期记忆",
        description:
          "我们做了一个小型开源 MCP Server，把本机所有历史 Claude Code 对话都索引起来，让 Claude 自己检索——不上云，不要 API Key，全部约 350 行 Python。",
        body: [
          {
            heading: "问题",
            paragraphs: [
              "每天用 Claude Code 的人都会撞到同一堵墙：在单次会话里它很聪明，可一旦换到下周同一个仓库的新会话，它就什么都不记得了。你得反复解释同一套架构决策、那个偶发挂掉的测试要怎么绕、为什么当初选 A 库不选 B 库——一次又一次。",
              "其实 Claude Code 早就把每一轮对话写到了 ~/.claude/projects/**/*.jsonl，原始记录就在那里。缺的，只是一种让 Claude 真的去查它们的能力。",
            ],
          },
          {
            heading: "我们做了什么",
            paragraphs: [
              "claude-rag 在这些本地对话之上加了一层很轻的 RAG，并以 MCP Server 的形式暴露出来，让 Claude 可以在 IDE 内部直接查询。",
            ],
            bullets: [
              "解析 ~/.claude/projects/ 下的所有 JSONL，剥掉 IDE/系统提醒等包装，按字符分块（1500 字符一块，重叠 200）",
              "使用 sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2 做嵌入，纯 CPU 跑，原生支持中文和英文查询",
              "向量存进本地 Chroma PersistentClient，cosine 相似度，跑几个月只占约 50 MB",
              "增量索引：只对 mtime/size 有变化的 JSONL 重新嵌入",
              "MCP（stdio）Server 暴露三个工具：search_conversations、get_session_window、reindex",
            ],
          },
          {
            heading: "意义在哪里",
            paragraphs: [
              "注册之后，Claude 可以自己处理「你还记得我们之前是怎么决定 X 的吗？」或「回忆一下我之前是怎么处理 Y 的」——它自己去调 search_conversations，相关片段直接回到当前上下文，对话继续往下走。不需要手动复制粘贴，不需要切换到另一个工具。",
              "这件事本身也是一个挺有用的范式：一个小而专的 MCP Server，没有 SaaS，没有遥测，跑在开发者自己的机器上。很容易 fork 一份再改造。",
            ],
          },
          {
            heading: "关于隐私",
            paragraphs: [
              "数据不出本机。嵌入模型在本地跑，向量库就是磁盘上的一个目录，MCP Server 只通过 stdio 与 Claude Code 通信。不需要任何 API Key，也确实没用任何 API Key。",
              "Chroma 库里存的是分块原文，敏感等级和原始对话本身一致——所以它放在 ~/.claude-rag/ 下，默认不参与任何同步。",
            ],
          },
          {
            heading: "几个数字",
            bullets: [
              "全部代码约 350 行 Python",
              "嵌入模型约 220 MB（首次下载，本地缓存）",
              "几个月日常使用后，索引约 50 MB",
              "首次全量索引在 CPU 上 5–10 分钟",
              "正常工作日的增量索引几秒搞定",
            ],
          },
          {
            heading: "试一下",
            paragraphs: [
              "项目已开源。clone 下来，用 uv 安装，跑一次索引，注册 MCP Server，Claude 的记忆就回来了。",
            ],
            links: [
              {
                label: "在 LinkedIn 上看原发布",
                href: "https://www.linkedin.com/feed/update/urn:li:activity:7456414951415619584/",
                external: true,
              },
            ],
          },
        ],
      },
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
