<template>
<section>
        <b-notification
            type="is-success is-light"
            has-icon
            aria-close-label="Close notification">
            Website ini mengenalkan mengenai info-info film yang sedang hangat dan juga trending sehingga memudahkan anda untuk memilih film kesukaan anda
        </b-notification>
        <div class="container">
               <div class="columns">
                  <div class="column">
                     <figure class="image">
                        <router-link to="/avenger">
                        <a class="box is-3by4 content has-text-centered">
                           <img src="@/assets/img/film1.jpg">
                           <strong>Avenger (2019)</strong>
                        </a>
                        </router-link>
                      </figure>
                  </div>
                  <div class="column">
                     <figure class="image">
                        <router-link to="/birds">
                        <a class="box is-3by4 content has-text-centered">
                           <img src="@/assets/img/film2.jpg">
                           <strong>Bird of Prey (2020)</strong>
                        </a>
                        </router-link>
                      </figure>
                  </div>
                  <div class="column">
                     <figure class="image">
                        <a class="box is-3by4 content has-text-centered" href="film3.html">
                           <img src="@/assets/img/film3.jpg">
                           <strong>Gundala (2019)</strong>
                        </a>
                      </figure>
                  </div>
                  <div class="column">
                     <figure class="image">
                        <a class="box is-3by4 content has-text-centered" href="film4.html">
                           <img src="@/assets/img/film4.jpeg">
                           <strong>Onward (2020)</strong>
                        </a>
                      </figure>
                  </div>
               </div>
            </div>
    </section>
</template>
<script>

</script>
<style scoped>

</style>
