/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('aureole_lookup', {
		translation_id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		client_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		legislation_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		lookup_type_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		translation_type: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		code: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		meaning: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(2000),
			allowNull: true
		},
		tip: {
			type: DataTypes.STRING(2000),
			allowNull: true
		},
		parent_translation_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		active: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		dev_status: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		lookup_type: {
			type: DataTypes.STRING(174),
			allowNull: true
		},
		lookup_order: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		attribute1: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute2: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute3: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute4: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute5: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute6: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute7: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute8: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute9: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute10: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		who_created: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		when_created: {
			type: DataTypes.DATE,
			allowNull: true
		},
		who_updated: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		when_updated: {
			type: DataTypes.DATE,
			allowNull: true
		},
		attribute11: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute12: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute13: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute14: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		attribute15: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		origin: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		customization_level: {
			type: DataTypes.STRING(10),
			allowNull: true
		}
	}, {
		tableName: 'aureole_lookup'
	});
};
