const mongoose = require('mongoose');

const dbConnect = async () => {
    const kapcsolat = await mongoose.connect(process.env.MONGO_URI);
    return kapcsolat;
};

mongoose.connection.on('connected', () => {
    console.log('Az adatbázis csatlakoztatva van.');
});

mongoose.connection.on('error', (error) => {
    console.log(`Valami hiba: ${error}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Az adatbázis le lett csatlakoztatva.');
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});

module.exports = dbConnect;
