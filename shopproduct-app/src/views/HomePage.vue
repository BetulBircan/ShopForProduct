<template>
    <h3>Anasayfa</h3>
    <CarouselComponent />
    <RelatedItemSection />
    <PopularItemSection />


</template>

<script>

import CarouselComponent from '@/components/PageContent/CarouselComponent.vue';
import RelatedItemSection from '../components/Section/RelatedItemSection.vue'
import PopularItemSection from '@/components/Section/PopularItemSection.vue'

export default {
    components : {
    RelatedItemSection,
    CarouselComponent,
    PopularItemSection
}
}
</script>