<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        BOOKS
        <font-awesome-icon icon="book" />
      </h5>
      <div id="book-table">
        <v-client-table :data="tableData" :columns="columns" :options="options">
          <font-awesome-icon class="hover-icon mr-2" slot="edit" icon="clock" @click="showModalKEY()" />
          <font-awesome-icon class="hover-icon mr-2" slot="edit" icon="comments" @click="showModalKEY()" />
          <font-awesome-icon class="hover-icon " slot="edit" icon="star" @click="showModalKEY()" />
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
      columns: ['book', 'author', 'rating', 'edit'],
      tableData: [
        { book: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: "4/5", edit: "" },
        { book: "To Kill a Mockingbird", author: "Harper Lee", rating: "4.25/5", edit: "" },
        { book: "1984", author: "George Orwell", rating: "4.7/5", edit: "" },
        { book: "The Catcher in the Rye", author: "J.D. Salinger", rating: "5/5", edit: "" },
        { book: "The Hobbit", author: "J.R.R. Tolkien", rating: "4/5", edit: "" }
      ],
      options: {
        headings: {
          book: 'Book',
          author: 'Author',
          rating: 'Rating',
          edit: 'Actions'
        },
        sortable: ['book', 'name', 'age']
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
.hover-icon:hover{
  color: #17a2b8;
}
</style>