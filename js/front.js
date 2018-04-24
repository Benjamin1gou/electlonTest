'use strict';
const $ = require('jquery');

//タグの定義
const myNameTag = '#myName';
const yourNameTag = '#yourName';
const sampleTag = '#sample';
const myNamesTag = '.myNames';
const yourNamesTag = '.yourNames';


$(function(){
    
    //clickイベントの定義
    $('#sample').click(function(){
        console.log('押されたよ');
    });

    $(myNameTag).keypress((e)=>{
        if(e.which == 13){
            $.nameEvent.add($(myNameTag).val(), 'my');
        }
    })


    $.nameEvent ={
        //弊社名追加イベント
        add: (name, camp)=>{
            switch(camp){
                case 'my': 
                    $(myNamesTag).append('<span class="radio"><input type="radio" name="names">'+name+ '</span>');
                    break;
                case 'you': 

                    break;
            }
        }
    }

});