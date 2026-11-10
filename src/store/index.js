import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winners: [],
    champion: null,
    driver: null,
  },

  mutations: {
    setWinners(state, payload) {
      state.winners = payload; // update winners list
    },

    setChampion(state, payload) {
      state.champion = payload; // update champion
    },

    setDriver(state, payload) {
      state.driver = payload; // update driver
    }
  },

  actions: {
    // load winners list
    async loadWinners(context, payload) {
      const response = await fetch('http://ergast.com/api/f1/' + payload.season + '/results.json'); // fetch data from API based on the season

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch winners data!');
        throw error; // throw error if response is not ok
      }

      const races = responseData.MRData.RaceTable.Races; // get race results from response
      const tempWinners = [] // create new temporary array

      for (const key in races) {
        const winner = {
          round: races[key].round,
          id: races[key].Results[0].Driver.driverId,
          firstName: races[key].Results[0].Driver.givenName,
          lastName: races[key].Results[0].Driver.familyName,
          nationality: races[key].Results[0].Driver.nationality,
          points: races[key].Results[0].points,
          team: races[key].Results[0].Constructor.name
        }

        tempWinners.push(winner); // push winner to temporary array
      }

      context.commit('setWinners', tempWinners); // update winners list
    },

    // load champion
    async loadChampion(context, payload) {
      const response = await fetch('http://ergast.com/api/f1/' + payload.season + '/driverStandings.json'); // fetch champion from API based on the season

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch champion data');
        throw error; // throw error if response is not ok
      }

      const tempChampion = responseData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; // get champion from response

      const champion = {
        id: tempChampion.Driver.driverId,
        firstName: tempChampion.Driver.givenName,
        lastName: tempChampion.Driver.familyName,
        nationality: tempChampion.Driver.nationality,
        points: tempChampion.points,
        team: tempChampion.Constructors[0].name
      }

      context.commit('setChampion', champion); // update champion
    },

    // load driver for details page
    async loadDriver(context, payload) {
      const response = await fetch('http://ergast.com/api/f1/' + payload.season + '/drivers/' + payload.id + '/driverStandings.json') // get driver from API

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch driver data');
        throw error; // throw error if response is not ok
      }

      const standingLists = responseData.MRData.StandingsTable.StandingsLists;

      if (standingLists <= 0) {
        const error = new Error('Driver not found!');
        throw error; // throw error if driver is not found
      }
      
      const tempDriver = standingLists[0].DriverStandings[0]; // get driver from response

      const driver = {
        team: tempDriver.Constructors[0].name,
        points: tempDriver.points,
        position: tempDriver.position,
        wins: tempDriver.wins,
        id: tempDriver.Driver.driverId,
        firstName: tempDriver.Driver.givenName,
        lastName: tempDriver.Driver.familyName,
        dateOfBirth: tempDriver.Driver.dateOfBirth,
        nationality: tempDriver.Driver.nationality,
        permanentNumber: tempDriver.Driver.permanentNumber
      }

      context.commit('setDriver', driver); // update driver
    }
  },

  getters: {
    getWinners(state) {
      return state.winners; // get winners list
    },

    getChampion(state) {
      return state.champion; // get champion
    },

    getDriver(state) {
      return state.driver; // get driver
    }
  }
})
