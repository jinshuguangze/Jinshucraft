var n=world.getBlockName(position);
var m=world.getBlockMetadata(position);
if(n=="jinshucraft:LeavesTankFixed"&&m>0&&Math.random()<0.000085*m+0.0008){
	world.setBlockMetadata(position,m-1);
	m--;
}
position.y--;
if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"AllLeavesTank")){
	var k=world.getBlockMetadata(position);
	if(k<15&&m>0){
		world.setBlockMetadata(position,k+1);
		position.y++;
		world.setBlockMetadata(position,m-1);
		}
	}