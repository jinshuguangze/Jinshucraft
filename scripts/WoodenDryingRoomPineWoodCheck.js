var AA;
var BB;
var CC;
for(CC=0;CC<1;CC++)
{position.x--;
if(world.getBlockName(position)=="jinshucraft:DryingBlock")
  {AA=1;BB=1;break;}/*西方*/
position.x+=2;
if(world.getBlockName(position)=="jinshucraft:DryingBlock")
  {AA=1;BB=2;break;}/*东方*/
position.x--;
position.z--;
if(world.getBlockName(position)=="jinshucraft:DryingBlock")
  {AA=1;BB=3;break;}/*北方*/
position.z+=2;
if(world.getBlockName(position)=="jinshucraft:DryingBlock")
  {AA=1;BB=4;break;}/*南方*/
position.y++;
if(world.getBlockName(position)=="jinshucraft:DryingBlock")
  {AA=1;BB=5;break;}/*上南方*/
position.z-=2;
if(world.getBlockName(position)=="jinshucraft:DryingBlock")
  {AA=1;BB=6;break;}/*上北方*/
position.z++;
position.x--;
if(world.getBlockName(position)=="jinshucraft:DryingBlock")
  {AA=1;BB=7;break;}/*上西方*/
position.x+=2;
if(world.getBlockName(position)=="jinshucraft:DryingBlock")
  {AA=1;BB=8;break;}/*上东方*/
}
if(AA==1)
  {switch(BB)
  {case 1:
   position.x++;
   position.z--;
   if(world.getBlockName(position)!= "minecraft:log"||world.getBlockMetadata(position)!=0)
     {position.x--;
	  position.z++;
      mod.loadScript("DryingBlockClick.js");}
   break;
   
   case 2:
   position.x--;
   position.z++;
   if(world.getBlockName(position)!= "minecraft:log"||world.getBlockMetadata(position)!=0)
     {position.x++;
	  position.z--;
      mod.loadScript("DryingBlockClick.js");}
   break;
   
   case 3:
   position.x++;
   position.z++;
   if(world.getBlockName(position)!= "minecraft:log"||world.getBlockMetadata(position)!=0)
     {position.x--;
	  position.z--;
      mod.loadScript("DryingBlockClick.js");}
   break;
   
   case 4:
   position.x--;
   position.z--;
   if(world.getBlockName(position)!= "minecraft:log"||world.getBlockMetadata(position)!=0)
     {position.x++;
	  position.z++;
      mod.loadScript("DryingBlockClick.js");}
   break;
   
   case 5:
   position.x--;
   position.y--;
   position.z--;
   if(world.getBlockName(position)!= "minecraft:log"||world.getBlockMetadata(position)!=0)
     {position.x++;
      position.y++;
	  position.z++;
      mod.loadScript("DryingBlockClick.js");}
   break;
   
   case 6:
   position.x++;
   position.y--;
   position.z++;
   if(world.getBlockName(position)!= "minecraft:log"||world.getBlockMetadata(position)!=0)
     {position.x--;
      position.y++;
	  position.z--;
      mod.loadScript("DryingBlockClick.js");}
   break;
   
   case 7:
   position.x++;
   position.y--;
   position.z--;
   if(world.getBlockName(position)!= "minecraft:log"||world.getBlockMetadata(position)!=0)
     {position.x--;
      position.y++;
	  position.z++;
      mod.loadScript("DryingBlockClick.js");}
   break;
   
   case 8:
   position.x--;
   position.y--;
   position.z++;
   if(world.getBlockName(position)!= "minecraft:log"||world.getBlockMetadata(position)!=0)
     {position.x++;
      position.y++;
	  position.z--;
      mod.loadScript("DryingBlockClick.js");}
   break;}}   