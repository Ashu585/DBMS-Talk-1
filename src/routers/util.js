const express = require('express')
const router = new express.Router()
const {connection ,mysql} = require('../db/sql')

router.get('/demo', (req, res) => {
    console.log(req.query.var1)
    res.send('Node js')
})
router.get('/demo/:key', (req, res) => {
    console.log(req.params.key)
    res.send('Node js')
})

router.get('/db/fetch', (req, res) => {
    connection.query('select * from sample', (error, results, fields) => {
        if(error) {
            console.log("error")
            console.log(error)
        } else {
            console.log(results[1])
        }
    })
    res.send('executed')
})

router.post('/db/add', (req, res) => {
    console.log(req.body)
    const sql = `insert into sample(name, email, password) values(${req.body.name}, "${req.body.email}", ${req.body.password})`
    console.log(sql)
    connection.query(sql, (error, results, fields) => {
        if(error) {
            console.log("error")
            console.log(error)
            res.send(400)
        } else {
            console.log(results)
            
    res.send('executed')
        }
    })
})
module.exports = router