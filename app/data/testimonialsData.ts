export interface Testimonial {
  id: string
  name: string
  title: string
  company?: string
  relationship: string
  quote: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "nicky-recommendation",
    name: "Jeremy N.",
    title: "Software Solutionist",
    relationship: "Senior Developer & Direct Manager",
    quote: "I wholeheartedly recommend Nicky. Nicky is an amazing asset to our development team. He is able to take on complex problems in existing code bases and work efficiently. He has been particularly good at asking meaningful clarifying questions which help drive requirements in while solving many of the more tedious problems independently, making him a joy to work with. I'm comfortable sending him to any point in our stack and having great results, and while adept at back end work, has surprised me with very clean UI designs and upgrades.\n\nI am particularly amazed at how well he is able to work with others, showing a great maturity in his choices of balancing team dynamics and the mission versus technology and code rewrites. He threads the needle of advocating for good technologies and keeping small changes small when appropriate."
  }
]
