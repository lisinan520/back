<template>
  <!-- 外层盒子容器 -->
  <el-container>
    <!-- 左侧菜单栏 -->
    <left></left>
    <!-- 内容部分-->
    <el-main>
      <!-- 右侧头部信息 -->
      <Header></Header>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
// 引入element-ui
import { Container, Main } from "element-ui";
// 引入左侧菜单栏
import left from "@/pages/admin/common/Left";
import Header from "@/pages/admin/common/Header";
export default {
  name: "",
  data() {
    return {};
  },
  props: [],
  components: {
    left,
    Header,
    [Container.name]: Container,
    [Main.name]: Main
  },
  mounted() {
    this.autoSetContainer();
  },
  created() {},
  methods: {
    autoSetContainer() {
      //
      let html = document.documentElement || document.body;

      let container = document.querySelector(".el-container");

      container.style.height = html.clientHeight + "px";
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
}
.el-main {
  margin: 0px !important;
  padding: 0px !important;
}
</style>