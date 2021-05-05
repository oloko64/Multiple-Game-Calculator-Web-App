<template>
  <q-page class="q-pa-lg text-center">

    <div class="column relative-position row center" style="height: 300px;">

      <div class="col-4 q-ma-sm col-md-9 inputs-opt">
        <label class="text-weight-bolder text-h6">1920</label
        ><label> x 1080</label>
        <q-input v-model="inpWidth" @keyup="calcular()" label="Insert the Width" />
      </div>


      <div class="col-2 q-ma-sm col-md-9 inputs-opt">
          <label>1920 x </label
          ><label class="text-weight-bolder text-h6">1080</label>
          <q-input v-model="inpHeight" @keyup="calcular()" label="Insert the Height" />
      </div>
    </div>
  </q-page>
</template>

<script>
import * as ext from '../assets/armaCalc.js'

export default {
  data() {
    return {
      drawer: false,
      inpWidth: '1920',
      inpHeight: '1080'
    };
  },
  methods: {
    calcular() {
      ext.calc_value(this.inpHeight,this.inpWidth, 120)
    }
  }
};
</script>

<style>
.inputs-opt {
  min-width: 300px;
  max-width: 300px;
}
</style>