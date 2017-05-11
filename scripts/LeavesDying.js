var xxx=position.x;
var yyy=position.y;
var zzz=position.z;
var xz=0,xf=0,yz=0,yf=0,zz=0,zf=0;
var woodNeighbor=0;
if(mod.isItemInOreDictClass(world.getBlockName(xxx+1,yyy,zzz),world.getBlockMetadata(xxx+1,yyy,zzz),"treeLeaves")){
	xz=1;
}
if(mod.isItemInOreDictClass(world.getBlockName(xxx-1,yyy,zzz),world.getBlockMetadata(xxx-1,yyy,zzz),"treeLeaves")){
	xf=1;
}
if(mod.isItemInOreDictClass(world.getBlockName(xxx,yyy+1,zzz),world.getBlockMetadata(xxx,yyy+1,zzz),"treeLeaves")){
	yz=1;
}
if(mod.isItemInOreDictClass(world.getBlockName(xxx,yyy-1,zzz),world.getBlockMetadata(xxx,yyy-1,zzz),"treeLeaves")){
	yf=1;
}
if(mod.isItemInOreDictClass(world.getBlockName(xxx,yyy,zzz+1),world.getBlockMetadata(xxx,yyy,zzz+1),"treeLeaves")){
	zz=1;
}
if(mod.isItemInOreDictClass(world.getBlockName(xxx,yyy,zzz-1),world.getBlockMetadata(xxx,yyy,zzz-1),"treeLeaves")){
	zf=1;
}
xxx-=2;
yyy-=2;
zzz-=2;
for(var i=0;i<5;i++){
	for(var j=0;j<5;j++){
		for(var k=0;k<5;k++){
			if(mod.isItemInOreDictClass(world.getBlockName(xxx,yyy,zzz),world.getBlockMetadata(xxx,yyy,zzz),"logWood")){
				woodNeighbor=1;
				j=5;
				i=5;
				break;
			}
			xxx++;
		}
		xxx-=5;
		yyy++;
	}
	yyy-=5;
	zzz++;
}
if(xz+xf+yz+yf+zz+zf==0||woodNeighbor==0){
	world.harvestBlock(position);
}