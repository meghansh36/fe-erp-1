
const fe_hrm_emp_info_t = require('/Users/chiragbansal/Desktop/FlexiEle-Angular/fe-erp/fe-server/legislations/fe/clients/main/process/default/controllers/fe_hrm_emp_info_t.js');

var express = require('express');
var router = express.Router();

var fe_hrm_emp_info_t_obj = new fe_hrm_emp_info_t();

console.log(fe_hrm_emp_info_t_obj.testFunction);

router.get('/:id', fe_hrm_emp_info_t_obj.empDetails);
router.get('/new/test', fe_hrm_emp_info_t_obj.testFunction);

module.exports = router;  