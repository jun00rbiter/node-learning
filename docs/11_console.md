コンソール出力
====

開発するにあたって、プログラムの状態を表示するためにコンソール出力をする。

ソースコード
: src/11_console.js

3種のコンソール出力の方法
----

### 1. processクラスのstdout/stderrを使用

### 2. consoleクラスを使用

### 3. log4js-nodeパッケージを使用（!!推奨!!）

使用するためには`log4js-node`パッケージをインストールする必要がある。

    npm install log4js

デフォルトではコンソール出力だが、ファイル出力、syslog出力など出力方法を柔軟に変更できるため、この方法を初めから使用することを推奨する。