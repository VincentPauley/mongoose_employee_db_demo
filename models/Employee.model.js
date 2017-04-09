var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
/*
 * the Schema var seen above is a constructor that takes a key value pair object that describes a schema
 */


/*
 * TeamSchema
 *
 * declares that a team is required to have key 'name' which will then have a 'String' value
 *
 */
var TeamSchema = new Schema({
    name : {
        type : String,
        required : true
    }
});
/*
 * EmployeeSchema
 *
 * Every employee document is required to have a name object with first and last name "both strings".  the team key actually
 * a reference to the document Schema above.  Notice the syntax: to reference 'TeamSchema' the value is 'Team'. image key
 * is set with a default string value of 'images/user.png'.
 *
 */
var EmployeeSchema = new Schema({
    name : {
        first : {
            type : String,
            required : true
        },
        last : {
            type : String,
            required : true
        }
    },
    team : {
        type : Schema.Types.ObjectId,
        ref : 'Team'
    },
    image : {
        type : String,
        default : 'images/user.png'
    },
    address : {
        lines : {
            type: [STRING]
        },
        postal : {
            type : String
        }
    }
});
