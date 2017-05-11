var xz=0;
var xf=0;
var zz=0;
var zf=0;
var k=0;
var i;
position.x++;
for(i=0;i<1;i++)
   {if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:LeavesSieveNet")
      {k=1;position.x--;if(Math.random()<0.2){world.spawnItem(position,"minefantasy2:MF_Com_vine",5,0);}else{world.spawnItem(position,"minefantasy2:MF_Com_vine",6,0);};world.setBlock(position,"minecraft:air");break;}
    else if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){xz=1;}
    position.x-=2;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:LeavesSieveNet")
      {k=1;position.x++;if(Math.random()<0.2){world.spawnItem(position,"minefantasy2:MF_Com_vine",5,0);}else{world.spawnItem(position,"minefantasy2:MF_Com_vine",6,0);};world.setBlock(position,"minecraft:air");break;}
    else if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){xf=1;}
    position.x++;
    position.z++;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:LeavesSieveNet")
      {k=1;position.z--;if(Math.random()<0.2){world.spawnItem(position,"minefantasy2:MF_Com_vine",5,0);}else{world.spawnItem(position,"minefantasy2:MF_Com_vine",6,0);};world.setBlock(position,"minecraft:air");break;}
    else if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){zz=1;}
    position.z-=2;
    if(world.getBlockName(position)!="jinshucraft:WoodenSieveFrame"&&world.getBlockName(position)!="jinshucraft:LeavesSieveNet")
      {k=1;position.z++;if(Math.random()<0.2){world.spawnItem(position,"minefantasy2:MF_Com_vine",5,0);}else{world.spawnItem(position,"minefantasy2:MF_Com_vine",6,0);};world.setBlock(position,"minecraft:air");break;}
    else if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){zf=1;}
    position.z++;}
if(xz==0&&xf==1&&zz==0&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",1);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==0&&zz==0&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",2);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==0&&zz==0&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",3);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==0&&zz==1&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",4);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==1&&zz==0&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",5);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==1&&zz==0&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",6);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==1&&zz==1&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",7);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==0&&zz==0&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",8);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==0&&zz==1&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",9);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==0&&zz==1&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",10);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==1&&zz==0&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",11);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==1&&zz==1&&zf==0&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",12);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==0&&xf==1&&zz==1&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",13);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==0&&zz==1&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",14);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}
else if(xz==1&&xf==1&&zz==1&&zf==1&&k==0){world.setBlockAndMetadata(position,"jinshucraft:LeavesSieveNet",15);world.setTileEntityStringData(position,"Sparsity","100");world.setTileEntityStringData(position,"Durability","1000");world.setTileEntityStringData(position,"Times","0");}