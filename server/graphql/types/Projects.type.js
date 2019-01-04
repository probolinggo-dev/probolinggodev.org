module.exports = `
  type Project {
    slug: String
    image: String
    title: String
    description: String
    github: String
  }

  type Projects {
    page: Int
    nextPage: Int
    totalPage: Int
    total: Int
    items: [Project]
  }
`;
