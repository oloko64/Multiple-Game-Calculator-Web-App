<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          Forza Horizon 4 Tunning Calculator
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :width="200" :breakpoint="500">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item>
            <q-item-section avatar> </q-item-section>

            <q-item-section> </q-item-section>
          </q-item>

          <q-item clickable @click="homeURL()" v-ripple>
          <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="fovCalc()">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Arma 3 Fov Calculator
            </q-item-section>
          </q-item>

          <q-item clickable @click="gitURL()">
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              Project Code
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="otherProj()">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Other Projects
            </q-item-section>
          </q-item>

          <!-- <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item> -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-img class="header-image absolute-center" src="../assets/fh4.jpg" />
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    gitURL() {
      window.open(
        "https://github.com/OLoKo64/Multiple-Game-Calculator-Web-App"
      );
    },
    otherProj() {
      window.open("https://github.com/OLoKo64");
    },
    fovCalc() {
      location.href = "/#/arma3-fov-calculator";
    },
    homeURL() {
      location.href = "/#/";
    }
  }
};
</script>