/*石制腐化室壁2*/

/*通用属性*/
creativeTab = "_Stone";//所在标签
material = "rock";//材料类型
maxStack = 64;//最大堆叠
name = "StoneDecayingRoomWall2_";//名称
opacity = 255;//遮光率
resistance[0] = 0.3;//爆炸抗性
slipperiness = 0.6;//粗糙度
stepSound = "stone";//行走声音
tickrate = "20";//方块更新速率
blocksPiston = true;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = false;//是否使用透明纹理

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 10;//火焰蔓延速度
flammability[0] = 10;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 2;//空手破坏时间
harvestLevel[0] = 1;//挖掘等级
information[0] = "§8迎接更好的墙壁吧";//显示信息
light[0] = 0;//光照强度
pick[0] = "StoneDecayingRoomWall2_:0 1";//鼠标中键获得方块
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[0] = false;//是否添加到创造标签下
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] = true;//是否能被精准采集
hasCollision[0] = true;//是否有碰撞箱
hasTileEntity[0] = false;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = false;//是否能成为树干
tileTransparent[0] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[0] = "StoneDecayingRoomWall2_2.png";//西面贴图
textureFileXP[0] = "StoneDecayingRoomWall2_2.png";//东面贴图
textureFileYN[0] = "StoneDecayingRoomWall0_1.png";//底部贴图
textureFileYP[0] = "StoneDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[0] = "StoneDecayingRoomWall2_2.png";//北面贴图
textureFileZP[0] = "StoneDecayingRoomWall2_2.png";//南面贴图

/*触发器*/
onClicked[0] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[0] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 10;//火焰蔓延速度
flammability[1] = 10;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 2;//空手破坏时间
harvestLevel[1] = 1;//挖掘等级
information[1] = "§8迎接更好的墙壁吧";//显示信息
light[1] = 0;//光照强度
pick[1] = "StoneDecayingRoomWall2_:1 1";//鼠标中键获得方块
/*tileEntity[1] = "";//方块实体值*/
toolClass[1] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[1] = false;//是否添加到创造标签下
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = true;//是否能被放置在墙面上
canSilkHarvest[1] = true;//是否能被精准采集
hasCollision[1] = true;//是否有碰撞箱
hasTileEntity[1] = false;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = false;//是否能成为树干
tileTransparent[1] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[1] = "StoneDecayingRoomWall2_1.png";//西面贴图
textureFileXP[1] = "StoneDecayingRoomWall2_3.png";//东面贴图
textureFileYN[1] = "StoneDecayingRoomWall1_3.png";//底部贴图
textureFileYP[1] = "StoneDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[1] = "StoneDecayingRoomWall1_1.png";//北面贴图
textureFileZP[1] = "StoneDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[1] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[1] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2*/
/*属性*/
drop[2] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[2] = "0";//经验掉落
fireSpreadSpeed[2] = 10;//火焰蔓延速度
flammability[2] = 10;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 2;//空手破坏时间
harvestLevel[2] = 1;//挖掘等级
information[2] = "§8迎接更好的墙壁吧";//显示信息
light[2] = 0;//光照强度
pick[2] = "StoneDecayingRoomWall2_:2 1";//鼠标中键获得方块
/*tileEntity[2] = "";//方块实体值*/
toolClass[2] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[2] = false;//是否添加到创造标签下
canPlaceOnCeiling[2] = true;//是否能被放置在天花板上
canPlaceOnFloor[2] = true;//是否能被放置在地板上
canPlaceOnWall[2] = true;//是否能被放置在墙面上
canSilkHarvest[2] = true;//是否能被精准采集
hasCollision[2] = true;//是否有碰撞箱
hasTileEntity[2] = false;//是否有方块实体值
isBeaconBase[2] = false;//是否能成为信标基座
isBurning[2] = false;//是否能点燃并造成火焰伤害
isFireSource[2] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[2] = false;//是否能成为树干
tileTransparent[2] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[2] = "StoneDecayingRoomWall2_3.png";//西面贴图
textureFileXP[2] = "StoneDecayingRoomWall2_1.png";//东面贴图
textureFileYN[2] = "StoneDecayingRoomWall1_1.png";//底部贴图
textureFileYP[2] = "StoneDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[2] = "StoneDecayingRoomWall0_1.png";//北面贴图
textureFileZP[2] = "StoneDecayingRoomWall1_1.png";//南面贴图

