var xz=0;
var xf=0;
var zz=0;
var zf=0;
var k=0;
var i;
position.x++;
for(i=0;i<1;i++)
   {if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:WillowTwigSieveNet")
      {k=1;position.x--;if(Math.random()<0.15){world.spawnItem(position,"jinshucraft:itemTransformation0",5,0);}else{world.spawnItem(position,"jinshucraft:itemTransformation0",6,0);};world.setBlock(position,"minecraft:air");break;}
    else if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){xz=1;}
    position.x-=2;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:WillowTwigSieveNet")
      {k=1;position.x++;if(Math.random()<0.15){world.spawnItem(position,"jinshucraft:itemTransformation0",5,0);}else{world.spawnItem(position,"jinshucraft:itemTransformation0",6,0);};world.setBlock(position,"minecraft:air");break;}
    else if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){xf=1;}
    position.x++;
    position.z++;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:WillowTwigSieveNet")
      {k=1;position.z--;if(Math.random()<0.15){world.spawnItem(position,"jinshucraft:itemTransformation0",5,0);}else{world.spawnItem(position,"jinshucraft:itemTransformation0",6,0);};world.setBlock(position,"minecraft:air");break;}
    else if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){zz=1;}
    position.z-=2;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:WillowTwigSieveNet")
      {k=1;position.z++;if(Math.random()<0.15){world.spawnItem(position,"jinshucraft:itemTransformation0",5,0);}else{world.spawnItem(position,"jinshucraft:itemTransformation0",6,0);};world.setBlock(position,"minecraft:air");break;}
    else if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){zf=1;}
    position.z++;}
if(xz==0&&xf==1&&zz==0&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",1);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==0&&zz==0&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",2);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==0&&zz==0&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",3);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==0&&zz==1&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",4);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==1&&zz==0&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",5);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==1&&zz==0&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",6);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==1&&zz==1&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",7);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==0&&zz==0&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",8);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==0&&zz==1&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",9);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==0&&zz==1&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",10);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==1&&zz==0&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",11);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==1&&zz==1&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",12);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==1&&zz==1&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",13);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==0&&zz==1&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",14);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==1&&zz==1&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:WillowTwigSieveNet",15);world.setTileEntityStringData(position,"Sparsity","80");world.setTileEntityStringData(position,"Durability","800");world.setTileEntityStringData(position,"Times","0");}