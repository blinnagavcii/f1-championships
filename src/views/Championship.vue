<template>
  <div class="container">
    <!-- if it's loading, show spinner -->
    <base-spinner v-if="isLoadingWinners || isLoadingChampion"></base-spinner>

    <!-- if not, show data -->
    <div v-else>
      <!-- champion data -->
      <champion
        :year="seasonYear"
        :id="champion.id"
        :firstName="champion.firstName"
        :lastName="champion.lastName"
        :nationality="champion.nationality"
        :team="champion.team"
        :points="champion.points"
      ></champion>

      <!-- winners data -->
      <winners :year="seasonYear" :winners="getWinners"></winners>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Champion from "@/components/championship/Champion.vue";
import Winners from "@/components/championship/Winners.vue";

export default {
  components: {
    Champion,
    Winners,
  },
  data() {
    return {
      isLoadingWinners: false, // wait to fetch winners data
      isLoadingChampion: false, // wait to fetch champion data
    };
  },
  computed: {
    ...mapGetters(["getWinners", "getChampion"]),

    seasonYear() {
      return this.$route.params.season;
    },

    champion() {
      return this.getChampion;
    },
  },

  methods: {
    ...mapActions(["loadWinners", "loadChampion"]),

    async loadAllWinners() {
      this.isLoadingWinners = true;
      try {
        await this.loadWinners({ season: this.seasonYear });
      } catch (error) {
        alert(error.message || "Something went wrong!");
        return;
      }
      this.isLoadingWinners = false;
    },

    async loadSeasonChampion() {
      this.isLoadingChampion = true;
      try {
        await this.loadChampion({ season: this.seasonYear });
      } catch (error) {
        alert(error.message || "Something went wrong!");
        return;
      }
      this.isLoadingChampion = false;
    },
  },

  created() {
    // Load winners list and champion after created lifecycle method
    this.loadAllWinners();
    this.loadSeasonChampion();
  },
};
</script>