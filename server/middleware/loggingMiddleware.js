// This middleware logs information about incoming requests

function requestLogger (req, res, next) {
    const date = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl || req._parsedUrl.pathname + '?' + JSON.stringify(req.query);
    console.log(`[${date}] ${method} - ${url}`);
    next();
}

export default requestLogger;