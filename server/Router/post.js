const express = require("express");
const router = express.Router();
const database = require("../database");

// 새 게시글 작성
router.post("/newpost", (req, res) => {
    database.query(
        "INSERT INTO post(writer, title, content, write_date ) values (?, ?, ?, ?)", [req.body.writer, req.body.title, req.body.content, req.body.write_date ],
    function(err, data){
        if(err){
            console.log(err);
        } else{
            res.send({success : 1});
            console.log("새로운 게시글 등록");
        }
    });
});

// 게시판 목록 조회
router.get('/community', (req,res) => {
    database.query('SELECT * FROM post', (err, data) => {
        if(err) res.send(err);
        else res.send({result});
    })
})


        
module.exports = router;

