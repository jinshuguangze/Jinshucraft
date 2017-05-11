var N=player.getItemName(player.getCurrentSlot());
var M=player.getItemMetadata(player.getCurrentSlot());
position.y++;
if(world.getBlockName(position)=="minecraft:air"){
	if(N=="jinshucraft:VariationSapling"&&M==0){
		player.removeFromSlot(player.getCurrentSlot(),1);
		world.setBlockAndMetadata(position,"jinshucraft:VariationSapling",0);
	}
	else if(N=="minecraft:sapling"&&M==0){
		player.removeFromSlot(player.getCurrentSlot(),1);
		world.setBlockAndMetadata(position,"minecraft:sapling",0);
	}
	else if(N=="jinshucraft:PineTree"&&M==0){
		player.removeFromSlot(player.getCurrentSlot(),1);
		world.setBlockAndMetadata(position,"jinshucraft:PineTree",0);
	}
	else if(N=="jinshucraft:CocoaTree"&&M==0){
		player.removeFromSlot(player.getCurrentSlot(),1);
		world.setBlockAndMetadata(position,"jinshucraft:CocoaTree",0);
	}
	else if(N=="jinshucraft:itemShoot"&&M==0){
		player.removeFromSlot(player.getCurrentSlot(),1);
		world.setBlockAndMetadata(position,"jinshucraft:Shoot",0);
	}
	else if(N=="jinshucraft:itemShoot"&&M==1){
		player.removeFromSlot(player.getCurrentSlot(),1);
		world.setBlockAndMetadata(position,"jinshucraft:Shoot",1);
	}
	else if(N=="jinshucraft:itemShoot"&&M==2){
		player.removeFromSlot(player.getCurrentSlot(),1);
		world.setBlockAndMetadata(position,"jinshucraft:Shoot",2);
	}
}
