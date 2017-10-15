// strictモードではない場合
// 'use strict'; //コメントアウト

// 通常関数内でのthis
console.log('=============');
console.log('関数内でのthis');
const nf = function(){
    console.dir(this);
}
nf();

// アロー関数内でのthis
console.log('アロー関数内でのthis');
const af = () => {
    console.dir(this);
}
af();

// オブジェクト関数内でのthis
console.log('=============');
var oobj = {
    data: 5,
    nf: function(){
        console.log('nf');
        console.dir(this);
        var inf = function(){
            console.log('nf:inf');
            console.dir(this);
        }
        inf();
        var iaf = () => {
            console.log('nf:iaf');
            console.dir(this);
        }
        iaf();
    },
    cf(){
        console.log('---\ncf');
        console.dir(this);
        var inf = function(){
            console.log('cf:inf');
            console.dir(this);
        }
        inf();
        var iaf = () => {
            console.log('cf:iaf');
            console.dir(this);
        }
        iaf();
    },
    af: () => {
        console.log('---\naf');
        console.dir(this);
        var inf = function(){
            console.log('af:inf');
            console.dir(this);
        }
        inf();
        var iaf = () => {
            console.log('af:iaf');
            console.dir(this);
        }
        iaf();
    }
}
console.log('オブジェクト内の関数オブジェクトでのthis');
oobj.nf();
console.log('オブジェクト関数内でのthis');
oobj.cf();
console.log('オブジェクト内アロー関数内でのthis');
oobj.af();

// 旧クラス
var OldBase = (function (){
    var obj = function OldBase(){
        this.data = 'base class by old syntax.';
    }
    obj.prototype.inf = function(){
        console.log(this);
        var a = () => {
            console.log(this);
        }
        var b = function(){
            console.log(this);
        };
        a();
        b();
    }
    obj.prototype.iaf = () => {
        console.log(this);
    }
    return obj;
})();

var ob = new OldBase();
ob.inf();
ob.iaf();

// 新クラス
class NewBase {
    constructor(){
        this.data = 'base class by old syntax.';
        this.iaf = () => {
            console.log('---\nNewBase.iaf');
            console.log(this);
            var af = () => {
                console.log('---\nNewBase.iaf.af');
                console.log(this);
            }
            af();
        };
    }
    inf(){
        console.log('---\nNewBase.inf');
        console.log(this);
        var af = () => {
            console.log('---\nNewBase.inf.af');
            console.log(this);
            var af = () => {
                console.log('---\nNewBase.inf.af.af');
                console.log(this);
            }
            af();
        }
        var nf = function(){
            console.log('---\nNewBase.inf.nf');
            console.log(this);
        };
        af();
        nf();
    }
};

var nb = new NewBase();
nb.inf();
nb.iaf();

nb = 3;
console.log(nb);
