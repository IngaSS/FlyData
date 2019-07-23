<template>
  <div class="header">
    <v-toolbar class="toolbar" :color="color" height="100px">
      <v-toolbar-items class="tools row">
        <div class="col-lg-2 logo">
          <v-btn to="/" flat class="title">PACK&FLY</v-btn>
        </div>
        <div class="col-lg-2"></div>
        <div class="col-lg-4 logoAir">
          <v-img :src="logo" class="img"></v-img>
        </div>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "HeaderForTTs",
  props: ["logo", "color"],
  data: () => ({})
};
</script>

<style>
.tools {
  width: 100%;
  padding-top: 1%;
}

.toolbar {
  background-color: white !important;
  box-shadow: none !important;
}

.toolbar > .v-toolbar__content {
  height: 100px;
  max-width: 1281px;
  padding: 0;
}

.logo {
  text-align: left;
  width: 122px;
  height: 35px;
  font-weight: 900;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  line-height: 2;
  padding: 10px 0 0 0;
}

.logo a {
  padding: 0;
}

.logoAir {
  padding-top: 10px;
}

.title {
  max-width: 210px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.title > .v-btn__content {
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 30px;
}

.title:hover {
  text-decoration: none;
}

.title > .v-btn__content:hover {
  color: #048cd5;
  font-size: 31px;
}

.title:before {
  opacity: 0;
}

.img {
  width: 265px;
  height: 50px;
  padding-top: 8px;
}

.img > .v-image__image {
  width: 263px;
  height: 47px;
}
</style>
