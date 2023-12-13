<template>
   <div class="album">
      <h2 class="album__title">{{ album.title }}</h2>

      <swiper 
         :slides-per-view="1" 
         :spaceBetween="30"
         :modules="modules" 
         :pagination="{ clickable: true }"
         :lazy="true" 
      >
         <swiper-slide v-for="photo of album.photos.slice(0, 5)">

            <div class="album__photo" :key="photo.id">
               <img :src="photo.url" :alt="photo.title" loading="lazy">
               <div class="swiper-lazy-preloader"></div>
            </div>
            
         </swiper-slide>
      </swiper>

   </div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import './styles.scss';

export default {
   name: 'PhotoAlbum',
   components: {
      Swiper, SwiperSlide,
   },
   props: {
      album: {
         type: Object,
         required: true
      }
   },
   setup() {
      return {
         modules: [Pagination],
      };
   },
}
</script>



