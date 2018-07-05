
const fe_hrm_emp_info_t = require('../controllers/fe_hrm_emp_info_t.js');
var express = require('express');
var router = express.Router();

router.get('/:id',fe_hrm_emp_info_t.empDetails);

module.exports = router;