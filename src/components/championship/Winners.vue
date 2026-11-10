<template>
  <div class="winners">
    <h2>Winners</h2>
    <div class="winners-table-wrapper">
      <table class="winners-table">
        <tr class="header-row">
          <th>ROUND</th>
          <th>NAME</th>
          <th>NATIONALITY</th>
          <th>TEAM</th>
          <th>POINTS</th>
          <th></th>
        </tr>
        <tr v-for="(winner, index) in winners" :key="index">
          <td>
            <strong>{{ winner.round }}</strong>
          </td>
          <td>
            <strong>{{ winner.firstName }} {{ winner.lastName }}</strong>
          </td>
          <td>
            <strong>{{ winner.nationality }}</strong>
          </td>
          <td>{{ winner.team }}</td>
          <td>
            <strong>{{ winner.points }}</strong>
          </td>
          <!-- details page of the driver -->
          <td class="actions">
            <base-link
              :to="'/championships/' + year + '/' + winner.id"
              class="thin"
              >Details</base-link
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    year: String,
    winners: Array,
  },
};
</script>

<style lang="scss" scoped>
$base-color: #e6101a;

.winners {
  padding: 30px 25px;
  h2 {
    font-weight: 400;
  }
  .winners-table-wrapper {
    padding-right: 30px;
    .winners-table {
      width: 100%;
      text-align: left;
      border-collapse: collapse;
      th {
        color: #89959b;
        font-size: 12px;

        padding: 7px 10px 15px;
      }

      td {
        padding: 10px 10px;
        font-size: 14px;

        &.actions {
          text-align: right;
        }
      }

      th,
      td {
        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }

      .header-row {
        border-bottom: 1px solid #c2c8cb;
      }
    }
  }
}
</style>