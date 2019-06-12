export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d0169e4749e7efb2b867b3f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8dd29ibv',
                  apiId: '10b6e7a8-ce53-4add-bcd1-c3baf2170b0a'
                },
                {
                  buildHookId: '5d0169e4749e7e3196867b1a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xvsjh4g6',
                  apiId: '5d082121-b321-488c-8fae-7b0306a60ea6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/graemeatg/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xvsjh4g6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
