import express from 'express';
import cors from 'cors';
import axios from 'axios';

import requestLogger from './middleware/loggingMiddleware.js';
import recipesRouter from './routes/recipes.js';

// Initialize Express app and set up middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/api/recipes/', recipesRouter);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }
);