<template>
  <el-header>
    <div id="left-head" @click="setCollapse">
        <i class="el-icon-s-fold"></i>
    </div>
      <p id="right-head" style="color:#666666">
      <i class="el-icon-user-solid" @click="setCollapse"></i>
      <span>欢迎,admin</span>
      <i class="el-icon-caret-bottom"></i>
    </p>
  </el-header>
    
  
</template>

<script>
import {Header} from "element-ui"
export default {
  name: "",
  data() {
    return {};
  },
  props: [],
  components: {
      [Header.name]:Header
  },
  mounted() {},
  created() {},
  methods: {
       setCollapse(){
            this.$store.commit('setCollapse')
      }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss"  scoped>
.el-header{
    background-color: #fff;
    width: 100%;
    line-height: 48px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    display: flex;
    justify-content: space-between;
    #right-head{
        margin: 0;
        padding: 0;
        
    }
}
</style>