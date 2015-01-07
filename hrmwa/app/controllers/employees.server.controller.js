var Employee = require('mongoose').model('Employee')
// exports.render = function(req, res) {
// 	res.render('employees', {
// 		title: 'Employees',
// 		//userFullName: req.user ? req.user.fullName : ''
// 		employee: JSON.stringify(req.employee)
// 	});

	exports.create = function(req, res, next){
	var employee = new Employee(req.body);

	employee.save(function(err){
		if(err) {
			return next(err);
		} else {
			res.json(employee);
		}
	});
};

//Lists all Employees
exports.list = function(req, res, next) {
	Employee.find({}, function(err, employees) {
		if (err) {
			return next(err);
		} else {
			res.json(employees);
		}
	});
};

//Finds one Employee
exports.read = function(req, res) {
	res.json(req.employee);
};

exports.employeeByID = function(req, res, next, id) {
	Employee.findOne({
	_id: id
	}, function(err, employee) {
		if (err) {
			return next(err);
		} else {
			req.employee = employee;
			next();
		}
	});
};

exports.update = function(req, res, next) {
	Employee.findByIdAndUpdate(req.employee.id, req.body, function(err, employee) {
		if (err) {
			return next(err);
		} else {
			res.json(employee);
		}
	});
};

exports.delete = function(req, res, next) {
	req.employee.remove(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.employee);
		}
	});
};