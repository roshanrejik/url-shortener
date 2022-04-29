const express = require('express')
const urlCtlr=require('../app/controlers/urlCtlr')
const router=express.Router()
const shortHash = require('short-hash');
const createHash=function(req,res,next){
     req.body.hashedUrl=shortHash(req.body.originalUrl)
     next()
}
router.get('/api/urls',urlCtlr.list)
router.get('/api/urls/:id',urlCtlr.listone)
router.get('/:hash',urlCtlr.listonehash)
router.post('/api/urls',createHash,urlCtlr.create)
router.delete('/api/urls/:id',urlCtlr.remove)
router.put('/api/urls/:id',urlCtlr.update)
module.exports=router