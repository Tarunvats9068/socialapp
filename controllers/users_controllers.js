module.exports.profile = function(req,res){
    return res.render('profile',{
        title:'profile'
    });
};
module.exports.post = function(req,res){
    return res.render('post',{
        title:'post'
    });
};
module.exports.timeline = function(req,res){
    return res.render('timeline',{
        title:'timeline'
    });
};