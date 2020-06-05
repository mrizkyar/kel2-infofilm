<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/Trending' }">
                Trending
            </b-navbar-item>
             <b-navbar-item tag="router-link" :to="{ path: '/nowplaying' }">
                Now Playing
            </b-navbar-item>
             <b-navbar-item tag="router-link" :to="{ path: '/coming' }">
                Coming Soon
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="field is-grouped">
                     <p class="control is-expanded">
                     <input class="input" type="text" placeholder="Search">
                     </p>
                     <p class="control">
                        <a class="button is-white">
                           Search
                        </a>
                     </p>
                  </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
