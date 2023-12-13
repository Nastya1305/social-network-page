<template>
   <section-container :isLoading="isLoading">
      <div v-if="user" class="user-card">
         <div class="user-card__name">
            <p class="user-card__fullname">{{ user.name }}</p>
            <p>{{ user.username }}</p>
         </div>

         <ul class="info-list">
            <li class="info-list__item">
               <a class="user-card__link" 
                  :href="'mailto:' + user.email" 
                  @click.stop
               >
                  {{ user.email }}
               </a>
               <icon-base><mail-icon /></icon-base>
            </li>

            <li class="info-list__item">
               {{ user.address.city }}
               <icon-base><city-icon /></icon-base>
            </li>

            <li class="info-list__item">
               {{ user.phone }}
               <icon-base><phone-icon /></icon-base>
            </li>

            <li class="info-list__item">
               {{ user.company.name }}
               <icon-base><company-icon /></icon-base>
            </li>

            <li class="info-list__item">
               <a class="user-card__link" 
                  :href="'http://' + user.website" 
                  target="_blank" 
                  @click.stop
               >
                  {{ user.website }}
               </a>
               <icon-base><website-icon /></icon-base>
            </li>
         </ul>
      </div>
   </section-container>
</template>


<script>
import SectionContainer from '@/components/UI/SectionContainer'
import IconBase from '@/components/UI/IconBase.vue'
import MailIcon from '@/assets/MailIcon.vue'
import CityIcon from '@/assets/CityIcon.vue'
import PhoneIcon from '@/assets/PhoneIcon.vue'
import CompanyIcon from '@/assets/CompanyIcon.vue'
import WebsiteIcon from '@/assets/WebsiteIcon.vue'

export default {
   name: 'UserCard',
   components: { 
      MailIcon, 
      CityIcon, 
      PhoneIcon, 
      CompanyIcon, 
      WebsiteIcon, 
      SectionContainer, 
      IconBase 
   },
   props: {
      user: Object,
      isLoading: {
         type: Boolean,
         default: false
      }
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
