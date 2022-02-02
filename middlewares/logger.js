const myLogger=(req,res,next)=>{
    console.log(`${req.method}: ${req.url} ${new Date().toLocaleDateString()} ${new Date().toTimeString()}`)
    next();
}


module.exports = myLogger;