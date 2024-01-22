var fs=require('fs')
fs.open('file_created_with_open.txt','w',function(err,data){
    if (err) throw err;
    console.log('euu');
});