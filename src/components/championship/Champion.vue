<template>
  <div class="champion">
    <div class="champion-header">
      <h4>{{ year }}</h4>
      <h2>Champion</h2>
    </div>
    <div class="champion-table-wrapper">
      <table class="champion-table">
        <tr class="header-row">
          <th>NAME</th>
          <th>NATIONALITY</th>
          <th>TEAM</th>
          <th>POINTS</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <strong>{{ fullName }}</strong>
          </td>
          <td>
            <strong>{{ nationality }}</strong>
          </td>
          <td>{{ team }}</td>
          <td>
            <strong>{{ points }}</strong>
          </td>
          <!-- details page of the driver -->
          <td class="actions">
            <base-link
              :to="'/championships/' + year + '/' + id"
              class="flexible"
              >Details</base-link
            >
            <base-link to="" class="hidden">Details</base-link>
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
    id: String,
    firstName: String,
    lastName: String,
    nationality: String,
    team: String,
    points: String,
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName; // fullname of the champion
    },
  },
};
</script>

<style lang="scss" scoped>
$base-color: #e6101a;

.champion {
  background-color: #fff;
  border-radius: 26px;
  padding: 30px 25px;
  margin: 90px 0 30px;

  .champion-header {
    h4 {
      color: #000000;
      margin: 0;
    }
    h2 {
      margin-top: 0;
    }
  }

  .champion-table-wrapper {
    padding-right: 30px;
    .champion-table {
      width: 100%;
      text-align: left;
      border-collapse: collapse;

      th {
        padding: 7px 10px 15px;
        color: #89959b;
        font-size: 12px;
      }

      td {
        padding: 7px 10px;
        font-size: 14px;
        &.actions {
          text-align: right;
          position: relative;
          .hidden {
            visibility: hidden;
            opacity: 0;
          }

          .flexible {
            position: absolute;
            top: -25px;
            right: 0;
          }
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