const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
        try {
            const hashPass = await bcrypt.hash(password,10)
            return hashPass
        } catch (error) {
             console.log("Error hashing password:", error.message);
             throw error;
        }
    }
        const comparePassword = async (password,hashPass) => {
            try {
                const matchPass = await bcrypt.compare(password,hashPass)
            } catch (error) {
                console.log("Error comparing password:", error.message);
                throw error;
            }
        }


module.exports = {
  hashPassword,
  comparePassword,
};