/*
	* I want to:

	1. keep track is Project is open or closed (back button on browser, etc)
*/
import alt from '../Alt';
import Actions from '../actions/ProjectActions';

class ProjectStore {
	constructor() {
		this.bindListeners({
			handleShowMenu: Actions.SHOW_MENU,
			handleHideMenu: Actions.HIDE_MENU
		});
	}
}

module.exports = alt.createStore(ProjectStore, 'ProjectStore');