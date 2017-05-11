/*风干方块*/

/*通用属性*/
creativeTab = "_Wood";//所在标签
material = "wood";//材料类型
maxStack = 64;//最大堆叠
name = "DryingBlock";//名称
opacity = 255;//遮光率
slipperiness = 0.6;//粗糙度
stepSound = "wood";//行走声音
tickrate = "5";//方块更新速率
blocksPiston = true;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = false;//是否使用透明纹理

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 40;//火焰蔓延速度
flammability[0] = 80;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 0.8;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8这玩意容易引起火灾，是吧";//显示信息
light[0] = 0;//光照强度
pick[0] = "DryingBlock:0 1";//鼠标中键获得方块
resistance[0] = 0;//爆炸抗性
tileEntity[0] = "entityDryingBlock";//方块实体值
toolClass[0] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] = true;//是否能被精准采集
hasCollision[0] = true;//是否有碰撞箱
hasTileEntity[0] = true;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = false;//是否能成为树干
tileTransparent[0] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[0] = "DryingBlock0.png";//西面贴图
textureFileXP[0] = "DryingBlock0.png";//东面贴图
textureFileYN[0] = "DryingBlock0.png";//底部贴图
textureFileYP[0] = "DryingBlock0.png";//顶部贴图
textureFileZN[0] = "DryingBlock0.png";//北面贴图
textureFileZP[0] = "DryingBlock0.png";//南面贴图

/*触发器*/
onNeighborChange[0] = "mod.loadScript('DryingBlockNeighborChange.js');";
onActivated[0] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){var A1,B1,C1,D1,A2,B2,C2,D2,E,F,G,H;var xx=position.x,yy=position.y,zz=position.z;A1=world.getBlockName(xx+1,yy,zz+1);A2=world.getBlockMetadata(xx+1,yy,zz+1);B1=world.getBlockName(xx-1,yy,zz+1);B2=world.getBlockMetadata(xx-1,yy,zz+1);C1=world.getBlockName(xx+1,yy,zz-1);C2=world.getBlockMetadata(xx+1,yy,zz-1);D1=world.getBlockName(xx-1,yy,zz-1);D2=world.getBlockMetadata(xx-1,yy,zz-1);E=world.getBlockName(xx+1,yy,zz);F=world.getBlockName(xx-1,yy,zz);G=world.getBlockName(xx,yy,zz+1);H=world.getBlockName(xx,yy,zz-1);if(A1=='minecraft:log'&&A2==0&&E=='jinshucraft:PineWood'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('WoodenDryingRoomWorking.js');}else if(A1=='minecraft:cobblestone'&&A2==0&&E=='jinshucraft:StoneDryingRoomWall'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('StoneDryingRoomWorking.js');}};";
onUpdate[0] = "mod.loadScript('DryingBlockOnUpdate.js');";
onClicked[0] = "mod.loadScript('DryingBlockClick.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 50;//火焰蔓延速度
flammability[1] = 150;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 0.2;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8这玩意容易引起火灾，是吧";//显示信息
light[1] = 0;//光照强度
pick[1] = "DryingBlock:1 1";//鼠标中键获得方块
resistance[1] = 0;//爆炸抗性
tileEntity[1] = "entityDryingBlock";//方块实体值
toolClass[1] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[1] = true;//是否添加到创造标签下
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = true;//是否能被放置在墙面上
canSilkHarvest[1] = true;//是否能被精准采集
hasCollision[1] = true;//是否有碰撞箱
hasTileEntity[1] = true;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = false;//是否能成为树干
tileTransparent[1] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[1] = "DryingBlock1.png";//西面贴图
textureFileXP[1] = "DryingBlock1.png";//东面贴图
textureFileYN[1] = "DryingBlock1.png";//底部贴图
textureFileYP[1] = "DryingBlock1.png";//顶部贴图
textureFileZN[1] = "DryingBlock1.png";//北面贴图
textureFileZP[1] = "DryingBlock1.png";//南面贴图

