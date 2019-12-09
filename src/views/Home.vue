<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        BOOKS
        <font-awesome-icon icon="user-secret" />
      </h5>
      <div id="book-table">
        <v-client-table :data="tableData" :columns="columns" :options="options">
          <font-awesome-icon slot="edit" icon="user-secret" @click="showModalKEY()" />
        </v-client-table>
      </div>
    </div>
    <b-modal ref="modalKEY" hide-footer title="KEY">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <b>Building:</b> A
        </li>
        <li class="list-group-item">
          <b>Floor:</b> 2
        </li>
        <li class="list-group-item">
          <b>Locker:</b> 4B
        </li>
        <li class="list-group-item">
          <b>Position:</b> 88
        </li>
      </ul>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
//import { ServerTable, ClientTable, Event } from 'vue-tables-2';
//Vue.use(ClientTable);


export default {
  name: 'home',

  data() {
    return {
      columns: ['id', 'name', 'age', 'edit'],
      tableData: [
        { id: 1, name: "John", age: "20", edit: "" },
        { id: 2, name: "Jane", age: "24", edit: "" },
        { id: 3, name: "Susan", age: "16", edit: "" },
        { id: 4, name: "Chris", age: "55", edit: "" },
        { id: 5, name: "Dan", age: "40", edit: "" }
      ],
      options: {
        headings: {
          id: 'ID',
          name: 'Name',
          age: 'AGE',
          edit: 'Actions'
        },
        sortable: ['id', 'name', 'age']
      }
    }
  },
  methods: {
    showModalKEY() {
      this.$refs['modalKEY'].show()
    },
    hideModalKEY() {
      this.$refs['modalKEY'].hide()
    },
  }

}
</script>
<style>
.card {
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
}
</style>