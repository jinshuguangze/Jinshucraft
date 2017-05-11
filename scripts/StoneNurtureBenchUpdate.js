var xz=0,xf=0,zz=0,zf=0;
position.x++;
if(world.getBlockName(position)=="jinshucraft:StoneNurtureBench"){
	xz=1;
}
position.x-=2;
if(world.getBlockName(position)=="jinshucraft:StoneNurtureBench"){
	xf=1;
}
position.x++;
position.z++;
if(world.getBlockName(position)=="jinshucraft:StoneNurtureBench"){
	zz=1;
}
position.z-=2;
if(world.getBlockName(position)=="jinshucraft:StoneNurtureBench"){
	zf=1;
}
position.z++;
if(!((xz==1&&zz==1)||(xz==1&&zf==1)||(xf==1&&zz==1)||(xf==1&&zf==1))){
	world.setBlock(position,"minecraft:air");
	world.spawnItem(position,"jinshucraft:StoneWorkingTable",1,8);
	if(Math.random()<0.75){
		world.spawnItem(position,"minecraft:dirt",1,0);
	}
}

var m=Math.random();
var L=Math.random();
var c=world.getBlockMetadata(position);

//作为升级：自动种植范围树苗
position.y++;
var A=[];
A=world.enumEntities(position,1.5,"item");
for(var i=0;i<A.length;i++){
	if(world.getBlockName(position)=="minecraft:air"){
		if(mod.isItemInOreDictClass(A[i].asItem().getItemName(),A[i].asItem().getItemDamageValue(),'StoneNurtureBenchPlant')){
			if(A[i].asItem().getItemName()=="jinshucraft:itemShoot"){
				world.setBlockAndMetadata(position,"jinshucraft:Shoot",A[i].asItem().getItemDamageValue());
			}
			else{
				world.setBlockAndMetadata(position,A[i].asItem().getItemName(),A[i].asItem().getItemDamageValue());
			}
			A[i].setDead();
		}
	}
	else{
		break;
	}
}
position.y--;

