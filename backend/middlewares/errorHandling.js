/* Hibakezelő middleware
   Bárhol dobunk egy hibát, ez fogja elkapni!
*/

const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
};

module.exports = errorHandler;
