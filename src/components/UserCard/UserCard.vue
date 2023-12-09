<template>
   <div class="user-card">
      <div class="user-card__name">
         <p class="user-card__fullname">{{ user.name }}</p>
         <p>{{ user.username }}</p>
      </div>

      <ul class="info-list">
         <li class="info-list__item">
            <a class="user-card__link" :href="'mailto:' + user.email">{{ user.email }}</a>
            <mail-icon icon-color="#1e7e8f" width="1.2rem"/>
         </li>
         <li class="info-list__item">
            {{ user.address.city }}
            <city-icon icon-color="#1e7e8f" width="1.2rem"/>
         </li>
         <li class="info-list__item">
            {{ user.phone }}
            <phone-icon icon-color="#1e7e8f" width="1.2rem"/>
         </li>
         <li class="info-list__item">
            {{ user.company.name }}
            <company-icon icon-color="#1e7e8f" width="1.2rem"/>
         </li>
         <li class="info-list__item">
            <a class="user-card__link" :href="'http://' + user.website" target="_blank">{{ user.website }}</a>
            <website-icon icon-color="#1e7e8f" width="1.2rem"/>
         </li>
      </ul>
   </div>
</template>



<script>
import MailIcon from '@/assets/MailIcon.vue'
import CityIcon from '@/assets/CityIcon.vue'
import PhoneIcon from '@/assets/PhoneIcon.vue'
import CompanyIcon from '@/assets/CompanyIcon.vue'
import WebsiteIcon from '@/assets/WebsiteIcon.vue'

export default {
   name: 'UserCard',
   components: { MailIcon, CityIcon, PhoneIcon, CompanyIcon, WebsiteIcon },
   props: {
      user: {
         type: Object,
         required: true
      }
   }
}
</script>


<style scoped lang="scss">
@import "./styles.scss";
</style>
