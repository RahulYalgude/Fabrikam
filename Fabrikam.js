var exp=require('express');

var app=exp();

app.listen(9000,function(){
	console.log("Server Started On 9000");
});

app.get('/',function(req,res){
	res.send('<h1>Welcome to Fabrikam</h1>');
});

app.all('*',function(req,res){
	res.send('Invalid URL');
});