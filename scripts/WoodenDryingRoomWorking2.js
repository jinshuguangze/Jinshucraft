var i=0;
var m,n,xx,yy,zz;
var k=[];
xx=position.x;
yy=position.y;
zz=position.z;
for(m=0;m<256;m++)
   {position.y++;
	position.x--;
	if(world.getBlockName(position)=="jinshucraft:PineWood")
	  {position.z--;
       if(world.getBlockName(position)=="minecraft:log"&&world.getBlockMetadata(position)==0)
         {position.x++;
		  if(world.getBlockName(position)=="jinshucraft:PineWood")
			{position.x++;
			 if(world.getBlockName(position)=="minecraft:log"&&world.getBlockMetadata(position)==0)
			   {position.z++;
			    if(world.getBlockName(position)=="jinshucraft:PineWood")
			      {position.z++;
		           if(world.getBlockName(position)=="minecraft:log"&&world.getBlockMetadata(position)==0)
			         {position.x--;
			          if(world.getBlockName(position)=="jinshucraft:PineWood")
				        {position.x--;
				         if(world.getBlockName(position)=="minecraft:log"&&world.getBlockMetadata(position)==0)
					       {position.z--;
				            position.x++;
					        i++;}
					 	else{break;}}
				 	 else{break;}}
				   else{break;}}
			    else{break;}}
		     else{break;}}
		  else{break;}}
	   else{break;}}
	else{break;}};
position.x=xx;
position.y=yy+1;
position.z=zz;
for(n=0;n<i;n++)
   {if(world.getBlockName(position)=="Forestry:soil"&&world.getBlockMetadata(position)==0){k[n]=1;}
    if(world.getBlockName(position)=="Forestry:soil"&&world.getBlockMetadata(position)==1){k[n]=2;}
    if(world.getBlockName(position)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(position)==4){k[n]=3;}
	if(world.getBlockName(position)=="BiomesOPlenty:mud"&&world.getBlockMetadata(position)==0){k[n]=4;}
	if(world.getBlockName(position)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(position)==0){k[n]=5;}
	if(world.getBlockName(position)=="minecraft:dirt"&&world.getBlockMetadata(position)==0){k[n]=6;}
	if(world.getBlockName(position)=="BiomesOPlenty:driedDirt"&&world.getBlockMetadata(position)==0){k[n]=7;}
	if(world.getBlockName(position)=="BiomesOPlenty:hardDirt"&&world.getBlockMetadata(position)==0){k[n]=8;}
	if(world.getBlockName(position)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(position)==2){k[n]=9;}
	if(world.getBlockName(position)=="BiomesOPlenty:hardSand"&&world.getBlockMetadata(position)==0){k[n]=10;}
	if(world.getBlockName(position)=="minecraft:sand"&&world.getBlockMetadata(position)==0){k[n]=11;}
	if(world.getBlockName(position)=="BiomesOPlenty:mud"&&world.getBlockMetadata(position)==1){k[n]=12;}
	if(world.getBlockName(position)=="minecraft:air"){k[n]=0;}
	position.y++;}
position.x=xx;
position.y=yy+1;
position.z=zz;
if(Math.random()<0.01){
	for(n=0;n<i;n++){
		switch(k[n]){
		case 1:world.setBlockAndMetadata(position,"Forestry:soil",1);break;
		case 2:world.setBlockAndMetadata(position,"BiomesOPlenty:newBopDirt",4);break;
		case 3:world.setBlockAndMetadata(position,"BiomesOPlenty:mud",0);break;
		case 4:world.setBlockAndMetadata(position,"BiomesOPlenty:newBopDirt",0);break;
		case 5:world.setBlockAndMetadata(position,"minecraft:dirt",0);break;
		case 6:world.setBlockAndMetadata(position,"BiomesOPlenty:driedDirt",0);break;
		case 7:world.setBlockAndMetadata(position,"BiomesOPlenty:hardDirt",0);break;
		case 8:world.setBlockAndMetadata(position,"BiomesOPlenty:newBopDirt",2);break;
		case 9:world.setBlockAndMetadata(position,"BiomesOPlenty:hardSand",0);break;
		case 10:world.setBlockAndMetadata(position,"minecraft:sand",0);break;
		case 11:world.setBlockAndMetadata(position,"BiomesOPlenty:mud",1);break;
		case 12:world.setBlock(position,"minecraft:air");world.spawnItem(position,"jinshucraft:itemSoil",4,11);break;
		case -1:break;}
		position.y++;
	}
	k.sort();
	k.reverse();
	if(k[0]>0){
		world.sendMessageToPlayer(world.getTileEntityStringData(xx,yy,zz,"owner"),world.getTileEntityStringData(xx,yy,zz,"owner")+"\uff0c\u4f60\u4e8e\u0020\u0058\uff1a"+position.x+"\u0020\u0059\uff1a"+position.y+"\u0020\u005a\uff1a"+position.z+"\u0020\u7684\u98ce\u5e72\u5df2\u7ecf\u5b8c\u6210\u5f53\u524d\u9636\u6bb5\u3002");
		/*上条语法作为升级使用*/
	}
}

