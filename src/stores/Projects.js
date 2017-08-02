import alt from '../Alt';
import ProjectActions from '../actions/Projects';

class ProjectStore {
	constructor() {
		this.locations = [];
		this.bindListeners({
			handleUpdateLocations: ProjectActions.UPDATE_LOCATIONS
		});
	}
	handleUpdateLocations(locations) {
		this.locations  = locations;
		// return false to suppress store change event
	}
}

export default alt.createStore(ProjectStore, 'ProjectStore');