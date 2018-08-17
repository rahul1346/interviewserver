var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	let speech = 
		req.body.result &&
		req.body.result.parameters &&
		req.body.result.parameters.isAuthorized
			? req.body.result.parameters.isAuthorized
			: "Didnt matter";
		return res.json({
			speech: speech,
			displayText: speech,
			source: 'webhook-isAuthorized-sample'
		})

});

module.exports = router;
