

<template>
  <header>
  </header>

  <main>
    <button v-on:click="toggle='character-viewer'">View all characters</button>
    <button v-on:click="toggle='character-creator'">Create a character</button>

    <charViewer v-show="toggle==='character-viewer'" />
    <charCreator v-show="toggle==='character-creator'" />
  </main>
</template>

<script>
import charViewer from './components/charViewer.vue'
import charCreator from './components/charCreator.vue'

export default {
        name: 'App',
        components: {
            charViewer,
            charCreator
        },
        data: function () {
            return {
                toggle: "character-viewer"
            }
        }
    }

</script>

<style scoped>

</style>
