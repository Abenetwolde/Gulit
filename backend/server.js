const app = require('./app');
const connectDatabase = require('./config/database');
const cloudinary = require('cloudinary');
const PORT = process.env.PORT||4000 ;

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

connectDatabase();

cloudinary.config({

    cloud_name: "abmanwolde",
    api_key: "827239376525146",
    api_secret: "qcT03npP3xh4VrLYBBMHuXr2IbQ",
});

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});
