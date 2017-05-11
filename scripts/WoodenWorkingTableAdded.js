if(world.getBlockMetadata(position)==0){
	world.setTileEntityFloatData(position,"Progress",0.0);
	world.setTileEntityFloatData(position,"ProgressMax",40.0);
}
else if(world.getBlockMetadata(position)==1){
	world.setTileEntityFloatData(position,"Durability",48.0);
	world.setTileEntityFloatData(position,"maxDurability",48.0);
}