var Oak=12.0;
var Pine=8.0;
var Cocoa=6.0;
var Palm=15.0
var Willow=10.0
var Ironbark=5.0
var Dead=18.0;

var m=Math.random();
var count,a1,a2,a3,a4,a5,a6;
count=Oak+Pine+Cocoa+Dead+Palm+Willow+Ironbark;
a1=Oak/count;
a2=a1+Pine/count;
a3=a2+Cocoa/count;
a4=a3+Palm/count;
a5=a4+Willow/count;
a6=a5+Ironbark/count;
if(m<a1){world.setBlockAndMetadata(position,"minecraft:sapling",0);}
else if(m>=a1&&m<a2){world.setBlockAndMetadata(position,"jinshucraft:PineTree",0);}
else if(m>=a2&&m<a3){world.setBlockAndMetadata(position,"jinshucraft:CocoaTree",0);}
else if(m>=a3&&m<a4){world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedSaplings",2);}
else if(m>=a4&&m<a5){world.setBlockAndMetadata(position,"BiomesOPlenty:colorizedSaplings",4);}
else if(m>=a5&&m<a6){world.setBlockAndMetadata(position,"minefantasy2:ironbark_sapling",0);}
else{world.setBlock(position,"minecraft:deadbush");}