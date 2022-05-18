<script setup>
import { defineComponent, onMounted, ref } from "vue"
const thisQuote = ref({ source: '', quote: ''})
const getQuotes = async () => {
  const PhilosophyQuotesLink = "https://philosophy-quotes-api.glitch.me/quotes"
  let data = await fetch(PhilosophyQuotesLink, (error)=>console.error(error.message))
  let json = await data.json()
  // console.log(json)
  let random = Math.floor(Math.random()*json.length)
  let quo = await json[random]
  thisQuote.value = await quo
}
onMounted(()=> {
  getQuotes()
})
</script>
<template>
  <div class="unthinkme">
    <h1>Placeholder Content</h1>
    <i class="material-icons glow" @click="getQuotes">park</i>
    <div v-if="thisQuote.quote">
      <p v-text="thisQuote.quote"></p>
      <h4>{{thisQuote.source}}</h4>
    </div>
    <div v-else>
      <p>Louie is thinking...</p>
      <img alt="nien nunb"
      src="https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/avatars%2Fnien_nunb.png?alt=media&token=b5fe8859-af90-4431-8ce4-00ae55fd1cda" />
    </div>
  </div>
</template>
<style lang="sass" scoped>
.unthinkme
  color: white
  text-align: center
  background-color: rgb(16, 10, 28)
  display: flex
  flex-direction: column
  // align-content: space-around
  justify-content: space-around
  align-items: space-between
  min-height: 70vh
  margin: auto
  padding: 3rem
  box-shadow: 1px 1px rgb(43, 27, 74), -1px -1px rgb(43, 27, 74)
  h2
    text-align: left
    display: float-left
    color: rgb(37, 180, 191)
    font-size: 2rem
    font-style: italic
    max-width: 500px
  h4
    max-width: 500px
    text-align: right
</style>
