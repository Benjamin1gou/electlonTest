'use strict';
const $ = require('jquery');
const {ipcRenderer} = require('electron')
//タグの定義
const myNameTag = '#myName';
const yourNameTag = '#yourName';
const sampleTag = '#sample';
const textTag = '#text';
const areaTag = '#area'
const myNamesTag = '.myNames';
const yourNamesTag = '.yourNames';


$(function(){
    
    //clickイベントの定義
    $('#sample').click(function(){
        console.log('押されたよ');
    });

    //弊社入力イベント
    $(myNameTag).keypress((e)=>{
        if(e.which == 13){
            $(yourNameTag).val('');
            $.nameEvent.add($(myNameTag).val(), 'my');
        }
    });

    //御社入力イベント
    $(yourNameTag).keypress((e)=>{
        if(e.which == 13){
            $(yourNameTag).val('');
            $.nameEvent.add($(yourNameTag).val(), 'you');
        }
    });

    //文章投稿イベント
    $(textTag).keypress((e)=>{
        if(event.shiftKey){
          if(e.keyCode === 13){
             const contText = $(textTag).val();
             const contName = $("input[name='names']:checked").val();
             const contType = $("input[name='names']:checked").attr('class');
             $.edit.Contribution(contText, contName, contType);
             $(textTag).val("");
             testEvent(contText, contName);
          }
        }
    });


    $.nameEvent ={
        //弊社名追加イベント
        add: (name, camp)=>{
            switch(camp){
                case 'my': 
                    $(myNamesTag).append('<li><span class="radio"><input type="radio" name="names" class="mine" value="'+name+'">'+name+ '</span></li>');
                    break;
                case 'you': 
                    $(yourNamesTag).append('<li><span class="radio"><input type="radio" name="names" class="yours" value="'+name+'">'+name+ '</span></li>');
                    break;
            }
        }
    }

    //文章を投稿するイベント
    $.edit = {
        /**
         * text: 投稿する文章
         * name: 投稿者名
         * type: 弊社or御社
         */
        Contribution: (text, name, type)=>{
            const upText = text.replace(/\r?\n/g, '<br>');
            const upName = name;
            $(areaTag).append('<tr><th>'+upName+':</th><td>'+upText+'</td></tr>');
            
        }
    }

    //ipc検証ファンクション
    function testEvent(text, name){
        ipcRenderer.send('append', text, name);
    }

});