<template>
  <h1>준맛</h1>
</template>

<script>
export default {
  name: "junemat",
  components: {

  },
  data() {
    return {

    }
  },
  created() {
    this.test()
  },
  methods: {
    test() {
      // this.$axios.get("https://jsonplaceholder.typicode.com/users/1/albums")
      this.$axios.post("http://127.0.0.1:8088/test/1")
      .then((res) => {
        console.log('success')
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>