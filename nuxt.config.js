export default {
    css: [
      // SCSS file in the project
      '@/assets/css/bootstrap.min.css',
      '@/assets/css/icons.min.css',
      '@/assets/libs/@iconscout/unicons/css/line.css',
      '@/assets/css/style.min.css',
        '@/assets/css/app.css'
    ],
    head: {
        title: 'Easycentral',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { meta: [{ name: 'description', content: 'My amazing site' }]}

        ],
        link: [
            { rel: 'favicon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      }

    }

