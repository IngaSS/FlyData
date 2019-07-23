<template>
  <div class="container-fluid">
    <div class="data">
      <HeaderForTTs />
      <BackBtn />
      <span class="headlineForMachinePage">Список машин</span>
      <div class="list">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="item in machines"
              :key="item.device_id"
              :style="{ padding: '7px' }"
              class="listItem"
              xs2
            >
              <v-list-tile-content class="machineTitle">
                <v-list-tile-title
                  :style="[(item.status === 'offline') ? {backgroundColor: 'red'} : {backgroundColor: 'lightgreen'}]"
                  class="machineName"
                >
                  <v-icon
                    v-if="new Date() - Date.parse(item.lastresponse) > 36000000"
                    :color="iconColor"
                  >warning</v-icon>
                  <p @click="seeDetails(item.device_id, item.title)" class="itemTitle">{{ item.title }}</p>
                  <v-icon
                    v-if="new Date() - Date.parse(item.lastresponse) > 36000000"
                    :color="iconColor"
                  >warning</v-icon>
                  <!-- для отображения через АПИ -->
                  <!-- <p @click="seeDetails(item.device_id, item.single_comm_fit, item.single_paid, item.single_not_paid, item.single_report)" class="itemTitle">{{ item.title }}</p> -->
                </v-list-tile-title>
              </v-list-tile-content>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderForTTs from "../components/HeaderForTTs";
// import machines from '../machines.json'; // закомментировать при отображении через АПИ
import alertIcon from "../images/alertIcon.svg";
import BackBtn from "../components/BackBtn";

export default {
  name: "MachinesList",
  components: {
    HeaderForTTs,
    BackBtn
  },
  data: () => ({
    iconColor: "yellow",
    alertIcon: alertIcon
    //  machines: machines // закомментировать при отображении через АПИ
  }),
  computed: {
    // для отображение через АПИ
    machines() {
      return this.$store.getters.machines;
    }
  },
  methods: {
    seeDetails(devId, devName) {
      this.$router.push({ name: "MachinesDetails", params: { Did: devId, name: devName } }); // для отображения через АПИ
    }
    // seeDetails(devId, kpu, paid, notPaid, report) {
    //   this.$router.push({name: 'Details', params: {Did: devId, single_comm_fit: kpu, single_paid: paid, single_not_paid: notPaid, single_report: report }});
    // }
  },

  // для отображение через АПИ
  created() {
    this.$store.dispatch("changeState");
  }
};
</script>

<style>
body {
  height: 100%;
  position: relative;
}

.headlineForMachinePage {
  line-height: 5;
  font-size: 34px;
  font-weight: 600;
}

.list {
  max-width: 100%;
}

.iconPoint {
  font-size: 14px;
  text-indent: 10px;
  padding-right: 30px;
}

.listItem {
  display: flex;
  justify-content: center;
}

.machineTitle {
  max-width: 230px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}

.machineName {
  height: 50px;
  line-height: 3.5;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: space-evenly;
}

.itemTitle {
  margin: 0;
}
</style>

