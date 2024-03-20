<template>
  <el-menu default-active="1" class="el-menu-vertical-demo">
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
          index: 1,
          icon: "s-home",
          content: "首页"
        },
        {
          index: 2,
          icon: "s-grid",
          content: "部门"
        },
        {
          index: 3,
          icon: "user-solid",
          content: "成员"
        },
        {
          index: 4,
          icon: "money-rmb-symbol",
          content: "薪资"
        },
        {
          index: 5,
          icon: "share",
          content: "关系"
        },
        {
          index: 6,
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