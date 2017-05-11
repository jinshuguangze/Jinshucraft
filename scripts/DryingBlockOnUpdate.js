var AC=0,size=0,blocksize=0;
var N=world.getBlockName(position);
var M=world.getBlockMetadata(position);
var NBT=world.getTileEntityStringData(position,"name");

position.y--;
if(world.getBlockName(position)=="minecraft:air"){
	position.y++;
	world.setBlock(position,"minecraft:air");
	position.y--;
	world.setBlockAndMetadata(position,N,M);
	if(NBT!=null){
		world.setTileEntityStringData(position,"name",NBT);
	}
}
else{
	position.y++;
}

if(world.getBlockMetadata(position)==0){
	blocksize=1;
}
else if(world.getBlockMetadata(position)==2){
	blocksize=2;
}
else if(world.getBlockMetadata(position)==4){
	blocksize=3;
}
else if(world.getBlockMetadata(position)==6){
	blocksize=4;
}


while(world.getBlockName(position)!="jinshucraft:WoodenDryingRoom"&&world.getBlockName(position)!="jinshucraft:StoneDryingRoom"){
	position.y--;
	AC++;
	if(AC>=255){
		break;
	}
}


if(world.getBlockName(position)=="jinshucraft:WoodenDryingRoom"){
	size=1;
}
else if(world.getBlockName(position)=="jinshucraft:StoneDryingRoom"){
	size=2;
}

if(size==1){
	if(blocksize==1){
		if(AC<=10){
			if(Math.random()<=(0.0006+0.00004*AC)){
				position.y+=AC;
				if(world.getTileEntityStringData(position,"name")=="itemPineNeedles"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves0");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemCocoaLeaves"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves1");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemWillowTwig"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves2");
				}
			}
		}
		else{
			if(Math.random()<=0.001){
				position.y+=AC;
				if(world.getTileEntityStringData(position,"name")=="itemPineNeedles"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves0");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemCocoaLeaves"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves1");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemWillowTwig"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves2");
				}
			}
		}
	}		
	else if(blocksize==2){
		if(AC<=10){
			if(Math.random()<=(0.0005+0.00005*AC)){
				position.y+=AC;
				world.setBlockMetadata(position,3);
			}
		}
		else{
			if(Math.random()<=0.001){
				position.y+=AC;
				world.setBlockMetadata(position,3);
			}
		}
	}		
	else if(blocksize==3){
		if(AC<=10){
			if(Math.random()<=(0.0006+0.00004*AC)){
				position.y+=AC;
				if(world.getTileEntityStringData(position,"name")=="itemBark0"){
					world.setBlockMetadata(position,5);
					world.setTileEntityStringData(position,"name","itemDriedBark0");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemBark1"){
					world.setBlockMetadata(position,5);
					world.setTileEntityStringData(position,"name","itemDriedBark1");
				}
			}
		}
		else{
			if(Math.random()<=0.001){
				if(world.getTileEntityStringData(position,"name")=="itemBark0"){
					world.setBlockMetadata(position,5);
					world.setTileEntityStringData(position,"name","itemDriedBark0");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemBark1"){
					world.setBlockMetadata(position,5);
					world.setTileEntityStringData(position,"name","itemDriedBark1");
				}
			}
		}
	}		
	else if(blocksize==4){
		if(AC<=10){
			if(Math.random()<=(0.001+0.00003*AC)){
				position.y+=AC;
				world.setBlock(position,"Forestry:soil");
			}
		}
		else{
			if(Math.random()<=0.0013){
				position.y+=AC;
				world.setBlock(position,"Forestry:soil");
			}
		}
	}
}
else if(size==2){
	if(blocksize==1){
		if(AC<=10){
			if(Math.random()<=(0.0008+0.000045*AC)){
				position.y+=AC;
				if(world.getTileEntityStringData(position,"name")=="itemPineNeedles"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves0");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemCocoaLeaves"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves1");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemWillowTwig"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves2");
				}
			}
		}
		else{
			if(Math.random()<=0.00125){
				position.y+=AC;
				if(world.getTileEntityStringData(position,"name")=="itemPineNeedles"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves0");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemCocoaLeaves"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves1");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemWillowTwig"){
					world.setBlockMetadata(position,1);
					world.setTileEntityStringData(position,"name","itemDriedLeaves2");
				}
			}
		}
	}		
	else if(blocksize==2){
		if(AC<=10){
			if(Math.random()<=(0.0007+0.000055*AC)){
				position.y+=AC;
				world.setBlockMetadata(position,3);
			}
		}
		else{
			if(Math.random()<=0.00125){
				position.y+=AC;
				world.setBlockMetadata(position,3);
			}
		}
	}		
	else if(blocksize==3){
		if(AC<=10){
			if(Math.random()<=(0.0008+0.000045*AC)){
				position.y+=AC;
				if(world.getTileEntityStringData(position,"name")=="itemBark0"){
					world.setBlockMetadata(position,5);
					world.setTileEntityStringData(position,"name","itemDriedBark0");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemBark1"){
					world.setBlockMetadata(position,5);
					world.setTileEntityStringData(position,"name","itemDriedBark1");
				}
			}
		}
		else{
			if(Math.random()<=0.00125){
				position.y+=AC;
				if(world.getTileEntityStringData(position,"name")=="itemBark0"){
					world.setBlockMetadata(position,5);
					world.setTileEntityStringData(position,"name","itemDriedBark0");
				}
				else if(world.getTileEntityStringData(position,"name")=="itemBark1"){
					world.setBlockMetadata(position,5);
					world.setTileEntityStringData(position,"name","itemDriedBark1");
				}
			}
		}
	}		
	else if(blocksize==4){
		if(AC<=10){
			if(Math.random()<=(0.0015+0.00005*AC)){
				position.y+=AC;
				world.setBlock(position,"Forestry:soil");
			}
		}
		else{
			if(Math.random()<=0.002){
				position.y+=AC;
				world.setBlock(position,"Forestry:soil");
			}
		}
	}
}


