/*��������*/
var aa;
var bb;
var xxx=position.x;
var yyy=position.y;
var zzz=position.z;
/*���������������*/
position.y++;
for(aa=0;aa<4;aa++)
   {if (world.getBlockName(position)!="minecraft:air")
       {break;}
    position.y++;}
if (aa>=4)
   {position.y-=5;
/*��һ�㵽�����ԭľ*/
    for(aa=0;aa<5;aa++)
	   {world.setBlock(position,"jinshucraft:PineWood");
        position.y++;}
	position.y-=3;
    position.x-=3;
	position.z-=2;
/*��������Ҷ*/
	for(aa=0;aa<5;aa++)
	   {if (world.getBlockName(position)=="minecraft:air")
		   {world.setBlock(position,"jinshucraft:PineNeedles");}
        position.z++;}
	position.z--;
	position.x+=6;
    for(aa=0;aa<5;aa++)
	   {if (world.getBlockName(position)=="minecraft:air")
           {world.setBlock(position,"jinshucraft:PineNeedles");}
        position.z--;}
	position.x--;
	for(bb=0;bb<5;bb++)
       {for(aa=0;aa<7;aa++)
	       {if (world.getBlockName(position)=="minecraft:air")
		       {world.setBlock(position,"jinshucraft:PineNeedles");}
	        position.z++;}
        position.x--;
		position.z-=7;}
	position.y++;
	position.x+=3;
	position.z+=6;
/*���Ĳ���Ҷ*/
	if (world.getBlockName(position)=="minecraft:air")
       {world.setBlock(position,"jinshucraft:PineNeedles");}
	position.x++;
	if (world.getBlockName(position)=="minecraft:air")
       {world.setBlock(position,"jinshucraft:PineNeedles");}
   	position.x+=2;
	position.z-=2;
	if (world.getBlockName(position)=="minecraft:air")
       {world.setBlock(position,"jinshucraft:PineNeedles");}
	position.z--;
	if (world.getBlockName(position)=="minecraft:air")
       {world.setBlock(position,"jinshucraft:PineNeedles");}
	position.x-=3;
	position.z-=3;
	if (world.getBlockName(position)=="minecraft:air")
       {world.setBlock(position,"jinshucraft:PineNeedles");}
	position.x--;
	if (world.getBlockName(position)=="minecraft:air")
       {world.setBlock(position,"jinshucraft:PineNeedles");}
	position.x-=2;
	position.z+=2;
	if (world.getBlockName(position)=="minecraft:air")
       {world.setBlock(position,"jinshucraft:PineNeedles");}
	position.z++;
	if (world.getBlockName(position)=="minecraft:air")
       {world.setBlock(position,"jinshucraft:PineNeedles");}
   	position.x++;
	position.z-=2;
    for(bb=0;bb<5;bb++)
       {for(aa=0;aa<5;aa++)
	       {if (world.getBlockName(position)=="minecraft:air")
		       {world.setBlock(position,"jinshucraft:PineNeedles");}
	        position.z++;}
        position.x++;
		position.z-=5;}
	position.y++;
	position.x-=5;
/*�������Ҷ*/
	for(aa=0;aa<4;aa++)
	   {if (world.getBlockName(position)=="minecraft:air")
		   {world.setBlock(position,"jinshucraft:PineNeedles");}
	   position.x++;}
	position.z+=4;
	for(aa=0;aa<4;aa++)
	   {if (world.getBlockName(position)=="minecraft:air")
		   {world.setBlock(position,"jinshucraft:PineNeedles");}
	   position.x--;}
	position.z--;
	for(bb=0;bb<5;bb++)
       {for(aa=0;aa<3;aa++)
	       {if (world.getBlockName(position)=="minecraft:air")
		       {world.setBlock(position,"jinshucraft:PineNeedles");}
	        position.z--;}
        position.x++;
		position.z+=3;}
	position.y++;
	position.x-=3;
	position.z--;
/*��������������������*/
	if (world.getBlockName(position)=="minecraft:air")
       {world.setBlock(position,"jinshucraft:PineWood");
		position.z-=2;
/*��������Ҷ*/
		if (world.getBlockName(position)=="minecraft:air")
           {world.setBlock(position,"jinshucraft:PineNeedles");}
		position.x--;
		if (world.getBlockName(position)=="minecraft:air")
           {world.setBlock(position,"jinshucraft:PineNeedles");}
		position.x--;
		position.z+=2;
	    if (world.getBlockName(position)=="minecraft:air")
           {world.setBlock(position,"jinshucraft:PineNeedles");}
		position.z++;
		if (world.getBlockName(position)=="minecraft:air")
		   {world.setBlock(position,"jinshucraft:PineNeedles");}
		position.x+=2;
		position.z++;
		if (world.getBlockName(position)=="minecraft:air")
           {world.setBlock(position,"jinshucraft:PineNeedles");}
		position.x++;
		if (world.getBlockName(position)=="minecraft:air")
           {world.setBlock(position,"jinshucraft:PineNeedles");}
		position.x++;
		position.z-=2;
		if (world.getBlockName(position)=="minecraft:air")
           {world.setBlock(position,"jinshucraft:PineNeedles");}
		position.z--;
		if (world.getBlockName(position)=="minecraft:air")
		   {world.setBlock(position,"jinshucraft:PineNeedles");}
		position.x--;
		for(bb=0;bb<3;bb++)
		   {for(aa=0;aa<3;aa++)
	           {if (world.getBlockName(position)=="minecraft:air")
		           {world.setBlock(position,"jinshucraft:PineNeedles");}
	            position.z++;}
			position.x--;
			position.z-=3;}
		position.y++;
		position.x+=2;
		position.z++;
/*���߲���������������*/
		if (world.getBlockName(position)=="minecraft:air")
           {world.setBlock(position,"jinshucraft:PineWood");/**/
			position.x++;
			position.z++;
/*���߲���Ҷ*/
			for(bb=0;bb<3;bb++)
		       {for(aa=0;aa<3;aa++)
				   {if (world.getBlockName(position)=="minecraft:air")
					   {world.setBlock(position,"jinshucraft:PineNeedles");}
						position.z--;}
				position.x--;
				position.z+=3;}
			position.y++;
			position.x+=2;
			position.z--;
/*�ڰ˲���������������*/
			if (world.getBlockName(position)=="minecraft:air")
               {world.setBlock(position,"jinshucraft:PineWood");/**/
				position.x++;
/*�ڰ˲���Ҷ*/
				if (world.getBlockName(position)=="minecraft:air")
	               {world.setBlock(position,"jinshucraft:PineNeedles");}
				position.x-=2;
				if (world.getBlockName(position)=="minecraft:air")
                   {world.setBlock(position,"jinshucraft:PineNeedles");}
				position.x++;
				position.z++;
	            if (world.getBlockName(position)=="minecraft:air")
	               {world.setBlock(position,"jinshucraft:PineNeedles");}
				position.z-=2;
				if (world.getBlockName(position)=="minecraft:air")
				   {world.setBlock(position,"jinshucraft:PineNeedles");}
				position.y++;
				position.z++;
/*�ھŲ���Ҷ*/
				if (world.getBlockName(position)=="minecraft:air")
                   {world.setBlock(position,"jinshucraft:PineNeedles");
					position.y++;
/*��ʮ����Ҷ*/
					if (world.getBlockName(position)=="minecraft:air")
					   {world.setBlock(position,"jinshucraft:PineNeedles");}}}}}}
position.x=xxx;
position.y=yyy;
position.z=zzz;