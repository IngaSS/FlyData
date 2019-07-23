<template>
  <!-- <h1>Details</h1> -->
  <div class="tablePlusBtn">
    <h2>the product id is :{{this.$route.params.Did}}</h2>
    <v-data-table
      :headers="headers"
      :items="products"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.KPU }}</td>
        <td>{{ props.item.paid }}</td>
        <td>{{ props.item.notPaid }}</td>
        <td>{{ props.item.toAccount }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import details from '../details.json';

export default {
    name: 'Details',
    data: () => ({
      headers: [
          {
            text: '',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'КПУ', value: 'KPU' },
          { text: 'Опл.', value: 'paid' },
          { text: 'Не опл.', value: 'notPaid' },
          { text: 'К учету', value: 'toAccount' }
        ],
      products: [
          {
              name: '',
              KPU: null,
              paid: null,
              notPaid: null,
              toAccount: null
          }
      ],
      details: details
    }),

    mounted() {
        this.products[0].name = 'Одинарные';
        this.products[0].KPU = this.$route.params.single_comm_fit;
        this.products[0].paid = this.$route.params.single_paid;
        this.products[0].notPaid = this.$route.params.single_not_paid;
        this.products[0].toAccount = this.$route.params.single_report;
    }
}
</script>

<style>
.tablePlusBtn {
    display: flex;
    flex-direction: column;
    margin: 120px auto;
}

.elevation-1 {
    min-width: 800px;
}
</style>

