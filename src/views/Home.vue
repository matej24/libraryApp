<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        BOOKS
        <font-awesome-icon icon="book" />
      </h5>
      <div id="book-table">
        <v-client-table :data="tableData" :columns="columns" :options="options">
          <font-awesome-icon class="hover-icon mr-2" slot="edit" icon="clock" @click="showModalBorrowingBook()" />
          <font-awesome-icon class="hover-icon mr-2" slot="edit" icon="comments" @click="showModalBorrowingBook()" />
          <font-awesome-icon class="hover-icon " slot="edit" icon="star" @click="showModalBorrowingBook()" />
        </v-client-table>
      </div>
    </div>
    <b-modal ref="borrowingBookModal" hide-footer title="Borrowing book">
      <div class="d-block text-center">
      <h4>With this action you will borrow {book}</h4>
      </div>
        <b-button class="mt-5" variant="success" block @click="showModalBookBorrowed">Borrow</b-button>
        <b-button class="mt-2" variant="danger" block @click="hideModalBorrowingBook">Cancel</b-button>
    </b-modal>
     <b-modal ref="successBorrowModal" hide-footer title="Book borrowed">
      <div class="d-block text-center">
      <h5>You successfuly borrowed {book} and your book will be reserved for next 24h</h5>
      </div>
         <b-button class="mt-5" variant="primary" block @click="hideModalBookBorrowed">OK</b-button>
    </b-modal>
  </div>
</template>

<script>


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
    showModalBorrowingBook() {
      this.$refs['borrowingBookModal'].show()
    },
    hideModalBorrowingBook() {
      this.$refs['borrowingBookModal'].hide()
    },
    showModalBookBorrowed() {
       this.$refs['successBorrowModal'].show()
    },
    hideModalBookBorrowed() {
       this.$refs['successBorrowModal'].hide()
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