

module.exports.home = function(req,res){
    console.log('running from the controller');
  return  res.end('<h1>this is the home page </h1>');
}