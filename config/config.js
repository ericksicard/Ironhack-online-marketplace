const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/ironhack-online-marketplace',
    
    stripe_connect_test_client_id: 'ca_G0KLJ7EJn8rr1J5AlFFNMl18vL2xTjKW',
    stripe_test_secret_key: 'sk_test_AnteA9h7gVLwPRWAdEpGIW0R00ZXyqaNNB',
    stripe_test_api_key: 'pk_test_uePdeqxKhwJyL8oXa6YsgmyP00yJCFlpPj'
}

export default config;