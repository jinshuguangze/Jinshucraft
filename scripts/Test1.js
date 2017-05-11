player.swingItem();
var GrowTest=1;
if(world.getBlockName(position)=="jinshucraft:Shoot"){
	mod.loadScript("ShootGrow.js");
}
else{
	player.sendMessage("\u8fd9\u4e0d\u662f\u4e00\u4e2a\u679d\u82bd\u0021");
}