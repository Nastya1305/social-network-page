
<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 485.211 485.211" >
		<g :fill="iconColor">
			<path d="M318.75,229.5v-153L242.25,0l-76.5,76.5v51h-153v357h459v-255H318.75z M114.75,433.5h-51v-51h51V433.5z M114.75,331.5h-51
			v-51h51V331.5z M114.75,229.5h-51v-51h51V229.5z M267.75,433.5h-51v-51h51V433.5z M267.75,331.5h-51v-51h51V331.5z M267.75,229.5
			h-51v-51h51V229.5z M267.75,127.5h-51v-51h51V127.5z M420.75,433.5h-51v-51h51V433.5z M420.75,331.5h-51v-51h51V331.5z"/>
		</g>
	</svg>
</template>


<script>
export default {
   props: {
      width: {
         type: [Number, String],
         default: 18
      },
      height: {
         type: [Number, String],
         default: 18
      },
      iconColor: {
         type: String,
         default: 'currentColor'
      }
   }
}
</script>

