const express =require("express");
const dotenv =require('dotenv');
const cors = require('cors');
// const {Doctor} = require("./department/user/books.json")

// routes
const gynecRouter= require("./routes/gynec");
const gastroRouter= require("./routes/gastro");
const orthoRouter= require("./routes/ortho");
const ENTRouter= require("./routes/ENT");
const EmergencyRouter= require("./routes/emergency");
const CrRouter = require("./routes/Career");

const ENTImagesRouter= require("./routes/ent_images");
const EmergencyImagesRouter= require("./routes/emergency_images");
const GalleryRouter = require("./routes/gallery_images");
const GastroImageRouter= require("./routes/gastro_images");
const LastImageRouter= require("./routes/last_images");
const GynecImageRouter = require("./routes/gynec_images");
const OrthoImageRouter = require("./routes/ortho_images");


const DbConnection =require("./databaseconnection");

dotenv.config();


const app = express();

DbConnection();

const PORT=process.env.PORT || 8082;

app.use(express.json());
app.use(cors());

// http://localhost:808/ent
app.get("/", (req, res)=> {
    res.status(200).json({
        message: "sever is up an running"
    })
})


app.use("/gynec",gynecRouter);
app.use("/gastro",gastroRouter);
app.use("/ortho",orthoRouter);
app.use("/emergency",EmergencyRouter);
app.use("/ent",ENTRouter);
app.use("/Career",CrRouter);



app.use("/ENTImage",ENTImagesRouter);
app.use("/EmergencyImages",EmergencyImagesRouter);
app.use("/Gallery",GalleryRouter);
app.use("/GastroImage",GastroImageRouter);
app.use("/LastImage",LastImageRouter);
app.use("/GynecImage",GynecImageRouter);
app.use("/OrthoImage",OrthoImageRouter);




       
            

app.all("*",(req,res)=>{
    res.status(500).json({
        message: "this is not the URL"
    })
})


app.listen(PORT,() => {
    console.log(`server is up and running at port : ${PORT}`)
})