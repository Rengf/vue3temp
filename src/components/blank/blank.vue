<template>
  <div class="blank-wrap">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-kongbaiye" />
    </svg>
    <p>{{blankMsg}}</p>
  </div>
</template>

<script>
export default {
  props: {
    blankMsg: {
      type: String,
      default: "没有数据~~~"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.blank-wrap {
  width: 100%;
  .icon {
    width: 10em;
    height: 10em;
    fill: currentColor;
    overflow: hidden;
  }
  p {
    font-size: 20px;
    font-weight: bold;
    color: rgba(0, 117, 251, 0.849);
  }
}
</style>
