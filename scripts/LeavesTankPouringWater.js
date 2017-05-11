var i;
var M=world.getBlockMetadata(position);
var xx=position.x,yy=position.y,zz=position.z;
if(player.getItemName(player.getCurrentSlot())=='jinshucraft:itemLeavesBucket_water'){
	if(M>=15){
		for(i=0;i<255;i++){
			position.y++;
			if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"AllLeavesTank")){
				if(world.getBlockMetadata(position)<15){
					world.setBlockMetadata(position,world.getBlockMetadata(position)+1);
					player.removeFromSlot(player.getCurrentSlot(),1);
					player.add('jinshucraft:itemLeavesBucket',1,0);
					break;
				}
			}
			else{
				break;
			}
		}
	}
	else{
		world.setBlockMetadata(position,M+1);
		player.removeFromSlot(player.getCurrentSlot(),1);
		player.add('jinshucraft:itemLeavesBucket',1,0);
	}
}
position.x=xx;
position.y=yy;
position.z=zz;