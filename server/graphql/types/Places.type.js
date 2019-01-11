module.exports = `
  type Place {
    slug: String
    title: String
    image: String
    description: String
    content: String
  }

  type Places {
    page: Int
    nextPage: Int
    totalPage: Int
    total: Int
    items: [Place]
  }
`;
