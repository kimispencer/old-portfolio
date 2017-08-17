import alt from '../Alt';
import Actions from '../actions/ProjectActions';

class ProjectStore {
	constructor() {
		this.isBox = true;
		this.bindListeners({
			handleShowBoxMenu: Actions.SHOW_BOX_MENU,
			handleHideBoxMenu: Actions.HIDE_BOX_MENU
		});
	}
	handleShowBoxMenu() {
		this.isBox = true;
	}
	handleHideBoxMenu() {
		this.isBox = false;
	}
}

module.exports = alt.createStore(ProjectStore, 'ProjectStore');