
function errorHandler (error, req, res, next) {
    console.error('Error:', error);
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        error: {
            message: error.message || 'Internal Server Error',
        },
    });
}

export default errorHandler