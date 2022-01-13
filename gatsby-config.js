module.exports = {
    siteMetadata: {
      title: `website`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-styled-components`,
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /assets/
          }
        }
      }
    ]
}