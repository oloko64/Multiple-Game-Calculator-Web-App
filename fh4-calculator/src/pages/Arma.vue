<template>
  <q-page class="q-pa-lg text-center">
    <!-- Input Desired Fov -->
    <div class="row justify-center">
      <div class="col-12 col-md-8  q-ma-lg">
        <label class="text-h6">Insert Your Desired FOV</label>
        <q-input class="text-h6" v-model="inpFov" label="Desired FOV" />
      </div>
    </div>

    <!-- Input Resolution -->
    <label class="text-h6">Insert your monitor resolution below</label>

    <div class="row justify-center">
      <div class="col-12 col-md-4 q-ma-lg">
        <label class="text-weight-bolder text-h6">1920</label
        ><label> x 1080</label>
        <q-input class="text-h6" v-model="inpWidth" label="Insert the Width" />
      </div>

      <div class="col-12 col-md-4 q-ma-lg">
        <label>1920 x </label
        ><label class="text-weight-bolder text-h6">1080</label>
        <q-input
          class="text-h6"
          v-model="inpHeight"
          label="Insert the Height"
        />
      </div>
    </div>

    <!-- Calculate Button -->
    <q-btn class="q-ma-lg" @click="calcular()" color="primary" label="Calculate" />

    <!-- Output of Results -->
    <div class="row justify-center">
      <div class="col-12 col-md-4 q-ma-lg">
        <label class="text-h6">fovTop:</label>
        <q-input 
        readonly
        class="text-h6" 
        v-model="fovTop" 
        label="Insert the Width" />
      </div>

      <div class="col-12 col-md-4 q-ma-lg">
        <label class="text-h6">fovLeft</label>
        <q-input
          readonly
          class="text-h6"
          v-model="fovLeft"
          label="Insert the Height"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import * as ext from "../assets/armaCalc.js";

export default {
  data() {
    return {
      drawer: false,
      inpWidth: "1920",
      inpHeight: "1080",
      inpFov: "90",
      fovTop: "",
      fovLeft: ""
    };
  },
  methods: {
    calcular() {
      // this.fovTop = ext.calc_value((this.inpHeight, this.inpWidth, this.inpFov));
      console.log(ext.calc_value(this.inpHeight, this.inpWidth, this.inpFov));
    }
  }
};
</script>

<style>
.inputs-opt {
  margin: 10px;
}
</style>
