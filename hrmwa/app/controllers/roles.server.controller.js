var Role = require('mongoose').model('Role')

	exports.create = function(req, res, next){
	var role = new Role(req.body);

	role.save(function(err){
		if(err) {
			return next(err);
		} else {
			res.json(role);
		}
	});
};

//Lists all Roles
exports.list = function(req, res, next) {
	Role.find({}, function(err, roles) {
		if (err) {
			return next(err);
		} else {
			res.json(roles);
		}
	});
};

//Finds one Role
exports.read = function(req, res) {
	res.json(req.role);
};

exports.roleByID = function(req, res, next, id) {
	Role.findOne({
	_id: id
	}, function(err, role) {
		if (err) {
			return next(err);
		} else {
			req.role = role;
			next();
		}
	});
};

exports.update = function(req, res, next) {
	Role.findByIdAndUpdate(req.role.id, req.body, function(err, role) {
		if (err) {
			return next(err);
		} else {
			res.json(role);
		}
	});
};

exports.delete = function(req, res, next) {
	req.role.remove(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.role);
		}
	});
};