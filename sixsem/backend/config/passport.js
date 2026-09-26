const passport = require("passport");
const {Strategy : GoogleStrategy}  = require("passport-google-oauth20");
const User = require("../models/userModel");

console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);
console.log("Google Callback URL:", process.env.GOOGLE_CALLBACK_URL);
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },

  async  (accessToken, refreshToken, profile, done) => {
    try{
        const email = profile.emails[0].value;
         let user = await User.findOne({ email: email});
         if(!user){
            user = await User.create({
                name : profile.displayName,
                email :email,
                googleId : profile.id,
                profilePic : profile.photos[0].value
            })
         }
         return done(null,user)
    }catch(error){
        return done(error,null)
    }

      
    },
  ),
);
//this serializerUser and deserializerUser are the library of Passport as a helper library that manages the authentication process for the backend.
passport.serializeUser((user, done) => {
  done(null, user._id);
}); //stores the user id in the session

passport.deserializeUser(async(id, done) => {
  const user =await User.findById(id)
  done(null, user);
}); //takes the user ID stored/associated with the session and uses it to retrieve the full user data from MongoDB.

module.exports = passport
