<template>
  <router-link :to="to" :class="mode" class="btn">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: String,
    to: String,
  },
};
</script>

<style lang="scss" scoped>
$base-color: #e6101a;

.btn {
  position: relative;
  display: inline-block;
  background-color: #fff;
  border: 1px solid #c2c8cb;
  border-radius: 22px;
  color: $base-color;
  text-decoration: none;
  font-size: 12px;
  padding: 13px 40px 13px 20px;

  &:after {
    content: url("../../assets/ui/arrow-icon.png");
    position: absolute;
    right: 14px;
    top: 13px;
  }

  &.flip {
    padding: 13px 20px 13px 40px;
    &:after {
      right: unset;
      left: 14px;
      transform: rotate(180deg);
      top: 8px;
    }
  }

  &.thin {
    padding: 7px 35px 7px 15px;
    &:after {
      top: 7px;
    }
  }

  &.thin.flip {
    padding: 7px 15px 7px 35px;
    &:after {
      top: 2px;
    }
  }
}
</style>