const nextRoutes = require('next-routes');

const routes = nextRoutes()
    .add({ name: 'index', pattern: '/', page: 'index' })

    .add({ name: 'projects', pattern: '/projects', page: 'page' })
    .add({ name: 'about', pattern: '/about', page: 'page' })

    .add({ name: 'projectview', pattern: '/projects/:slug', page: 'page' });

export default routes;
