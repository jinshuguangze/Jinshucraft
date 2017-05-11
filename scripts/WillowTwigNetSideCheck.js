var i;
for(i=0;i<1;i++)
   {position.x++;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:WillowTwigSieveNet")
      {position.x--;if(Math.random()<0.15){world.spawnItem(position,"jinshucraft:itemTransformation0",5,0);}else{world.spawnItem(position,"jinshucraft:itemTransformation0",6,0);};world.setBlock(position,"minecraft:air");break;}
    position.x-=2;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:WillowTwigSieveNet")
      {position.x++;if(Math.random()<0.15){world.spawnItem(position,"jinshucraft:itemTransformation0",5,0);}else{world.spawnItem(position,"jinshucraft:itemTransformation0",6,0);};world.setBlock(position,"minecraft:air");break;}
    position.x++;
    position.z++;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:WillowTwigSieveNet")
      {position.z--;if(Math.random()<0.15){world.spawnItem(position,"jinshucraft:itemTransformation0",5,0);}else{world.spawnItem(position,"jinshucraft:itemTransformation0",6,0);};world.setBlock(position,"minecraft:air");break;}
    position.z-=2;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:WillowTwigSieveNet")
      {position.z++;if(Math.random()<0.15){world.spawnItem(position,"jinshucraft:itemTransformation0",5,0);}else{world.spawnItem(position,"jinshucraft:itemTransformation0",6,0);};world.setBlock(position,"minecraft:air");break;}
    position.z++;}