// This middleware logs information about incoming requests

function requestLogger (req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} - ${req.originalUrl}`);
    next();
}

export default requestLogger;