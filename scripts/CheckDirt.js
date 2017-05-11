var x,y,z;
x=position.x;
y=position.y;
z=position.z;
if(world.getBlockName(position)=="jinshucraft:PineTree")
  {position.y--;
   if(world.getBlockName(position)=="minecraft:dirt"){if(Math.random()<0.05){position.y++;mod.loadScript("PineGrow.js");}}
   else if(world.getBlockName(position)=="jinshucraft:WoodenNurtureBench"){if(Math.random()<0.08){position.y++;mod.loadScript("PineGrow.js");}}
   else if(world.getBlockName(position)=="jinshucraft:StoneNurtureBench"){if(Math.random()<0.14){position.y++;mod.loadScript("PineGrow.js");}}
   else if(world.getBlockName(position)=="Forestry:soil"&&world.getBlockMetadata(position)==0){if(Math.random()<0.1){position.y++;mod.loadScript("PineGrow.js");}}
   else if(world.getBlockName(position)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(position)==0){if(Math.random()<0.15){position.y++;mod.loadScript("PineGrow.js");}}
   else {if(Math.random()<0.12){position.y++;mod.loadScript("PineGrow.js");}}}
position.x=x;
position.y=y;
position.z=z;
if(world.getBlockName(position)=="jinshucraft:CocoaTree")
  {position.y--;
   if(world.getBlockName(position)=="minecraft:dirt"){if(Math.random()<0.05){position.y++;mod.loadScript("CocoaGrow.js");}}
   else if(world.getBlockName(position)=="jinshucraft:WoodenNurtureBench"){if(Math.random()<0.08){position.y++;mod.loadScript("CocoaGrow.js");}}
   else if(world.getBlockName(position)=="jinshucraft:StoneNurtureBench"){if(Math.random()<0.14){position.y++;mod.loadScript("CocoaGrow.js");}}
   else if(world.getBlockName(position)=="Forestry:soil"&&world.getBlockMetadata(position)==0){if(Math.random()<0.1){position.y++;mod.loadScript("CocoaGrow.js");}}
   else if(world.getBlockName(position)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(position)==0){if(Math.random()<0.15){position.y++;mod.loadScript("CocoaGrow.js");}}
   else {if(Math.random()<0.12){position.y++;mod.loadScript("CocoaGrow.js");}}}