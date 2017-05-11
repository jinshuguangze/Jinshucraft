var xx=position.x;
var yy=position.y;
var zz=position.z;
var GROW=0;
for(var i=0;i<5;i++){
	position.y++;
	if(world.getBlockName(position)=="minecraft:air"){
		GROW=1;
	}
}
position.x=xx;
position.y=yy;
position.z=zz;
if(GROW==1){
	for(i=0;i<6;i++){
	world.setBlockAndMetadata(position,"BiomesOPlenty:logs3",1);
	position.y++;
	}
	position.y-=3;
	position.x-=3;
	position.z-=3;
	for(i=0;i<2;i++){
		for(var j=0;j<7;j++){
			for(var k=0;k<7;k++){
				if(world.getBlockName(position)=="minecraft:air"){
					world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves2",0);
				}
				var xxx=position.x;
				var yyy=position.y;
				var zzz=position.z;
				if(k==0&&Math.random()<0.25){
					position.x--;
					for(var m=0;m<5;m++){
						if(world.getBlockName(position)=="minecraft:air"){
							world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves2",0);
						}
						else{
							break;
						}
						position.y--;
					}
				}
				else if(k==6&&Math.random()<0.25){
					position.x++;
					for(var m=0;m<5;m++){
						if(world.getBlockName(position)=="minecraft:air"){
							world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves2",0);
						}
						else{
							break;
						}
						position.y--;
					}					
				}
				else if(k!=0&&k!=6&&j==0&&Math.random()<0.25){
					position.z--;
					for(var m=0;m<5;m++){
						if(world.getBlockName(position)=="minecraft:air"){
							world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves2",0);
						}
						else{
							break;
						}
						position.y--;
					}					
				}
				else if(k!=0&&k!=6&&j==6&&Math.random()<0.25){
					position.z++;
					for(var m=0;m<5;m++){
						if(world.getBlockName(position)=="minecraft:air"){
							world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves2",0);
						}
						else{
							break;
						}
						position.y--;
					}			
				}
				position.x=xxx;
				position.y=yyy;
				position.z=zzz;
				position.x++;
			}
			position.x-=7;
			position.z++;
		}
		position.z-=7;
		position.y++;
	}
	position.x++;
	position.z++;
	for(i=0;i<2;i++){
		for(j=0;j<5;j++){
			for(k=0;k<5;k++){
				if(world.getBlockName(position)=="minecraft:air"){
					world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedLeaves2",0);
				}
				if(Math.random()<0.6&&i==1&&((j==0&&k==0)||(j==0&&k==4)||(j==4&&k==0)||(j==4&&k==4))){
					if(world.getBlockName(position)=="BiomesOPlenty:colorizedLeaves2"&&world.getBlockMetadata(position)==0){
						world.setBlock(position,"minecraft:air");
					}
				}
				position.x++;
			}
			position.x-=5;
			position.z++;
		}
		position.z-=5;
		position.y++;
	}
	position.x=xx;
	position.y=yy;
	position.z=zz;	
}