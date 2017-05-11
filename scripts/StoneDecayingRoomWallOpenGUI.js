var i,j;
position.y--;
position.x-=3;
position.z-=3;
for(i=0;i<7;i++){
	for(j=0;j<7;j++){
		if(world.getBlockName(position)=="jinshucraft:StoneDecayingRoom"){
			player.openGui('StoneDecayingRoomGUI',position);
			result = true;
			i=7;
			break;
		}
		position.x++;
	}
	position.x-=7;
	position.z++;
}