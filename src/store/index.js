import { createStore } from 'vuex'
import { userModule } from './userModule'
import { postModule } from './postModule'
import { albumModule } from './albumModule'

export default createStore({
  modules: {
    user: userModule,
    post: postModule,
    album: albumModule
  }
})
