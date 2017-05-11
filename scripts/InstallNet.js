var N=world.getBlockName(position);
if(mod.isItemInOreDictClass(N,world.getBlockMetadata(position),"MF2tanner")){
	if(N=="minefantasy2:tanner"&&Math.random()<0.025){
		world.setBlock(position,"minecraft:air");
	}
	else if(N=="minefantasy2:tannerStrong"&&Math.random()<0.01){
		world.setBlock(position,"minecraft:air");
	}
	else if(N=="minefantasy2:tannerMetal"&&Math.random()<0.002){
		world.setBlock(position,"minecraft:air");
	}
	world.spawnItem(position,"jinshucraft:itemNet",1,itemstack.getDamage()+1);
	player.removeFromSlot(player.getCurrentSlot(),1);
}