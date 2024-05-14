const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const fileRoutes = require("./routes/fileRoutes");
const mcqRoutes=require("./routes/mcqRoutes")
const quizRoutes=require("./routes/quizRoutes")
const invoiceRoutes=require("./routes/invoiceRoutes")
const userRoutes=require("./routes/userRoutes")
const purchaseOrderRoutes=require("./routes/purchaseOrderRoutes")
const faqRoutes=require("./routes/faqRoutes")
const galleryRoutes=require("./routes/galleryRoutes")

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;


app.use("/api/template", fileRoutes);
app.use("/api/mcq-template", mcqRoutes);
app.use("/api/quiz-template", quizRoutes);
app.use("/api/invoice", invoiceRoutes);
app.use("/api/user", userRoutes);
app.use("/api/purchase-order", purchaseOrderRoutes);
app.use("/api/faq", faqRoutes);
app.use("/api/gallery", galleryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
