var m=Math.random();
var L=Math.random();
var c=world.getBlockMetadata(position);

//作为升级：自动种植范围树苗
position.y++;
var A=[];
A=world.enumEntities(position,1.0,"item");
for(var i=0;i<A.length;i++){
	if(world.getBlockName(position)=="minecraft:air"){
		if(mod.isItemInOreDictClass(A[i].asItem().getItemName(),A[i].asItem().getItemDamageValue(),'WoodenNurtureBenchPlant')){
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
		if(L<0.03){
			mod.loadScript("VariationWorking0.js");
		}
	}
	else if(world.getBlockName(position)=="jinshucraft:Shoot"){
        if(L<0.025){
		    if(world.getBlockMetadata(position)==0){
				if(m<0.45){
					world.setBlockAndMetadata(position,"minecraft:sapling",0);
				}
				else{
					world.setBlock(position,"minecraft:deadbush");
				}
			}
		    else if(world.getBlockMetadata(position)==1){
				if(m<0.25){
					world.setBlockAndMetadata(position,"jinshucraft:PineTree",0);
				}
				else{
					world.setBlock(position,"minecraft:deadbush");
				}
			}
		    else if(world.getBlockMetadata(position)==2){
				if(m<0.3){
					world.setBlockAndMetadata(position,"jinshucraft:CocoaTree",0);
				}
				else{
				  world.setBlock(position,"minecraft:deadbush");
				}
			}
		}
	}
	if(L<0.005){
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"WoodenNurtureBenchPlant")){
			position.y--;
			if(m<0.333){
				world.setBlockAndMetadata(position,"jinshucraft:WoodenNurtureBench",1);
			}
			else if(m>=0.333&&m<0.667){
				world.setBlockAndMetadata(position,"jinshucraft:WoodenNurtureBench",2);
			}
			else if(m>=0.667){
				world.setBlockAndMetadata(position,"jinshucraft:WoodenNurtureBench",3);
			}
		}
	}
	break;
	
	case 1://干枯状态
	if(Math.random()<0.005){
		position.y++;
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"WoodenNurtureBenchPlant")){
			world.setBlock(position,"minecraft:deadbush");
			position.y--;
			world.setBlock(position,"jinshucraft:WoodenWorkingTable");
			position.y++;
			var counts=Math.round(m*4);
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
	else if(Math.ramdom()<0.02){
		position.y++;
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"WoodenNurtureBenchPlant")){
			world.setBlock(position,"minecraft:deadbush");
		}
	};
	break;
	
	case 2://杂草状态
	if(Math.ramdom()<0.015){
		position.y++;
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"WoodenNurtureBenchPlant")){
			if(L<0.2){
				world.setBlock("minecraft:air");
				world.spawnItem(position,"IC2:itemWeed",1,0);
				position.y--;
				world.setBlock(position,"jinshucraft:WoodenNurtureBench");
			}
			else if(L>=0.2&&L<0.4){
				world.setBlockAndMetadata(position,"minecraft:tallgrass",1);
				position.y--;
				world.setBlock(position,"jinshucraft:WoodenNurtureBench");
			}
			else if(L>=0.4&&L<0.6){
				world.setBlockAndMetadata(position,"minecraft:tallgrass",2);
				position.y--;
				world.setBlock(position,"jinshucraft:WoodenNurtureBench");
			}
			else if(L>=0.6&&L<0.8){
				world.setBlockAndMetadata(position,"minecraft:double_plant",2);
				position.y--;
				world.setBlock(position,"jinshucraft:WoodenNurtureBench");
			}
			else if(L>=0.8){
				world.setBlockAndMetadata(position,"minecraft:double_plant",3);
				position.y--;
				world.setBlock(position,"jinshucraft:WoodenNurtureBench");
			}
		}
	}
	break;
	
	case 3://结块状态
	if(Math.ramdom()<0.01){
		position.y++;
		if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"WoodenNurtureBenchPlant")){
			position.y--;
			world.setBlock(position,"jinshucraft:WoodenWorkingTable");
			position.y++;
			var counts=Math.round(m*6);
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
				world.spawnItem(position,"itemGravel_Dust",counts,5);
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
	
	default:
	break;
}

