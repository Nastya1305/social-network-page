(function(){"use strict";var e={122:function(e,t,s){var o=s(9242),r=s(3396);function n(e,t){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(s)}var a=s(89);const i={},l=(0,a.Z)(i,[["render",n]]);var u=l,c=s(2483),d=s(7139);const p=e=>((0,r.dD)("data-v-38bf2cf7"),e=e(),(0,r.Cn)(),e),m={class:"container wrapper"},g=p((()=>(0,r._)("h1",{class:"title"},"Users",-1))),L={key:1,class:"error"};function h(e,t,s,o,n,a){const i=(0,r.up)("user-list");return(0,r.wg)(),(0,r.iD)("div",m,[g,e.usersErrorMessage?((0,r.wg)(),(0,r.iD)("p",L,(0,d.zw)("Unable to load users: "+e.usersErrorMessage),1)):((0,r.wg)(),(0,r.j4)(i,{key:0,users:e.users,isLoading:e.isUsersLoading},null,8,["users","isLoading"]))])}var f=s(65);const w={key:0,class:"cards"},C={class:"cards__item"};function v(e,t,s,o,n,a){const i=(0,r.up)("user-card"),l=(0,r.up)("router-link"),u=(0,r.up)("fade-loader");return(0,r.wg)(),(0,r.iD)(r.HY,null,[s.users?((0,r.wg)(),(0,r.iD)("div",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.users,(e=>((0,r.wg)(),(0,r.iD)("div",C,[((0,r.wg)(),(0,r.j4)(l,{to:"/users/"+e.id,key:e.id},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{class:"cards__card",user:e},null,8,["user"])])),_:2},1032,["to"]))])))),256))])):(0,r.kq)("",!0),(0,r.Wm)(u,{class:"loader",loading:s.isLoading,color:e.tealColor},null,8,["loading","color"])],64)}const _={key:0,class:"user-card"},b={class:"user-card__name"},y={class:"user-card__fullname"},M={class:"info-list"},Z={class:"info-list__item"},k=["href"],I={class:"info-list__item"},U={class:"info-list__item"},D={class:"info-list__item"},W={class:"info-list__item"},P=["href"];function S(e,t,s,n,a,i){const l=(0,r.up)("mail-icon"),u=(0,r.up)("icon-base"),c=(0,r.up)("city-icon"),p=(0,r.up)("phone-icon"),m=(0,r.up)("company-icon"),g=(0,r.up)("website-icon"),L=(0,r.up)("section-container");return(0,r.wg)(),(0,r.j4)(L,{isLoading:s.isLoading},{content:(0,r.w5)((()=>[s.user?((0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("div",b,[(0,r._)("p",y,(0,d.zw)(s.user.name),1),(0,r._)("p",null,(0,d.zw)(s.user.username),1)]),(0,r._)("ul",M,[(0,r._)("li",Z,[(0,r._)("a",{class:"user-card__link",href:"mailto:"+s.user.email,onClick:t[0]||(t[0]=(0,o.iM)((()=>{}),["stop"]))},(0,d.zw)(s.user.email),9,k),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l)])),_:1})]),(0,r._)("li",I,[(0,r.Uk)((0,d.zw)(s.user.address.city)+" ",1),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})]),(0,r._)("li",U,[(0,r.Uk)((0,d.zw)(s.user.phone)+" ",1),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p)])),_:1})]),(0,r._)("li",D,[(0,r.Uk)((0,d.zw)(s.user.company.name)+" ",1),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m)])),_:1})]),(0,r._)("li",W,[(0,r._)("a",{class:"user-card__link",href:"http://"+s.user.website,target:"_blank",onClick:t[1]||(t[1]=(0,o.iM)((()=>{}),["stop"]))},(0,d.zw)(s.user.website),9,P),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g)])),_:1})])])])):(0,r.kq)("",!0)])),_:1},8,["isLoading"])}const j={d:"M 18 13 C 18 13.351 17.889 13.676 17.711 13.962 L 12.028 8.309 L 17.65 3.937 C 17.868 4.246 18 4.609 18 5 L 18 13 Z M 9 9.336 L 16.822 3.252 C 16.501 3.096 16.14 3 15.75 3 L 2.25 3 C 1.86 3 1.498 3.096 1.178 3.252 L 9 9.336 Z M 11.181 8.968 L 9.37 10.378 C 9.264 10.459 9.132 10.5 9 10.5 C 8.868 10.5 8.736 10.459 8.63 10.378 L 6.819 8.968 L 1.063 14.693 C 1.408 14.885 1.813 15 2.25 15 L 15.75 15 C 16.187 15 16.592 14.885 16.937 14.693 L 11.181 8.968 Z M 0.35 3.937 C 0.132 4.246 0 4.609 0 5 L 0 13 C 0 13.351 0.11 13.676 0.289 13.962 L 5.972 8.309 L 0.35 3.937 Z"};function x(e,t){return(0,r.wg)(),(0,r.iD)("path",j)}const z={},$=(0,a.Z)(z,[["render",x]]);var B=$;const E={d:"M 12 8.526 L 12 2.842 L 9 0 L 6 2.842 L 6 4.737 L 0 4.737 L 0 18 L 18 18 L 18 8.526 L 12 8.526 Z M 4 16.105 L 2 16.105 L 2 14.211 L 4 14.211 L 4 16.105 Z M 4 12.316 L 2 12.316 L 2 10.421 L 4 10.421 L 4 12.316 Z M 4 8.526 L 2 8.526 L 2 6.632 L 4 6.632 L 4 8.526 Z M 10 16.105 L 8 16.105 L 8 14.211 L 10 14.211 L 10 16.105 Z M 10 12.316 L 8 12.316 L 8 10.421 L 10 10.421 L 10 12.316 Z M 10 8.526 L 8 8.526 L 8 6.632 L 10 6.632 L 10 8.526 Z M 10 4.737 L 8 4.737 L 8 2.842 L 10 2.842 L 10 4.737 Z M 16 16.105 L 14 16.105 L 14 14.211 L 16 14.211 L 16 16.105 Z M 16 12.316 L 14 12.316 L 14 10.421 L 16 10.421 L 16 12.316 Z"};function O(e,t){return(0,r.wg)(),(0,r.iD)("path",E)}const V={},q=(0,a.Z)(V,[["render",O]]);var A=q;const T={d:"M 17.919 14.391 L 17.829 14.121 C 17.617 13.49 16.921 12.832 16.282 12.659 L 13.918 12.013 C 13.276 11.838 12.362 12.073 11.892 12.542 L 11.036 13.398 C 7.926 12.557 5.487 10.118 4.648 7.007 L 5.504 6.151 C 5.973 5.682 6.207 4.768 6.033 4.127 L 5.388 1.76 C 5.214 1.12 4.555 0.425 3.925 0.215 L 3.655 0.124 C 3.024 -0.086 2.125 0.126 1.656 0.596 L 0.375 1.877 C 0.147 2.105 0.001 2.756 0.001 2.758 C -0.044 6.823 1.55 10.74 4.425 13.616 C 7.293 16.485 11.194 18.077 15.247 18.042 C 15.269 18.042 15.938 17.899 16.167 17.671 L 17.447 16.39 C 17.916 15.921 18.128 15.022 17.919 14.391 Z"};function H(e,t){return(0,r.wg)(),(0,r.iD)("path",T)}const N={},Y=(0,a.Z)(N,[["render",H]]);var F=Y;const K={transform:"matrix(0.14319801330566406, 0, 0, 0.15570899844169617, -0.15751799941062972, -1.743941068649292)"},R=(0,r._)("path",{d:"M26.5,126.8h100.3V112l-11.5-21.7l-6.8,3.6l10.6,20v5.2h-17l4-48H20.7L26.5,126.8z M97.8,78.8l-3.4,40.3h-61l-4.2-40.3   H97.8z"},null,-1),G=(0,r._)("path",{d:"M90.8,38c0-14.8-12-26.8-26.8-26.8S37.2,23.2,37.2,38s12,26.8,26.8,26.8S90.8,52.8,90.8,38z M44.8,38   c0-10.6,8.6-19.2,19.2-19.2S83.2,27.4,83.2,38S74.6,57.2,64,57.2S44.8,48.6,44.8,38z"},null,-1),J=(0,r._)("polygon",{points:"19.4,94 12.6,90.4 1.1,112 1.1,126.8 18,126.8 18,119.2 8.8,119.2 8.8,114  "},null,-1),Q=(0,r._)("circle",{cx:"63",cy:"98",r:"4"},null,-1),X=[R,G,J,Q];function ee(e,t){return(0,r.wg)(),(0,r.iD)("g",K,X)}const te={},se=(0,a.Z)(te,[["render",ee]]);var oe=se;const re={d:"M 6.095 5.256 C 5.759 6.229 5.558 7.271 5.491 8.362 L 8.379 8.362 L 8.379 5.256 L 6.095 5.256 Z M 6.616 3.996 L 8.379 3.996 L 8.379 1.511 C 7.674 2.216 7.086 3.056 6.616 3.996 Z M 5.239 3.996 C 5.608 3.14 6.078 2.334 6.632 1.612 C 5.205 2.065 3.979 2.922 3.09 3.996 L 5.239 3.996 Z M 15.784 5.256 L 13.231 5.256 C 13.534 6.229 13.718 7.271 13.769 8.362 L 16.724 8.362 C 16.64 7.237 16.304 6.196 15.784 5.256 Z M 12.509 8.362 C 12.459 7.271 12.241 6.229 11.905 5.256 L 9.621 5.256 L 9.621 8.362 L 12.509 8.362 Z M 11.384 3.996 C 10.931 3.056 10.326 2.216 9.621 1.511 L 9.621 3.996 L 11.384 3.996 Z M 12.761 3.996 L 14.91 3.996 C 14.004 2.938 12.778 2.065 11.368 1.612 C 11.922 2.334 12.392 3.14 12.761 3.996 Z M 2.216 12.728 L 4.769 12.728 C 4.466 11.754 4.282 10.713 4.231 9.621 L 1.276 9.621 C 1.377 10.746 1.696 11.804 2.216 12.728 Z M 5.491 9.621 C 5.541 10.713 5.759 11.754 6.095 12.728 L 8.379 12.728 L 8.379 9.621 L 5.491 9.621 Z M 6.616 13.987 C 7.086 14.927 7.69 15.767 8.379 16.472 L 8.379 13.987 L 6.616 13.987 Z M 5.239 13.987 L 3.073 13.987 C 3.979 15.045 5.205 15.918 6.616 16.371 C 6.078 15.666 5.608 14.86 5.239 13.987 Z M 13.231 12.728 L 15.784 12.728 C 16.304 11.787 16.623 10.746 16.724 9.621 L 13.769 9.621 C 13.718 10.713 13.534 11.754 13.231 12.728 Z M 11.905 12.728 C 12.241 11.754 12.442 10.713 12.509 9.621 L 9.621 9.621 L 9.621 12.728 L 11.905 12.728 Z M 11.384 13.987 L 9.621 13.987 L 9.621 16.472 C 10.326 15.784 10.931 14.944 11.384 13.987 Z M 12.761 13.987 C 12.392 14.843 11.922 15.649 11.368 16.371 C 12.795 15.918 14.021 15.062 14.91 13.987 L 12.761 13.987 Z M 4.769 5.256 L 2.216 5.256 C 1.696 6.196 1.377 7.254 1.276 8.362 L 4.231 8.362 C 4.299 7.287 4.483 6.229 4.769 5.256 Z M 9 18 C 4.03 18 0 13.97 0 9 C 0 4.03 4.03 0 9 0 C 13.97 0 18 4.03 18 9 C 18 13.97 13.97 18 9 18 Z"};function ne(e,t){return(0,r.wg)(),(0,r.iD)("path",re)}const ae={},ie=(0,a.Z)(ae,[["render",ne]]);var le=ie,ue={name:"UserCard",components:{MailIcon:B,CityIcon:A,PhoneIcon:F,CompanyIcon:oe,WebsiteIcon:le},props:{user:Object,isLoading:{type:Boolean,default:!1}}};const ce=(0,a.Z)(ue,[["render",S],["__scopeId","data-v-5fcb683f"]]);var de=ce,pe=s(3048);const me="#1e7e8f",ge="rgb(1, 153, 180)";var Le={name:"UserList",components:{UserCard:de,FadeLoader:pe.Z},props:{users:Array,isLoading:{type:Boolean,default:!1}},created(){this.tealColor=me}};const he=(0,a.Z)(Le,[["render",v],["__scopeId","data-v-b3372b78"]]);var fe=he,we={name:"UsersView",components:{UserList:fe},computed:{...(0,f.rn)({users:e=>e.user.users,isUsersLoading:e=>e.user.isLoading,usersErrorMessage:e=>e.user.errorMessage})},methods:{...(0,f.nv)({fetchUsers:"user/fetchUsers"})},mounted(){this.fetchUsers()}};const Ce=(0,a.Z)(we,[["render",h],["__scopeId","data-v-38bf2cf7"]]);var ve=Ce;const _e={class:"user-info container wrapper"},be={key:1,class:"error"};function ye(e,t,s,o,n,a){const i=(0,r.up)("arrow-icon"),l=(0,r.up)("link-with-icon"),u=(0,r.up)("user-card"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",_e,[(0,r.Wm)(l,{text:"to Users page",path:"/"},{default:(0,r.w5)((()=>[(0,r.Wm)(i)])),_:1}),e.userErrorMessage?((0,r.wg)(),(0,r.iD)("p",be,(0,d.zw)("Unable to load user data: "+e.userErrorMessage),1)):((0,r.wg)(),(0,r.j4)(u,{key:0,user:e.user,isLoading:e.isUserLoading},null,8,["user","isLoading"])),(0,r.Wm)(c,{name:"posts"}),(0,r.Wm)(c,{name:"albums"})])}function Me(e,t,s,o,n,a){const i=(0,r.up)("icon-base"),l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(l,{to:s.path,class:"link"},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{width:"2rem",height:"2rem",hoverColor:e.lightTealColor},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default",{},void 0,!0)])),_:3},8,["hoverColor"]),(0,r.Uk)(" "+(0,d.zw)(s.text),1)])),_:3},8,["to"])}var Ze={name:"LinkWithIcon",props:{text:{type:String,required:!0},path:{type:String,required:!0}},created(){this.lightTealColor=ge}};const ke=(0,a.Z)(Ze,[["render",Me],["__scopeId","data-v-736111d3"]]);var Ie=ke;const Ue={d:"M 4.725 0.349 C 5.894 0.089 7.312 0 9 0 C 10.688 0 12.106 0.089 13.275 0.349 C 14.454 0.611 15.434 1.058 16.188 1.812 C 16.942 2.566 17.389 3.546 17.651 4.725 C 17.911 5.894 18 7.312 18 9 C 18 10.688 17.911 12.106 17.651 13.275 C 17.389 14.454 16.942 15.434 16.188 16.188 C 15.434 16.942 14.454 17.389 13.275 17.651 C 12.106 17.911 10.688 18 9 18 C 7.312 18 5.894 17.911 4.725 17.651 C 3.546 17.389 2.566 16.942 1.812 16.188 C 1.058 15.434 0.611 14.454 0.349 13.275 C 0.089 12.106 0 10.688 0 9 C 0 7.312 0.089 5.894 0.349 4.725 C 0.611 3.546 1.058 2.566 1.812 1.812 C 2.566 1.058 3.546 0.611 4.725 0.349 Z M 8.736 6.936 C 9.088 6.585 9.088 6.015 8.736 5.664 C 8.385 5.312 7.815 5.312 7.464 5.664 L 4.842 8.285 C 4.828 8.299 4.815 8.313 4.803 8.327 C 4.617 8.492 4.5 8.732 4.5 9 C 4.5 9.268 4.617 9.508 4.803 9.673 C 4.815 9.687 4.828 9.701 4.842 9.715 L 7.464 12.336 C 7.815 12.688 8.385 12.688 8.736 12.336 C 9.088 11.985 9.088 11.415 8.736 11.064 L 7.573 9.9 L 12.6 9.9 C 13.097 9.9 13.5 9.497 13.5 9 C 13.5 8.503 13.097 8.1 12.6 8.1 L 7.573 8.1 L 8.736 6.936 Z"};function De(e,t){return(0,r.wg)(),(0,r.iD)("path",Ue)}const We={},Pe=(0,a.Z)(We,[["render",De]]);var Se=Pe,je={name:"UserInfoView",components:{UserCard:de,LinkWithIcon:Ie,ArrowIcon:Se},computed:{...(0,f.rn)({user:e=>e.user.curUser,isUserLoading:e=>e.user.isLoading,userErrorMessage:e=>e.user.errorMessage})},methods:{...(0,f.nv)({fetchCurUser:"user/fetchCurUser"})},mounted(){this.fetchCurUser(this.$route.params.id)}};const xe=(0,a.Z)(je,[["render",ye]]);var ze=xe;const $e={class:"post-list"},Be={class:"post-list__item"},Ee={key:1,class:"error"};function Oe(e,t,s,o,n,a){const i=(0,r.up)("plus-icon"),l=(0,r.up)("my-button"),u=(0,r.up)("post-card"),c=(0,r.up)("section-container"),p=(0,r.up)("post-form"),m=(0,r.up)("modal-window");return(0,r.wg)(),(0,r.iD)(r.HY,null,[e.errorMessage?((0,r.wg)(),(0,r.iD)("p",Ee,(0,d.zw)("Unable to load posts: "+e.errorMessage),1)):((0,r.wg)(),(0,r.j4)(c,{key:0,title:"Posts",isLoading:e.isLoading},{"tool-btn":(0,r.w5)((()=>[(0,r.Wm)(l,{onClick:t[0]||(t[0]=e=>n.showModal=!0),isIconBtn:"",width:"2rem",height:"2rem"},{default:(0,r.w5)((()=>[(0,r.Wm)(i)])),_:1})])),content:(0,r.w5)((()=>[(0,r._)("div",$e,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.posts,(e=>((0,r.wg)(),(0,r.iD)("div",Be,[((0,r.wg)(),(0,r.j4)(u,{post:e,key:e.id},null,8,["post"]))])))),256))])])),_:1},8,["isLoading"])),(0,r.Wm)(m,{show:n.showModal,onClose:t[1]||(t[1]=e=>n.showModal=!1),title:"Post"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{onSave:a.savePost},null,8,["onSave"])])),_:1},8,["show"])],64)}const Ve={class:"post"},qe={class:"post__title"},Ae={class:"post__body"};function Te(e,t,s,o,n,a){return(0,r.wg)(),(0,r.iD)("article",Ve,[(0,r._)("h3",qe,(0,d.zw)(s.post.title),1),(0,r._)("p",Ae,(0,d.zw)(s.post.body),1)])}var He={name:"PostCard",props:{post:{type:Object,required:!0}}};const Ne=(0,a.Z)(He,[["render",Te],["__scopeId","data-v-4ceb43e0"]]);var Ye=Ne;function Fe(e,t,s,n,a,i){const l=(0,r.up)("text-input"),u=(0,r.up)("text-box"),c=(0,r.up)("my-button");return(0,r.wg)(),(0,r.iD)("form",{class:"post-form",onSubmit:t[2]||(t[2]=(0,o.iM)((()=>{}),["prevent"]))},[(0,r.Wm)(l,{label:"Title",modelValue:a.post.title,"onUpdate:modelValue":t[0]||(t[0]=e=>a.post.title=e)},null,8,["modelValue"]),(0,r.Wm)(u,{label:"Text",modelValue:a.post.body,"onUpdate:modelValue":t[1]||(t[1]=e=>a.post.body=e)},null,8,["modelValue"]),(0,r.Wm)(c,{class:"post-form__save-btn",onClick:i.savePost,type:"button"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Save ")])),_:1},8,["onClick"])],32)}var Ke={name:"post-form",data(){return{post:{title:"",body:""}}},methods:{savePost(){this.$emit("save",this.post),this.post={title:"",body:""}}}};const Re=(0,a.Z)(Ke,[["render",Fe],["__scopeId","data-v-1a6507b2"]]);var Ge=Re;const Je={d:"M 9.9 6.3 C 9.9 5.803 9.497 5.4 9 5.4 C 8.503 5.4 8.1 5.803 8.1 6.3 L 8.1 8.1 L 6.3 8.1 C 5.803 8.1 5.4 8.503 5.4 9 C 5.4 9.497 5.803 9.9 6.3 9.9 L 8.1 9.9 L 8.1 11.7 C 8.1 12.197 8.503 12.6 9 12.6 C 9.497 12.6 9.9 12.197 9.9 11.7 L 9.9 9.9 L 11.7 9.9 C 12.197 9.9 12.6 9.497 12.6 9 C 12.6 8.503 12.197 8.1 11.7 8.1 L 9.9 8.1 L 9.9 6.3 Z M 4.725 0.349 C 5.894 0.089 7.312 0 9 0 C 10.688 0 12.106 0.089 13.275 0.349 C 14.454 0.611 15.434 1.058 16.188 1.812 C 16.942 2.566 17.389 3.546 17.651 4.725 C 17.911 5.894 18 7.312 18 9 C 18 10.688 17.911 12.106 17.651 13.275 C 17.389 14.454 16.942 15.434 16.188 16.188 C 15.434 16.942 14.454 17.389 13.275 17.651 C 12.106 17.911 10.688 18 9 18 C 7.312 18 5.894 17.911 4.725 17.651 C 3.546 17.389 2.566 16.942 1.812 16.188 C 1.058 15.434 0.611 14.454 0.349 13.275 C 0.089 12.106 0 10.688 0 9 C 0 7.312 0.089 5.894 0.349 4.725 C 0.611 3.546 1.058 2.566 1.812 1.812 C 2.566 1.058 3.546 0.611 4.725 0.349 Z"};function Qe(e,t){return(0,r.wg)(),(0,r.iD)("path",Je)}const Xe={},et=(0,a.Z)(Xe,[["render",Qe]]);var tt=et,st={name:"PostList",components:{PostCard:Ye,PlusIcon:tt,PostForm:Ge},computed:{...(0,f.rn)({posts:e=>e.post.posts,isLoading:e=>e.post.isLoading,errorMessage:e=>e.post.errorMessage})},data(){return{showModal:!1}},methods:{...(0,f.nv)({fetchPostsByUserId:"post/fetchPostsByUserId",addPost:"post/addPost"}),savePost(e){this.addPost({post:e,userID:this.$route.params.id}),this.showModal=!1}},mounted(){this.fetchPostsByUserId(this.$route.params.id)}};const ot=(0,a.Z)(st,[["render",Oe],["__scopeId","data-v-0ad9c806"]]);var rt=ot;const nt={class:"album-list"},at={class:"album-list__item"},it={key:1,class:"error"};function lt(e,t,s,o,n,a){const i=(0,r.up)("photo-album"),l=(0,r.up)("section-container");return e.errorMessage?((0,r.wg)(),(0,r.iD)("p",it,(0,d.zw)("Unable to load albums: "+e.errorMessage),1)):((0,r.wg)(),(0,r.j4)(l,{key:0,title:"Albums",isLoading:e.isLoading},{content:(0,r.w5)((()=>[(0,r._)("div",nt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.albums,(e=>((0,r.wg)(),(0,r.iD)("div",at,[(0,r.Wm)(i,{class:"album-list__album",album:e},null,8,["album"])])))),256))])])),_:1},8,["isLoading"]))}const ut={class:"album"},ct={class:"album__title"},dt=["src","alt"],pt=(0,r._)("div",{class:"swiper-lazy-preloader"},null,-1);function mt(e,t,s,o,n,a){const i=(0,r.up)("swiper-slide"),l=(0,r.up)("swiper");return(0,r.wg)(),(0,r.iD)("div",ut,[(0,r._)("h2",ct,(0,d.zw)(s.album.title),1),(0,r.Wm)(l,{"slides-per-view":1,spaceBetween:30,modules:n.modules,pagination:{clickable:!0},lazy:!0},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.album.photos.slice(0,5),(e=>((0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.iD)("div",{class:"album__photo",key:e.id},[(0,r._)("img",{src:e.url,alt:e.title,loading:"lazy"},null,8,dt),pt]))])),_:2},1024)))),256))])),_:1},8,["modules"])])}var gt=s(4528),Lt=s(1008),ht={name:"PhotoAlbum",components:{Swiper:gt.tq,SwiperSlide:gt.o5},props:{album:{type:Object,required:!0}},data(){return{modules:[Lt.tl]}}};const ft=(0,a.Z)(ht,[["render",mt]]);var wt=ft,Ct={name:"PhotoAlbumList",components:{PhotoAlbum:wt},computed:{...(0,f.rn)({albums:e=>e.album.albums,isLoading:e=>e.album.isLoading,errorMessage:e=>e.album.errorMessage})},methods:{...(0,f.nv)({fetchAlbumsByUserId:"album/fetchAlbumsByUserId"})},mounted(){this.fetchAlbumsByUserId(this.$route.params.id)}};const vt=(0,a.Z)(Ct,[["render",lt],["__scopeId","data-v-3a6817c8"]]);var _t=vt;const bt=[{path:"/",component:ve},{path:"/users/:id",component:ze,children:[{path:"",components:{posts:rt,albums:_t}},{path:"posts",components:{posts:rt}},{path:"albums",components:{albums:_t}}]}],yt=(0,c.p7)({history:(0,c.PO)("/social-network-page/"),routes:bt,scrollBehavior(e,t,s){return{top:0}}});var Mt=yt,Zt=s(1076);const kt="https://jsonplaceholder.typicode.com",It="/users",Ut="/posts",Dt="/albums",Wt="/photos",Pt=e=>`${It}/${e}`,St=e=>`${Pt(e)}${Dt}`,jt=e=>`${Dt}/${e}${Wt}`,xt=Zt.Z.create({baseURL:kt,headers:{"Content-type":"application/json; charset=UTF-8"}});var zt=xt;async function $t(){const e=await zt.get(It);return e.data}async function Bt(e){const t=await zt.get(Pt(e));return t.data}const Et={state:()=>({users:[],curUser:void 0,isLoading:!1,errorMessage:""}),mutations:{setUsers(e,t){e.users=t},setLoading(e,t){e.isLoading=t},setCurUser(e,t){e.curUser=t},setErrorMessage(e,t){e.errorMessage=t}},actions:{async fetchUsers({commit:e}){try{e("setLoading",!0),e("setErrorMessage",""),e("setUsers",await $t())}catch(t){e("setErrorMessage",t)}finally{e("setLoading",!1)}},async fetchCurUser({commit:e},t){try{e("setCurUser",void 0),e("setLoading",!0),e("setErrorMessage",""),e("setCurUser",await Bt(t))}catch(s){console.log(s),e("setErrorMessage",s)}finally{e("setLoading",!1)}}},namespaced:!0};async function Ot(e){const t=await zt.get(Ut,{params:{userId:e}});return t.data}async function Vt(e,t){const s=await zt.post(Ut,{title:e.title,body:e.body,userId:t});return s.data}const qt={state:()=>({posts:[],isLoading:!1}),mutations:{setPosts(e,t){e.posts=t},setLoading(e,t){e.isLoading=t},setErrorMessage(e,t){e.errorMessage=t}},actions:{async fetchPostsByUserId({commit:e},t){try{e("setPosts",void 0),e("setLoading",!0),e("setErrorMessage",""),e("setPosts",await Ot(t))}catch(s){e("setErrorMessage",s)}finally{e("setLoading",!1)}},async addPost({state:e,commit:t},{post:s,userID:o}){try{const r=await Vt(s,o);t("setPosts",[...e.posts,r])}catch(r){t("setErrorMessage",r)}}},namespaced:!0};async function At(e){const t=await zt.get(St(e));return t.data}async function Tt(e){const t=await At(e),s=t.map((e=>zt.get(jt(e.id)))),o=await Promise.all(s);return t.forEach(((e,t)=>{e.photos=o[t].data})),t}const Ht={state:()=>({albums:[],isLoading:!1}),mutations:{setAlbums(e,t){e.albums=t},setLoading(e,t){e.isLoading=t},setErrorMessage(e,t){e.errorMessage=t}},actions:{async fetchAlbumsByUserId({commit:e},t){try{e("setAlbums",void 0),e("setLoading",!0),e("setErrorMessage",""),e("setAlbums",await Tt(t))}catch(s){e("setErrorMessage",s)}finally{e("setLoading",!1)}}},namespaced:!0};var Nt=(0,f.MT)({modules:{user:Et,post:qt,album:Ht}});const Yt={class:"modal__header"},Ft={key:0,class:"modal__title"};function Kt(e,t,s,n,a,i){const l=(0,r.up)("close-icon"),u=(0,r.up)("my-button");return s.show?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"modal__mask",onClick:t[2]||(t[2]=(0,o.iM)((t=>e.$emit("close")),["stop"]))},[(0,r._)("div",{onClick:t[1]||(t[1]=(0,o.iM)((()=>{}),["stop"])),class:"modal__container"},[(0,r._)("div",Yt,[s.title?((0,r.wg)(),(0,r.iD)("h3",Ft,(0,d.zw)(s.title),1)):(0,r.kq)("",!0),(0,r.Wm)(u,{isIconBtn:"",class:"modal__close-button",onClick:t[0]||(t[0]=t=>e.$emit("close"))},{default:(0,r.w5)((()=>[(0,r.Wm)(l)])),_:1})]),(0,r.WI)(e.$slots,"default",{},void 0,!0)])])):(0,r.kq)("",!0)}const Rt={d:"M 0.377 0.377 C 0.878 -0.126 1.693 -0.126 2.195 0.377 L 9 7.182 L 15.805 0.377 C 16.306 -0.126 17.121 -0.126 17.623 0.377 C 18.125 0.878 18.125 1.693 17.623 2.195 L 10.818 9 L 17.623 15.805 C 18.125 16.306 18.125 17.121 17.623 17.623 C 17.121 18.125 16.306 18.125 15.805 17.623 L 9 10.818 L 2.195 17.623 C 1.693 18.125 0.878 18.125 0.377 17.623 C -0.126 17.121 -0.126 16.306 0.377 15.805 L 7.182 9 L 0.377 2.195 C -0.126 1.693 -0.126 0.878 0.377 0.377 Z"};function Gt(e,t){return(0,r.wg)(),(0,r.iD)("path",Rt)}const Jt={},Qt=(0,a.Z)(Jt,[["render",Gt]]);var Xt=Qt,es={name:"modal-window",components:{CloseIcon:Xt},props:{title:String,show:{type:Boolean,default:!1}},watch:{show(){document.body.classList.toggle("modal-open")}}};const ts=(0,a.Z)(es,[["render",Kt],["__scopeId","data-v-a7bda84e"]]);var ss=ts;function os(e,t,s,o,n,a){const i=(0,r.up)("icon-base");return(0,r.wg)(),(0,r.iD)("button",{class:(0,d.C_)([s.isIconBtn?"icon-btn":"text-btn","button"])},[s.isIconBtn?((0,r.wg)(),(0,r.j4)(i,{key:0,hoverColor:e.lightTealColor,width:s.width,height:s.height},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default",{},void 0,!0)])),_:3},8,["hoverColor","width","height"])):(0,r.WI)(e.$slots,"default",{key:1},void 0,!0)],2)}var rs={name:"my-button",props:{isIconBtn:{type:Boolean,default:!1},width:[Number,String],height:[Number,String]},created(){this.lightTealColor=ge}};const ns=(0,a.Z)(rs,[["render",os],["__scopeId","data-v-49fbffb2"]]);var as=ns;const is={class:"section"},ls={key:0,class:"section__header"},us={class:"section__title"},cs={class:"section__loader"};function ds(e,t,s,o,n,a){const i=(0,r.up)("fade-loader");return(0,r.wg)(),(0,r.iD)("section",is,[s.title?((0,r.wg)(),(0,r.iD)("header",ls,[(0,r.WI)(e.$slots,"tool-btn",{},void 0,!0),(0,r._)("h2",us,(0,d.zw)(s.title),1)])):(0,r.kq)("",!0),s.isLoading?(0,r.kq)("",!0):(0,r.WI)(e.$slots,"content",{key:1},void 0,!0),(0,r._)("div",cs,[(0,r.Wm)(i,{loading:s.isLoading,color:e.tealColor},null,8,["loading","color"])])])}var ps={name:"section-container",components:{FadeLoader:pe.Z},props:{title:String,isLoading:{type:Boolean,default:!1}},created(){this.tealColor=me}};const ms=(0,a.Z)(ps,[["render",ds],["__scopeId","data-v-d1cae2ca"]]);var gs=ms;const Ls=["width","height"];function hs(e,t,s,o,n,a){return(0,r.wg)(),(0,r.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s.width,height:s.height,viewBox:"0 0 18 18",style:(0,d.j5)(a.styleObject)},[(0,r.WI)(e.$slots,"default",{},void 0,!0)],12,Ls)}var fs={name:"icon-base",props:{width:{type:[Number,String],default:"1.2rem"},height:{type:[Number,String],default:"1.2rem"},iconColor:{type:String,default:me},hoverColor:{type:String,default:me}},computed:{styleObject(){return{"--icon-color":this.iconColor,"--icon-color--hover":this.hoverColor}}}};const ws=(0,a.Z)(fs,[["render",hs],["__scopeId","data-v-0a7c3d29"]]);var Cs=ws;const vs={key:0,for:"input",class:"label"},_s=["value"];function bs(e,t,s,o,n,a){return(0,r.wg)(),(0,r.iD)("div",null,[s.label?((0,r.wg)(),(0,r.iD)("label",vs,(0,d.zw)(s.label),1)):(0,r.kq)("",!0),(0,r._)("input",{type:"text",id:"input",class:"input",value:s.modelValue,onInput:t[0]||(t[0]=(...e)=>a.updateInput&&a.updateInput(...e))},null,40,_s)])}var ys={name:"text-input",props:{label:String,modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const Ms=(0,a.Z)(ys,[["render",bs],["__scopeId","data-v-1d2741b0"]]);var Zs=Ms;const ks={key:0,for:"text-area",class:"label"},Is=["value"];function Us(e,t,s,o,n,a){return(0,r.wg)(),(0,r.iD)("div",null,[s.label?((0,r.wg)(),(0,r.iD)("label",ks,(0,d.zw)(s.label),1)):(0,r.kq)("",!0),(0,r._)("textarea",{class:"text-box",id:"text-area",value:s.modelValue,onInput:t[0]||(t[0]=(...e)=>a.updateInput&&a.updateInput(...e))},null,40,Is)])}var Ds={name:"text-box",props:{label:String,modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const Ws=(0,a.Z)(Ds,[["render",Us],["__scopeId","data-v-b0066d16"]]);var Ps=Ws,Ss=[ss,as,gs,Cs,Zs,Ps];const js=(0,o.ri)(u);Ss.forEach((e=>{js.component(e.name,e)})),js.use(Nt).use(Mt).mount("#app")}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,o,r,n){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],n=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&n||a>=n)&&Object.keys(s.O).every((function(e){return s.O[e](o[l])}))?o.splice(l--,1):(i=!1,n<a&&(a=n));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,r,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,a=o[0],i=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(l)var c=l(s)}for(t&&t(o);u<a.length;u++)n=a[u],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(c)},o=self["webpackChunkusers"]=self["webpackChunkusers"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(122)}));o=s.O(o)})();
//# sourceMappingURL=app.7e53fbb9.js.map