/*触发器*/
onClicked[2] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[2] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3*/
/*属性*/
drop[3] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[3] = "0";//经验掉落
fireSpreadSpeed[3] = 10;//火焰蔓延速度
flammability[3] = 10;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 2;//空手破坏时间
harvestLevel[3] = 1;//挖掘等级
information[3] = "§8迎接更好的墙壁吧";//显示信息
light[3] = 0;//光照强度
pick[3] = "StoneDecayingRoomWall2_:3 1";//鼠标中键获得方块
/*tileEntity[3] = "";//方块实体值*/
toolClass[3] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[3] = false;//是否添加到创造标签下
canPlaceOnCeiling[3] = true;//是否能被放置在天花板上
canPlaceOnFloor[3] = true;//是否能被放置在地板上
canPlaceOnWall[3] = true;//是否能被放置在墙面上
canSilkHarvest[3] = true;//是否能被精准采集
hasCollision[3] = true;//是否有碰撞箱
hasTileEntity[3] = false;//是否有方块实体值
isBeaconBase[3] = false;//是否能成为信标基座
isBurning[3] = false;//是否能点燃并造成火焰伤害
isFireSource[3] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[3] = false;//是否能成为树干
tileTransparent[3] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[3] = "StoneDecayingRoomWall2_4.png";//西面贴图
textureFileXP[3] = "StoneDecayingRoomWall2_6.png";//东面贴图
textureFileYN[3] = "StoneDecayingRoomWall0_1.png";//底部贴图
textureFileYP[3] = "StoneDecayingRoomWall1_3.png";//顶部贴图
textureFileZN[3] = "StoneDecayingRoomWall1_3.png";//北面贴图
textureFileZP[3] = "StoneDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[3] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[3] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4*/
/*属性*/
drop[4] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[4] = "0";//经验掉落
fireSpreadSpeed[4] = 10;//火焰蔓延速度
flammability[4] = 10;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 2;//空手破坏时间
harvestLevel[4] = 1;//挖掘等级
information[4] = "§8迎接更好的墙壁吧";//显示信息
light[4] = 0;//光照强度
pick[4] = "StoneDecayingRoomWall2_:4 1";//鼠标中键获得方块
/*tileEntity[4] = "";//方块实体值*/
toolClass[4] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[4] = false;//是否添加到创造标签下
canPlaceOnCeiling[4] = true;//是否能被放置在天花板上
canPlaceOnFloor[4] = true;//是否能被放置在地板上
canPlaceOnWall[4] = true;//是否能被放置在墙面上
canSilkHarvest[4] = true;//是否能被精准采集
hasCollision[4] = true;//是否有碰撞箱
hasTileEntity[4] = false;//是否有方块实体值
isBeaconBase[4] = false;//是否能成为信标基座
isBurning[4] = false;//是否能点燃并造成火焰伤害
isFireSource[4] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[4] = false;//是否能成为树干
tileTransparent[4] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[4] = "StoneDecayingRoomWall2_6.png";//西面贴图
textureFileXP[4] = "StoneDecayingRoomWall2_4.png";//东面贴图
textureFileYN[4] = "StoneDecayingRoomWall0_1.png";//底部贴图
textureFileYP[4] = "StoneDecayingRoomWall1_1.png";//顶部贴图
textureFileZN[4] = "StoneDecayingRoomWall0_1.png";//北面贴图
textureFileZP[4] = "StoneDecayingRoomWall1_3.png";//南面贴图

