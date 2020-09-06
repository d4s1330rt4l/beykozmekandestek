module.exports = {
  title: 'BeykozMekan - Yardım',
  tagline: 'İşletmeler ve Kullanıcılar için yardım',
  url: 'https://yardim.beykozmekan.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'erobus', // Usually your GitHub org/user name.
  projectName: 'beykozmekandestek', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'BeykozMekan - Yardım',
      logo: {
        alt: 'BeykozMekan - Yardım',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Yardım',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/erobus/beykozmekandestek',
          label: 'GitHub',
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
              label: 'Alternatik',
              href: 'https://alternatik.com',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/beykozmekan',
            },
          ],
        },
        {
          title: 'Diğer',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
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
