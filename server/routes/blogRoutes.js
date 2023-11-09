const express = require('express');
const { getAllBlogsController, createBlogsController, updateBolgscontroller, singleBlogsController, deleteBlogsController } = require('../controllers/blogController');
const router = express.Router();

//routes|| GET all

router.get('/all-blog',getAllBlogsController)

//post||create blog

router.post('/create-blog',createBlogsController)


//update||update blog
router.put('/update-blog/:id',updateBolgscontroller)

//get|| single blog
router.get('/get-blog/:id',singleBlogsController)

//delete||delete blog
router.delete('/delete/:id',deleteBlogsController)


module.exports = router;