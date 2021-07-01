var app=require("express")();
var http=require("http").Server(app);
var io=require("socket.io") (http);

				app.get("/", function(req, res) {
						
					res.sendFile(_dirname + "/index.html");
					});
					
					
					socket.on(" newMessage", function(msg){
					io.emit("newMessage", msg);
					console.log("Chat baru:" + msg);
					});
					
					socket.on("disconect", function(msg){
					console.log("user disconected");
					});
					
					});
					
					http.listen(3000, function(){
					console.log("listening on 3000...");
					});
				
