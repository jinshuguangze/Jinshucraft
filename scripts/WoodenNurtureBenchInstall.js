position.y++;
if(world.getBlockName(position)=='minecraft:dirt'&&world.getBlockMetadata(position)==0){
	world.setBlock(position,'minecraft:air');
	position.y--;
	world.setBlock(position,'jinshucraft:WoodenNurtureBench');
	}