/*触发器*/
onNeighborChange[1] = "mod.loadScript('DryingBlockNeighborChange.js');";
onActivated[1] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){var A1,B1,C1,D1,A2,B2,C2,D2,E,F,G,H;var xx=position.x,yy=position.y,zz=position.z;A1=world.getBlockName(xx+1,yy,zz+1);A2=world.getBlockMetadata(xx+1,yy,zz+1);B1=world.getBlockName(xx-1,yy,zz+1);B2=world.getBlockMetadata(xx-1,yy,zz+1);C1=world.getBlockName(xx+1,yy,zz-1);C2=world.getBlockMetadata(xx+1,yy,zz-1);D1=world.getBlockName(xx-1,yy,zz-1);D2=world.getBlockMetadata(xx-1,yy,zz-1);E=world.getBlockName(xx+1,yy,zz);F=world.getBlockName(xx-1,yy,zz);G=world.getBlockName(xx,yy,zz+1);H=world.getBlockName(xx,yy,zz-1);if(A1=='minecraft:log'&&A2==0&&E=='jinshucraft:PineWood'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('WoodenDryingRoomWorking.js');}else if(A1=='minecraft:cobblestone'&&A2==0&&E=='jinshucraft:StoneDryingRoomWall'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('StoneDryingRoomWorking.js');}};";
onClicked[1] = "mod.loadScript('DryingBlockClick.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2*/
/*属性*/
drop[2] = "";//掉落物
expDrop[2] = "0";//经验掉落
fireSpreadSpeed[2] = 20;//火焰蔓延速度
flammability[2] = 50;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 3.0;//空手破坏时间
harvestLevel[2] = 0;//挖掘等级
information[2] = "§8木棍扎成堆...";//显示信息
light[2] = 0;//光照强度
pick[2] = "DryingBlock:2 1";//鼠标中键获得方块
resistance[2] = 0.2;//爆炸抗性
tileEntity[2] = "entityDryingBlock";//方块实体值
toolClass[2] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[2] = true;//是否添加到创造标签下
canPlaceOnCeiling[2] = true;//是否能被放置在天花板上
canPlaceOnFloor[2] = true;//是否能被放置在地板上
canPlaceOnWall[2] = true;//是否能被放置在墙面上
canSilkHarvest[2] = true;//是否能被精准采集
hasCollision[2] = true;//是否有碰撞箱
hasTileEntity[2] = true;//是否有方块实体值
isBeaconBase[2] = false;//是否能成为信标基座
isBurning[2] = false;//是否能点燃并造成火焰伤害
isFireSource[2] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[2] = false;//是否能成为树干
tileTransparent[2] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[2] = "DryingBlock2.png";//西面贴图
textureFileXP[2] = "DryingBlock2.png";//东面贴图
textureFileYN[2] = "DryingBlock2_Top.png";//底部贴图
textureFileYP[2] = "DryingBlock2_Top.png";//顶部贴图
textureFileZN[2] = "DryingBlock2.png";//北面贴图
textureFileZP[2] = "DryingBlock2.png";//南面贴图

