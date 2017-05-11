var X,Y,Z,a,b,k;
var XX,YY,ZZ;
var A = [];
var B = [];
var C = [];
var i = 0;
var j,m,yyy;
var WATER=0;
XX=position.x;
YY=position.y;
ZZ=position.z;
position.y-=5;			//腐化范围5*5*5
position.x-=2;
position.z-=2;
for(X=1;X<6;X++)
   {for(Y=1;Y<6;Y++)
       {for(Z=1;Z<6;Z++)
 	       {if(world.getBlockName(position)=="jinshucraft:DecayingBlock")
              {A[i]=position.x;B[i]=position.y;C[i]=position.z;i++;}
		    position.z++;}
   	    position.z-=5;
        position.y++;}
    position.y-=5;
	position.x++;}
position.x=XX;
position.y=YY;
position.z=ZZ;
if(i>=1&&world.getBlockMetadata(position)==0)
  {world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoom",1);
   world.setTileEntityIntData(position,"Time",world.getTime());}
if(i>=1&&world.getBlockMetadata(position)==1)
  {for(a=0;a<i+1;a++)
	  {position.x=A[a];position.y=B[a];position.z=C[a];
	   if(world.getBlockName(position)!="jinshucraft:DecayingBlock")
		 {A.splice(a,1);B.splice(a,1);C.splice(a,1);}} 
   position.x=XX;
   position.y=YY;
   position.z=ZZ;
   b=world.getTileEntityIntData(position,"Time");
   if(world.getTime()>20*(A.length)+b)	//冷却时间系数20
     {position.y++;
	  yyy=position.y;
	  position.x--;			//接收水范围3*3*1
	  position.z--;
	  var H = new Array();
	  var F = new Array();
      for(j=0;j<3;j++){
		  H[j]=new Array();
		  F[j]=new Array();
		  for(m=0;m<3;m++){
			  if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),"AllLeavesTank")&&world.getBlockMetadata(position)>=1){
				  H[j][m]=position.x;
				  F[j][m]=position.z;
				  WATER=1;
			  }
			  else {
				  H[j][m]="none";
				  F[j][m]="none";
			  }
			  position.x++;
		  }
		position.x-=3;
		position.z++;
	  }
	  if(WATER==1){
	    {k=Math.floor(Math.random()*(A.length));
         position.x=A[k];
	     position.y=B[k];
	     position.z=C[k];
	     if(Math.random()<0.1)			//运作成功几率0.1
	       {world.setBlock(position,"jinshucraft:DecayedBlock");
			for(j=0;j<3;j++){
				for(m=0;m<3;m++){
					if(H[j][m]!="none"){
						world.setBlockMetadata(H[j][m],yyy,F[j][m],world.getBlockMetadata(H[j][m],yyy,F[j][m])-1);//每次成功运作消耗200mb水
						j=3;
						break;
					}
				}
			}
			A.splice(k,1);B.splice(k,1);c.splice(k,1);}}}}}
if(i<1&&world.getBlockMetadata(position)==1)
  {world.setBlockAndMetadata(position,"jinshucraft:WoodenDecayingRoom",0);}