<template>
  <q-page class="q-pa-lg text-center">
    <div class="row justify-center">
      <q-item
        clickable
        v-ripple
        @click="forCal()"
        class="column text-h5 col-12 col-md-4 bg-primary rounded-borders q-pa-md q-ma-sm cursor-pointer"
      >
        <q-item-section>
          Forza Horizon 4 Tunning Calculator
        </q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        @click="fovCalc()"
        class="column text-h5 col-12 col-md-4 bg-custom rounded-borders q-pa-md q-ma-sm cursor-pointer"
      >
        <q-item-section>
          Forza Horizon 4 Tunning Calculator
        </q-item-section>
      </q-item>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    forCal() {
      location.href = "/#/forza-calculator";
    },
    fovCalc() {
      location.href = "/#/arma3-fov-calculator";
    }
  }
};
</script>
