function game_path(GamePathINPUT){
	var S=config.getString("GamePath","global");
	var Path;
	if(S!="default disk"){
		Path=S.substring(S.indexOf(":")+1)+"/.minecraft"+GamePathINPUT;
	}
	else{
		Path="/Karma2/.minecraft"+GamePathINPUT;	
	}
	return Path;
}

/*
GamePathINPUT:地址字符串
GamePathOUTPUT:完整地址
*/

var GamePathINPUT;
var GamePathOUTPUT=game_path(GamePathINPUT);