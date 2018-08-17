var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	let speech = 
		req.body.result &&
		req.body.result.parameters &&
		req.body.result.parameters.isName
			? req.body.result.parameters.isName
			: "Didnt matter";

		console.log(speech)
		
		return res.json({
			req1: req.body.result,
			req2: req.body.result.parameters,
			req3: req.body.result.parameters.isName,
			speech: speech,
			displayText: speech,
			source: 'webhook-isAuthorized-sample'
		})

});

module.exports = router;
