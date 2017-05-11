var a,b,c,k,m;
var A = [];
var B = [];
var C = [];
var i = 0;
XX=position.x;
YY=position.y;
ZZ=position.z;
position.y++;
position.x-=2;	//输出范围5*5*7
position.z-=2;
for(a=0;a<7;a++)
   {for(b=0;b<5;b++)
	   {for(c=0;c<5;c++)
		   {if(world.getBlockName(position)=="jinshucraft:DecayedBlock")
			  {A[i]=position.x;B[i]=position.y;C[i]=position.z;i++;};
		    position.x++;}
		position.x-=5;
		position.z++;}
	position.z-=5;
	position.y++;}
if(A.length>0)
  {k=Math.floor(Math.random()*(A.length));
   position.x=A[k];
   position.y=B[k];
   position.z=C[k];
   world.setBlock(position,"minecraft:air");
   position.x=XX;
   position.y=YY;
   position.z=ZZ;
   position.y--;
   m=Math.random();
   if(m<0.2){world.spawnItem(position,"Forestry:mulch",2,0);}
   else if(m>=0.2&&m<0.4){world.spawnItem(position,"Forestry:mulch",3,0);}
   else if(m>=0.4&&m<0.7){world.spawnItem(position,"Forestry:mulch",4,0);}
   else if(m>=0.7){world.spawnItem(position,"Forestry:mulch",5,0);}}