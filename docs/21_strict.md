strictモード
====

ECMAScript 5 から導入されたstrictモードは、今までwarningとしてスルーしていたのをいろいろ厳密に行うということ。
その他もろもろあるが、今後はstrictモードを使う。

> 古いブラウザ等では使えなくなるコードが出てくるが、
> 古いブラウザは切り捨てる。

strictモードを使用するためには、ファイルの先頭に以下を記載する。

    'use strict';

strictモードでの決まり（自分ルール）
----

関数オブジェクト作成時は、arrow関数を使用する。

* OK

        const af = () => {
            console.log("object of arrow function.");
        }

* NG (文法/動作的には誤りではないが、書式の統一化のため)

        const nf = function () {
            console.log("object of arrow function.");
        }

クラスの作成は`class`構文を使う。

* OK

    ~~~
    class Base {
        constructor(){
            this.data = 'data';
            this.af = () => {
                console.log("function object of Base class");
            }
        }
        nf(){
            this.af = () => {
                console.log("(overwrite) function object of Base class");
            }
        }
    }
    ~~~

* NG (文法/動作的には誤りではないが、書式の統一化のため)

    ~~~
    var obj = {
        af: () => {
            // NG
        },
        of() {
            // NG
        },
        nf: function(){
            // NG
        },
    }
    ~~~

* NG（文法/動作的には誤りではないが、書式の統一化のため）

    ~~~
    var OldBase = (function (){
        var obj = function OldBase(){
            this.data = 'base class by old syntax.';
            this.nf = function(){
                // NG
            }
            this.af = () => {
                // NG
            }
        }
        obj.prototype.inf = function(){
            // NG
        }
        obj.prototype.iaf = () => {
            // NG
        }
        return obj;
    })();
    ~~~

実験
----

strictモードの有無によって、`this`の値が異なる。
下記2つのスクリプトは、先頭に`'use strict';`が在るか無いかの違いしかない。

strictモードのコード
: src/21_1_strict.js

strictモードではないコード
: src/21_1_strict.js
