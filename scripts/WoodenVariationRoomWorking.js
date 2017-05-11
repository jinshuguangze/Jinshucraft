var aa;
var bb;
var cc;
var dd;
var ee;
position.y++;
for(aa=0;aa<255;aa++)
   {if (world.getBlockName(position)!="minecraft:air")
       {break;}
    position.y++;}
position.y-=(aa+1);
if (world.getContainerSlotItemName(position,1)!= "jinshucraft:itemFuel"&&world.getContainerSlotItemName(position,1)!= null)
   {bb=world.getContainerSlotItemName(position,1);
    cc=world.getContainerSlotStackSize(position,1);
    dd=world.getContainerSlotMetadata(position,1);
    world.spawnItem(position,bb,cc,dd);
    world.removeFromContainerSlot(position,1,64);}
if(aa<255)
  {world.setBlockMetadata(position,0);}
else
  {if(world.getBlockMetadata(position)==0)
     {world.setBlockMetadata(position,1);}
   position.x--;
   position.z--;
   if(world.getBlockName(position)=="minecraft:log")
     {position.x+=2;
      if(world.getBlockName(position)=="minecraft:log")
	    {position.z+=2;
	     if(world.getBlockName(position)=="minecraft:log")
		   {position.x-=2;
	        if(world.getBlockName(position)=="minecraft:log")
			  {position.y++;
		       if(world.getBlockName(position)=="jinshucraft:WoodenVariationRoom")
			     {position.z--;
			      if(world.getBlockName(position)=="minecraft:log"&&world.getBlockMetadata(position)==8)
				    {position.z--;
				     if(world.getBlockName(position)=="jinshucraft:WoodenVariationRoom")
					   {position.x++;
				        if(world.getBlockName(position)=="minecraft:log"&&world.getBlockMetadata(position)==4)
						  {position.x++;
					       if(world.getBlockName(position)=="jinshucraft:WoodenVariationRoom")
						     {position.z++;
						      if(world.getBlockName(position)=="minecraft:log"&&world.getBlockMetadata(position)==8)
							    {position.z++;
							     if(world.getBlockName(position)=="jinshucraft:WoodenVariationRoom")
								   {position.x--;
							        if(world.getBlockName(position)=="minecraft:log"&&world.getBlockMetadata(position)==4)
                                      {position.z--;
                                       position.y--;
                                       world.setContainerSlot(position,1,"jinshucraft:itemFuel",1,0);}}}}}}}}}}}}}
