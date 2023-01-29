<template>
    <h3>Anasayfa</h3>
    <CarouselComponent />

    <RelatedItemSection />


</template>

<script>

import CarouselComponent from '@/components/PageContent/CarouselComponent.vue';
import RelatedItemSection from '../components/Section/RelatedItemSection.vue'

export default {
    components : {
    RelatedItemSection,
    CarouselComponent
}
}
</script>