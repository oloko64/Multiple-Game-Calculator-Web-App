<template>
  <q-page class="q-pa-lg row justify-center full-height full-width text-center">
    <div style="min-width:350px">
      <div>
        <q-input 
        class="q-pa-sm"
        autofocus
        @keyup="calcular()"
        outlined 
        clearable
        :maxlength="7"
        name="number" 
        v-model="weight" 
        label="Weight (Kg)" />

        <q-input 
        class="q-pa-sm"
        outlined 
        @keyup="calcular()"
        clearable
        :maxlength="2"
        v-model="weightDis" 
        label="Weight Distribuition (%)" />

        <q-input 
        class="q-pa-sm"
        outlined 
        @keyup="calcular()"
        clearable
        value="20"
        maxlength="2"
        v-model="stiffness"
        label="Spring Stiffness [Default: 20]" />


        <q-input 
        class="q-pa-sm"
        outlined 
        @keyup="calcular()"
        clearable
        :value="20"
        :maxlength="2"
        v-model="maxBar" 
        label="Total Damping Bar [Default: 20]" />
      </div>

<!-- Saida de dados -->

    <h6>Output </h6>

    <div class="q-mb-lg">
      <q-input 
      class="q-pa-sm"
      outlined 
      clearable
      readonly
      :value="20"
      :maxlength="2"
      v-model="susFro" 
      label="Suspension Front:" />

      <q-input 
      class="q-pa-sm"
      outlined 
      clearable
      readonly
      :value="20"
      :maxlength="2"
      v-model="susRea" 
      label="Suspension Rear:" />
    </div>

    <div class="q-mt-lg">
      <q-input 
      class="q-pa-sm"
      outlined 
      clearable
      readonly
      :value="20"
      :maxlength="2"
      v-model="damFro" 
      label="Damping Front:" />

      <q-input 
      class="q-pa-sm"
      outlined 
      clearable
      readonly
      :value="20"
      :maxlength="2"
      v-model="damRea" 
      label="Damping Rear:" />
    </div>

    <div class="q-mt-lg">
      <q-input 
      class="q-pa-sm"
      outlined 
      clearable
      readonly
      :value="20"
      :maxlength="2"
      v-model="rebFro" 
      label="Rebound Front:" />

      <q-input 
      class="q-pa-sm"
      outlined 
      clearable
      readonly
      :value="20"
      :maxlength="2"
      v-model="rebRea" 
      label="Rebound Rear:" />
    </div>
  </div>

  </q-page>
</template>

<script>

export default {
  data () {
    return {
      drawer: false,
      weight: '',
      weightDis: '',
      stiffness: '20',
      maxBar: '20',

      susFro: '',
      susRea:'',
      damFro:'',
      damRea:'',
      rebFro:'',
      rebRea:''
    }
  },
  methods:{
    calcular(){
      this.susFro = (this.weight * (this.stiffness / 100) * ((this.weightDis) / 100)).toFixed(2);
      this.susRea = (this.weight * (this.stiffness / 100) * ((100 - this.weightDis) / 100)).toFixed(2);

      this.damFro = (this.maxBar * (this.weightDis / 100)).toFixed(1);
      this.damRea = (this.maxBar * ((100 - this.weightDis) / 100)).toFixed(1);

      this.rebFro = (this.damFro * 0.5).toFixed(1);
      this.rebRea = (this.damRea * 0.5).toFixed(1);

    }
  }
}
</script>