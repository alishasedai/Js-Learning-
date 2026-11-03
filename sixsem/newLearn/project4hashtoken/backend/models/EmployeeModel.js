const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    emp_name :{
        type : String,
        required : true,
    },
    emp_email : {
        type : String,
        required : true
    },
    emp_password : {
        type : String,
        required : true
    },
    emp_salary : {
        type : Number,
        required : true
    },
    emp_position : {
        type : String,
        required : true
    },
    emp_gender : {
        type : String,
        required : true,
        enum : ["male","female","others"]
    },
    emp_role : {
        type : String,
        enum : ["manager","admin","employee"],
        required : true
    }
})

const EmployeeModel = mongoose.model("employee",EmployeeSchema);

module.exports = EmployeeModel;

