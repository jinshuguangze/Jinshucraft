var xz=0;
var xf=0;
var zz=0;
var zf=0;
var i;
for(i=0;i<2;i++)
   {position.x++;
    if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){xz=1;}
    position.x-=2;
    if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){xf=1;}
    position.x++;
    position.z++;
    if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){zz=1;}
    position.z-=2;
    if(world.getBlockName(position)=="jinshucraft:WoodenSieveFrame"){zf=1;}
    position.z++;
    if(xz==1&&zz==1){position.x++;position.z++;if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"SieveNet")){world.harvestBlock(position);break;}}
    if(xz==1&&zf==1){position.x++;position.z--;if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"SieveNet")){world.harvestBlock(position);break;}}
    if(xf==1&&zz==1){position.x--;position.z++;if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"SieveNet")){world.harvestBlock(position);break;}}
    if(xf==1&&zf==1){position.x--;position.z--;if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"SieveNet")){world.harvestBlock(position);break;}}
    position.y++;}