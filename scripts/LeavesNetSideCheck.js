var i;
for(i=0;i<1;i++)
   {position.x++;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:LeavesSieveNet")
      {position.x--;if(Math.random()<0.2){world.spawnItem(position,"minefantasy2:MF_Com_vine",5,0);}else{world.spawnItem(position,"minefantasy2:MF_Com_vine",6,0);};world.setBlock(position,"minecraft:air");break;}
    position.x-=2;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:LeavesSieveNet")
      {position.x++;if(Math.random()<0.2){world.spawnItem(position,"minefantasy2:MF_Com_vine",5,0);}else{world.spawnItem(position,"minefantasy2:MF_Com_vine",6,0);};world.setBlock(position,"minecraft:air");break;}
    position.x++;
    position.z++;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:LeavesSieveNet")
      {position.z--;if(Math.random()<0.2){world.spawnItem(position,"minefantasy2:MF_Com_vine",5,0);}else{world.spawnItem(position,"minefantasy2:MF_Com_vine",6,0);};world.setBlock(position,"minecraft:air");break;}
    position.z-=2;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:LeavesSieveNet")
      {position.z++;if(Math.random()<0.2){world.spawnItem(position,"minefantasy2:MF_Com_vine",5,0);}else{world.spawnItem(position,"minefantasy2:MF_Com_vine",6,0);};world.setBlock(position,"minecraft:air");break;}
    position.z++;}