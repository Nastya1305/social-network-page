import { createRouter, createWebHistory } from 'vue-router';
import UsersView from '@/views/UsersView.vue';
import UserInfoView from '@/views/UserInfoView.vue';
import PostList from '@/components/PostList';
import PhotoAlbumList from '@/components/PhotoAlbumList';

const routes = [
  {
    path: '/',
    component: UsersView
  },
  {
    path: '/users/:id',
    component: UserInfoView,
    children: [
      {
        path: '',
        components:
          {
            posts: PostList,
            albums: PhotoAlbumList
          },
      },
      {
        path: 'posts',
        components: { posts: PostList },
      },
      {
        path: 'albums',
        components: { albums: PhotoAlbumList },
      },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
