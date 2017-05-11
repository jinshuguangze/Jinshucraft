var xxx=position.x;
var yyy=position.y;
var zzz=position.z;
var xz=0,xf=0,yz=0,yf=0,zz=0,zf=0;
if(world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:WoodenDecayingRoomWall1_"||world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:WoodenDecayingRoomWall2_"||world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:WoodenDecayingRoomWall3_"||world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:WoodenDecayingRoomWall4_"||world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:WoodenDecayingRoom"||world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:WoodenDecayingRoomOutput"){
	xz=1;
}
if(world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:WoodenDecayingRoomWall1_"||world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:WoodenDecayingRoomWall2_"||world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:WoodenDecayingRoomWall3_"||world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:WoodenDecayingRoomWall4_"||world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:WoodenDecayingRoom"||world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:WoodenDecayingRoomOutput"){
	xf=1;
}
if(world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:WoodenDecayingRoomWall1_"||world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:WoodenDecayingRoomWall2_"||world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:WoodenDecayingRoomWall3_"||world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:WoodenDecayingRoomWall4_"||world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:WoodenDecayingRoom"||world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:WoodenDecayingRoomOutput"){
	yz=1;
}
if(world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:WoodenDecayingRoomWall1_"||world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:WoodenDecayingRoomWall2_"||world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:WoodenDecayingRoomWall3_"||world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:WoodenDecayingRoomWall4_"||world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:WoodenDecayingRoom"||world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:WoodenDecayingRoomOutput"){
	yf=1;
}
if(world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:WoodenDecayingRoomWall1_"||world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:WoodenDecayingRoomWall2_"||world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:WoodenDecayingRoomWall3_"||world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:WoodenDecayingRoomWall4_"||world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:WoodenDecayingRoom"||world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:WoodenDecayingRoomOutput"){
	zz=1;
}
if(world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:WoodenDecayingRoomWall1_"||world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:WoodenDecayingRoomWall2_"||world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:WoodenDecayingRoomWall3_"||world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:WoodenDecayingRoomWall4_"||world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:WoodenDecayingRoom"||world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:WoodenDecayingRoomOutput"){
	zf=1;
}
if(xz==0&&xf==0&&yz==0&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",0);}
else if(xz==1&&xf==0&&yz==0&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",1);}
else if(xz==0&&xf==1&&yz==0&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",2);}
else if(xz==0&&xf==0&&yz==1&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",3);}
else if(xz==0&&xf==0&&yz==0&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",4);}
else if(xz==0&&xf==0&&yz==0&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",5);}
else if(xz==0&&xf==0&&yz==0&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",6);}
else if(xz==1&&xf==1&&yz==0&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",7);}
else if(xz==1&&xf==0&&yz==1&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",8);}
else if(xz==1&&xf==0&&yz==0&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",9);}
else if(xz==1&&xf==0&&yz==0&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",10);}
else if(xz==1&&xf==0&&yz==0&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",11);}
else if(xz==0&&xf==1&&yz==1&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",12);}
else if(xz==0&&xf==1&&yz==0&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",13);}
else if(xz==0&&xf==1&&yz==0&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",14);}
else if(xz==0&&xf==1&&yz==0&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall1_",15);}
else if(xz==0&&xf==0&&yz==1&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",0);}
else if(xz==0&&xf==0&&yz==1&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",1);}
else if(xz==0&&xf==0&&yz==1&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",2);}
else if(xz==0&&xf==0&&yz==0&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",3);}
else if(xz==0&&xf==0&&yz==0&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",4);}
else if(xz==0&&xf==0&&yz==0&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",5);}
else if(xz==1&&xf==1&&yz==1&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",6);}
else if(xz==1&&xf==1&&yz==0&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",7);}
else if(xz==1&&xf==1&&yz==0&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",8);}
else if(xz==1&&xf==1&&yz==0&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",9);}
else if(xz==1&&xf==0&&yz==1&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",10);}
else if(xz==1&&xf==0&&yz==1&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",11);}
else if(xz==1&&xf==0&&yz==1&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",12);}
else if(xz==1&&xf==0&&yz==0&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",13);}
else if(xz==1&&xf==0&&yz==0&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",14);}
else if(xz==1&&xf==0&&yz==0&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall2_",15);}
else if(xz==0&&xf==1&&yz==1&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",0);}
else if(xz==0&&xf==1&&yz==1&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",1);}
else if(xz==0&&xf==1&&yz==1&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",2);}
else if(xz==0&&xf==1&&yz==0&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",3);}
else if(xz==0&&xf==1&&yz==0&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",4);}
else if(xz==0&&xf==1&&yz==0&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",5);}
else if(xz==0&&xf==0&&yz==1&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",6);}
else if(xz==0&&xf==0&&yz==1&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",7);}
else if(xz==0&&xf==0&&yz==1&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",8);}
else if(xz==0&&xf==0&&yz==0&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",9);}
else if(xz==1&&xf==1&&yz==1&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",10);}
else if(xz==1&&xf==1&&yz==1&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",11);}
else if(xz==1&&xf==1&&yz==1&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",12);}
else if(xz==1&&xf==1&&yz==0&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",13);}
else if(xz==1&&xf==1&&yz==0&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",14);}
else if(xz==1&&xf==1&&yz==0&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall3_",15);}
else if(xz==1&&xf==0&&yz==1&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",0);}
else if(xz==1&&xf==0&&yz==1&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",1);}
else if(xz==1&&xf==0&&yz==1&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",2);}
else if(xz==1&&xf==0&&yz==0&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",3);}
else if(xz==0&&xf==1&&yz==1&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",4);}
else if(xz==0&&xf==1&&yz==1&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",5);}
else if(xz==0&&xf==1&&yz==1&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",6);}
else if(xz==0&&xf==1&&yz==0&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",7);}
else if(xz==0&&xf==0&&yz==1&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",8);}
else if(xz==1&&xf==1&&yz==1&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",9);}
else if(xz==1&&xf==1&&yz==1&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",10);}
else if(xz==1&&xf==1&&yz==1&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",11);}
else if(xz==1&&xf==1&&yz==0&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",12);}
else if(xz==1&&xf==0&&yz==1&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",13);}
else if(xz==0&&xf==1&&yz==1&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",14);}
else if(xz==1&&xf==1&&yz==1&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoomWall4_",15);}