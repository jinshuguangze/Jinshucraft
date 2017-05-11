var N=world.getBlockName(position);
var M=world.getBlockMetadata(position);
var BB="null";

if(N=="jinshucraft:TurpentinePineWood"){
	BB="turpentine";
}
else if(N=="minecraft:leaves"&&(M==0||M==4||M==8||M==12)){
	BB=0;
}
else if(N=="jinshucraft:PineNeedles"){
	BB=1;
}
else if(N=="jinshucraft:CocoaLeaves"){
	BB=2;
}
else if(N=="BiomesOPlenty:colorizedLeaves1"&&(M==2||M==6||M==10||M==14)){
	BB=3;
}
else if(N=="BiomesOPlenty:colorizedLeaves2"&&(M==0||M==4||M==8||M==12)){
	BB=4;
}
else if(N=="minefantasy2:ironbark_leaves"){
	BB=5;
}

if(BB!="turpentine"&&BB!="null"){
	if((world.getTime()%24000>4000)&&(world.getTime()%24000<23000)){
		if(mod.isItemInOreDictClass(N,M,"treeLeaves")){
			world.sendMessageToPlayer(player.getUsername(),"\u6811\u53f6\u4e0a\u7684\u9732\u73e0\u5df2\u7ecf\u84b8\u53d1\u6b86\u5c3d");
		}
	}
	else{
		world.setBlockAndMetadata(position,"jinshucraft:DriedLeaves",BB);
		player.removeFromSlot(player.getCurrentSlot(),1);
		player.add("jinshucraft:itemLeavesBucket_water",1,0);
	}
}
else if(BB=="turpentine"){
	world.setBlockAndMetadata(position,"jinshucraft:SkinnedPineWood",M);
	player.removeFromSlot(player.getCurrentSlot(),1);
	player.add("jinshucraft:itemLeavesBucket_turpentine",1,0);
}
