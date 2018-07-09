/* jshint indent: 1 */
//const Sequelize = require('sequelize');
const LgEmpInfoModel2 = require(process.env.L2Process+'default/models/fe_hrt_emp_info_t.js')
module.exports =  class EmpInfoModel extends LgEmpInfoModel2 {
	constructor(){
		super(...arguments);
	}
}	