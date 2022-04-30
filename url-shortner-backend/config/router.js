const express = require('express')
const urlCtlr=require('../app/controlers/urlCtlr')
const router=express.Router()

router.get('/api/urls',urlCtlr.list)
router.get('/api/urls/:id',urlCtlr.listone)
router.get('/:hash',urlCtlr.listonehash)
router.post('/api/urls',urlCtlr.create)
router.delete('/api/urls/:id',urlCtlr.remove)
router.put('/api/urls/:id',urlCtlr.update)
module.exports=router