/*触发器*/
onNeighborChange[2] = "mod.loadScript('DryingBlockNeighborChange.js');";
onActivated[2] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){var A1,B1,C1,D1,A2,B2,C2,D2,E,F,G,H;var xx=position.x,yy=position.y,zz=position.z;A1=world.getBlockName(xx+1,yy,zz+1);A2=world.getBlockMetadata(xx+1,yy,zz+1);B1=world.getBlockName(xx-1,yy,zz+1);B2=world.getBlockMetadata(xx-1,yy,zz+1);C1=world.getBlockName(xx+1,yy,zz-1);C2=world.getBlockMetadata(xx+1,yy,zz-1);D1=world.getBlockName(xx-1,yy,zz-1);D2=world.getBlockMetadata(xx-1,yy,zz-1);E=world.getBlockName(xx+1,yy,zz);F=world.getBlockName(xx-1,yy,zz);G=world.getBlockName(xx,yy,zz+1);H=world.getBlockName(xx,yy,zz-1);if(A1=='minecraft:log'&&A2==0&&E=='jinshucraft:PineWood'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('WoodenDryingRoomWorking.js');}else if(A1=='minecraft:cobblestone'&&A2==0&&E=='jinshucraft:StoneDryingRoomWall'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('StoneDryingRoomWorking.js');}};";
onUpdate[2] = "mod.loadScript('DryingBlockOnUpdate.js');";
onClicked[2] = "mod.loadScript('DryingBlockClick.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3*/
/*属性*/
drop[3] = "";//掉落物
expDrop[3] = "0";//经验掉落
fireSpreadSpeed[3] = 40;//火焰蔓延速度
flammability[3] = 100;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 4.0;//空手破坏时间
harvestLevel[3] = 0;//挖掘等级
information[3] = "§8朽木不可雕也";//显示信息
light[3] = 0;//光照强度
pick[3] = "DryingBlock:3 1";//鼠标中键获得方块
resistance[3] = 0.3;//爆炸抗性
tileEntity[3] = "entityDryingBlock";//方块实体值
toolClass[3] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[3] = true;//是否添加到创造标签下
canPlaceOnCeiling[3] = true;//是否能被放置在天花板上
canPlaceOnFloor[3] = true;//是否能被放置在地板上
canPlaceOnWall[3] = true;//是否能被放置在墙面上
canSilkHarvest[3] = true;//是否能被精准采集
hasCollision[3] = true;//是否有碰撞箱
hasTileEntity[3] = true;//是否有方块实体值
isBeaconBase[3] = false;//是否能成为信标基座
isBurning[3] = false;//是否能点燃并造成火焰伤害
isFireSource[3] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[3] = false;//是否能成为树干
tileTransparent[3] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[3] = "DryingBlock3.png";//西面贴图
textureFileXP[3] = "DryingBlock3.png";//东面贴图
textureFileYN[3] = "DryingBlock3_Top.png";//底部贴图
textureFileYP[3] = "DryingBlock3_Top.png";//顶部贴图
textureFileZN[3] = "DryingBlock3.png";//北面贴图
textureFileZP[3] = "DryingBlock3.png";//南面贴图

/*触发器*/
onNeighborChange[3] = "mod.loadScript('DryingBlockNeighborChange.js');";
onActivated[3] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){var A1,B1,C1,D1,A2,B2,C2,D2,E,F,G,H;var xx=position.x,yy=position.y,zz=position.z;A1=world.getBlockName(xx+1,yy,zz+1);A2=world.getBlockMetadata(xx+1,yy,zz+1);B1=world.getBlockName(xx-1,yy,zz+1);B2=world.getBlockMetadata(xx-1,yy,zz+1);C1=world.getBlockName(xx+1,yy,zz-1);C2=world.getBlockMetadata(xx+1,yy,zz-1);D1=world.getBlockName(xx-1,yy,zz-1);D2=world.getBlockMetadata(xx-1,yy,zz-1);E=world.getBlockName(xx+1,yy,zz);F=world.getBlockName(xx-1,yy,zz);G=world.getBlockName(xx,yy,zz+1);H=world.getBlockName(xx,yy,zz-1);if(A1=='minecraft:log'&&A2==0&&E=='jinshucraft:PineWood'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('WoodenDryingRoomWorking.js');}else if(A1=='minecraft:cobblestone'&&A2==0&&E=='jinshucraft:StoneDryingRoomWall'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('StoneDryingRoomWorking.js');}};";
onClicked[3] = "mod.loadScript('DryingBlockClick.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4*/
/*属性*/
drop[4] = "";//掉落物
expDrop[4] = "0";//经验掉落
fireSpreadSpeed[4] = 40;//火焰蔓延速度
flammability[4] = 80;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 0.8;//空手破坏时间
harvestLevel[4] = 0;//挖掘等级
information[4] = "§8这玩意容易也引起火灾，是吧";//显示信息
light[4] = 0;//光照强度
pick[4] = "DryingBlock:4 1";//鼠标中键获得方块
resistance[4] = 0;//爆炸抗性
tileEntity[4] = "entityDryingBlock";//方块实体值
toolClass[4] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[4] = true;//是否添加到创造标签下
canPlaceOnCeiling[4] = true;//是否能被放置在天花板上
canPlaceOnFloor[4] = true;//是否能被放置在地板上
canPlaceOnWall[4] = true;//是否能被放置在墙面上
canSilkHarvest[4] = true;//是否能被精准采集
hasCollision[4] = true;//是否有碰撞箱
hasTileEntity[4] = true;//是否有方块实体值
isBeaconBase[4] = false;//是否能成为信标基座
isBurning[4] = false;//是否能点燃并造成火焰伤害
isFireSource[4] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[4] = false;//是否能成为树干
tileTransparent[4] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[4] = "DryingBlock4.png";//西面贴图
textureFileXP[4] = "DryingBlock4.png";//东面贴图
textureFileYN[4] = "DryingBlock4.png";//底部贴图
textureFileYP[4] = "DryingBlock4.png";//顶部贴图
textureFileZN[4] = "DryingBlock4.png";//北面贴图
textureFileZP[4] = "DryingBlock4.png";//南面贴图

