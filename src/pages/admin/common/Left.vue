<template>
  <el-menu background-color="#2B2E33"
   router text-color="#B5B5B5"
    :collapse="this.$store.state.isCollapse"
   >
    <!-- 标题 -->
    <el-menu-item>
      <span style="font-size:22px;color:#2DAFC6;font-weight:blod">HAPPY</span>
      <span style="font-size:22px;color:#fff;font-weight:blod">MMALL</span>
    </el-menu-item>
    <!-- 首页 -->
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <span>首页</span>
    </el-menu-item>
    <!-- 商品 -->
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-goods"></i>
        <span>商品</span>
      </template>
      <el-menu-item index="1-1">商品管理</el-menu-item>
      <el-menu-item index="1-2">品类管理</el-menu-item>
    </el-submenu>
    <!-- 订单 -->
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-order"></i>
        <span>订单</span>
      </template>
      <el-menu-item index="2-1">订单管理</el-menu-item>
    </el-submenu>
    <!-- 用户 -->
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span>用户</span>
      </template>
      <el-menu-item index="3-1">用户列表</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { Menu, Submenu, MenuItem, MenuItemGroup } from "element-ui";
export default {
  name: "",
  data() {
    return {};
  },
  props: [],
  components: {
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem,
    [MenuItemGroup.name]: MenuItemGroup
  },
  mounted() {},
  created() {},
  methods: {},
  watch: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
* {
  font-size: 16px;
}
.el-submenu {
  border-bottom: 1px solid #37393d !important;
}
.el-menu-item {
  border-bottom: 1px solid #37393d !important;
}
.el-menu:not(.el-menu--collapse) {
  width: 230px;
}

.el-submenu .el-menu-item {
  background-color: #17191b !important;
}
</style>