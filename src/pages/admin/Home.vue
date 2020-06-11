<template>
  <div class="home">
    <p class="home_title">首页</p>
    <ul>
      <li>
        <p>188</p>
        <h3>
          <i class="el-icon-user"></i>
          <span>用户总数</span>
        </h3>
      </li>
      <li>
        <p>297</p>
        <h3>
          <i class="el-icon-goods"></i>
          <span>商品总数</span>
        </h3>
      </li>
      <li>
        <p>241</p>
        <h3>
          <i class="el-icon-document-checked"></i>
          <span>订单总数</span>
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: [],
  components: {},
  mounted() {},
  created() {},
  methods: {},
  watch: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  height: 100%;
  margin: 0 25px 0 25px;
  box-sizing: border-box;
  .home_title {
    line-height: 80px;
    font-size: 26px;
    color: #575757;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      width: 330px;
      height: 160px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      p{
          font-size:34px;
          margin: 30px 0 20px 0;
      }
    }
    li:nth-child(1) {
      background-color: #f0b45f;
    }
    li:nth-child(2) {
      background-color: #6bbe6b;
    }
    li:nth-child(3) {
      background-color: #5db8d2;
    }
  }
}
</style>