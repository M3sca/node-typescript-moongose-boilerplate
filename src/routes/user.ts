import * as express from "express";
const router = express.Router();    

router.get('/', (req, res) => {
    res.send('Users route!');
});

 // Export the router
 export = router;