switch(c){
	case 0://健康状态
	position.y++;
	if(world.getBlockName(position)=="jinshucraft:VariationSapling"&&world.getBlockMetadata(position)==0){
		if(L<0.035){
			mod.loadScript("VariationWorking0.js");
		}
	}
	else if(world.getBlockName(position)=="jinshucraft:VariationSapling"&&world.getBlockMetadata(position)==1){
		if(L<0.035){
			mod.loadScript("VariationWorking1.js");
		}
	}
	else if(world.getBlockName(position)=="jinshucraft:Shoot"){
        if(L<0.028){
		    if(world.getBlockMetadata(position)==0){
				if(m<0.48){
					world.setBlockAndMetadata(position,"minecraft:sapling",0);
				}
				else{
					world.setBlock(position,"minecraft:deadbush");
				}
			}
		    else if(world.getBlockMetadata(position)==1){
				if(m<0.28){
					world.setBlockAndMetadata(position,"jinshucraft:PineTree",0);
				}
				else{
					world.setBlock(position,"minecraft:deadbush");
				}
			}
		    else if(world.getBlockMetadata(position)==2){
				if(m<0.33){
					world.setBlockAndMetadata(position,"jinshucraft:CocoaTree",0);
				}
				else{
				  world.setBlock(position,"minecraft:deadbush");
				}
			}
			else if(world.getBlockMetadata(position)==3){
				if(m<0.34){
					world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedSaplings",2);
				}
				else{
				  world.setBlock(position,"minecraft:deadbush");
				}
			}
			else if(world.getBlockMetadata(position)==4){
				if(m<0.58){
					world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedSaplings",4);
				}
				else{
				  world.setBlock(position,"minecraft:deadbush");
				}
			}
			else if(world.getBlockMetadata(position)==5){
				if(m<0.3){
					world.setBlockAndMetadata(position,"minefantasy2:ironbark_sapling",0);
				}
				else{
				  world.setBlock(position,"minecraft:deadbush");
				}
			}
		}
	}
	if(L<0.0075){
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"StoneNurtureBenchPlant")){
			position.y--;
			if(m<0.25){
				world.setBlockAndMetadata(position,"jinshucraft:StoneNurtureBench",1);
			}
			else if(m>=0.25&&m<0.5){
				world.setBlockAndMetadata(position,"jinshucraft:StoneNurtureBench",2);
			}
			else if(m>=0.5&&m<0.75){
				world.setBlockAndMetadata(position,"jinshucraft:StoneNurtureBench",3);
			}
			else if(m>=0.75){
				world.setBlockAndMetadata(position,"jinshucraft:StoneNurtureBench",4);
			}
		}
	}
	break;
	
	case 1://干枯状态
	if(Math.random()<0.006){
		position.y++;
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"StoneNurtureBenchPlant")){
			world.setBlock(position,"minecraft:deadbush");
			position.y--;
			world.setBlockAndMetadata(position,"jinshucraft:StoneWorkingTable",8);
			position.y++;
			var counts=Math.round(m*5);
			if(L<0.25){
				world.spawnItem(position,"jinshucraft:itemGravel_Normal",counts,7);
			}
			else if(L>=0.25&&L<0.5){
				world.spawnItem(position,"jinshucraft:itemGravel_Small",counts,7);
			}
			else if(L>=0.5&&L<0.75){
				world.spawnItem(position,"jinshucraft:itemGravel_Crushed",counts,7);
			}
			else if(L>=0.75){
				world.spawnItem(position,"jinshucraft:itemGravel_Drossy",counts,7);
			}
		}
	}
	else if(Math.ramdom()<0.025){
		position.y++;
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"StoneNurtureBenchPlant")){
			world.setBlock(position,"minecraft:deadbush");
		}
	};
	break;
	
	case 2://杂草状态
	if(Math.ramdom()<0.018){
		position.y++;
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"StoneNurtureBenchPlant")){
			if(L<0.2){
				world.setBlock("minecraft:air");
				world.spawnItem(position,"IC2:itemWeed",1,0);
				position.y--;
				world.setBlock(position,"jinshucraft:StoneNurtureBench");
			}
			else if(L>=0.2&&L<0.4){
				world.setBlockAndMetadata(position,"minecraft:tallgrass",1);
				position.y--;
				world.setBlock(position,"jinshucraft:StoneNurtureBench");
			}
			else if(L>=0.4&&L<0.6){
				world.setBlockAndMetadata(position,"minecraft:tallgrass",2);
				position.y--;
				world.setBlock(position,"jinshucraft:StoneNurtureBench");
			}
			else if(L>=0.6&&L<0.8){
				world.setBlockAndMetadata(position,"minecraft:double_plant",2);
				position.y--;
				world.setBlock(position,"jinshucraft:StoneNurtureBench");
			}
			else if(L>=0.8){
				world.setBlockAndMetadata(position,"minecraft:double_plant",3);
				position.y--;
				world.setBlock(position,"jinshucraft:StoneNurtureBench");
			}
		}
	}
	break;
	
	case 3://结块状态
	if(Math.ramdom()<0.012){
		position.y++;
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"StoneNurtureBenchPlant")){
			position.y--;
			world.setBlockAndMetadata(position,"jinshucraft:StoneWorkingTable",8);
			position.y++;
			var counts=Math.round(m*7);
			if(L<0.083){
				world.spawnItem(position,"jinshucraft:itemSoil",counts,5);
			}
			else if(L>=0.083&&L<0.167){
				world.spawnItem(position,"jinshucraft:itemSoil",counts,6);
			}
			else if(L>=0.167&&L<0.25){
				world.spawnItem(position,"jinshucraft:itemSoil",counts,7);
			}
			else if(L>=0.25&&L<0.333){
				world.spawnItem(position,"jinshucraft:itemGravel_Dust",counts,5);
			}
			else if(L>=0.333&&L<0.417){
				world.spawnItem(position,"jinshucraft:itemGravel_Dust",counts,6);
			}
			else if(L>=0.417&&L<0.5){
				world.spawnItem(position,"jinshucraft:itemGravel_Dust",counts,7);
			}
			else if(L>=0.5&&L<0.583){
				world.spawnItem(position,"jinshucraft:itemGravel_Drossy",counts,5);
			}
			else if(L>=0.583&&L<0.667){
				world.spawnItem(position,"jinshucraft:itemGravel_Drossy",counts,6);
			}
			else if(L>=0.667&&L<0.75){
				world.spawnItem(position,"jinshucraft:itemGravel_Drossy",counts,7);
			}
			else if(L>=0.75&&L<0.833){
				world.spawnItem(position,"jinshucraft:itemGravel_Crushed",counts,5);
			}
			else if(L>=0.833&&L<0.917){
				world.spawnItem(position,"jinshucraft:itemGravel_Crushed",counts,6);
			}
			else if(L>=0.917){
				world.spawnItem(position,"jinshucraft:itemGravel_Crushed",counts,7);
			}
		}
	}
	break;
	
	case 4://缺肥状态
	if(Math.random()<0.015){
		position.y++;
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"StoneNurtureBenchPlant")){
			world.spawnItem(position,"minecraft:deadbush",1,0);
			position.y--;
			world.setBlockAndMetadata(position,"jinshucraft:StoneWorkingTable",8);
			position.y++;
			var counts=Math.round(m*8);
			if(L<0.083){
				world.spawnItem(position,"jinshucraft:itemSoil",counts,7);
			}
			else if(L>=0.083&&L<0.167){
				world.spawnItem(position,"jinshucraft:itemSoil",counts,8);
			}
			else if(L>=0.167&&L<0.25){
				world.spawnItem(position,"jinshucraft:itemSoil",counts,9);
			}
			else if(L>=0.25&&L<0.333){
				world.spawnItem(position,"jinshucraft:itemGravel_Dust",counts,7);
			}
			else if(L>=0.333&&L<0.417){
				world.spawnItem(position,"jinshucraft:itemGravel_Dust",counts,8);
			}
			else if(L>=0.417&&L<0.5){
				world.spawnItem(position,"jinshucraft:itemGravel_Dust",counts,9);
			}
			else if(L>=0.5&&L<0.583){
				world.spawnItem(position,"jinshucraft:itemGravel_Drossy",counts,7);
			}
			else if(L>=0.583&&L<0.667){
				world.spawnItem(position,"jinshucraft:itemGravel_Drossy",counts,8);
			}
			else if(L>=0.667&&L<0.75){
				world.spawnItem(position,"jinshucraft:itemGravel_Drossy",counts,9);
			}
			else if(L>=0.75&&L<0.833){
				world.spawnItem(position,"jinshucraft:itemGravel_Crushed",counts,7);
			}
			else if(L>=0.833&&L<0.917){
				world.spawnItem(position,"jinshucraft:itemGravel_Crushed",counts,8);
			}
			else if(L>=0.917){
				world.spawnItem(position,"jinshucraft:itemGravel_Crushed",counts,9);
			}
		}	
	}
	break;
	
	default:
	break;
}
