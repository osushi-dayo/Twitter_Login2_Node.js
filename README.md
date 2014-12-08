Twitter_Login2_Node.js
======================

Sample of twitter-login and connecting express-session with socket.io-session.  
Node.jsでTwitterログイン認証＆Redisを使ったexpressとsocket.ioのsession共有化。  

mongoDBのSessionStoreを使いたい場合は下のurlへ。  
<https://github.com/osushi-dayo/Twitter_Login_Node.js>

#Usage:
Get twitter-tokens by <https://dev.twitter.com/>  
Remane "dammy_settings.js" => "settings.js"  
Fill in "settings.js"  
install redis and start redis-server  
`$npm install`  
`$node app`  
