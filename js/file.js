/**
 * file操作用クラス
 * @param {*} ipcMain 
 */

let fileControler = function(ipcMain){

    //検証用
    ipcMain.on('test',function(event, text){
        console.log(text);
    });

    
}

module.exports = fileControler;