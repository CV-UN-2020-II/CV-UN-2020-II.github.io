module.exports = {
  siteMetadata: {
    siteTitle: `CV-UN-2020-II`,
    defaultTitle: `CV-UN-2020-II`,
    siteTitleShort: `CV-UN-2020-II`,
    siteDescription: `Página con los talleres y proyecto de computación visual`,
    siteUrl: `https://cv-un-2020-ii.github.io/`,
    siteAuthor: `@afromana,@ndpinerosp,@gtzambranop`,
    siteImage: ``,
    siteLanguage: `es`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://cv-un-2020-ii.github.io/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
