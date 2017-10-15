// class
'use strict';

// classを使用したクラス定義
class Base{
    constructor(data='Base class.'){
        this.data = data;
        this.af = () => {
            console.log('Sub.af function object.');
            console.log(this);
        }
    }
    showThis(){
        // クラス内定義の関数内のthisは自分自身を指す
        console.log(this);
        // arrow関数内のthisは自分自身を指す
        // この使い方はOK（この使い方を推奨!!）
        setTimeout(() => {
            console.log(this);
        }, 1000);

        // function関数内のthisは、bindによって自分自身のthisに置き換わるため、自分自身を指す。
        // この使い方はNG（動作的にはOKだが、古い使い方。arrow関数に統一するため、非推奨とする。）
        setTimeout(function(){
            console.log(this);
        }.bind(this), 2000);

        // function関数内のthisはTimeoutオブジェクトを指す
        // この使い方は期待通りではないためNG
        setTimeout(function(){
            console.log(this);
        }, 3000);

        // オブジェクトにアロー関数オブジェクトを追加
        // こちらを推奨
        this.af = () => {
            console.log('(overwrite) Sub.af function object.');
            console.log(this);
        }
        // オブジェクトにノーマル関数オブジェクトを追加
        // 動作上問題ないが、arrow関数に統一するため非推奨とする。
        this.nf = function (){
            console.log('sub.nf function object.');
            console.log(this);
        }
    }
};

class Sub extends Base{
    constructor(data='Sub class.'){
        super();
        this.data = data;
    }
}

var sub = new Sub();
console.dir(sub);
sub.af();
sub.showThis();
sub.nf();
sub.af();
