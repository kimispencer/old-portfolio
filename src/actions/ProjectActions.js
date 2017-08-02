import alt from '../Alt';
import ProjectSource from '../sources/ProjectSource';

class ProjectActions {
	updateLocations(locations) {
		console.log('ProjectActions updateLocations, ' + locations)
	}
	fetchLocations() {
		return (dispatch) => {
			// we dispatch an event here so we can have "loading" state.
			dispatch();
			ProjectSource.fetch()
			.then((locations) => {
				// we can access other actions within our action through `this.actions`
				this.updateLocations(locations);
			})
			.catch((errorMessage) => {
				this.locationsFailed(errorMessage);
			});
		}
	}
	locationsFailed(errorMessage) {
		return errorMessage;
	}
}

export default alt.createActions(ProjectActions);