var fs=require('fs');

fs.appendFile('file_created_with_append.txt','botu anntarra babu',function(err){
    if (err) throw err;
    console.log('euuu');
});