var yyy=position.y;
var A=[];
var DO=1;
position.y++;
A=world.enumEntities(position,0.3,"item");

/*if(A.length>0){
	position.y--;
	if(world.getTileEntityIntData(position,"count")==A.length){
		if(world.getTileEntityIntData(position,"cooling")>0){
			world.setTileEntityIntData(position,"cooling",world.getTileEntityIntData(position,"cooling")-1);
			DO=0;
		}
		else if(world.getTileEntityIntData(position,"cooling")<=0){
			world.setTileEntityIntData(position,"cooling",60);
			world.setTileEntityIntData(position,"count",0);
			DO=1;
		}
		else{
			world.setTileEntityIntData(position,"cooling",60);
			DO=0;
		}
	}
	else{
		world.sendMessageToAllPlayers(A[0].asItem().getPosX());
		world.sendMessageToAllPlayers(A[0].asItem().getPosY());
		world.sendMessageToAllPlayers(A[0].asItem().getPosZ());
		world.setTileEntityIntData(position,"cooling",60);
		world.setTileEntityIntData(position,"count",A.length);
		DO=0;
	}
}
position.y++;*/

if(DO==1){
	for(var i=0;i<A.length;i++){
		if(A[i].asItem().getItemName()=="jinshucraft:itemGravel_Crushed"||A[i].asItem().getItemName()=="jinshucraft:itemGravel_Drossy"||A[i].asItem().getItemName()=="jinshucraft:itemGravel_Dust"||A[i].asItem().getItemName()=="jinshucraft:itemSoil"){
			for(var j=0;j<256;j++){
				position.y--;
				if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"SieveNet")){
					position.y--;
					break;
				}
			}
			A[i].setPosition(position);
			position.y=yyy+1;
		}
		/*×÷ÎªÉý¼¶*/
		else if(mod.isItemInOreDictClass(A[i].asItem().getItemName(),A[i].asItem().getItemDamageValue(),"DecayingBlock12")){
			if(world.getBlockName(position)=="minecraft:air"){
				A[i].setDead();
				world.setBlockAndMetadata(position,A[i].asItem().getItemName(),A[i].asItem().getItemDamageValue());
			}
			else{
				break;
			}
		}
	}
}
position.y=yyy;