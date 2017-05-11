var GamePathINPUT,GamePathOUTPUT;
var S,i,j,agecount;
var A=[],B=[],C=[],Age=[];
var recipedump="";
var Checknull="";
var R=Math.random();

GamePathINPUT="/dumps/item.csv";
mod.loadScript("apiGamePath.js");
S=mod.readFile(GamePathOUTPUT);
A=S.split("\r\n");

GamePathINPUT="/data/information.karma";
mod.loadScript("apiGamePath.js");
S=mod.readFile(GamePathOUTPUT);
B=S.split(",");

agecount=B.length-1;
for(i=0;i<agecount;i++){
	Age[i]=B[i].slice(B[i].indexOf("=")+1);
	if(R<(i+1)/agecount){
		C[0]=Age[i]+"Working";
		break;
	}
}

if(C[0]=="WoodenWorking"){
	for(i=1;i<8;i++){
		j=parseInt(Math.round(Math.random()/(1/(A.length-2))));
		C[i]=A[j].slice(0,A[j].indexOf(","));
		if(i>1){
			if(Math.random()<0.2){
				C[i]="";
			}
			Checknull+=C[i];
		}
		if(i==7&&Checknull==""){
			C[parseInt(Math.floor((Math.random()*6+2)))]=A[j].slice(0,A[j].indexOf(","));
		}
		if(i>2){
			recipedump=recipedump+", \""+C[i]+"\"";
		}
	}
	
	recipedump="mod.addRecipeFor(\""+C[0]+"\", \""+C[1]+"\", "+"3, 2, \""+C[2]+"\""+recipedump+");\r\n";
	mod.addRecipeFor(C[0], C[1], 3, 2, C[2], C[3], C[4], C[5], C[6], C[7]);
	
	GamePathINPUT="/mods/CS2_jinshucraft/scripts/WoodenWorkingTableScript_randomAdd.js";
	mod.loadScript("apiGamePath.js");
	mod.appendFile(GamePathOUTPUT,recipedump);
}
else if(C[0]=="StoneWorking"){
	for(i=1;i<11;i++){
		j=parseInt(Math.round(Math.random()/(1/(A.length-2))));
		C[i]=A[j].slice(0,A[j].indexOf(","));
		if(i>1){
			if(Math.random()<0.2){
				C[i]="";
			}
			Checknull+=C[i];
		}
		if(i==10&&Checknull==""){
			C[parseInt(Math.floor((Math.random()*9+2)))]=A[j].slice(0,A[j].indexOf(","));
		}
		if(i>2){
			recipedump=recipedump+", \""+C[i]+"\"";
		}
	}
	
	recipedump="mod.addRecipeFor(\""+C[0]+"\", \""+C[1]+"\", "+"3, 3, \""+C[2]+"\""+recipedump+");\r\n";
	mod.addRecipeFor(C[0], C[1], 3, 3, C[2], C[3], C[4], C[5], C[6], C[7], C[8], C[9], C[10]);
	
	GamePathINPUT="/mods/CS2_jinshucraft/scripts/StoneWorkingTableScript_randomAdd.js";
	mod.loadScript("apiGamePath.js");
	mod.appendFile(GamePathOUTPUT,recipedump);
}


