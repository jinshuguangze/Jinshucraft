var avg
var i;0

if(player.getItemName(player.getCurrentSlot())=="jinshucraft:itemStoneKnife"){
	avg=1;
}


if(world.getBlockName(position)=="jinshucraft:PineWood"){
	i=1;
}
else if(world.getBlockName(position)=="BiomesOPlenty:logs2"&&(world.getBlockMetadata(position)==3||world.getBlockMetadata(position)==7||world.getBlockMetadata(position)==11)){
	i=2;
}


switch(i){
	case 1:
	itemstack.setStringData("name","jinshucraft:SkinnedPineWood");
	itemstack.setIntData("meta",0);
	world.spawnItem(position,"jinshucraft:itemBark",avg,0);
	break;
	
	case 2:
	itemstack.setStringData("name","jinshucraft:SkinnedPalmWood");
	itemstack.setIntData("meta",0);
	world.spawnItem(position,"jinshucraft:itemBark",avg,1);
	break;
	
	default:
	break;
}

world.setBlock(position,"minecraft:air");
itemstack.setIntData("x",position.x);
itemstack.setIntData("y",position.y);
itemstack.setIntData("z",position.z);