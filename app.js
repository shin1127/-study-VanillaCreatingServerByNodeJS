var http = require("http"); // ライブラリのimport, httpオブジェクトを読み込む
var fs = require("fs"); // ファイルを読み込むためのライブラリ

var server = http.createServer(); // サーバーを作る
server.on("request", doRequest); // requestというイベント処理をdoRequest関数に組み込む
server.listen(1234); // ポート番号を記述するが、ローカルサーバーで起動するため数字に意味はない
console.log("Server running!"); // 起動成功時に出力する

// リクエストの処理
function doRequest(req, res) {
  fs.readFile("./hello.html", "UTF-8", function (err, data) {
    // 無名関数の第一引数->エラー時の処理, 第二引数->読み込んだファイルの補完
    res.writeHead(200, { "Content-Type": "text/html" }); // 第一引数->ステータスコード 第二引数->ヘッダー情報を連想配列で指定
    res.write(data);
    res.end();
  });
}
// 「非同期」に注意する
// HTMLファイルを読み込んだ後に書き込みをしてほしいので、コールバック関数を使って非同期処理している
