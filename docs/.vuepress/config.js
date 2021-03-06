module.exports = {
  title: 'Innovet-arduino-so',
  description: 'Basis arduino cursus voor het SO onderwijs',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'http://sint-rembert.be' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/1ste-programma/', '1ste programma'],
      ['/informatie-naar-computer-sturen/', 'Informatie naar computer sturen'],
      ['/constanten/', 'Constanten'],
      ['/variabelen/', 'Variabelen'],
      ['/controlestructuren/', 'Controlestructuren'],
      ['/info-van-computer-ontvangen/', 'Info van computer ontvangen'],
      ['/operatoren/', 'Operatoren'],
      ['/strings/', 'Strings'],
      ['/ingebouwde-functies/', 'Ingebouwde functies'],
      ['/eigen-functies/', 'Eigen functies'],
      ['/componentenlijst/', 'Componentenlijst']
    ],
    repo: 'https://github.com/KrisWerbrouck1/Innovet-arduino-so.git',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
