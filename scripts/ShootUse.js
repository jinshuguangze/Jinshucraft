player.swingItem();
var GamePathINPUT,GamePathOUTPUT,ListReaderINPUT,ListReaderOUTPUT;
var N=world.getBlockName(position),M=world.getBlockMetadata(position);
var Porosity;
var String_dirt_List,S,i;

GamePathINPUT="/data/dirtList.karma";
mod.loadScript("apiGamePath.js");
String_dirt_List=mod.readFile(GamePathOUTPUT);
S=String_dirt_List;

for(i=1;i<S.split("\r\n").length;i++){
	ListReaderINPUT=[String_dirt_List,i];
	mod.loadScript("apiListReader.js");
	if(ListReaderOUTPUT[1]==N&&ListReaderOUTPUT[2]==M){
		break;
	}
}

Porosity=parseFloat(ListReaderOUTPUT[7]);
var ProgressMax=parseFloat((150/(Porosity+Math.random())).toFixed(1));//孔隙度决定扦插时间,孔隙度越高,需要的扦插时间越短

if(mod.isItemInOreDictClass(N,M,"treePlantOn")){
	position.y++;
	world.setBlockAndMetadata(position,"jinshucraft:ShootBottomBlock",player.getItemMetadata(player.getCurrentSlot()));
	world.setTileEntityStringData(position,"owner",player.getUsername());
	world.setTileEntityFloatData(position,"Progress",0.0);
	world.setTileEntityFloatData(position,"ProgressMax",ProgressMax);
	player.removeFromSlot(player.getCurrentSlot(),1);
}