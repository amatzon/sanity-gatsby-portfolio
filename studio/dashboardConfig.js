export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4a7d0983248d7dabf6b962',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-q7zjgyv6',
                  apiId: '9b239619-52fa-4453-b427-3f6b264c0c91'
                },
                {
                  buildHookId: '5f4a7d0acff5d0d14f7c6326',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-n8y43apy',
                  apiId: '09924043-c850-426d-aab7-ecfec6050696'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amatzon/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-n8y43apy.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
