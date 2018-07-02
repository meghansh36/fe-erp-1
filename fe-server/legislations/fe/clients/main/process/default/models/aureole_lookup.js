const LgDefault_Models_AureoleLookup = require('/Users/chiragbansal/Desktop/FlexiEle-Angular/fe-erp/fe-server/legislations/fe/main/process/default/models/aureole_lookup.js')

const Default_Models_AureoleLookup = function(sequelize, DataTypes) {
    var returnVal = sequelize.define(this._tableName, this._columnDef, this._tableDef);
	return returnVal;
};

Default_Models_AureoleLookup.prototype = new LgDefault_Models_AureoleLookup(sequelize, DataTypes);

module.exports = Default_Models_AureoleLookup;