const connectDB = require("./db/db");

const UserModel = require("./models/UserModel.js");

const {hashPassword} = require("./utils/password");


const createAdmin = async() => {
    try {
        await connectDB();

        const existingAdmin = await UserModel.findOne({
            email : "admin@gmail.com"
        })

        if(existingAdmin){
            console.log("Admin alredy exists");
            return
        }

        const hashPass = await hashPassword("Admin@123");

        await UserModel.create({
          name: "System Admin",
          email: "admin@gmail.com",
          password: hashPass,
          gender: "male",
          role: "admin",
        });

        console.log("Admin created successfully");
    } catch (error) {
        console.log("Error creating admin:", error.message);
    }
    finally{
        process.exit()
    }
}
createAdmin()