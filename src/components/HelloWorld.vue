<template>
  <div>
    <router-link to="test">Test Page</router-link>
    <button @click="filterBy('wireframe')">Wireframe</button>
    <button @click="filterBy('glass')">glass</button>

    <div>
      {{currentType}}
    </div>

    <ol>
      <li v-for="piece in pieces">
        {{piece.name}} - {{piece.price}}
      </li>
    </ol>
  </div>
</template>
<script>
let cheese = 5
export default {
  name: 'HelloWorld',
  data () {
    return {
      currentType: "",
      pieces: [
        {name:"Tall", price:"a lot"},
        {name:"Short", price:"less than tall"},
        {name:"Eh", price:"Eh"},
        {name:"Fat", price:"ew"},
        {name:"Eyebrow", price:"free to good home"}
      ]
    }
  },
  methods: {
    filterBy: function(type) {
      this.currentType = type
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
