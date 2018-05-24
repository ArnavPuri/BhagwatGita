/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/BhagwatGita_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_BhagwatGita_db_schema = [];
const db_BhagwatGita_db = [];

/**
 * SCHEMA DB BhagwatGita_db
 */



 /**
  * Shlok
  */
db_BhagwatGita_db_schema.Shlok = new mongoose.Schema({
	count: {
		type: 'String', 
		required : true
	},
	english: {
		type: 'String'
	},
	hindi: {
		type: 'String'
	},
	sanskrit: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./BhagwatGita_db_customSchema.js');
var BhagwatGita_db_model = require('./BhagwatGita_db_crud.js');

// Declare mongoose model

db_BhagwatGita_db.Shlok = BhagwatGita_db_model.connection.model('Shlok', db_BhagwatGita_db_schema.Shlok );

module.exports = db_BhagwatGita_db;

// Create ADMIN user if does not exist
createUser.createUser();
