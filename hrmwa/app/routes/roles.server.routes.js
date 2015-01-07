module.exports = function(app) {
	var roles = require('../controllers/roles.server.controller');

	app.route('/api/roles')
		.post(roles.create)
		.get(roles.list);

	app.route('/api/roles/:roleId')
		.get(roles.read)
		.put(roles.update)
		.delete(roles.delete);

	app.param('roleId', roles.roleByID);
};