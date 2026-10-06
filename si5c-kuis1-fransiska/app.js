require("dotenv").config();

const express = require("express");
const cors = require("cors");

const laundryRoutes = require("./routes/laundryRoutes");
const logger = require("./middlewares/logger");
const {
    notFound,
    errorHandler
} = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/laundry", laundryRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});