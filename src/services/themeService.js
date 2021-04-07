export const themes = [
  { id: 1, thumbUrl: "", imgPath: "1.svg", steps: 2 },
  {
    id: 2,
    thumbUrl: "",
    imgPath: "49a406b43f070ca5ce59d6d235a8bf9e.svg",
    steps: 3,
  },
  {
    id: 3,
    thumbUrl: "",
    imgPath: "73b5ca8ae9e82f9b21ea1de07ccea6c9.svg",
    steps: 2,
  },
  {
    id: 4,
    thumbUrl: "",
    imgPath: "68762bb7a84db417b7163333a8f22688.svg",
    steps: 5,
  },
  {
    id: 5,
    thumbUrl: "",
    imgPath: "af4ee26b3bac515475498a1c32b88d79.svg",
    steps: 2,
  },
  {
    id: 6,
    thumbUrl: "",
    imgPath: "a706bc0e24b207bcc3295e098a576e23.svg",
    steps: 4,
  },
  {
    id: 12,
    thumbUrl: "",
    imgPath: "d51faa0d0f6bd23926eb1e83efcdbe57.svg",
    steps: 2,
  },
  {
    id: 13,
    thumbUrl: "",
    imgPath: "ed31f2d04f2b2a0bac5116b0a87dea2a.svg",
    steps: 2,
  },
];

export const getThemeById = (id) =>
  themes.find(({ id: themeId }) => themeId === id);
