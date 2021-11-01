<template>
  <div>
    <div class="top">
      <span @click="back()">×关闭</span>
    </div>
    <br />
    <h3>这是没有做的详情</h3>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.top span {
  padding: 15px;
  font-weight: bold;
  font-size: 34px;
}
</style>