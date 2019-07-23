<template>
  <v-btn small color="transparent" class="backBtn" @click="goBack">
    <v-icon dark>reply_all</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>


<style>
.backBtn {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  height: 0px;
}

.backBtn .v-btn__content .v-icon {
  color: lightgray;
  font-size: 36px;
}

.backBtn:hover,
.backBtn:focus {
  position: fixed;
  outline: none;
}
</style>


