<template>
  <div class="container-fluid">
    <div class="wrapper">
      <HeaderForTTs />
      <div class="homePageMenu">
        <v-btn
          class="homePageMenuItem"
          to="/TTs"
        >
          <span>Демонстрация личного кабинета</span>
        </v-btn>

        <v-btn
          class="homePageMenuItem"
          to="/list"
        >
          <span>Демонстрация мониторинга состояния машин</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderForTTs from "../components/HeaderForTTs";
export default {
  components: {
    HeaderForTTs
  },
  data: () => ({
    }),
}
</script>



<style>
.homePageMenu {
  margin: auto;
  display: flex;
  min-height: 150px;
  min-width: 1000px;
  justify-content: space-between;
}

.homePageMenuItem {
  max-width: 450px;
  min-width: 450px;
  min-height: 150px;
}

.homePageMenuItem > .v-btn__content {
  max-width: 420px;
  min-height: 150px;
}

.homePageMenuItem:hover {
  text-decoration: none;
}
</style>
