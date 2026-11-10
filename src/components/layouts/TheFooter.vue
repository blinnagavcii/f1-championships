<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="footer">
        <div>
          <a href="/">
            <img src="@/assets/footer/f1-logo.png" alt="F1 logo" />
          </a>
        </div>
        <div class="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$base-color: #e6101a;

.footer-wrapper {
  height: 110px;
  display: flex;
  align-items: center;
  background: rgb(237, 240, 242);
  background: linear-gradient(
    180deg,
    rgba(237, 240, 242, 1) 0%,
    rgba(168, 168, 168, 1) 100%
  );

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>