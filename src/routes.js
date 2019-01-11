export default [
  {
    path: '/',
    exact: true,
    screen: 'Home',
  },
  {
    path: '/about',
    screen: 'About',
  },
  {
    path: '/places/:slug',
    screen: 'Place',
  },
];
