module.exports = function(app) {
	var employees = require('../controllers/employees.server.controller');
	
//	app.get('/employees'/*, users.isAuthenticated*/, employees.render);

	app.route('/api/employees')
		.post(employees.create)
		.get(employees.list);

	app.route('/api/employees/:employeeId')
		.get(employees.read)
		.put(employees.update)
		.delete(employees.delete);

	app.param('employeeId', employees.employeeByID);
};