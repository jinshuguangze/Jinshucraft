var GamePathINPUT,GamePathOUTPUT,TechPointReaderINPUT,TechPointReaderOUTPUT;
var S,LINE;
GamePathINPUT="/data/techPoint/"+player.getUsername()+".karma";
mod.loadScript("apiGamePath.js");
S=mod.readFile(GamePathOUTPUT);

TechPointReaderINPUT=[S,"Wooden","workingtable",2,1];
mod.loadScript("apiTechPointReader.js");
LINE=TechPointReaderOUTPUT;

if(LINE>0){
	world.harvestBlock(position);
}