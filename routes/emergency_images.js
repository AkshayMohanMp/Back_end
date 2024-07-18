const express =require("express");


const router = express.Router();



const { getAllImage, getSingleImagebyId, AddNewImage, UpdateImage, DeleteImageById} = require("../controller/imagescontroller/emergencyimagecontroller");




    /**
    * Route :  /Department
    * Method : get all doctors
    * Description : get all Doctor to the department
    * Access : private
    * Parameter : 
    */
router.get("/",getAllImage);
    
    
           /**
        * Route :  /Department/id
        * Method : get by id
        * Description :get a Doctor to the department
        * Access : private
        * Parameter : ID
        */
router.get("/:id",getSingleImagebyId)
    
    
           
                  /**
        * Route :  /Department
        * Method : create employee
        * Description :adding an employee
        * Access : private
        * Parameter : 
        */
    
router.post("/", AddNewImage)
    
               
                  /**
        * Route :  /Department/id
        * Method : Update by id
        * Description :Update the Doctor details to the department
        * Access : private
        * Parameter : id
        */
    
router.put("/:id",UpdateImage)
    
    
    
    
                      /**
        * Route :  /Department/id
        * Method : Update by id
        * Description :Update the Doctor details to the department
        * Access : private
        * Parameter : id
        */
router.delete("/:id",DeleteImageById)


module.exports = router