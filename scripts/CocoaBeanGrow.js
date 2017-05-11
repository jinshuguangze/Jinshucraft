position.z--;
if(world.getBlockName(position)=="minecraft:cocoa"&&world.getBlockMetadata(position)==0)
  {world.setBlockAndMetadata(position,"minecraft:cocoa",4);}
else if(world.getBlockName(position)=="minecraft:cocoa"&&world.getBlockMetadata(position)==4)
       {world.setBlockAndMetadata(position,"minecraft:cocoa",8);}
position.z+=2;
if(world.getBlockName(position)=="minecraft:cocoa"&&world.getBlockMetadata(position)==2)
  {world.setBlockAndMetadata(position,"minecraft:cocoa",6);}
else if(world.getBlockName(position)=="minecraft:cocoa"&&world.getBlockMetadata(position)==6)
       {world.setBlockAndMetadata(position,"minecraft:cocoa",10);}
position.z--;
position.x--;
if(world.getBlockName(position)=="minecraft:cocoa"&&world.getBlockMetadata(position)==3)
  {world.setBlockAndMetadata(position,"minecraft:cocoa",7);}
else if(world.getBlockName(position)=="minecraft:cocoa"&&world.getBlockMetadata(position)==7)
       {world.setBlockAndMetadata(position,"minecraft:cocoa",11);}
position.x+=2;
if(world.getBlockName(position)=="minecraft:cocoa"&&world.getBlockMetadata(position)==1)
  {world.setBlockAndMetadata(position,"minecraft:cocoa",5);}
else if(world.getBlockName(position)=="minecraft:cocoa"&&world.getBlockMetadata(position)==5)
       {world.setBlockAndMetadata(position,"minecraft:cocoa",9);}
position.x--;