var X1,X2,Z1,Z2,Y1,Y2;
var AA,BB,CC,DD,EE,FF;
for(X1=1;X1<18;X1++)//最大：16*16*16
{position.x--;
 if(world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock"&&world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall4_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall4_")
   {AA=1;break;}
 else if(world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock")
        {AA=0;break;}
 if(X1==17){AA=1;break;}}
position.x+=X1;
if(AA==0)
  {for(X2=1;X2<18;X2++)
   {position.x++;
    if(world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock"&&world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall4_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall4_")
      {BB=1;break;}
    else if(world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock")
           {BB=0;break;}
    if(X2==17){BB=1;break;}}}
position.x-=X2;
if(BB==0)
  {for(Z1=1;Z1<18;Z1++)
   {position.z--;
    if(world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock"&&world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall4_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall4_")
      {CC=1;break;}
    else if(world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock")
    	      {CC=0;break;}
    if(Z1==17){CC=1;break;}}}
position.z+=Z1;
if(CC==0)
  {for(Z2=1;Z2<18;Z2++)
   {position.z++;
    if(world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock"&&world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall4_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall4_")
      {DD=1;break;}
    else if(world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock")
              {DD=0;break;}
    if(Z2==17){DD=1;break;}}}
position.z-=Z2;
if(DD==0)
  {for(Y1=1;Y1<18;Y1++)
   {position.y--;
    if(world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock"&&world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall4_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomOutput"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall4_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomOutput")
      {EE=1;break;}
    else if(world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock")
              {EE=0;break;}
    if(Y1==17){EE=1;break;}}}
position.y+=Y1;
if(EE==0)
  {for(Y2=1;Y2<18;Y2++)
   {position.y++;
    if(world.getBlockName(position)!="minecraft:air"&&world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock"&&world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoomWall4_"&&world.getBlockName(position)!="jinshucraft:WoodenDecayingRoom"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall1_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall2_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall3_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoomWall4_"&&world.getBlockName(position)!="jinshucraft:StoneDecayingRoom")
      {FF=1;break;}
    else if(world.getBlockName(position)!="jinshucraft:DecayedBlock"&&world.getBlockName(position)!="jinshucraft:DecayBlock"&&world.getBlockName(position)!="jinshucraft:DecayingBlock")
              {FF=0;break;}
    if(Y2==17){FF=1;break;}}}
position.y-=Y2;
if(FF==0)	
  {world.setBlockAndMetadata(position,"jinshucraft:DecayingBlock",world.getBlockMetadata(position));}
else if(world.getBlockName(position)=="jinshucraft:DecayingBlock")
       {world.setBlockAndMetadata(position,"jinshucraft:DecayBlock",world.getBlockMetadata(position));}