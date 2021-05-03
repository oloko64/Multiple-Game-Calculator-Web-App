<template>
  <q-page class="q-pa-lg row justify-center full-height full-width text-center">
    <div>
    <q-input 
    class="q-pa-sm"
    style="min-width:300px"
    autofocus
    outlined 
    clearable
    :maxlength="4"
    name="number" 
    v-model="weight" 
    label="Weight (Kg)" />

    <q-input 
    class="q-pa-sm"
    style="max-width: 300px"
    outlined 
    clearable
    :maxlength="2"
    v-model="weightDis" 
    label="Weight distribuition (%)" />

    <q-input 
    class="q-pa-sm"
    style="max-width: 300px"
    outlined 
    clearable
    :value="20"
    :maxlength="2"
    v-model="stiffness" 
    label="Spring stiffness [Default: 20]" />


    <q-input 
    class="q-pa-sm"
    style="max-width: 300px"
    outlined 
    clearable
    :value="20"
    :maxlength="2"
    v-model="maxBar" 
    label="Total damping bar [Default: 20]" />
    

    <h6 class="q-ma-md">Suspension Front:</h6>
    <h6 class="q-ma-md">Suspension Rear:</h6>
    <h6 class="q-ma-md">Damping Front:</h6>
    <h6 class="q-ma-md">Damping Rear:</h6>
    <h6 class="q-ma-md">Rebound Front:</h6>
    <h6 class="q-ma-md">Rebound Rear:</h6>
    </div>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      weight: '',
      weightDis: '',
      stiffness: '',
      maxBar: ''
    }
  }
}
</script>