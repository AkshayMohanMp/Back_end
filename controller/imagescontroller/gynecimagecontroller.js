

const GynecimagesModel = require("../../model/gynecimages");




exports.getAllImage=async(req, res)=>{
    const Image =await GynecimagesModel.find();


    if(Image.length===0)
        return res.status(400).json({
    success: false,
    message: "No Image Found"});

    res.status(200).json({
        success:true,
        data: Image
    })
}

// const getallDoctorsinGync =()=>{}
// const getallDoctorsinCardiac =()=>{}
// const getallDoctorsinNeuro =()=>{}
// const getSingleDoctorortho=()=>{}
// const getSingleDoctorGync=()=>{}
// const getSingleDoctorCardiac=()=>{}
// const getSingleDoctorNeuro=()=>{}

exports.getSingleImagebyId=async (req, res)=>{
    const{id} =req.params;
    // const Image =Image.find((each)=> each.id ===id);
    const Image= await GynecimagesModel.findById(id);
    if (!Image){
        return res.status(404).json({
            sucess:false,
            message: "Image not Available for the ID Given"
            })
    }
    return res.status(200).json({
        success:true,
        data: Image
        })
    }


exports.AddNewImage = async(req, res)=>{
    const {image}= req.body;

    const newImage = await GynecimagesModel.create({image})
    return res.status(201).json({
        sucess:true,
        data: newImage
    })
    
}

exports.UpdateImage= async(req, res)=>{
    const{id}= req.params;
    const{data}= req.body;
    // const Doctors =Doctor.find((each)=> each.id ===id);
    const updateImage= await GynecimagesModel.findOneAndUpdate({
        
    },{
        $set:{
            ...data,
        }
    }, {new:true})
    if (!updateImage){
        return res.status(404).json({
            success: false,
            message: "Doctor with the same Id Exist"
        })
    }
    return res.status(200).json({
        success:true,
        data: updateImage
        })
    
}




exports.DeleteImageById = async(req,res)=>{
    const {id}= req.params;
   
    // const user = users.find((each)=> each.id ===id);
    const Image =await GynecimagesModel.deleteOne({
        _id:id
    })

    return res.status(200).json({
        success: true,
        data: GynecimagesModel
    })
}



