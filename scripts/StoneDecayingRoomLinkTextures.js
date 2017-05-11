var xxx=position.x;
var yyy=position.y;
var zzz=position.z;
var xz=0,xf=0,yz=0,yf=0,zz=0,zf=0;
if(world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:StoneDecayingRoomWall1_"||world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:StoneDecayingRoomWall2_"||world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:StoneDecayingRoomWall3_"||world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:StoneDecayingRoomWall4_"||world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:StoneDecayingRoom"||world.getBlockName(xxx+1,yyy,zzz)=="jinshucraft:StoneDecayingRoomOutput"){
	xz=1;
}
if(world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:StoneDecayingRoomWall1_"||world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:StoneDecayingRoomWall2_"||world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:StoneDecayingRoomWall3_"||world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:StoneDecayingRoomWall4_"||world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:StoneDecayingRoom"||world.getBlockName(xxx-1,yyy,zzz)=="jinshucraft:StoneDecayingRoomOutput"){
	xf=1;
}
if(world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:StoneDecayingRoomWall1_"||world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:StoneDecayingRoomWall2_"||world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:StoneDecayingRoomWall3_"||world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:StoneDecayingRoomWall4_"||world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:StoneDecayingRoom"||world.getBlockName(xxx,yyy+1,zzz)=="jinshucraft:StoneDecayingRoomOutput"){
	yz=1;
}
if(world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:StoneDecayingRoomWall1_"||world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:StoneDecayingRoomWall2_"||world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:StoneDecayingRoomWall3_"||world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:StoneDecayingRoomWall4_"||world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:StoneDecayingRoom"||world.getBlockName(xxx,yyy-1,zzz)=="jinshucraft:StoneDecayingRoomOutput"){
	yf=1;
}
if(world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:StoneDecayingRoomWall1_"||world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:StoneDecayingRoomWall2_"||world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:StoneDecayingRoomWall3_"||world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:StoneDecayingRoomWall4_"||world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:StoneDecayingRoom"||world.getBlockName(xxx,yyy,zzz+1)=="jinshucraft:StoneDecayingRoomOutput"){
	zz=1;
}
if(world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:StoneDecayingRoomWall1_"||world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:StoneDecayingRoomWall2_"||world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:StoneDecayingRoomWall3_"||world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:StoneDecayingRoomWall4_"||world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:StoneDecayingRoom"||world.getBlockName(xxx,yyy,zzz-1)=="jinshucraft:StoneDecayingRoomOutput"){
	zf=1;
}
if(xz==0&&xf==0&&yz==0&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",0);}
else if(xz==1&&xf==0&&yz==0&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",1);}
else if(xz==0&&xf==1&&yz==0&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",2);}
else if(xz==0&&xf==0&&yz==1&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",3);}
else if(xz==0&&xf==0&&yz==0&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",4);}
else if(xz==0&&xf==0&&yz==0&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",5);}
else if(xz==0&&xf==0&&yz==0&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",6);}
else if(xz==1&&xf==1&&yz==0&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",7);}
else if(xz==1&&xf==0&&yz==1&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",8);}
else if(xz==1&&xf==0&&yz==0&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",9);}
else if(xz==1&&xf==0&&yz==0&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",10);}
else if(xz==1&&xf==0&&yz==0&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",11);}
else if(xz==0&&xf==1&&yz==1&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",12);}
else if(xz==0&&xf==1&&yz==0&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",13);}
else if(xz==0&&xf==1&&yz==0&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",14);}
else if(xz==0&&xf==1&&yz==0&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall1_",15);}
else if(xz==0&&xf==0&&yz==1&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",0);}
else if(xz==0&&xf==0&&yz==1&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",1);}
else if(xz==0&&xf==0&&yz==1&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",2);}
else if(xz==0&&xf==0&&yz==0&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",3);}
else if(xz==0&&xf==0&&yz==0&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",4);}
else if(xz==0&&xf==0&&yz==0&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",5);}
else if(xz==1&&xf==1&&yz==1&&yf==0&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",6);}
else if(xz==1&&xf==1&&yz==0&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",7);}
else if(xz==1&&xf==1&&yz==0&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",8);}
else if(xz==1&&xf==1&&yz==0&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",9);}
else if(xz==1&&xf==0&&yz==1&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",10);}
else if(xz==1&&xf==0&&yz==1&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",11);}
else if(xz==1&&xf==0&&yz==1&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",12);}
else if(xz==1&&xf==0&&yz==0&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",13);}
else if(xz==1&&xf==0&&yz==0&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",14);}
else if(xz==1&&xf==0&&yz==0&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall2_",15);}
else if(xz==0&&xf==1&&yz==1&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",0);}
else if(xz==0&&xf==1&&yz==1&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",1);}
else if(xz==0&&xf==1&&yz==1&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",2);}
else if(xz==0&&xf==1&&yz==0&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",3);}
else if(xz==0&&xf==1&&yz==0&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",4);}
else if(xz==0&&xf==1&&yz==0&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",5);}
else if(xz==0&&xf==0&&yz==1&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",6);}
else if(xz==0&&xf==0&&yz==1&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",7);}
else if(xz==0&&xf==0&&yz==1&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",8);}
else if(xz==0&&xf==0&&yz==0&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",9);}
else if(xz==1&&xf==1&&yz==1&&yf==1&&zz==0&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",10);}
else if(xz==1&&xf==1&&yz==1&&yf==0&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",11);}
else if(xz==1&&xf==1&&yz==1&&yf==0&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",12);}
else if(xz==1&&xf==1&&yz==0&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",13);}
else if(xz==1&&xf==1&&yz==0&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",14);}
else if(xz==1&&xf==1&&yz==0&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall3_",15);}
else if(xz==1&&xf==0&&yz==1&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",0);}
else if(xz==1&&xf==0&&yz==1&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",1);}
else if(xz==1&&xf==0&&yz==1&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",2);}
else if(xz==1&&xf==0&&yz==0&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",3);}
else if(xz==0&&xf==1&&yz==1&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",4);}
else if(xz==0&&xf==1&&yz==1&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",5);}
else if(xz==0&&xf==1&&yz==1&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",6);}
else if(xz==0&&xf==1&&yz==0&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",7);}
else if(xz==0&&xf==0&&yz==1&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",8);}
else if(xz==1&&xf==1&&yz==1&&yf==1&&zz==1&&zf==0){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",9);}
else if(xz==1&&xf==1&&yz==1&&yf==1&&zz==0&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",10);}
else if(xz==1&&xf==1&&yz==1&&yf==0&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",11);}
else if(xz==1&&xf==1&&yz==0&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",12);}
else if(xz==1&&xf==0&&yz==1&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",13);}
else if(xz==0&&xf==1&&yz==1&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",14);}
else if(xz==1&&xf==1&&yz==1&&yf==1&&zz==1&&zf==1){world.setBlockAndMetadata(position,"jinshucraft:StoneDecayingRoomWall4_",15);}