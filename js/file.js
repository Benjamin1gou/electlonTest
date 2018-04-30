/**
 * file操作用クラス
 * @param {*} ipcMain 
 */
const fs = require('fs');

const fileControler = function(ipcMain){

    //検証用
    ipcMain.on('test',function(event, text){
        console.log(text);
    });

    //テキスト追記
    ipcMain.on('append', function(event, data, name){
        data = name + ' : ' + data + '\n';
        fs.appendFile('./files/test.txt', data, function (err) {
            if (err) {
                throw err;
            }
        });
    });


}

module.exports = fileControler;