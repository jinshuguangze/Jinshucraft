var N=world.getTileEntityStringData(position,"name");
if(N=="itemPineNeedles"){
	world.spawnItem(position,"jinshucraft:itemPineNeedles",6,0);
}
else if(N=="itemCocoaLeaves"){
	world.spawnItem(position,"jinshucraft:itemCocoaLeaves",3,0);
}
else if(N=="itemWillowTwig"){
	world.spawnItem(position,"jinshucraft:itemWillowTwig",4,0);
}
else if(N=="itemDriedLeaves"){
	world.spawnItem(position,"jinshucraft:itemDriedLeaves",4,0);
}
else if(N=="itemDriedLeaves"){
	world.spawnItem(position,"jinshucraft:itemDriedLeaves",2,1);
}
else if(N=="itemDriedLeaves"){
	world.spawnItem(position,"jinshucraft:itemDriedLeaves",3,2);
}

else if(N=="itemWood1"){
	world.spawnItem(position,"jinshucraft:itemWood",3,1);
}
else if(N=="itemWood2"){
	world.spawnItem(position,"jinshucraft:itemWood",4,2);
}
else if(N=="itemWood3"){
	world.spawnItem(position,"jinshucraft:itemWood",3,3);
}
else if(N=="itemWood4"){
	world.spawnItem(position,"jinshucraft:itemWood",3,4);
}
else if(N=="itemWood5"){
	world.spawnItem(position,"jinshucraft:itemWood",3,5);
}
else if(N=="itemWood6"){
	world.spawnItem(position,"jinshucraft:itemWood",3,6);
}

else if(N=="itemBark0"){
	world.spawnItem(position,"jinshucraft:itemBark",3,0);
}
else if(N=="itemBark1"){
	world.spawnItem(position,"jinshucraft:itemBark",3,1);
}
else if(N=="itemDriedBark0"){
	world.spawnItem(position,"jinshucraft:itemDriedBark",2,0);
}
else if(N=="itemDriedBark1"){
	world.spawnItem(position,"jinshucraft:itemDriedBark",2,1);
}

else if(N==null&&world.getBlockMetadata(position)==6){
	world.spawnItem(position,"Forestry:mulch",3,0);
}

world.setBlock(position,"minecraft:air");