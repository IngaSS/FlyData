<template>
     <v-img
        :src="this.img404"
    
    ></v-img>
</template>


<script>
import image from '../images/notFound2.png'

export default {
    data: () => ({
     img404: image
    }),
}
</script>
