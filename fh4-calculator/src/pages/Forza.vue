<template>
  <q-page class="q-pa-lg">
    <div class=" row justify-center">
      <div class="col-12 col-md-4">
        <div>
          <q-input
            class="q-pa-sm text-h6"
            autofocus
            @keyup="calcular()"
            outlined
            clearable
            :maxlength="4"
            name="number"
            v-model="weight"
            label="Weight (Kg)"
          />

          <q-input
            class="q-pa-sm text-h6"
            outlined
            @keyup="calcular()"
            clearable
            :maxlength="2"
            v-model="weightDis"
            label="Weight Distribution (%)"
          />

          <div>
            <q-icon
              @click="alertSpr = true"
              class="icons-opt float-right cursor-pointer"
              style="font-size: 20px;"
              name="help"
            />
            <q-input
              class="q-pa-sm text-h6"
              outlined
              @keyup="calcular()"
              clearable
              :value="20"
              :maxlength="2"
              v-model="stiffness"
              label="Spring Stiffness [Default: 20]"
            />
          </div>

          <div>
            <q-icon
              @click="alertBar = true"
              class="icons-opt float-right cursor-pointer"
              style="font-size: 20px;"
              name="help"
            />
            <q-input
              class="q-pa-sm text-h6"
              outlined
              @keyup="calcular()"
              clearable
              :value="20"
              :maxlength="2"
              v-model="maxBar"
              label="Total Damping Bar [Default: 20]"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Saida de dados -->
    <!-- <h6 class="text-weight-regular">Output </h6> -->
    <div class="row justify-center">
      <div class="col-12 col-md-4">
        <p class="text-weight-regular text-body1 divisions">Damping</p>
        <div class="">
          <q-input
            class="q-pa-sm text-h6"
            clearable
            readonly
            v-model="damFro"
            label="Damping Front:"
          />

          <q-input
            class="q-pa-sm text-h6"
            clearable
            readonly
            v-model="damRea"
            label="Damping Rear:"
          />
        </div>
        <div class="q-mt-lg">
          <q-input
            class="q-pa-sm text-h6"
            clearable
            readonly
            v-model="rebFro"
            label="Rebound Front:"
          />

          <q-input
            class="q-pa-sm text-h6"
            clearable
            readonly
            v-model="rebRea"
            label="Rebound Rear:"
          />
        </div>
      </div>
      <div>
        <div class="row justify-center">
          <div class="col-12 col-md-4">
            <p class="text-weight-regular text-body1 divisions">
              Springs
            </p>

            <div>
              <q-input
                class="q-pa-sm text-h6"
                clearable
                readonly
                v-model="susFro"
                label="Suspension Front:"
              />

              <q-input
                class="q-pa-sm text-h6"
                clearable
                readonly
                v-model="susRea"
                label="Suspension Rear:"
              />
            </div>
          </div>
        </div>

        <div class="cursor-pointer">
          <p
            class="text-weight-regular text-body1 divisions"
            @click="alertRoll = true"
          >
            <q-tooltip>
              Click me for more information
            </q-tooltip>
            Antiroll Bars
            <q-icon class="icons" name="help" />
          </p>
        </div>

        <div>
          <q-input
            class="q-pa-sm text-h6"
            clearable
            readonly
            v-model="rollFro"
            label="Antiroll Front:"
          />

          <q-input
            class="q-pa-sm text-h6"
            clearable
            readonly
            v-model="rollRea"
            label="Antiroll Rear:"
          />
        </div>
      </div>
    </div>

    <!-- Dialog Boxes -->
    <q-dialog v-model="alertSpr">
      <q-card>
        <q-card-section>
          <div class="text-h6">Help</div>
        </q-card-section>
        <q-card-section class="q-pt-none text-center">
          <p>
            This controls how soft your suspension will be.<br /><br />
            What I recommend:<br />
            Rally: 10 - 15<br />
            Circuit cars [Default]: 20<br />
            Cars that you never, ever, leave the termac: 30+
          </p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="alertBar">
      <q-card>
        <q-card-section>
          <div class="text-h6">Help</div>
        </q-card-section>
        <q-card-section class="q-pt-none text-center">
          <p>
            Insert here the maximum value of the Bump Stiffness bar.<br /><br />
            The majority of cars in the game have 20 at it's maximum, so I left
            as default, but some Off Roaders, for example, have 10.
          </p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="alertRoll">
      <q-card>
        <q-card-section>
          <div class="text-h6">Help</div>
        </q-card-section>
        <q-card-section class="q-pt-none text-center">
          This are default values that I like the most, if you feel your car
          vibrating too much on corners try to lower both bars a bit.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      alertRoll: false,
      alertSpr: false,
      alertBar: false,
      drawer: false,
      weight: "",
      weightDis: "",
      stiffness: "20",
      maxBar: "20",

      damFro: "",
      damRea: "",
      rebFro: "",
      rebRea: "",
      susFro: "",
      susRea: "",
      rollFro: "45.00",
      rollRea: "45.00"
    };
  },
  methods: {
    calcular() {
      this.susFro = (
        this.weight *
        (this.stiffness / 100) *
        (this.weightDis / 100)
      ).toFixed(2);
      this.susRea = (
        this.weight *
        (this.stiffness / 100) *
        ((100 - this.weightDis) / 100)
      ).toFixed(2);

      this.damFro = (this.maxBar * (this.weightDis / 100)).toFixed(1);
      this.damRea = (this.maxBar * ((100 - this.weightDis) / 100)).toFixed(1);

      this.rebFro = (this.damFro * 0.5).toFixed(1);
      this.rebRea = (this.damRea * 0.5).toFixed(1);
    }
  }
};
</script>
