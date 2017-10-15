デバッグ方法
====

Node.jsのプログラムを実行しながらデバッグする。

CUIでのデバッグ
----

メリット
： node単体で実施できるため、GUIがない環境でも使用できる

デメリット
： めんどくさー

### 実行方法

    node inspect src/11_console.js

実行例
: [12_eg_cui_debugging.txt](12_eg_cui_debugging.txt)

詳細説明
: [https://nodejs.org/api/debugger.html](https://nodejs.org/api/debugger.html)

|コマンド|内容|
|---|---|
|.exit|デバッグ中止|
|run|最初から再実行|
|cont|現在行以降を連続実行|
|n|ステップ実行|
|watch('xxx')|xxxの内容を出力(ウォッチ設定)|
|unwatch('xxx')|xxxの内容出力を取り消す(ウォッチ削除)|
|sb(line)|ブレークポイントを設定|
|cb(line)|ブレークポイントを削除|
