var treeList,treeOrderMax,dirtList,dirtOrderMax,AppendString;
var GamePathINPUT,GamePathOUTPUT,ListReaderINPUT,ListReaderOUTPUT;

if(itemstack.getIntData("newToolTip")!=0){//提示信息自动添加
	GamePathINPUT="/data/treeList.karma";
	mod.loadScript("apiGamePath.js");
	treeList=mod.readFile(GamePathOUTPUT);
	treeOrderMax=treeList.split("\r\n").length-1;

	GamePathINPUT="/data/dirtList.karma";
	mod.loadScript("apiGamePath.js");
	dirtList=mod.readFile(GamePathOUTPUT);
	dirtOrderMax=treeList.split("\r\n").length-1;

	GamePathINPUT="/scripts/_ToolTipsAutoAdd.zs";
	mod.loadScript("apiGamePath.js");
	if(mod.readFile(GamePathOUTPUT)==null||mod.readFile(GamePathOUTPUT)==""){
		for(var i=1;i<=treeOrderMax;i++){
			ListReaderINPUT=[treeList,i];
			mod.loadScript("apiListReader.js");
			AppendString=ListReaderOUTPUT;
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.green(\" - \\u751f\\u957f\\u901f\\u5ea6: "+AppendString[5]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.green(\" - \\u4ea7\\u91cf: "+AppendString[6]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.green(\" - \\u6297\\u6027: "+AppendString[7]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.darkRed(\" - \\u8425\\u517b\\u5ea6\\u9700\\u6c42: "+AppendString[8]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.darkRed(\" - \\u9178\\u78b1\\u5ea6\\u9700\\u6c42: "+AppendString[9]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.darkRed(\" - \\u5b54\\u9699\\u5ea6\\u9700\\u6c42: "+AppendString[10]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.yellow(\" - \\u6e29\\u5ea6\\u9700\\u6c42: "+AppendString[11]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.yellow(\" - \\u6e7f\\u5ea6\\u9700\\u6c42: "+AppendString[12]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.yellow(\" - \\u6d77\\u62d4\\u9ad8\\u5ea6\\u9700\\u6c42: "+AppendString[13]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.darkPurple(\" - \\u521d\\u51fa\\u73b0\\u65f6\\u4ee3\\u5e8f\\u53f7: "+AppendString[14]+"\"));\r\n");
			
			mod.appendFile(GamePathOUTPUT,"<jinshucraft:itemShoot:"+parseInt(i-1)+">.addTooltip(format.green(\" - \\u751f\\u957f\\u901f\\u5ea6: "+AppendString[5]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<jinshucraft:itemShoot:"+parseInt(i-1)+">.addTooltip(format.green(\" - \\u4ea7\\u91cf: "+AppendString[6]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<jinshucraft:itemShoot:"+parseInt(i-1)+">.addTooltip(format.green(\" - \\u6297\\u6027: "+AppendString[7]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<jinshucraft:itemShoot:"+parseInt(i-1)+">.addTooltip(format.darkRed(\" - \\u8425\\u517b\\u5ea6\\u9700\\u6c42: "+AppendString[8]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<jinshucraft:itemShoot:"+parseInt(i-1)+">.addTooltip(format.darkRed(\" - \\u9178\\u78b1\\u5ea6\\u9700\\u6c42: "+AppendString[9]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<jinshucraft:itemShoot:"+parseInt(i-1)+">.addTooltip(format.darkRed(\" - \\u5b54\\u9699\\u5ea6\\u9700\\u6c42: "+AppendString[10]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<jinshucraft:itemShoot:"+parseInt(i-1)+">.addTooltip(format.yellow(\" - \\u6e29\\u5ea6\\u9700\\u6c42: "+AppendString[11]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<jinshucraft:itemShoot:"+parseInt(i-1)+">.addTooltip(format.yellow(\" - \\u6e7f\\u5ea6\\u9700\\u6c42: "+AppendString[12]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<jinshucraft:itemShoot:"+parseInt(i-1)+">.addTooltip(format.yellow(\" - \\u6d77\\u62d4\\u9ad8\\u5ea6\\u9700\\u6c42: "+AppendString[13]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<jinshucraft:itemShoot:"+parseInt(i-1)+">.addTooltip(format.darkPurple(\" - \\u521d\\u51fa\\u73b0\\u65f6\\u4ee3\\u5e8f\\u53f7: "+AppendString[14]+"\"));\r\n");
		}
		
		for(i=1;i<dirtOrderMax;i++){
			ListReaderINPUT=[dirtList,i];
			mod.loadScript("apiListReader.js");
			AppendString=ListReaderOUTPUT;
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.darkRed(\" - \\u8425\\u517b\\u5ea6: "+AppendString[5]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.darkRed(\" - \\u9178\\u78b1\\u5ea6: "+AppendString[6]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.darkRed(\" - \\u5b54\\u9699\\u5ea6: "+AppendString[7]+"\"));\r\n");
			mod.appendFile(GamePathOUTPUT,"<"+AppendString[1]+":"+AppendString[2]+">.addTooltip(format.darkPurple(\" - \\u7a00\\u6709\\u5ea6\\u661f\\u7ea7: "+AppendString[8]+"\"));\r\n");		
		}
		
		player.sendChat("/mt reload");
		itemstack.setIntData("newToolTip",0);
	}
	else{
		itemstack.setIntData("newToolTip",0);
	}
}

if(itemstack.getIntData("newplayer")!=0){//新玩家自动添加新技能点文件
	var S1,S2,A1,A2;
	
	GamePathINPUT="/data/treeList.karma";
	mod.loadScript("apiGamePath.js");
	treeList=mod.readFile(GamePathOUTPUT);
	treeOrderMax=treeList.split("\r\n").length-1;
	
	GamePathINPUT="/data/techPoint/"+player.getUsername()+".karma";
	mod.loadScript("apiGamePath.js");
	A1=GamePathOUTPUT;
	S1=mod.readFile(A1);
	
	GamePathINPUT="/data/treeData/"+player.getUsername()+".karma";
	mod.loadScript("apiGamePath.js");
	A2=GamePathOUTPUT;
	S2=mod.readFile(A2);

	if(S1==null||S2==null){
		mod.writeFile(A1,"Age=1,\r\nWooden_workingtable=<0-0-0 0-0-0 0-0-0>,\r\n");
		mod.writeFile(A2,"");
		for(i=1;i<=treeOrderMax;i++){
			mod.appendFile(A2,i+"\t0\t0\t0");
			if(i<treeOrderMax){
				mod.appendFile(A2,"\r\n");
			}
		}
		itemstack.setIntData("newplayer",0);
	}
}