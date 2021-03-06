<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        BOOKS
        <font-awesome-icon icon="book" />
        <b-button
          variant="success"
          class="btn-new-entery"
          @click="showNewEnteryBookModal()"
        >Add new entery</b-button>
      </h5>
      <div id="book-table">
        <v-client-table :data="tableData" :columns="columns" :options="options">
          <template slot="book" scope="props">
            <div>
              <router-link
                :to="{name: 'book-view', params: {id: props.row.book}}"
              >{{ props.row.book }}</router-link>
            </div>
          </template>
          <template slot="status" scope="props">
            <div>
              <b-badge :variant="badgePicker(props.row.status)">{{props.row.status}}</b-badge>
            </div>
          </template>
          <font-awesome-icon
            class="hover-icon mr-2"
            slot="edit"
            icon="clock"
            @click="showModalBorrowingBook()"
          />
          <font-awesome-icon class="hover-icon" slot="edit" icon="star" @click="showRatingModal()" />
        </v-client-table>
      </div>
    </div>
    <b-modal ref="borrowingBookModal" hide-footer title="Borrowing book">
      <div class="d-block text-center">
        <h4>With this action you will borrow {book}</h4>
      </div>
      <b-button class="mt-5" variant="success" block @click="hideModalAndNotifiySuccess">Borrow</b-button>
      <b-button class="mt-2" variant="danger" block @click="hideModalAndNotifiyCancel">Cancel</b-button>
    </b-modal>
    <b-modal ref="ratingModal" hide-footer title="Rate book">
      <div class="d-block text-center">
        <b-row class="justify-content-md-center mt-5">
          <h4>Select rating</h4>
        </b-row>
        <b-row class="justify-content-md-center">
          <star-rating></star-rating>
        </b-row>
      </div>
      <b-button class="mt-5" variant="success" block @click="rateBook">Rate</b-button>
      <b-button class="mt-2" variant="danger" block @click="hideRatingModal">Cancel</b-button>
    </b-modal>
    <b-modal ref="newBookEnteryModal" hide-footer title="Enter new book">
      <div class="d-block text-center">
        <b-row class="justify-content-md-center">
          <b-col sm="12" class="mt-4">
            <b-form @submit.stop.prevent>
              <label for="feedback-user">Book name</label>
              <b-input v-model="bookNameNewEntery" :state="bookNameValidation" id="feedback-user"></b-input>
              <b-form-invalid-feedback :state="bookNameValidation">Type Book name</b-form-invalid-feedback>
              <b-form-valid-feedback :state="bookNameValidation">Looks Good.</b-form-valid-feedback>
            </b-form>
          </b-col>
          <b-col sm="12" class="mt-4">
            <b-form @submit.stop.prevent>
              <label for="feedback-user">Author name</label>
              <b-input
                v-model="bookAuthorNewEntery"
                :state="authorNameValidation"
                id="feedback-user"
              ></b-input>
              <b-form-invalid-feedback :state="authorNameValidation">Type Author name</b-form-invalid-feedback>
              <b-form-valid-feedback :state="authorNameValidation">Looks Good.</b-form-valid-feedback>
            </b-form>
          </b-col>
          <b-col sm="12" class="mt-4">
            <label for="input-with-list">Input with datalist</label>
            <b-form-input list="input-list" id="input-with-list"></b-form-input>
            <b-form-datalist id="input-list" :options="optionsNewEntery"></b-form-datalist>
          </b-col>
        </b-row>
      </div>
      <b-button class="mt-5" variant="success" block @click="buttonDoneNewEnteryModal">Done</b-button>
      <b-button class="mt-2" variant="danger" block @click="hideNewBookEnteryModal">Cancel</b-button>
    </b-modal>
  </div>
</template>

<script>


export default {
  name: 'home',

  data() {
    return {
      columns: ['id', 'book', 'author', 'rating', 'status', 'edit'],
      tableData: [
        { id: '1', book: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: "4/5", status: 'Avaliable', edit: "" },
        { id: '2', book: "To Kill a Mockingbird", author: "Harper Lee", rating: "4.25/5", status: 'Avaliable', edit: "" },
        { id: '3', book: "1984", author: "George Orwell", rating: "4.7/5", status: 'Out of stock', edit: "" },
        { id: '4', book: "The Catcher in the Rye", author: "J.D. Salinger", status: 'Avaliable', rating: "5/5", edit: "" },
        { id: '5', book: "The Hobbit", author: "J.R.R. Tolkien", rating: "4/5", status: 'Avaliable', edit: "" }
      ],
      options: {
        headings: {
          id: '#',
          book: 'Book',
          author: 'Author',
          rating: 'Rating',
          status: 'Status',
          edit: 'Actions'
        },
        sortable: ['book', 'name', 'age', 'status'],
        sortIcon: { base: 'fa', up: 'fa-sort-asc', down: 'fa-sort-desc', is: 'fa-sort' },
      },
      bookNameNewEntery: '',
      bookAuthorNewEntery: '',
      optionsNewEntery: ['Avaliable', 'Out of Stock']
    }
  },

  computed: {
    bookNameValidation() {
      return this.bookNameNewEntery.length > 1 && this.bookNameNewEntery.length < 50
    },

    authorNameValidation() {
      return this.bookAuthorNewEntery.length > 1 && this.bookAuthorNewEntery.length < 50
    }
  },

  methods: {
    showModalBorrowingBook() {
      this.$refs['borrowingBookModal'].show()
    },

    hideModalBorrowingBook() {
      this.$refs['borrowingBookModal'].hide()
    },

    hideModalAndNotifiySuccess() {
      this.$refs['borrowingBookModal'].hide()
      this.$notify({
        group: 'foo',
        title: 'Success',
        text: 'Your book is reserved and will wait you for 24h',
        type: 'success'
      });

    },

    hideModalAndNotifiyCancel() {
      this.$refs['borrowingBookModal'].hide()
      this.$notify({
        group: 'foo',
        title: 'Cancel',
        text: 'You canceled reservation',
        type: 'warn'
      });
    },

    showRatingModal() {
      this.$refs['ratingModal'].show()
    },

    rateBook() {
      this.$refs['ratingModal'].hide()
      this.$notify({
        group: 'foo',
        title: 'Book rated',
        text: 'Thank you for giving us your opinion',
        type: 'info'
      });
    },

    hideRatingModal() {
      this.$refs['ratingModal'].hide()
    },

    showNewEnteryBookModal() {
      this.$refs['newBookEnteryModal'].show()
    },

    buttonDoneNewEnteryModal() {
      this.$refs['newBookEnteryModal'].hide()
      this.$notify({
        group: 'foo',
        title: 'Success',
        text: 'You added new book',
        type: 'success'
      });
      this.bookNameNewEntery = ''
      this.bookAuthorNewEntery = ''
    },

    hideNewBookEnteryModal() {
      this.$refs['newBookEnteryModal'].hide()
    },

    setRating: function (rating) {
      this.rating = "You have Selected: " + rating + " stars";
    },

    showCurrentRating: function (rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
    },

    setCurrentSelectedRating: function (rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },

    badgePicker(status) {
      if (status === "Avaliable")
        return "success"
      if (status === "Out of stock")
        return "danger"
    }
  }
}
</script>
<style>
.card {
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
}
.hover-icon:hover {
  color: #17a2b8;
}
.btn-new-entery {
  float: right;
}
</style>