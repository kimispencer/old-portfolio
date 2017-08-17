import alt from '../Alt';

class ProjectActions {
	showBoxMenu() {
		// console.log('show menu')
		return true;
	}
	hideBoxMenu() {
		// console.log('hide menu')
		return false;
	}
}

module.exports = alt.createActions(ProjectActions);