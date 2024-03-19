<template>
  <div id="app">
    <el-container>
      <!-- 左边aside -->
      <el-aside width="200px">
        <!-- 左边logo -->
        <logo />
        <!-- 左边导航栏 -->
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-grid"></i>
            <span slot="title">部门</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-user-solid"></i>
            <span slot="title">成员</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-money-rmb-symbol"></i>
            <span slot="title">薪资</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-share"></i>
            <span slot="title">关系</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-chat-square"></i>
            <span slot="title">消息</span>
          </el-menu-item>
        </el-menu>
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

export default {
  name: 'App',
  components: {
    logo
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
