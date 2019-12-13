<template>
  <div class="animated fadeIn">
    <b-col sm="12" class="mt-2">
      <b-card>
       <div slot="header">
          <strong>Book information</strong>
       </div>
        <b-row>
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
        bookName: "Mocked Book Name"
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