<template>
  <div class="nav">
    <div class="nav-header">
      <div class="nav-header-wrp">
        <a href="/">
          <img src="@/assets/navigation/logo.png" />
        </a>
        <span>F1 CHAMPIONSHIPS</span>
      </div>
    </div>
    <div class="nav-body">
      <h4>YEARS</h4>
      <ul class="nav-links">
        <li v-for="(year, index) in championshipYears" :key="index">
          <router-link :to="'/championships/' + year">{{ year }}</router-link>
          <span class="active-link">
            <span class="square"></span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      championshipYears: [
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$base-color: #e6101a;

.nav {
  background-color: #fff;
  min-height: 100vh;
  padding: 0 15px;
  min-width: 200px;

  .nav-header {
    padding: 40px 0 35px;

    .nav-header-wrp {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 10px;
      margin-right: 50px;
    }
  }

  .nav-body {
    .nav-links {
      padding: 0;
      list-style: none;
      margin-left: -15px;
      margin-right: -15px;

      li {
        position: relative;

        a {
          display: block;
          font-weight: bold;
          text-decoration: none;
          padding: 14px;
          position: relative;
          &.router-link-active {
            color: #fff;
            z-index: 1;
          }

          &.router-link-active + .active-link {
            position: absolute;
            top: 0;
            left: 0;
            background-color: $base-color;
            width: 68%;
            height: 100%;

            .square {
              width: 0;
              height: 0;
              top: 9px;
              right: -44px;
              position: absolute;
              border: 26px solid transparent;
              border-top: 10px solid $base-color;
              transform: rotate(-90deg);
            }
          }
        }
      }
    }
  }
}
</style>