/*触发器*/
onNeighborChange[4] = "mod.loadScript('DryingBlockNeighborChange.js');";
onActivated[4] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){var A1,B1,C1,D1,A2,B2,C2,D2,E,F,G,H;var xx=position.x,yy=position.y,zz=position.z;A1=world.getBlockName(xx+1,yy,zz+1);A2=world.getBlockMetadata(xx+1,yy,zz+1);B1=world.getBlockName(xx-1,yy,zz+1);B2=world.getBlockMetadata(xx-1,yy,zz+1);C1=world.getBlockName(xx+1,yy,zz-1);C2=world.getBlockMetadata(xx+1,yy,zz-1);D1=world.getBlockName(xx-1,yy,zz-1);D2=world.getBlockMetadata(xx-1,yy,zz-1);E=world.getBlockName(xx+1,yy,zz);F=world.getBlockName(xx-1,yy,zz);G=world.getBlockName(xx,yy,zz+1);H=world.getBlockName(xx,yy,zz-1);if(A1=='minecraft:log'&&A2==0&&E=='jinshucraft:PineWood'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('WoodenDryingRoomWorking.js');}else if(A1=='minecraft:cobblestone'&&A2==0&&E=='jinshucraft:StoneDryingRoomWall'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('StoneDryingRoomWorking.js');}};";
onUpdate[4] = "mod.loadScript('DryingBlockOnUpdate.js');";
onClicked[4] = "mod.loadScript('DryingBlockClick.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据5*/
/*属性*/
drop[5] = "";//掉落物
expDrop[5] = "0";//经验掉落
fireSpreadSpeed[5] = 50;//火焰蔓延速度
flammability[5] = 150;//易燃性
fortuneModifier[5] = 0;//时运采集增产
hardness[5] = 0.2;//空手破坏时间
harvestLevel[5] = 0;//挖掘等级
information[5] = "§8这玩意也容易引起火灾，是吧";//显示信息
light[5] = 0;//光照强度
pick[5] = "DryingBlock:5 1";//鼠标中键获得方块
resistance[5] = 0;//爆炸抗性
tileEntity[5] = "entityDryingBlock";//方块实体值
toolClass[5] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[5] = true;//是否添加到创造标签下
canPlaceOnCeiling[5] = true;//是否能被放置在天花板上
canPlaceOnFloor[5] = true;//是否能被放置在地板上
canPlaceOnWall[5] = true;//是否能被放置在墙面上
canSilkHarvest[5] = true;//是否能被精准采集
hasCollision[5] = true;//是否有碰撞箱
hasTileEntity[5] = true;//是否有方块实体值
isBeaconBase[5] = false;//是否能成为信标基座
isBurning[5] = false;//是否能点燃并造成火焰伤害
isFireSource[5] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[5] = false;//是否能成为树干
tileTransparent[5] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[5] = "DryingBlock5.png";//西面贴图
textureFileXP[5] = "DryingBlock5.png";//东面贴图
textureFileYN[5] = "DryingBlock5.png";//底部贴图
textureFileYP[5] = "DryingBlock5.png";//顶部贴图
textureFileZN[5] = "DryingBlock5.png";//北面贴图
textureFileZP[5] = "DryingBlock5.png";//南面贴图

