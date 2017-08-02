import alt from '../Alt';
import ProjectActions from '../actions/ProjectActions';

class ProjectStore {
	constructor() {
		this.locations = [];
		this.errorMessage = null;
		this.bindListeners({
			handleUpdateLocations: ProjectActions.UPDATE_LOCATIONS,
			handleFetchLocations: ProjectActions.FETCH_LOCATIONS,
			handleLocationsFailed: ProjectActions.LOCATIONS_FAILED
		});
	}
	handleUpdateLocations(locations) {
		this.locations = locations;
		this.errorMessage = null;
		// return false to suppress store change event
	}
	handleFetchLocations() {
		// reset the array while we're fetching new locations so React can
		// be smart and render a spinner for us since the data is empty.
		this.locations = [];
	}
	handleLocationsFailed(errorMessage) {
		this.errorMessage = errorMessage;
	}
}

export default alt.createStore(ProjectStore, 'ProjectStore');