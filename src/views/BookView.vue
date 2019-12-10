<template>
  <div class="about">
      <h5 class="card-title mt-4">
        MOCKED BOOK NAME
        <font-awesome-icon icon="book" />
      </h5>
      <b-container fluid class="p-4 bg-dark">
        <b-row>
          <b-col>
            <b-row>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
              <b-card title="Book info">
                <b-card-text>
                  The Hobit
                </b-card-text>
              </b-card>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>
<script>


export default {
  name: 'home',

  data() {
    return {

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