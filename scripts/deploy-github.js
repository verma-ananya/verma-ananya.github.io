const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/verma-ananya/verma-ananya.github.io.git',
  },
  () => {
    console.log('Deploy Completed!')
  }
)