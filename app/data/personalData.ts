export interface PersonalDetails {
  name: string
  handle: string
  title: string
  location: string
  email: string
  phone: string
  bio: string
  status: string
  socials: {
    github: string
    linkedin: string
    oldSite: string
  }
  signatureQuote: string
  useImage: boolean
  image?: string
  badgeText: string
}

export const personalDetails: PersonalDetails = {
  name: "Nicki Marty Pecision",
  handle: "Hairyblue",
  title: "Junior Software Engineer",
  location: "Mindanao, Philippines",
  email: "pecision.nickimarty@gmail.com",
  phone: "(+63) 9774888937",
  bio: "I am a junior software engineer situated in Mindanao, Philippines. Committed to continuous learning and staying updated with emerging technologies, my primary focus is solving complex problems and striving for efficient, clean solutions.",
  status: "Available for Opportunities",
  socials: {
    github: "https://github.com/HairyBlue",
    linkedin: "https://www.linkedin.com/in/nickimartypecision/",
    oldSite: "https://hairyblue.pages.dev"
  },
  signatureQuote: "Code is the language of freedom in the digital realm",
  useImage: false,
  image: "/images/profile.jpg",
  badgeText: "HB"
}
