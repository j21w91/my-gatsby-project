module.exports = {
  siteMetadata: {
    title: 'JW Detail & Valet [TEST]',
    author: 'J-Dubz',
    description: 'Test site for the real JW Detail & Valet',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo2.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
