<template>
  <div class="searchbox">
    <div>
      <label for="search">搜索:</label>
      <input
        type="text"
        name="search"
        placeholder="请输入"
        v-model="searchmsg"
        @keyup.enter="search()"
      />
      <button class="search_btn" @click="search()">
        <i class="iconfont icon-ren">&#xe502;</i>
        搜索
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      searchmsg: ""
    };
  },
  methods: {
    search() {
      this.$emit("searchmsg", this.searchmsg);
    }
  }
};
</script>
<style scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 15px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.searchbox {
  float: right;
  height: 50px;
  line-height: 50px;
}
label {
  line-height: 32px;
  width: 100px;
  text-align: right;
  margin-right: 10px;
  font-size: 15px;
}
input {
  color: #666666;
  background-color: #fff;
  border: 1px solid #c6c6c6;
  line-height: 1.2;
  padding: 0 5px;
  font-size: 14px;
  height: 30px;
  font-family: inherit;
  outline: none;
}
button {
  margin-top: 7px;
  color: #fff;
  background: #438eb9 !important;
  border: none;
  width: 80px;
  height: 36px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
