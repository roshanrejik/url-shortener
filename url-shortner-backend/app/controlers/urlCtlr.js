const URL=require('../models/url')
const urlCtlr={}
urlCtlr.list=(req,res)=>{
    URL.find()
    .then(urls=>res.json(urls))
    .catch(err=>console.log(err))
}
urlCtlr.listone=(req,res)=>{
    const id=req.params.id
    URL.findById(id)
    .then(url=>res.json(url))
    .catch(err=>res.json(err))
}
urlCtlr.create=(req,res)=>{
    const body=req.body
    const url=new URL(body)
    url.save()
    .then(url=>res.json(url))
    .catch(err=>res.json(err))
}
urlCtlr.remove=(req,res)=>{
    const id=req.params.id
    URL.findByIdAndDelete(id)
    .then(url=>res.json(url))
    .catch(err=>res.json(err))
}
urlCtlr.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    URL.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then(url=>res.json(url))
    .catch(err=>res.json(err))
}
urlCtlr.listonehash=(req,res)=>{
    const hashedUrl=req.params.hash
    URL.findOne({hashedUrl})
    .then(url=>res.redirect(`https://${url.originalUrl}`))
    .catch(err=>res.json(err))
}
module.exports=urlCtlr