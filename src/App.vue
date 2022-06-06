<template>
  <div>
    <router-view />
    <div class="download" v-if="shown">
      <span @click="dismissPrompt" class="exit">x</span>
      <span @click="installPWA">Install App</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    shown: false,
  }),
  beforeMount() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.installEvent = e;
      this.shown = true;
    });
  },
  methods: {
    dismissPrompt() {
      this.shown = false;
    },
    installPWA() {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((choice) => {
        this.dismissPrompt(); // Hide the prompt once the user's clicked
        if (choice.outcome === "accepted") {
          // Do something additional if the user chose to install
        } else {
          // Do something additional if the user declined
        }
      });
    },
  },
};
</script>
<style>
body {
  font-family: sans-serif;
}
.app-container {
  width: 100%;
  height: 100vh;
  padding-top: -30px;
  /* padding-left: 50px;
  padding-right: 50px; */
  /* padding-bottom: 50px; */
  border-color: gold;
  border-width: 2px;
}
.app-container > div {
  padding: 5vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.download {
  display: flex;
  align-items: center;
  position: fixed;
  width: 10vh;
  height: 10vh;
  background: gold;
  border-radius: 50%;
  padding: 10px !important;
  text-align: center;
  bottom: 0px;
  right: 0;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.exit {
  position: fixed;
  bottom: 11vh;
  height: 3vh;
  width: 3vh;
  color: white;
  right: 1vh;
  cursor: pointer;
}
</style>
