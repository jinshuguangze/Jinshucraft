var GamePathINPUT,GamePathOUTPUT,TechPointReaderINPUT,TechPointReaderOUTPUT;
var S,LINE_1,LINE_2;

GamePathINPUT="/data/techPoint/"+player.getUsername()+".karma";
mod.loadScript("apiGamePath.js");
S=mod.readFile(GamePathOUTPUT);

TechPointReaderINPUT=[S,"Wooden","workingtable",2,1];
mod.loadScript("apiTechPointReader.js");
LINE_1=TechPointReaderOUTPUT;

TechPointReaderINPUT=[S,"Wooden","workingtable",2,1];
mod.loadScript("apiTechPointReader.js");
LINE_2=TechPointReaderOUTPUT;

if(world.getBlockMetadata(position)==2){
	if(LINE_1||LINE_2>0){
		world.setTileEntityFloatData(position,"Durability",36.0);
	}
	else{
		world.setTileEntityFloatData(position,"Durability",parseInt(Math.floor(30+7*Math.random())));
	}
	world.setTileEntityFloatData(position,"maxDurability",48.0);
}
else if(world.getBlockMetadata(position)==3){
	if(LINE_1||LINE_2>0){
		world.setTileEntityFloatData(position,"Durability",24.0);
	}
	else{
		world.setTileEntityFloatData(position,"Durability",parseInt(Math.floor(18+7*Math.random())));
	}
	world.setTileEntityFloatData(position,"maxDurability",48.0);
}
else if(world.getBlockMetadata(position)==4){
	if(LINE_1||LINE_2>0){
		world.setTileEntityFloatData(position,"Durability",12.0);
	}
	else{
		world.setTileEntityFloatData(position,"Durability",parseInt(Math.floor(6+7*Math.random())));
	}	
	world.setTileEntityFloatData(position,"maxDurability",48.0);
}

world.setTileEntityStringData(position,"owner",player.getUsername());
