const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index');
});

router.post('/', (req, res)=>{
    const user = req.body;
    res.send(user);
});

router.get('/signup', (req, res)=>{
    res.render('signup');
})
router.post('/signup', (req, res)=>{
    const user = req.body;
    res.send(user);
});

router.get('/find', (req, res)=>{
    res.render('find');
});
// router.post('/', (req, res)=>{
//     const user = req.body;
//     res.send(user);
// });


router.get('/onlineusers', (req, res)=>{
    res.render('onlineusers');
});
// router.post('/', (req, res)=>{
//     const user = req.body;
//     res.send(user);
// });


router.get('/contact', (req, res)=>{
    res.render('contact');
})
// router.post('/', (req, res)=>{
//     const user = req.body;
//     res.send(user);
// });


module.exports = router;