/*触发器*/
onClicked[4] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[4] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据5*/
/*属性*/
drop[5] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[5] = "0";//经验掉落
fireSpreadSpeed[5] = 10;//火焰蔓延速度
flammability[5] = 10;//易燃性
fortuneModifier[5] = 0;//时运采集增产
hardness[5] = 2;//空手破坏时间
harvestLevel[5] = 1;//挖掘等级
information[5] = "§8迎接更好的墙壁吧";//显示信息
light[5] = 0;//光照强度
pick[5] = "StoneDecayingRoomWall2_:5 1";//鼠标中键获得方块
/*tileEntity[5] = "";//方块实体值*/
toolClass[5] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[5] = false;//是否添加到创造标签下
canPlaceOnCeiling[5] = true;//是否能被放置在天花板上
canPlaceOnFloor[5] = true;//是否能被放置在地板上
canPlaceOnWall[5] = true;//是否能被放置在墙面上
canSilkHarvest[5] = true;//是否能被精准采集
hasCollision[5] = true;//是否有碰撞箱
hasTileEntity[5] = false;//是否有方块实体值
isBeaconBase[5] = false;//是否能成为信标基座
isBurning[5] = false;//是否能点燃并造成火焰伤害
isFireSource[5] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[5] = false;//是否能成为树干
tileTransparent[5] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[5] = "StoneDecayingRoomWall2_5.png";//西面贴图
textureFileXP[5] = "StoneDecayingRoomWall2_5.png";//东面贴图
textureFileYN[5] = "StoneDecayingRoomWall2_2.png";//底部贴图
textureFileYP[5] = "StoneDecayingRoomWall2_2.png";//顶部贴图
textureFileZN[5] = "StoneDecayingRoomWall2_5.png";//北面贴图
textureFileZP[5] = "StoneDecayingRoomWall2_5.png";//南面贴图

/*触发器*/
onClicked[5] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[5] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据6*/
/*属性*/
drop[6] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[6] = "0";//经验掉落
fireSpreadSpeed[6] = 10;//火焰蔓延速度
flammability[6] = 10;//易燃性
fortuneModifier[6] = 0;//时运采集增产
hardness[6] = 2;//空手破坏时间
harvestLevel[6] = 1;//挖掘等级
information[6] = "§8迎接更好的墙壁吧";//显示信息
light[6] = 0;//光照强度
pick[6] = "StoneDecayingRoomWall2_:6 1";//鼠标中键获得方块
/*tileEntity[6] = "";//方块实体值*/
toolClass[6] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[6] = false;//是否添加到创造标签下
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
textureFileXN[6] = "StoneDecayingRoomWall0_1.png";//西面贴图
textureFileXP[6] = "StoneDecayingRoomWall0_1.png";//东面贴图
textureFileYN[6] = "StoneDecayingRoomWall2_5.png";//底部贴图
textureFileYP[6] = "StoneDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[6] = "StoneDecayingRoomWall3_2.png";//北面贴图
textureFileZP[6] = "StoneDecayingRoomWall3_2.png";//南面贴图

