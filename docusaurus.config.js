// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://the-jotter.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Notes',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'The-Jotter', // Usually your GitHub org/user name.
  projectName: 'Notes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: "meta",
          path: "docs/meta",
          sidebarPath: require.resolve('./sidebars/meta.js'),
          routeBasePath: "meta",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/The-Jotter/Notes/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'CM10195',
        path: 'docs/CM10195',
        routeBasePath: 'CM10195',
        sidebarPath: require.resolve('./sidebars/CM10195.js'),
        editUrl: "https://github.com/The-Jotter/CM10195/tree/main"
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'CM10312',
        path: 'docs/CM10312',
        routeBasePath: 'CM10312',
        sidebarPath: require.resolve('./sidebars/CM10312.js'),
        editUrl: "https://github.com/The-Jotter/CM10312/tree/main"

        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'CM10228',
        path: 'docs/CM10228',
        routeBasePath: 'CM10228',
        sidebarPath: require.resolve('./sidebars/CM10228.js'),
        editUrl: "https://github.com/The-Jotter/CM10228/tree/main"

        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'CM10310',
        path: 'docs/CM10310',
        routeBasePath: 'CM10310',
        sidebarPath: require.resolve('./sidebars/CM10310.js'),
        editUrl: "https://github.com/The-Jotter/CM10310/tree/main"

        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'CM10313',
        path: 'docs/CM10313',
        routeBasePath: 'CM10313',
        sidebarPath: require.resolve('./sidebars/CM10313.js'),
        editUrl: "https://github.com/The-Jotter/CM10313/tree/main"
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The Jotter',
        logo: {
          alt: 'Docusaurus',
          src: 'static/img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'META',
          },
          {
            to: "/CM10228/intro",
            position: 'left',
            label: 'CM10228',
          },
          {
            to: "/CM10195/intro",
            position: 'left',
            label: 'CM10195',
          },
          {
            to: "/CM10310/intro",
            position: 'left',
            label: 'CM10310',
          },
          {
            to: "/CM10312/intro",
            position: 'left',
            label: 'CM10312',
          },
          {
            to: "/CM10313/intro",
            position: 'left',
            label: 'CM10313',
          },
          {
            href: 'https://github.com/The-Jotter',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'META',
                to: '/meta/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/The-Jotter',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
