const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body;

    const admin = await Admin.findOne({username});
    if(admin){
        return res.status(403).json({
            success: false,
            message: 'Admin already exist'
        })
    }

    try{
        const newAdmin = await Admin.create({username,password});
        res.status(200).json({
            success: true,
            message: 'Admin created successfully'
        })
    }
    catch(err){
        return res.status(403).json({
            success: false,
            message: 'something went wrong'
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    
    try{
        const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
    }
    catch(err){
        return res.status(403).json({
            success: false,
            messgae: 'something went wrong'
        })
    }
    
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;