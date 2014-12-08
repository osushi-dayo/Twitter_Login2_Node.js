//アプリケーションのホストとポート
exports.host = "127.0.0.1";
exports.port = "3000";

//セッション管理にredisを使用。
exports.db_host = "127.0.0.1";// データベースのホスト
exports.db_port = 6379;// データベースのポート

//Twitterのトークン
//アクセストークンはsignin_with_twitterのみの場合は不要
exports.CONSUMER_KEY =        'YOUR_CONSUMER_KEY';
exports.CONSUMER_SECRET =     'YOUR_CONSUMER_SECRET';
exports.ACCESS_TOKEN_KEY =    'YOUR_ACCESS_TOKEN_KEY';
exports.ACCESS_TOKEN_SECRET = 'YOUR_ACCESS_TOKEN_SECRET';

//推測されない文字列
exports.session_key_secret = "RANDOM_STR";

