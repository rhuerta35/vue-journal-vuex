<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name: 'entry', params: {id: 10}})">
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">15</span>
          <span class="mx-1 fs-5">Julio</span>
          <span class="mx-2 fw-light">2022, jueves</span>
      </div>
      <div class="entry-description">
          Vigna unguiculata subespecie sesquipedalis es una legumbre comestible cultivada para consumir sus vainas verdes. Se la conoce por el nombre de judía de metro, bora, judía de vaca, frijol espárrago, habichuela larga, frijol serpiente Wikipedia
Nombre científico: Vigna unguiculata ssp. sesquipedalis
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang ="scss" scoped>


.entry-container {
 border-bottom:  1px solid #2c3e50;
 transition: 0.2s all ease-in;

 &:hover {
     background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;
 }
 .entry-description{
     font-size: 12px;
 }
}
</style>