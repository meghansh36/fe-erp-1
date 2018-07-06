const LgEmpDetails = require('/Users/chiragbansal/Desktop/FlexiEle-Angular/fe-erp/fe-server/legislations/fe/main/process/default/controllers/fe_hrm_emp_info_t.js');
//import {models} from ('../models');


module.exports = class EmpDetails extends LgEmpDetails{
    constructor(){
        super();
    }
    testFunction(req,res,done){
        res.send('L3 FUNCTION WORKING');
    }

    empDetails(req,res,done){
        res.send('L3 EMPDETAILS FUNCTION WORKING');
    }
    

 }

