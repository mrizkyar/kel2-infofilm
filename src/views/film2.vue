<template>
    <section class="section">
       <div class="container content has-text-centered">
            <h1 class= "title is-2"> Birds of Prey(2020)</h1>
            <img src="@/assets/img/film2.jpg">
        </div>
        <hr>
        <strong>Sinopsis</strong>
        <hr>
        <p>"Setelah berpisah dengan Joker, Harley Quinn (Margot Robbie) bergabung dengan Black Canary (Jurnee Smollett-Bell), Huntress (Mary Elizabeth Winstead) dan Renee Montoya (Rosie Perez) untuk menyelamatkan seorang gadis muda bernama Cassandra Cain (Ella Jay Basco) dari sosok penguasa kejahatan yang dikenal sebagai Black Mask (Ewan McGregor).</p>
        <hr>
         <strong>Trailer</strong>
        <hr>
        <div class="container content has-text-centered">
            <iframe src="https://www.youtube.com/embed/kGM4uYZzfu0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <hr>
        <Coments></Coments>
    </section>
</template>
<script>
import Coments from '@/components/CardComment.vue'
export default {
  name: 'Home',
  components: {
    Coments
  }
}
</script>
