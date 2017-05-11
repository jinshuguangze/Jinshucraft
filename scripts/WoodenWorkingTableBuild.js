player.swingItem();
world.setTileEntityStringData(position,"owner",player.getUsername());

var Progress=world.getTileEntityFloatData(position,"Progress");
var ProgressMax=world.getTileEntityFloatData(position,"ProgressMax");
var IN=player.getItemName(player.getCurrentSlot());
var GamePathINPUT,GamePathOUTPUT,TechPointReaderINPUT,TechPointReaderOUTPUT;
var S,LINE;

GamePathINPUT="/data/techPoint/"+player.getUsername()+".karma";
mod.loadScript("apiGamePath.js");
S=mod.readFile(GamePathOUTPUT);
TechPointReaderINPUT=[S,"Wooden","workingtable",2,0];
mod.loadScript("apiTechPointReader.js");
LINE=TechPointReaderOUTPUT;

if(IN==null){
	if(Progress<ProgressMax){
		Progress=Progress+0.5+Math.random()-LINE*0.1;
		if(Progress>ProgressMax){
			Progress=ProgressMax;
		}
		world.setTileEntityFloatData(position,"Progress",Progress);
	}
	else{
		world.setBlockMetadata(position,1);
		world.setTileEntityStringData(position,"owner",player.getUsername());
	}
}
