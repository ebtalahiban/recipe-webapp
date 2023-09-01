import express from 'express';
import cors from 'cors';
import axios from 'axios';

// Initialize Express app and set up middleware
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }
);