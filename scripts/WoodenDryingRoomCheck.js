var AA;
position.y--;
position.x--;
for(AA=0;AA<1;AA++)
   {if(world.getBlockName(position)!= "jinshucraft:PineWood")
      {position.x++;position.y++;mod.loadScript("DryingBlockClick.js");break;}
    position.x+=2;
    if(world.getBlockName(position)!= "jinshucraft:PineWood")
      {position.x--;position.y++;mod.loadScript("DryingBlockClick.js");break;}
    position.x--;
	position.z--;
	if(world.getBlockName(position)!= "jinshucraft:PineWood")
      {position.z++;position.y++;mod.loadScript("DryingBlockClick.js");break;}
    position.z+=2;
	if(world.getBlockName(position)!= "jinshucraft:PineWood")
      {position.z--;position.y++;mod.loadScript("DryingBlockClick.js");break;}
    position.x--;}