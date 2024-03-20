<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" router>
    <el-menu-item v-for="item in asideItem" :key="item.index" :index="item.index">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.content }}</span>
    </el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      asideItem: [
        {
          index: "/home",
          icon: "s-home",
          content: "首页"
        },
        {
          index: "/department",
          icon: "s-grid",
          content: "部门"
        },
        {
          index: "/employee",
          icon: "user-solid",
          content: "成员"
        },
        {
          index: "/salary",
          icon: "money-rmb-symbol",
          content: "薪资"
        },
        {
          index: "/relationship",
          icon: "share",
          content: "关系"
        },
        {
          index: "/message",
          icon: "chat-square",
          content: "消息"
        }
      ]
    }
  }
}
</script>

<style>

</style>