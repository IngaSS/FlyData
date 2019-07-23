<template>
  <div class="container-fluid">
    <div class="wrapper">
      <HeaderForTTs />
      <BackBtn />
      <div class="table tbl">
        <h3 class="devName">Упаковочная машина: {{this.$route.params.name}}</h3>
        <v-data-table :headers="headers" :items="products" class="elevation-1" hide-actions>
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.KPU }}</td>
            <td>{{ props.item.paid }}</td>
            <td>{{ props.item.notPaid }}</td>
            <td>{{ props.item.toAccount }}</td>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderForTTs from "../components/HeaderForTTs";
import BackBtn from "../components/BackBtn";

export default {
  name: "MachinesDetails",
  components: {
    HeaderForTTs,
    BackBtn
  },
  data: () => ({
    headers: [
      {
        text: "",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "КПУ", value: "KPU" },
      { text: "Опл.", value: "paid" },
      { text: "Не опл.", value: "notPaid" },
      { text: "К учету", value: "toAccount" }
    ],
    products: []
  }),
  mounted() {
    axios
      .get(
        `http://192.168.200.115:8091/packingstat?id=${this.$route.params.Did}`
      )
      .then(response => {
        let data = response.data.data;
        let single = Object.assign(
          {},
          {
            name: "Одинарные",
            KPU: data.single_comm_fit,
            paid: data.single_paid,
            notPaid: data.single_not_paid,
            toAccount: data.single_report
          }
        );
        let double = Object.assign(
          {},
          {
            name: "Двойные",
            KPU: data.double_comm_fit,
            paid: data.double_paid,
            notPaid: data.double_not_paid,
            toAccount: data.double_report
          }
        );
        this.products.push(single, double);
      });
  }
};
</script>

<style>
.elevation-1 {
  min-width: 800px;
}

.tbl {
  margin-top: 5%;
}
</style>

