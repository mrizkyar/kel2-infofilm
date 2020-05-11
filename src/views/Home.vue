<template>
  <div class="home">
    <Film></Film>
  </div>

</template>

<script>
// @ is an alias to /src
import Film from '@/components/Film.vue'

export default {
  name: 'Home',
  components: {
    Film
  }
}
</script>