/*触发器*/
onClicked[6] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[6] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据7*/
/*属性*/
drop[7] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[7] = "0";//经验掉落
fireSpreadSpeed[7] = 10;//火焰蔓延速度
flammability[7] = 10;//易燃性
fortuneModifier[7] = 0;//时运采集增产
hardness[7] = 2;//空手破坏时间
harvestLevel[7] = 1;//挖掘等级
information[7] = "§8迎接更好的墙壁吧";//显示信息
light[7] = 0;//光照强度
pick[7] = "StoneDecayingRoomWall2_:7 1";//鼠标中键获得方块
/*tileEntity[7] = "";//方块实体值*/
toolClass[7] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[7] = false;//是否添加到创造标签下
canPlaceOnCeiling[7] = true;//是否能被放置在天花板上
canPlaceOnFloor[7] = true;//是否能被放置在地板上
canPlaceOnWall[7] = true;//是否能被放置在墙面上
canSilkHarvest[7] = true;//是否能被精准采集
hasCollision[7] = true;//是否有碰撞箱
hasTileEntity[7] = false;//是否有方块实体值
isBeaconBase[7] = false;//是否能成为信标基座
isBurning[7] = false;//是否能点燃并造成火焰伤害
isFireSource[7] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[7] = false;//是否能成为树干
tileTransparent[7] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[7] = "StoneDecayingRoomWall0_1.png";//西面贴图
textureFileXP[7] = "StoneDecayingRoomWall0_1.png";//东面贴图
textureFileYN[7] = "StoneDecayingRoomWall0_1.png";//底部贴图
textureFileYP[7] = "StoneDecayingRoomWall2_5.png";//顶部贴图
textureFileZN[7] = "StoneDecayingRoomWall3_4.png";//北面贴图
textureFileZP[7] = "StoneDecayingRoomWall3_4.png";//南面贴图

/*触发器*/
onClicked[7] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[7] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据8*/
/*属性*/
drop[8] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[8] = "0";//经验掉落
fireSpreadSpeed[8] = 10;//火焰蔓延速度
flammability[8] = 10;//易燃性
fortuneModifier[8] = 0;//时运采集增产
hardness[8] = 2;//空手破坏时间
harvestLevel[8] = 1;//挖掘等级
information[8] = "§8迎接更好的墙壁吧";//显示信息
light[8] = 0;//光照强度
pick[8] = "StoneDecayingRoomWall2_:8 1";//鼠标中键获得方块
/*tileEntity[8] = "";//方块实体值*/
toolClass[8] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[8] = false;//是否添加到创造标签下
canPlaceOnCeiling[8] = true;//是否能被放置在天花板上
canPlaceOnFloor[8] = true;//是否能被放置在地板上
canPlaceOnWall[8] = true;//是否能被放置在墙面上
canSilkHarvest[8] = true;//是否能被精准采集
hasCollision[8] = true;//是否有碰撞箱
hasTileEntity[8] = false;//是否有方块实体值
isBeaconBase[8] = false;//是否能成为信标基座
isBurning[8] = false;//是否能点燃并造成火焰伤害
isFireSource[8] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[8] = false;//是否能成为树干
tileTransparent[8] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[8] = "StoneDecayingRoomWall0_1.png";//西面贴图
textureFileXP[8] = "StoneDecayingRoomWall0_1.png";//东面贴图
textureFileYN[8] = "StoneDecayingRoomWall3_4.png";//底部贴图
textureFileYP[8] = "StoneDecayingRoomWall3_4.png";//顶部贴图
textureFileZN[8] = "StoneDecayingRoomWall2_5.png";//北面贴图
textureFileZP[8] = "StoneDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[8] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[8] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据9*/
/*属性*/
drop[9] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[9] = "0";//经验掉落
fireSpreadSpeed[9] = 10;//火焰蔓延速度
flammability[9] = 10;//易燃性
fortuneModifier[9] = 0;//时运采集增产
hardness[9] = 2;//空手破坏时间
harvestLevel[9] = 1;//挖掘等级
information[9] = "§8迎接更好的墙壁吧";//显示信息
light[9] = 0;//光照强度
pick[9] = "StoneDecayingRoomWall2_:9 1";//鼠标中键获得方块
/*tileEntity[9] = "";//方块实体值*/
toolClass[9] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[9] = false;//是否添加到创造标签下
canPlaceOnCeiling[9] = true;//是否能被放置在天花板上
canPlaceOnFloor[9] = true;//是否能被放置在地板上
canPlaceOnWall[9] = true;//是否能被放置在墙面上
canSilkHarvest[9] = true;//是否能被精准采集
hasCollision[9] = true;//是否有碰撞箱
hasTileEntity[9] = false;//是否有方块实体值
isBeaconBase[9] = false;//是否能成为信标基座
isBurning[9] = false;//是否能点燃并造成火焰伤害
isFireSource[9] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[9] = false;//是否能成为树干
tileTransparent[9] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[9] = "StoneDecayingRoomWall0_1.png";//西面贴图
textureFileXP[9] = "StoneDecayingRoomWall0_1.png";//东面贴图
textureFileYN[9] = "StoneDecayingRoomWall3_2.png";//底部贴图
textureFileYP[9] = "StoneDecayingRoomWall3_2.png";//顶部贴图
textureFileZN[9] = "StoneDecayingRoomWall0_1.png";//北面贴图
textureFileZP[9] = "StoneDecayingRoomWall2_5.png";//南面贴图

