<template>
  <q-page class="q-pa-lg text-center">
    <!-- Input Desired Fov -->
    <div class="row justify-center">
      <div class="col-12 col-md-4  q-ma-lg">
        <label class="text-h6">Insert Your Desired FOV</label><br />
        <label class="text-weight-thin">Must be between 70 and 120</label>
        <q-input
          clearable
          mask="###"
          class="text-h6"
          @keyup="calcular()"
          v-model="inpFov"
          label="Desired FOV"
        />
      </div>
    </div>

    <!-- Input Resolution -->
    <label class="text-h6">Insert your monitor resolution below</label>

    <div class="row justify-center">
      <div class="col-12 col-md-4 q-ma-lg">
        <label class="text-weight-bolder text-h6">1920</label
        ><label> x 1080</label>
        <q-input
          clearable
          mask="####"
          class="text-h6"
          @keyup="calcular()"
          v-model="inpWidth"
          label="Insert the Width"
        />
      </div>

      <div class="col-12 col-md-4 q-ma-lg">
        <label>1920 x </label
        ><label class="text-weight-bolder text-h6">1080</label>
        <q-input
          clearable
          mask="####"
          @keyup="calcular()"
          class="text-h6"
          v-model="inpHeight"
          label="Insert the Height"
        />
      </div>
    </div>

    <!-- Calculate Button -->
    <q-btn
      class="q-ma-lg"
      @click="calcular()"
      color="primary"
      label="Calculate"
    />

    <!-- Output of Results -->
    <div class="row justify-center">
      <div class="col-12 col-md-4 q-ma-lg">
        <label class="text-h6">fovTop:</label>
        <q-input readonly class="text-h6" v-model="fovTop" label="fovTop" />
      </div>

      <div class="col-12 col-md-4 q-ma-lg">
        <label class="text-h6">fovLeft:</label>
        <q-input readonly class="text-h6" v-model="fovLeft" label="fovLeft" />
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
      if (this.inpHeight == "0" || this.inpHeight == "") {
        return;
      }

      if (this.inpWidth == "0" || this.inpWidth == "") {
        return;
      }

      if (this.inpFov == "0" || this.inpFov == "") {
        return;
      }

      // this.fovTop = ext.calc_value((this.inpHeight, this.inpWidth, this.inpFov));
      let fovRes = ext.calc_value(this.inpHeight, this.inpWidth, this.inpFov);
      this.fovTop = fovRes[0];
      this.fovLeft = fovRes[1];
    }
  }
};
</script>
