module.exports = {
  title: 'BeykozMekan - Yardım',
  tagline: 'İşletmeler ve Kullanıcılar için Yardım Merkezi',
  url: 'https://yardim.beykozmekan.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'erobus', // Usually your GitHub org/user name.
  projectName: 'beykozmekandestek', // Usually your repo name.
  plugins: [
  [
  '@docusaurus/plugin-ideal-image',
  {
  quality: '70',
  max: '1030',
  min: '640',
  steps: '2',
  },
  ],
  ],
  themeConfig: {
      algolia: {
      apiKey: '55e0d9f8f54575d0d1d53648f436b745',
      indexName: 'beykozmekan_yardim',
      searchParameters: {"facetFilters":["lang:tr"]}, // Optional (if provided by Algolia)
      placeholder: 'Ara'
      },
      colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '\u2600',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'BeykozMekan',
      logo: {
        alt: 'BeykozMekan - Yardım Merkezi',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Yardım Merkezi',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'portfolyo/',
          label: 'Portfolyo',
          position: 'left',
        },
        {
          href: 'https://beykozmekan.com',
          label: 'Anasayfa',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Yardım',
          items: [
            {
              label: 'Genel Bilgi',
              to: 'docs/',
            },
            {
              label: 'Kullanıcı Ayarları',
              to: 'docs/doc2/',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
        {
          title: 'Topluluk',
          items: [
            {
              label: 'BeykozMekan',
              href: 'https://beykozmekan.com',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/beykozmekan',
            },
            {
              label: 'Alternatik',
              href: 'https://alternatik.com',
            },
          ],
        },
        {
          title: 'Bağlantılar',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/erobus/beykozmekandestek',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BeykozMekan - Alternatik ürünüdür.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/erobus/beykozmekandestek/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/erobus/beykozmekandestek/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
