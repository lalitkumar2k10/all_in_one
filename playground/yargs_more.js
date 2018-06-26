const yargs=require('yargs');
const express=require('express');
const argv=yargs
.command('add','adds details',{
	title:{
		describe:'title of note',
		demand:true
	},
	body:{
		describe:'title of note',
		demand:true	
	}
})
.help()
.argv;

var app=express();

/*app.get('/',(request,response)=>{
	response.send('hi');
});
*/
app.use(express.static(__dirname+'/public'));

app.listen(3000,()=>{
	console.log('server started at port 3000');
});
