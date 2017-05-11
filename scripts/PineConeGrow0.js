position.x--;
if (world.getBlockName(position) == "jinshucraft:PineNeedles")
   {position.x+=2;
    if (world.getBlockName(position) == "jinshucraft:PineNeedles")
	   {position.x--;
        position.z--;
		if (world.getBlockName(position) == "jinshucraft:PineNeedles")
		   {position.z+=2;
	        if (world.getBlockName(position) == "jinshucraft:PineNeedles")
			   {position.z--;
                world.setBlockAndMetadata(position,"jinshucraft:PineCone",0);}}}}
