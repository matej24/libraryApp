<template>
  <div class="animated fadeIn">
    <b-col sm="12" class="mt-2">
      <b-card>
       <div slot="header">
          <strong>Book information</strong>
       </div>
        <b-row class="clearfix justify-content-md-center">
          <b-col sm="6">
            <b-row>
              <b-col sm="12">
                <div class="clearfix justify-content-md-center">
                  <b-img src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
                </div>
              </b-col>
              <b-col sm="12" class="mt-4">
                  <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    label="Book"
                    label-for="input-horizontal" 
                    >
                  <b-form-input id="input-horizontal" disabled v-model="bookName"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="12" class="mt-4">
                  <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    label="Book"
                    label-for="input-horizontal" 
                    >
                  <b-form-input id="input-horizontal" disabled v-model="author"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="12" class="mt-4">
                  <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    label="Author"
                    label-for="input-horizontal" 
                    >
                  <b-form-input id="input-horizontal" disabled v-model="rating"></b-form-input>
                </b-form-group>
              </b-col>
               <b-col sm="12" class="mt-4">
                  <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    label="Rating"
                    label-for="input-horizontal" 
                    >
                  <b-form-input id="input-horizontal" disabled v-model="pages"></b-form-input>
                </b-form-group>
              </b-col>
               <b-col sm="12" class="mt-4">
                  <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    label="Pages"
                    label-for="input-horizontal" 
                    >
                  <b-form-input id="input-horizontal" disabled v-model="year"></b-form-input>
                </b-form-group>
              </b-col>
               <b-col sm="12" class="mt-4">
                  <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    label="Year of release"
                    label-for="input-horizontal" 
                    >
                  <b-form-input id="input-horizontal" disabled v-model="bookName"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="mt-2" sm="12">
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  rows="3"
                  max-rows="6"
                  label="Year of release"
                  disabled
                ></b-form-textarea>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </div>
</template>
<script>


export default {
  name: 'book-view',

  data() {
    return {
        bookName: "Mocked Book Name",
        author: "Mocked Author",
        rating: "Mocked rating",
        pages: "Mocked number of pages",
        year: "Mocked year",
        price: "Mocked Retail $"
    }
  },
  mounted() {
    console.log(this.$route.params.id)
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped>
</style>