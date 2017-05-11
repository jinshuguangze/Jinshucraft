var Resistance=world.getTileEntityFloatData(position,"Resistance");
world.sendMessageToAllPlayers(Resistance);
position.y--;
if(!(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"treePlantOn"))){
	position.y++;
	world.setBlock(position,"minecraft:air");
	if(Resistance>=50){
		world.spawnItem(position,"jinshucraft:itemShoot",1,world.getBlockMetadata(position));
	}
	else{
		world.spawnItem(position,"minecraft:deadbush",1,0);
	}
}
