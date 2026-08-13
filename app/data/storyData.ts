export interface MiniBlog {
  title: string
  subtitle: string
  readTime: string
  date: string
  paragraphs: string[]
  quote: string
}

export const miniBlog: MiniBlog = {
  title: "From Management Accounting to Code Syntax",
  subtitle: "Why I decided to become a software engineer",
  readTime: "3 min read",
  date: "2026 Journey Story",
  quote: "Code is the language of freedom in the digital realm",
  paragraphs: [
    "Back in 2021, I made a life-altering decision: switching my academic major from Management Accounting to Computer Science at Cor Jesu College. At the time, I wasn't even computer literate—I literally didn't know how to perform a basic copy-and-paste operation onto a USB flash drive.",
    "The initial learning curve was steep and uncompromising. Syntax errors, terminal commands, and abstract algorithms felt completely foreign compared to ledger sheets. However, as I pushed through the initial frustration, I uncovered something unexpected: a deep, obsessive interest in solving algorithmic puzzles and building functional software from scratch.",
    "What started as raw curiosity quickly transformed into a disciplined commitment to continuous growth. Over 2+ years of real-world development experience—working across municipal government systems, international startups in Germany and the USA, and open-source TypeScript packages—I've learned that great engineering isn't just about writing code; it's about listening, understanding real human problems, and delivering pragmatic, efficient solutions."
  ]
}
