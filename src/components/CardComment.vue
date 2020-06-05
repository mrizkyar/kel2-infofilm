<template>
     <form class="container">
         <p>Tulis komentar</p>
               <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="email" id="teks" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
               </p>
             </div>
             <div class="field">
               <p class="control has-icons-left">
                <input class="input" type="password" id="teks" placeholder="Password">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
               </p>
             </div>
            <div class="control">
                <textarea class="textarea has-fixed-size" id="komen" placeholder="Komentar" wrap="virtual"></textarea>
            </div>
            <div class="field">
               <p class="control">
                 <input type =" button " class="button is-success" v-onclick="kirim()" value="Komentar" >
                 <input type="reset"  class="button is-success" v-onclick="kirim()" value="Batal">
                </p>
             </div>
        </form>
</template>
<script>

</script>
