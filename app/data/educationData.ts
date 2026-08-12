export interface Education {
  institution: string
  degree: string
  period: string
  location: string
  courses: string[]
}

export const education: Education = {
  institution: "Cor Jesu College, Inc",
  degree: "Bachelor of Science in Computer Science",
  period: "August 2021 – July 2025",
  location: "Digos City, Mindanao, Philippines",
  courses: [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Computer Graphics",
    "Operating Systems",
    "Computer Networking",
    "Computer Security",
    "Data Mining"
  ]
}
