<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" class="logoClass">
    后台管理系统
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "logo"
}
</script>

<style lang="less" scpoed>
.logo {
  width: 199px;
  height: 60px;

  background-color: #bde0fe;
  color: #754ba3;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 60px;


  .logoClass {
    width: 30px;
    vertical-align: text-bottom; 
  }
}
</style>