/*触发器*/
onClicked[9] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[9] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据10*/
/*属性*/
drop[10] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[10] = "0";//经验掉落
fireSpreadSpeed[10] = 10;//火焰蔓延速度
flammability[10] = 10;//易燃性
fortuneModifier[10] = 0;//时运采集增产
hardness[10] = 2;//空手破坏时间
harvestLevel[10] = 1;//挖掘等级
information[10] = "§8迎接更好的墙壁吧";//显示信息
light[10] = 0;//光照强度
pick[10] = "StoneDecayingRoomWall2_:10 1";//鼠标中键获得方块
/*tileEntity[10] = "";//方块实体值*/
toolClass[10] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[10] = false;//是否添加到创造标签下
canPlaceOnCeiling[10] = true;//是否能被放置在天花板上
canPlaceOnFloor[10] = true;//是否能被放置在地板上
canPlaceOnWall[10] = true;//是否能被放置在墙面上
canSilkHarvest[10] = true;//是否能被精准采集
hasCollision[10] = true;//是否有碰撞箱
hasTileEntity[10] = false;//是否有方块实体值
isBeaconBase[10] = false;//是否能成为信标基座
isBurning[10] = false;//是否能点燃并造成火焰伤害
isFireSource[10] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[10] = false;//是否能成为树干
tileTransparent[10] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[10] = "StoneDecayingRoomWall2_2.png";//西面贴图
textureFileXP[10] = "StoneDecayingRoomWall0_1.png";//东面贴图
textureFileYN[10] = "StoneDecayingRoomWall0_1.png";//底部贴图
textureFileYP[10] = "StoneDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[10] = "StoneDecayingRoomWall3_3.png";//北面贴图
textureFileZP[10] = "StoneDecayingRoomWall3_1.png";//南面贴图

