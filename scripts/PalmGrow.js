var xx=position.x;
var yy=position.y;
var zz=position.z;
var GROW=0;
for(var i=0;i<7;i++){
	position.y++;
	if(world.getBlockName(position)=="minecraft:air"){
		GROW=1;
	}
}
position.x=xx;
position.y=yy;
position.z=zz;
if(GROW==1){
	for(i=0;i<8;i++){
	world.setBlockAndMetadata(position,"BiomesOPlenty:logs2",3);
	position.y++;
	}
	position.y-=2;
	position.x-=2;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x+=4;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x-=2;
	position.z-=2;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.z+=4;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.z-=2;
	position.y++;
	position.x--;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x+=2;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x--;
	position.z--;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.z+=2;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.z--;
	position.y++;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x--;
	position.z--;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x+=2;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.z+=2;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x-=2;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x++;
	position.z--;
	position.y++;
	position.x-=2;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x+=4;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x-=2;
	position.z-=2;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.z+=4;
	if(world.getBlockName(position)=="minecraft:air"){
		world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves1",2);
	}
	position.x=xx;
	position.y=yy;
	position.z=zz;
}

