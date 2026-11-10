<template>
  <div class="container">
    <base-link :to="'/championships/' + seasonYear" class="flip"
      >Back</base-link
    >

    <!-- if it's loading, show spinner -->
    <base-spinner v-if="isLoading"></base-spinner>

    <!-- if not, show data -->
    <div v-else>
      <div class="driver-info">
        <h3>{{ seasonYear }} <span v-if="isChampion">CHAMPION</span></h3>
        <div class="driver-personal-info">
          <div class="driver-image">
            <img src="@/assets/driver/person-icon.png" alt="driver-image" />
          </div>
          <div class="driver-fullname">
            <h1>{{ getDriver.firstName }} {{ getDriver.lastName }}</h1>
          </div>
        </div>
      </div>
      <div class="driver-stats">
        <table style="width: 100%; text-align: center">
          <tr>
            <td><strong>TEAM</strong></td>
            <td>{{ getDriver.team }}</td>
          </tr>
          <tr>
            <td><strong>POINTS</strong></td>
            <td>{{ getDriver.points }}</td>
          </tr>
          <tr>
            <td><strong>POSITION</strong></td>
            <td>{{ getDriver.position }}</td>
          </tr>
          <tr>
            <td><strong>WINS</strong></td>
            <td>{{ getDriver.wins }}</td>
          </tr>
          <tr>
            <td><strong>DATE OF BIRTH</strong></td>
            <td>{{ getDriver.dateOfBirth }}</td>
          </tr>
          <tr>
            <td><strong>NATIONALTIY</strong></td>
            <td>{{ getDriver.nationality }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["getDriver"]),

    seasonYear() {
      return this.$route.params.season;
    },

    driverId() {
      return this.$route.params.id;
    },

    isChampion() {
      return this.getDriver.position == 1;
    },
  },
  methods: {
    ...mapActions(["loadDriver"]),

    async loadDriverDetails() {
      this.isLoading = true;
      try {
        await this.loadDriver({ season: this.seasonYear, id: this.driverId });
      } catch (error) {
        alert(error.message || "Something went wrong!");
        return;
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadDriverDetails();
  },
};
</script>

<style lang="scss" scoped>
.driver-info {
  .driver-personal-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .driver-image img{
      border-radius: 100%;
    }
  }
}

.driver-stats{
  table{
    border-collapse: collapse;
    margin-top: 20px;
    td {
      padding: 10px;
      font-size: 14px;
    }
  }
}
</style>