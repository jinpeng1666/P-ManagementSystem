<template>
  <div id="app">
    <el-container>
      <!-- 左边aside -->
      <el-aside width="200px">
        <!-- 左边logo -->
        <logo />
        <!-- 左边导航栏 -->
        <common-aside />
      </el-aside>
      <!-- 右边主体内容 -->
      <el-container>
        <el-header>Header</el-header>
        <el-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入logo组件
import logo from "@/components/logo"
// 引入CommonAside组件
import CommonAside from "@/components/CommonAside"
export default {
  name: 'App',
  components: {
    logo,
    CommonAside
  }
}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
  
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
