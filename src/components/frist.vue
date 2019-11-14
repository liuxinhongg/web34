<template>
  <div>
      <h1>我是frist页面</h1>
      <input type="button" value="跳转" @click="go">
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    go(){
      this.$router.push('/detail?nav=123');
    }
  },
}
</script>

<style>

</style>
