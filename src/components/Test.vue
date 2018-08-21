<template>
  <div>
    <router-link to="/">Home James</router-link>

    <div id="settingsPanel">
      <div v-if="step == 1">
        Symmetry Type:
        <select v-model="symmetry">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button @click="gotoStep(2)">Next</button>
      </div>
      <div v-if="step==2">
        Number of Teeth:<input v-model="numberOfTeeth"/>
        <button @click="gotoStep(3)">Next</button>
        <button @click="gotoStep(1)">Back</button>
      </div>
      <div v-if="step==3">
        Number of cheese:<input v-model="cheeseCount"/>
        <button @click="gotoStep(2)">Back</button>
      </div>
    </div>

    <div id="gearOutput">
      Symmetry:{{symmetry}}
      NumberOfTeeth: {{numberOfTeeth}}
      Cheese Count: {{cheeseCount}}

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      step: 1,
      symmetry: '',
      numberOfTeeth: 0,
      cheeseCount: 0
    }
  },
  methods: {
    gotoStep: function(step){
      this.step = step
    }
  }
}
</script>

<script>
  export default {
    name: 'Grid',
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
p {
  color: red;
}

#gearOutput {
  background-color: grey;
}

#settingsPanel {
  background-color: pink;
}
</style>
