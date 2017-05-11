var xx=player.getLookX();
var yy=player.getLookY();
var zz=player.getLookZ();
var N=world.getBlockName(xx,yy,zz);
var M=world.getBlockMetadata(xx,yy,zz);
var IN=player.getItemName(player.getCurrentSlot());
var IM=player.getItemMetadata(player.getCurrentSlot());
var StringWord,SetItem;
var W=width;
var H=height;

if(N=="jinshucraft:WoodenWorkingTable"&&M==0){
	StringWord="\u5efa\u9020\u6728\u8d28\u5de5\u4f5c\u53f0";
	SetItem=null;
}
else if(N=="jinshucraft:ShootBottomBlock"){
	var GamePathINPUT,GamePathOUTPUT,ListReaderINPUT,ListReaderOUTPUT,SS;
	
	GamePathINPUT="/data/treeList.karma";
	mod.loadScript("apiGamePath.js");
	SS=mod.readFile(GamePathOUTPUT);
	ListReaderINPUT=[SS,M+1];
	mod.loadScript("apiListReader.js");
	
	StringWord="\u6266\u63d2"+ListReaderOUTPUT[3]+"\u679d\u82bd";
	SetItem=null;
}

if(mod.isItemInOreDictClass(N,M,"RenderBlock")){
	//显示左侧信息栏
	renderer.setTexture("Icon.png");
	(IN==SetItem)?renderer.drawTexturedRect((W/2)-106,H-69,0,0,20,20):renderer.drawTexturedRect((W/2)-106,H-69,40,0,20,20);
	
	if(SetItem==null){
		renderer.drawTexturedRect((W/2)-106,H-69,0,20,20,20);//拳头
	}
	
	//显示长条
	renderer.setTexture("Line.png");
	renderer.drawTexturedRect((W/2)-86,H-69,84,0,172,20);
	
	//显示进度条
	renderer.drawTexturedRect((W/2)-80,H-57,90,20,parseInt(160*(world.getTileEntityFloatData(xx,yy,zz,"Progress")/world.getTileEntityFloatData(xx,yy,zz,"ProgressMax"))),3);
	
	//显示文字
	renderer.drawString(StringWord,(W/2)-(renderer.getStringWidth(StringWord)/2),H-66,0x000000);
}
