var xx=position.x,yy=position.y,zz=position.z;
var DO=0;
switch(side){
	case 2:if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==1){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==2){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==3){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==4){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==5){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz+1)==6){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="Forestry:soil"&&world.getBlockMetadata(xx,yy,zz+1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="Forestry:soil"&&world.getBlockMetadata(xx,yy,zz+1)==1){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz+1)==4){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx,yy,zz+1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz+1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="minecraft:dirt"&&world.getBlockMetadata(xx,yy,zz+1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:driedDirt"&&world.getBlockMetadata(xx,yy,zz+1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:hardDirt"&&world.getBlockMetadata(xx,yy,zz+1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz+1)==2){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:hardSand"&&world.getBlockMetadata(xx,yy,zz+1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="minecraft:sand"&&world.getBlockMetadata(xx,yy,zz+1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz+1)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx,yy,zz+1)==1){DO=1;}
		if(DO==1){position.z++;mod.loadScript("DryingBlockClick.js");position.z--;player.damageItem(player.getCurrentSlot(),1);}
		break;
	case 3:if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==1){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==2){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==3){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==4){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==5){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx,yy,zz-1)==6){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="Forestry:soil"&&world.getBlockMetadata(xx,yy,zz-1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="Forestry:soil"&&world.getBlockMetadata(xx,yy,zz-1)==1){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz-1)==4){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx,yy,zz-1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz-1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="minecraft:dirt"&&world.getBlockMetadata(xx,yy,zz-1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:driedDirt"&&world.getBlockMetadata(xx,yy,zz-1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:hardDirt"&&world.getBlockMetadata(xx,yy,zz-1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx,yy,zz-1)==2){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:hardSand"&&world.getBlockMetadata(xx,yy,zz-1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="minecraft:sand"&&world.getBlockMetadata(xx,yy,zz-1)==0){DO=1;}
		else if(world.getBlockName(xx,yy,zz-1)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx,yy,zz-1)==1){DO=1;}
		if(DO==1){position.z--;mod.loadScript("DryingBlockClick.js");position.z++;player.damageItem(player.getCurrentSlot(),1);}
		break;
	case 4:if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==1){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==2){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==3){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==4){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==5){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx+1,yy,zz)==6){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="Forestry:soil"&&world.getBlockMetadata(xx+1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="Forestry:soil"&&world.getBlockMetadata(xx+1,yy,zz)==1){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx+1,yy,zz)==4){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx+1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx+1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="minecraft:dirt"&&world.getBlockMetadata(xx+1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:driedDirt"&&world.getBlockMetadata(xx+1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:hardDirt"&&world.getBlockMetadata(xx+1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx+1,yy,zz)==2){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:hardSand"&&world.getBlockMetadata(xx+1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="minecraft:sand"&&world.getBlockMetadata(xx+1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx+1,yy,zz)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx+1,yy,zz)==1){DO=1;}
		if(DO==1){position.x++;mod.loadScript("DryingBlockClick.js");position.x--;player.damageItem(player.getCurrentSlot(),1);}
		break;
	case 5:if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==1){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==2){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==3){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==4){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==5){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="jinshucraft:DryingBlock"&&world.getBlockMetadata(xx-1,yy,zz)==6){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="Forestry:soil"&&world.getBlockMetadata(xx-1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="Forestry:soil"&&world.getBlockMetadata(xx-1,yy,zz)==1){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx-1,yy,zz)==4){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx-1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx-1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="minecraft:dirt"&&world.getBlockMetadata(xx-1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:driedDirt"&&world.getBlockMetadata(xx-1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:hardDirt"&&world.getBlockMetadata(xx-1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:newBopDirt"&&world.getBlockMetadata(xx-1,yy,zz)==2){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:hardSand"&&world.getBlockMetadata(xx-1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="minecraft:sand"&&world.getBlockMetadata(xx-1,yy,zz)==0){DO=1;}
		else if(world.getBlockName(xx-1,yy,zz)=="BiomesOPlenty:mud"&&world.getBlockMetadata(xx-1,yy,zz)==1){DO=1;}
		if(DO==1){position.x--;mod.loadScript("DryingBlockClick.js");position.x++;player.damageItem(player.getCurrentSlot(),1);}
		break;
	default:break;
}