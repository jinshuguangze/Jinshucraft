var C=[],i;
var Count=0;

/*if(itemstack.getStringData("state")=="OpenGui"){
	var xx=itemstack.getIntData("x");
	var yy=itemstack.getIntData("y");
	var zz=itemstack.getIntData("z");
	player.openGui("GodPowerGuiBlockGUI",xx,yy,zz);
	itemstack.setStringData("state","normal");
	if(world.getContainerItemCount(xx,yy,zz,"minecraft:stone",0)<1){
		itemstack.setStringData("state","normal");
		world.clearContainer(xx,yy,zz);
		world.setBlock(xx,yy,zz,"minecraft:air");
	}
}*/

mod.loadScript("IngameFileChecker.js")

for(i=0;i<16;i++){
	C[i]=player.getInventory().getItemCount("jinshucraft:itemGodPower",i);
	Count+=C[i];
}
if(Count>=2){
	for(i=0;i<16;i++){
		if(i==0){
			player.getInventory().remove("jinshucraft:itemGodPower",C[0]-1,0);
		}
		else{
			player.getInventory().remove("jinshucraft:itemGodPower",C[i]-1,i);
		}
	}
}

for(i=0;i<40;i++){
	if(i==8){
		continue;
	}
	if(player.getInventory().getItemName(i)=="jinshucraft:itemGodPower"){
		player.getInventory().clearSlot(i);
		var N=player.getInventory().getItemName(8);
		var S=player.getInventory().getStackSize(8);
		var M=player.getInventory().getDamage(8);
		player.getInventory().clearSlot(8);
		player.getInventory().setSlot(8,"jinshucraft:itemGodPower",1,0);
		if(N!=null){
			player.getInventory().setSlot(i,N,S,M);
		}
	}
}

mod.loadScript("IngameRenderer.js");