/*触发器*/
onClicked[10] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[10] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据11*/
/*属性*/
drop[11] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[11] = "0";//经验掉落
fireSpreadSpeed[11] = 10;//火焰蔓延速度
flammability[11] = 10;//易燃性
fortuneModifier[11] = 0;//时运采集增产
hardness[11] = 2;//空手破坏时间
harvestLevel[11] = 1;//挖掘等级
information[11] = "§8迎接更好的墙壁吧";//显示信息
light[11] = 0;//光照强度
pick[11] = "StoneDecayingRoomWall2_:11 1";//鼠标中键获得方块
/*tileEntity[11] = "";//方块实体值*/
toolClass[11] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[11] = false;//是否添加到创造标签下
canPlaceOnCeiling[11] = true;//是否能被放置在天花板上
canPlaceOnFloor[11] = true;//是否能被放置在地板上
canPlaceOnWall[11] = true;//是否能被放置在墙面上
canSilkHarvest[11] = true;//是否能被精准采集
hasCollision[11] = true;//是否有碰撞箱
hasTileEntity[11] = false;//是否有方块实体值
isBeaconBase[11] = false;//是否能成为信标基座
isBurning[11] = false;//是否能点燃并造成火焰伤害
isFireSource[11] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[11] = false;//是否能成为树干
tileTransparent[11] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[11] = "StoneDecayingRoomWall2_1.png";//西面贴图
textureFileXP[11] = "StoneDecayingRoomWall0_1.png";//东面贴图
textureFileYN[11] = "StoneDecayingRoomWall2_4.png";//底部贴图
textureFileYP[11] = "StoneDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[11] = "StoneDecayingRoomWall2_3.png";//北面贴图
textureFileZP[11] = "StoneDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[11] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[11] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据12*/
/*属性*/
drop[12] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[12] = "0";//经验掉落
fireSpreadSpeed[12] = 10;//火焰蔓延速度
flammability[12] = 10;//易燃性
fortuneModifier[12] = 0;//时运采集增产
hardness[12] = 2;//空手破坏时间
harvestLevel[12] = 1;//挖掘等级
information[12] = "§8迎接更好的墙壁吧";//显示信息
light[12] = 0;//光照强度
pick[12] = "StoneDecayingRoomWall2_:12 1";//鼠标中键获得方块
/*tileEntity[12] = "";//方块实体值*/
toolClass[12] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[12] = false;//是否添加到创造标签下
canPlaceOnCeiling[12] = true;//是否能被放置在天花板上
canPlaceOnFloor[12] = true;//是否能被放置在地板上
canPlaceOnWall[12] = true;//是否能被放置在墙面上
canSilkHarvest[12] = true;//是否能被精准采集
hasCollision[12] = true;//是否有碰撞箱
hasTileEntity[12] = false;//是否有方块实体值
isBeaconBase[12] = false;//是否能成为信标基座
isBurning[12] = false;//是否能点燃并造成火焰伤害
isFireSource[12] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[12] = false;//是否能成为树干
tileTransparent[12] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[12] = "StoneDecayingRoomWall2_3.png";//西面贴图
textureFileXP[12] = "StoneDecayingRoomWall0_1.png";//东面贴图
textureFileYN[12] = "StoneDecayingRoomWall2_1.png";//底部贴图
textureFileYP[12] = "StoneDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[12] = "StoneDecayingRoomWall0_1.png";//北面贴图
textureFileZP[12] = "StoneDecayingRoomWall2_1.png";//南面贴图

