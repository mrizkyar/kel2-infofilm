<template>
    <section class="section">
       <div class="container content has-text-centered">
            <h1 class= "title is-2"> Avenger:End Game(2018)</h1>
            <img src="@/assets/img/film1.jpg">
        </div>
        <hr>
        <strong>Sinopsis</strong>
        <hr>
        <p>{Ketika musuh yang tak terduga muncul, mengancam keselamatan dan keamanan dunia, Nick Fury, direktur Badan Perdamaian Internasional, dikenal sebagai S.H.I.E.L.D. , membutuhkan tim untuk menyelamatkan dunia dari bencana. Usaha perekrutan pun dimulai Iron Man, Captain America, Hulk, Thor, Black Widow dan Hawkeye dikumpulkan untuk menaklukkan Dewa Kehancuran, Loki, dalam usahanya menghancurkan bumi. Dengan semua gabungan kekuatan, tugas nampak lebih mudah. Namun kenyatannya tidak demikian! Para pahlawan super justru saling melawan satu sama lain Hulk melawan Captain America, siapa yang akan menang? Apakah Iron Man dapat mengalahkan kekuatan super milik Thor? Bagaimana para pahlawan super ini secara bersama-sama menghadapi bencana, melindungi masyarakat dan yang terpenting, bertahan hidup?</p>
        <hr>
         <strong>Trailer</strong>
        <hr>
        <div class="container content has-text-centered">
            <iframe src="https://www.youtube.com/embed/TcMBFSGVi1c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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