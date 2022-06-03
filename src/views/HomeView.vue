<template>
  <div class="home">
    <div>
      <button @click="connect">
        {{ userData ? "Logout" : "Login" }}
      </button>
      <div>USER ADDRESS : {{ userData?.addr }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import * as fcl from "@onflow/fcl";

export default defineComponent({
  name: "HomeView",
  setup() {
    const userData = ref(null);
    fcl
      .config()
      .put("accessNode.api", "https://access-testnet.onflow.org")
      .put(
        "discovery.wallet",
        "https://staging.accounts.meetdapper.com/fcl/authn-restricted"
      )
      .put("discovery.wallet.method", "POP/RPC");

    const connect = async () => {
      if (userData.value !== null) {
        await fcl.unauthenticate();
        userData.value = null;
      } else {
        await fcl.authenticate();
        userData.value = await fcl.currentUser().snapshot();
      }
    };

    return {
      connect,
      userData,
    };
  },
});
</script>
