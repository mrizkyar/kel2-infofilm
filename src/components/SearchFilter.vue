<template>
    <div id="src">
        <autocomplete
            :search="search"
            placeholder="Search for a Film"
            aria-label="Search for a Film"
        ></autocomplete>
    </div>
</template>
<script>
 new Vue({
     el: '#src',
     components:{
         Autocomplate
     },
     methods: {
         search(input) {
          if (input.length < 1) { return [] }
            return countries.filter(country => {
            return country.toLowerCase()
                .startsWith(input.toLowerCase())   
         })
     }

     }
 })
</script>
<style lang="stylus" scoped>
#src {
  max-width: 400px;
  margin: 0 auto;
}
</style>