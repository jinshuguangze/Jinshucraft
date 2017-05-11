var GamePathINPUT,GamePathOUTPUT,TechPointReaderINPUT,TechPointReaderOUTPUT;
var S,LINE;
player.swingItem();

GamePathINPUT="/data/techPoint/"+world.getTileEntityStringData(position,"owner")+".karma";
mod.loadScript("apiGamePath.js");
S=mod.readFile(GamePathOUTPUT);
TechPointReaderINPUT=[S,"Wooden","workingtable",2,0];
mod.loadScript("apiTechPointReader.js");
LINE=TechPointReaderOUTPUT;

if(LINE>0){
	//GUI显示耐久条
	player.openGui('WoodenWorkingTableGUI_durability', position);
}
else{
	player.openGui('WoodenWorkingTableGUI', position);
}

result=true;