/*触发器*/
onNeighborChange[5] = "mod.loadScript('DryingBlockNeighborChange.js');";
onActivated[5] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){var A1,B1,C1,D1,A2,B2,C2,D2,E,F,G,H;var xx=position.x,yy=position.y,zz=position.z;A1=world.getBlockName(xx+1,yy,zz+1);A2=world.getBlockMetadata(xx+1,yy,zz+1);B1=world.getBlockName(xx-1,yy,zz+1);B2=world.getBlockMetadata(xx-1,yy,zz+1);C1=world.getBlockName(xx+1,yy,zz-1);C2=world.getBlockMetadata(xx+1,yy,zz-1);D1=world.getBlockName(xx-1,yy,zz-1);D2=world.getBlockMetadata(xx-1,yy,zz-1);E=world.getBlockName(xx+1,yy,zz);F=world.getBlockName(xx-1,yy,zz);G=world.getBlockName(xx,yy,zz+1);H=world.getBlockName(xx,yy,zz-1);if(A1=='minecraft:log'&&A2==0&&E=='jinshucraft:PineWood'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('WoodenDryingRoomWorking.js');}else if(A1=='minecraft:cobblestone'&&A2==0&&E=='jinshucraft:StoneDryingRoomWall'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('StoneDryingRoomWorking.js');}};";
onClicked[5] = "mod.loadScript('DryingBlockClick.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据6*/
/*属性*/
drop[6] = "Forestry:mulch 3";//掉落物
expDrop[6] = "0";//经验掉落
fireSpreadSpeed[6] = 10;//火焰蔓延速度
flammability[6] = 10;//易燃性
fortuneModifier[6] = 0;//时运采集增产
hardness[6] = 0.8;//空手破坏时间
harvestLevel[6] = 0;//挖掘等级
information[6] = "§8这玩意倒不会引起火灾...";//显示信息
light[6] = 0;//光照强度
pick[6] = "DryingBlock:6 1";//鼠标中键获得方块
resistance[6] = 0;//爆炸抗性
/*tileEntity[6] = "";//方块实体值*/
toolClass[6] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[6] = true;//是否添加到创造标签下
canPlaceOnCeiling[6] = true;//是否能被放置在天花板上
canPlaceOnFloor[6] = true;//是否能被放置在地板上
canPlaceOnWall[6] = true;//是否能被放置在墙面上
canSilkHarvest[6] = true;//是否能被精准采集
hasCollision[6] = true;//是否有碰撞箱
hasTileEntity[6] = false;//是否有方块实体值
isBeaconBase[6] = false;//是否能成为信标基座
isBurning[6] = false;//是否能点燃并造成火焰伤害
isFireSource[6] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[6] = false;//是否能成为树干
tileTransparent[6] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[6] = "DryingBlock6.png";//西面贴图
textureFileXP[6] = "DryingBlock6.png";//东面贴图
textureFileYN[6] = "DryingBlock6.png";//底部贴图
textureFileYP[6] = "DryingBlock6.png";//顶部贴图
textureFileZN[6] = "DryingBlock6.png";//北面贴图
textureFileZP[6] = "DryingBlock6.png";//南面贴图

/*触发器*/
onNeighborChange[6] = "mod.loadScript('DryingBlockNeighborChange.js');";
onActivated[6] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){var A1,B1,C1,D1,A2,B2,C2,D2,E,F,G,H;var xx=position.x,yy=position.y,zz=position.z;A1=world.getBlockName(xx+1,yy,zz+1);A2=world.getBlockMetadata(xx+1,yy,zz+1);B1=world.getBlockName(xx-1,yy,zz+1);B2=world.getBlockMetadata(xx-1,yy,zz+1);C1=world.getBlockName(xx+1,yy,zz-1);C2=world.getBlockMetadata(xx+1,yy,zz-1);D1=world.getBlockName(xx-1,yy,zz-1);D2=world.getBlockMetadata(xx-1,yy,zz-1);E=world.getBlockName(xx+1,yy,zz);F=world.getBlockName(xx-1,yy,zz);G=world.getBlockName(xx,yy,zz+1);H=world.getBlockName(xx,yy,zz-1);if(A1=='minecraft:log'&&A2==0&&E=='jinshucraft:PineWood'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('WoodenDryingRoomWorking.js');}else if(A1=='minecraft:cobblestone'&&A2==0&&E=='jinshucraft:StoneDryingRoomWall'&&B1==A1&&C1==A1&&D1==A1&&B2==A2&&C2==A2&&D2==A2&&F==E&&G==E&&H==E){mod.loadScript('StoneDryingRoomWorking.js');}};";
onUpdate[6] = "mod.loadScript('DryingBlockOnUpdate.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////