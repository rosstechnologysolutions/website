module.exports = {
    siteMetadata: {
      title: `Ross Technology Solutions`,
        siteUrl: `https://www.rosstechnologysolutions.com`,
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
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://www.rosstechnologysolutions.com',
          policy: [{userAgent: '*', allow: '/'}]
        }
      },
      {
        resolve: `gatsby-plugin-sitemap`,
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          // name: "GatsbyJS",
          // short_name: "GatsbyJS",
          start_url: "/",
          // background_color: "#6b37bf",
          // theme_color: "#6b37bf",
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: "standalone",
          icon: "src/assets/icon.png", // This path is relative to the root of the site.
        },
      },
    ]
}