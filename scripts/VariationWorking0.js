var Oak=15.0;
var Pine=10.0;
var Cocoa=8.0;
var Dead=20.0;

var m=Math.random();
var count,a1,a2,a3;
count=Oak+Pine+Cocoa+Dead;
a1=Oak/count;
a2=a1+Pine/count;
a3=a2+Cocoa/count;
if(m<a1){world.setBlockAndMetadata(position,"minecraft:sapling",0);}
else if(m>=a1&&m<a2){world.setBlockAndMetadata(position,"jinshucraft:PineTree",0);}
else if(m>=a2&&m<a3){world.setBlockAndMetadata(position,"jinshucraft:CocoaTree",0);}
else{world.setBlock(position,"minecraft:deadbush");}