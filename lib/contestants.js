export const contestants = [
  {
    slug: "runa-khan",
    name: "Runa Khan",
    age: 21,
    city: "Khulna",
    country: "Bangladesh",
    category: "Acting",
    number: 8,
    stage: "Round 1",
    profileImage: "/images/contestants/runa-khan.png",
    photos: [
      "/images/contestants/runa-khan-1.png",
      "/images/contestants/runa-khan-2.png",
      "/images/contestants/runa-khan-3.png",
    ],
    videoThumbnail: "/images/contestants/runa-khan-video.png",
    videoUrl: "#",
  },
  {
    slug: "riya-islam",
    name: "Riya Islam",
    age: 22,
    city: "Chittagong",
    country: "Bangladesh",
    category: "Dancing",
    number: 15,
    stage: "Round 1",
    profileImage: "/images/contestants/riya-islam.png",
    photos: [
      "/images/contestants/riya-islam-1.png",
      "/images/contestants/riya-islam-2.png",
      "/images/contestants/riya-islam-3.png",
    ],
    videoThumbnail: "/images/contestants/riya-islam-video.png",
    videoUrl: "#",
  },
  {
    slug: "samira-azad",
    name: "Samira Azad",
    age: 23,
    city: "Khulna",
    country: "Bangladesh",
    category: "Dancing",
    number: 12,
    stage: "Round 1",
    profileImage: "/images/contestants/samira-azad.png",
    photos: [
      "/images/contestants/samira-azad-1.png",
      "/images/contestants/samira-azad-2.png",
      "/images/contestants/samira-azad-3.png",
    ],
    videoThumbnail: "/images/contestants/samira-azad-video.png",
    videoUrl: "#",
  },
];

export function getContestantBySlug(slug) {
  return contestants.find((c) => c.slug === slug);
}