/*触发器*/
onClicked[12] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[12] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据13*/
/*属性*/
drop[13] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[13] = "0";//经验掉落
fireSpreadSpeed[13] = 10;//火焰蔓延速度
flammability[13] = 10;//易燃性
fortuneModifier[13] = 0;//时运采集增产
hardness[13] = 2;//空手破坏时间
harvestLevel[13] = 1;//挖掘等级
information[13] = "§8迎接更好的墙壁吧";//显示信息
light[13] = 0;//光照强度
pick[13] = "StoneDecayingRoomWall2_:13 1";//鼠标中键获得方块
/*tileEntity[13] = "";//方块实体值*/
toolClass[13] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[13] = false;//是否添加到创造标签下
canPlaceOnCeiling[13] = true;//是否能被放置在天花板上
canPlaceOnFloor[13] = true;//是否能被放置在地板上
canPlaceOnWall[13] = true;//是否能被放置在墙面上
canSilkHarvest[13] = true;//是否能被精准采集
hasCollision[13] = true;//是否有碰撞箱
hasTileEntity[13] = false;//是否有方块实体值
isBeaconBase[13] = false;//是否能成为信标基座
isBurning[13] = false;//是否能点燃并造成火焰伤害
isFireSource[13] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[13] = false;//是否能成为树干
tileTransparent[13] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[13] = "StoneDecayingRoomWall2_4.png";//西面贴图
textureFileXP[13] = "StoneDecayingRoomWall0_1.png";//东面贴图
textureFileYN[13] = "StoneDecayingRoomWall0_1.png";//底部贴图
textureFileYP[13] = "StoneDecayingRoomWall2_4.png";//顶部贴图
textureFileZN[13] = "StoneDecayingRoomWall2_6.png";//北面贴图
textureFileZP[13] = "StoneDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[13] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[13] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据14*/
/*属性*/
drop[14] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[14] = "0";//经验掉落
fireSpreadSpeed[14] = 10;//火焰蔓延速度
flammability[14] = 10;//易燃性
fortuneModifier[14] = 0;//时运采集增产
hardness[14] = 2;//空手破坏时间
harvestLevel[14] = 1;//挖掘等级
information[14] = "§8迎接更好的墙壁吧";//显示信息
light[14] = 0;//光照强度
pick[14] = "StoneDecayingRoomWall2_:14 1";//鼠标中键获得方块
/*tileEntity[14] = "";//方块实体值*/
toolClass[14] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[14] = false;//是否添加到创造标签下
canPlaceOnCeiling[14] = true;//是否能被放置在天花板上
canPlaceOnFloor[14] = true;//是否能被放置在地板上
canPlaceOnWall[14] = true;//是否能被放置在墙面上
canSilkHarvest[14] = true;//是否能被精准采集
hasCollision[14] = true;//是否有碰撞箱
hasTileEntity[14] = false;//是否有方块实体值
isBeaconBase[14] = false;//是否能成为信标基座
isBurning[14] = false;//是否能点燃并造成火焰伤害
isFireSource[14] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[14] = false;//是否能成为树干
tileTransparent[14] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[14] = "StoneDecayingRoomWall2_6.png";//西面贴图
textureFileXP[14] = "StoneDecayingRoomWall0_1.png";//东面贴图
textureFileYN[14] = "StoneDecayingRoomWall0_1.png";//底部贴图
textureFileYP[14] = "StoneDecayingRoomWall2_1.png";//顶部贴图
textureFileZN[14] = "StoneDecayingRoomWall0_1.png";//北面贴图
textureFileZP[14] = "StoneDecayingRoomWall2_4.png";//南面贴图

/*触发器*/
onClicked[14] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[14] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据15*/
/*属性*/
drop[15] = "jinshucraft:StoneDecayingRoomWall1_";//掉落物
expDrop[15] = "0";//经验掉落
fireSpreadSpeed[15] = 10;//火焰蔓延速度
flammability[15] = 10;//易燃性
fortuneModifier[15] = 0;//时运采集增产
hardness[15] = 2;//空手破坏时间
harvestLevel[15] = 1;//挖掘等级
information[15] = "§8迎接更好的墙壁吧";//显示信息
light[15] = 0;//光照强度
pick[15] = "StoneDecayingRoomWall2_:15 1";//鼠标中键获得方块
/*tileEntity[15] = "";//方块实体值*/
toolClass[15] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[15] = false;//是否添加到创造标签下
canPlaceOnCeiling[15] = true;//是否能被放置在天花板上
canPlaceOnFloor[15] = true;//是否能被放置在地板上
canPlaceOnWall[15] = true;//是否能被放置在墙面上
canSilkHarvest[15] = true;//是否能被精准采集
hasCollision[15] = true;//是否有碰撞箱
hasTileEntity[15] = false;//是否有方块实体值
isBeaconBase[15] = false;//是否能成为信标基座
isBurning[15] = false;//是否能点燃并造成火焰伤害
isFireSource[15] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[15] = false;//是否能成为树干
tileTransparent[15] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[15] = "StoneDecayingRoomWall2_5.png";//西面贴图
textureFileXP[15] = "StoneDecayingRoomWall0_1.png";//东面贴图
textureFileYN[15] = "StoneDecayingRoomWall3_1.png";//底部贴图
textureFileYP[15] = "StoneDecayingRoomWall3_1.png";//顶部贴图
textureFileZN[15] = "StoneDecayingRoomWall0_1.png";//北面贴图
textureFileZP[15] = "StoneDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[15] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};mod.loadScript('StoneDecayingRoomWallOpenGUI.js');";
onNeighborChange[15] = "mod.loadScript('StoneDecayingRoomLinkTextures.js');";
