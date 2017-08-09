import alt from '../Alt';

class ProjectActions {
	showMenu() {
		console.log('showMenu')
	}
	hideMenu() {
		console.log('hideMenu')
	}
}

module.exports = alt.createActions(ProjectActions);