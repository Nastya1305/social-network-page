<template>
   <section-container v-if="!errorMessage" title="Albums" :isLoading="isLoading">

      <template #content>
         <div class="album-list">
            <div class="album-list__item" v-for="album of albums">
               <photo-album class="album-list__album" :album="album" />
            </div>
         </div>
      </template>
      
   </section-container>

   <p v-else class="error">{{ 'Unable to load albums: ' + errorMessage }}</p>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import PhotoAlbum from '@/components/PhotoAlbum'

export default {
   name: 'PhotoAlbumList',
   components: { PhotoAlbum,},
   computed: {
      ...mapState({
         albums: state => state.album.albums,
         isLoading: state => state.album.isLoading,
         errorMessage: state => state.album.errorMessage,
      })
   },
   methods: {
      ...mapActions({
         fetchAlbumsByUserId: 'album/fetchAlbumsByUserId',
      }),
   },
   mounted() {
      this.fetchAlbumsByUserId(this.$route.params.id);
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
