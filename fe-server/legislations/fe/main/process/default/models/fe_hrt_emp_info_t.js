/* jshint indent: 1 */
//const Sequelize = require('sequelize');
const FeEmpInfoModel = require(process.env.L1Process+'default/models/fe_hrt_emp_info_t.js')
module.exports =  class LgEmpInfoModel extends FeEmpInfoModel {
	constructor(){
		super(...arguments);
	}	
}	