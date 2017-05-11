player.swingItem();
world.setTileEntityStringData(position,"owner",player.getUsername());

var Progress=world.getTileEntityFloatData(position,"Progress");
var ProgressMax=world.getTileEntityFloatData(position,"ProgressMax");
var IN=player.getItemName(player.getCurrentSlot());
var M=world.getBlockMetadata(position);

if(IN==null){
	if(Progress<ProgressMax){
		Progress=Progress+Math.random()+0.5;
		if(Progress>ProgressMax){
			Progress=ProgressMax;
		}
		world.setTileEntityFloatData(position,"Progress",Progress);
	}
	else{
		world.setBlockAndMetadata(position,"jinshucraft:Shoot",M);
		world.setTileEntityStringData(position,"owner",player.getUsername());
		world.setTileEntityStringData(position,"Times",world.getTime());
	}
}
