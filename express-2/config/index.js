const config = {
    port : process.env.PORT,
    SALT : process.env.SALT,
    apiWeatherKey: process.env.API_WEATHER_KEY,
    jwtKey: process.env.JWT_KEY
};

module.exports = config;