import alt from '../Alt';

class LocationActions {
  updateLocations(locations) {
    return locations;
  }

  fetchLocations() {
    return;
  }

  locationsFailed(errorMessage) {
    return errorMessage;
  }

  favoriteLocation(location) {
    return location;
  }
}

module.exports = alt.createActions(LocationActions);