/*木制腐化室壁4*/

/*通用属性*/
creativeTab = "_Wood";//所在标签
material = "wood";//材料类型
maxStack = 64;//最大堆叠
name = "WoodenDecayingRoomWall4_";//名称
opacity = 255;//遮光率
resistance[0] = 0.3;//爆炸抗性
slipperiness = 0.6;//粗糙度
stepSound = "wood";//行走声音
tickrate = "20";//方块更新速率
blocksPiston = true;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = false;//是否使用透明纹理

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 10;//火焰蔓延速度
flammability[0] = 30;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 2;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8保温专用";//显示信息
light[0] = 0;//光照强度
pick[0] = "WoodenDecayingRoomWall4_:0 1";//鼠标中键获得方块
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "axe";//破坏工具类型

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
textureFileXN[0] = "WoodenDecayingRoomWall3_1.png";//西面贴图
textureFileXP[0] = "WoodenDecayingRoomWall0_1.png";//东面贴图
textureFileYN[0] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[0] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[0] = "WoodenDecayingRoomWall3_3.png";//北面贴图
textureFileZP[0] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[0] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[0] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 10;//火焰蔓延速度
flammability[1] = 30;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 2;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8保温专用";//显示信息
light[1] = 0;//光照强度
pick[1] = "WoodenDecayingRoomWall4_:1 1";//鼠标中键获得方块
/*tileEntity[1] = "";//方块实体值*/
toolClass[1] = "axe";//破坏工具类型

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
textureFileXN[1] = "WoodenDecayingRoomWall3_3.png";//西面贴图
textureFileXP[1] = "WoodenDecayingRoomWall0_1.png";//东面贴图
textureFileYN[1] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[1] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[1] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[1] = "WoodenDecayingRoomWall3_1.png";//南面贴图

/*触发器*/
onClicked[1] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[1] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2*/
/*属性*/
drop[2] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[2] = "0";//经验掉落
fireSpreadSpeed[2] = 10;//火焰蔓延速度
flammability[2] = 30;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 2;//空手破坏时间
harvestLevel[2] = 0;//挖掘等级
information[2] = "§8保温专用";//显示信息
light[2] = 0;//光照强度
pick[2] = "WoodenDecayingRoomWall4_:2 1";//鼠标中键获得方块
/*tileEntity[2] = "";//方块实体值*/
toolClass[2] = "axe";//破坏工具类型

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
textureFileXN[2] = "WoodenDecayingRoomWall3_2.png";//西面贴图
textureFileXP[2] = "WoodenDecayingRoomWall0_1.png";//东面贴图
textureFileYN[2] = "WoodenDecayingRoomWall3_1.png";//底部贴图
textureFileYP[2] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[2] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[2] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[2] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[2] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3*/
/*属性*/
drop[3] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[3] = "0";//经验掉落
fireSpreadSpeed[3] = 10;//火焰蔓延速度
flammability[3] = 30;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 2;//空手破坏时间
harvestLevel[3] = 0;//挖掘等级
information[3] = "§8保温专用";//显示信息
light[3] = 0;//光照强度
pick[3] = "WoodenDecayingRoomWall4_:3 1";//鼠标中键获得方块
/*tileEntity[3] = "";//方块实体值*/
toolClass[3] = "axe";//破坏工具类型

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
textureFileXN[3] = "WoodenDecayingRoomWall3_4.png";//西面贴图
textureFileXP[3] = "WoodenDecayingRoomWall0_1.png";//东面贴图
textureFileYN[3] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[3] = "WoodenDecayingRoomWall3_1.png";//顶部贴图
textureFileZN[3] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[3] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[3] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[3] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4*/
/*属性*/
drop[4] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[4] = "0";//经验掉落
fireSpreadSpeed[4] = 10;//火焰蔓延速度
flammability[4] = 30;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 2;//空手破坏时间
harvestLevel[4] = 0;//挖掘等级
information[4] = "§8保温专用";//显示信息
light[4] = 0;//光照强度
pick[4] = "WoodenDecayingRoomWall4_:4 1";//鼠标中键获得方块
/*tileEntity[4] = "";//方块实体值*/
toolClass[4] = "axe";//破坏工具类型

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
textureFileXN[4] = "WoodenDecayingRoomWall0_1.png";//西面贴图
textureFileXP[4] = "WoodenDecayingRoomWall3_3.png";//东面贴图
textureFileYN[4] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[4] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[4] = "WoodenDecayingRoomWall3_1.png";//北面贴图
textureFileZP[4] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[4] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[4] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据5*/
/*属性*/
drop[5] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[5] = "0";//经验掉落
fireSpreadSpeed[5] = 10;//火焰蔓延速度
flammability[5] = 30;//易燃性
fortuneModifier[5] = 0;//时运采集增产
hardness[5] = 2;//空手破坏时间
harvestLevel[5] = 0;//挖掘等级
information[5] = "§8保温专用";//显示信息
light[5] = 0;//光照强度
pick[5] = "WoodenDecayingRoomWall4_:5 1";//鼠标中键获得方块
/*tileEntity[5] = "";//方块实体值*/
toolClass[5] = "axe";//破坏工具类型

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
textureFileXN[5] = "WoodenDecayingRoomWall0_1.png";//西面贴图
textureFileXP[5] = "WoodenDecayingRoomWall3_1.png";//东面贴图
textureFileYN[5] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[5] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[5] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[5] = "WoodenDecayingRoomWall3_3.png";//南面贴图

/*触发器*/
onClicked[5] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[5] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据6*/
/*属性*/
drop[6] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[6] = "0";//经验掉落
fireSpreadSpeed[6] = 10;//火焰蔓延速度
flammability[6] = 30;//易燃性
fortuneModifier[6] = 0;//时运采集增产
hardness[6] = 2;//空手破坏时间
harvestLevel[6] = 0;//挖掘等级
information[6] = "§8保温专用";//显示信息
light[6] = 0;//光照强度
pick[6] = "WoodenDecayingRoomWall4_:6 1";//鼠标中键获得方块
/*tileEntity[6] = "";//方块实体值*/
toolClass[6] = "axe";//破坏工具类型

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
textureFileXN[6] = "WoodenDecayingRoomWall0_1.png";//西面贴图
textureFileXP[6] = "WoodenDecayingRoomWall3_2.png";//东面贴图
textureFileYN[6] = "WoodenDecayingRoomWall3_3.png";//底部贴图
textureFileYP[6] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[6] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[6] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[6] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[6] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据7*/
/*属性*/
drop[7] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[7] = "0";//经验掉落
fireSpreadSpeed[7] = 10;//火焰蔓延速度
flammability[7] = 30;//易燃性
fortuneModifier[7] = 0;//时运采集增产
hardness[7] = 2;//空手破坏时间
harvestLevel[7] = 0;//挖掘等级
information[7] = "§8保温专用";//显示信息
light[7] = 0;//光照强度
pick[7] = "WoodenDecayingRoomWall4_:7 1";//鼠标中键获得方块
/*tileEntity[7] = "";//方块实体值*/
toolClass[7] = "axe";//破坏工具类型

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
textureFileXN[7] = "WoodenDecayingRoomWall0_1.png";//西面贴图
textureFileXP[7] = "WoodenDecayingRoomWall3_4.png";//东面贴图
textureFileYN[7] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[7] = "WoodenDecayingRoomWall3_3.png";//顶部贴图
textureFileZN[7] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[7] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[7] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[7] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据8*/
/*属性*/
drop[8] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[8] = "0";//经验掉落
fireSpreadSpeed[8] = 10;//火焰蔓延速度
flammability[8] = 30;//易燃性
fortuneModifier[8] = 0;//时运采集增产
hardness[8] = 2;//空手破坏时间
harvestLevel[8] = 0;//挖掘等级
information[8] = "§8保温专用";//显示信息
light[8] = 0;//光照强度
pick[8] = "WoodenDecayingRoomWall4_:8 1";//鼠标中键获得方块
/*tileEntity[8] = "";//方块实体值*/
toolClass[8] = "axe";//破坏工具类型

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
textureFileXN[8] = "WoodenDecayingRoomWall4_1.png";//西面贴图
textureFileXP[8] = "WoodenDecayingRoomWall4_1.png";//东面贴图
textureFileYN[8] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[8] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[8] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[8] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[8] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[8] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据9*/
/*属性*/
drop[9] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[9] = "0";//经验掉落
fireSpreadSpeed[9] = 10;//火焰蔓延速度
flammability[9] = 30;//易燃性
fortuneModifier[9] = 0;//时运采集增产
hardness[9] = 2;//空手破坏时间
harvestLevel[9] = 0;//挖掘等级
information[9] = "§8保温专用";//显示信息
light[9] = 0;//光照强度
pick[9] = "WoodenDecayingRoomWall4_:9 1";//鼠标中键获得方块
/*tileEntity[9] = "";//方块实体值*/
toolClass[9] = "axe";//破坏工具类型

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
textureFileXN[9] = "WoodenDecayingRoomWall0_1.png";//西面贴图
textureFileXP[9] = "WoodenDecayingRoomWall0_1.png";//东面贴图
textureFileYN[9] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[9] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[9] = "WoodenDecayingRoomWall4_1.png";//北面贴图
textureFileZP[9] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[9] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[9] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据10*/
/*属性*/
drop[10] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[10] = "0";//经验掉落
fireSpreadSpeed[10] = 10;//火焰蔓延速度
flammability[10] = 30;//易燃性
fortuneModifier[10] = 0;//时运采集增产
hardness[10] = 2;//空手破坏时间
harvestLevel[10] = 0;//挖掘等级
information[10] = "§8保温专用";//显示信息
light[10] = 0;//光照强度
pick[10] = "WoodenDecayingRoomWall4_:10 1";//鼠标中键获得方块
/*tileEntity[10] = "";//方块实体值*/
toolClass[10] = "axe";//破坏工具类型

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
textureFileXN[10] = "WoodenDecayingRoomWall0_1.png";//西面贴图
textureFileXP[10] = "WoodenDecayingRoomWall0_1.png";//东面贴图
textureFileYN[10] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[10] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[10] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[10] = "WoodenDecayingRoomWall4_1.png";//南面贴图

/*触发器*/
onClicked[10] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[10] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据11*/
/*属性*/
drop[11] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[11] = "0";//经验掉落
fireSpreadSpeed[11] = 10;//火焰蔓延速度
flammability[11] = 30;//易燃性
fortuneModifier[11] = 0;//时运采集增产
hardness[11] = 2;//空手破坏时间
harvestLevel[11] = 0;//挖掘等级
information[11] = "§8保温专用";//显示信息
light[11] = 0;//光照强度
pick[11] = "WoodenDecayingRoomWall4_:11 1";//鼠标中键获得方块
/*tileEntity[11] = "";//方块实体值*/
toolClass[11] = "axe";//破坏工具类型

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
textureFileXN[11] = "WoodenDecayingRoomWall0_1.png";//西面贴图
textureFileXP[11] = "WoodenDecayingRoomWall0_1.png";//东面贴图
textureFileYN[11] = "WoodenDecayingRoomWall4_1.png";//底部贴图
textureFileYP[11] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[11] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[11] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[11] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[11] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据12*/
/*属性*/
drop[12] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[12] = "0";//经验掉落
fireSpreadSpeed[12] = 10;//火焰蔓延速度
flammability[12] = 30;//易燃性
fortuneModifier[12] = 0;//时运采集增产
hardness[12] = 2;//空手破坏时间
harvestLevel[12] = 0;//挖掘等级
information[12] = "§8保温专用";//显示信息
light[12] = 0;//光照强度
pick[12] = "WoodenDecayingRoomWall4_:12 1";//鼠标中键获得方块
/*tileEntity[12] = "";//方块实体值*/
toolClass[12] = "axe";//破坏工具类型

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
textureFileXN[12] = "WoodenDecayingRoomWall0_1.png";//西面贴图
textureFileXP[12] = "WoodenDecayingRoomWall0_1.png";//东面贴图
textureFileYN[12] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[12] = "WoodenDecayingRoomWall4_1.png";//顶部贴图
textureFileZN[12] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[12] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[12] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[12] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据13*/
/*属性*/
drop[13] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[13] = "0";//经验掉落
fireSpreadSpeed[13] = 10;//火焰蔓延速度
flammability[13] = 30;//易燃性
fortuneModifier[13] = 0;//时运采集增产
hardness[13] = 2;//空手破坏时间
harvestLevel[13] = 0;//挖掘等级
information[13] = "§8保温专用";//显示信息
light[13] = 0;//光照强度
pick[13] = "WoodenDecayingRoomWall4_:13 1";//鼠标中键获得方块
/*tileEntity[13] = "";//方块实体值*/
toolClass[13] = "axe";//破坏工具类型

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
textureFileXN[13] = "WoodenDecayingRoomWall4_1.png";//西面贴图
textureFileXP[13] = "WoodenDecayingRoomWall0_1.png";//东面贴图
textureFileYN[13] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[13] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[13] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[13] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[13] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[13] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据14*/
/*属性*/
drop[14] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[14] = "0";//经验掉落
fireSpreadSpeed[14] = 10;//火焰蔓延速度
flammability[14] = 30;//易燃性
fortuneModifier[14] = 0;//时运采集增产
hardness[14] = 2;//空手破坏时间
harvestLevel[14] = 0;//挖掘等级
information[14] = "§8保温专用";//显示信息
light[14] = 0;//光照强度
pick[14] = "WoodenDecayingRoomWall4_:14 1";//鼠标中键获得方块
/*tileEntity[14] = "";//方块实体值*/
toolClass[14] = "axe";//破坏工具类型

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
textureFileXN[14] = "WoodenDecayingRoomWall0_1.png";//西面贴图
textureFileXP[14] = "WoodenDecayingRoomWall4_1.png";//东面贴图
textureFileYN[14] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[14] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[14] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[14] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[14] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[14] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据15*/
/*属性*/
drop[15] = "jinshucraft:WoodenDecayingRoomWall1_";//掉落物
expDrop[15] = "0";//经验掉落
fireSpreadSpeed[15] = 10;//火焰蔓延速度
flammability[15] = 30;//易燃性
fortuneModifier[15] = 0;//时运采集增产
hardness[15] = 2;//空手破坏时间
harvestLevel[15] = 0;//挖掘等级
information[15] = "§8保温专用";//显示信息
light[15] = 0;//光照强度
pick[15] = "WoodenDecayingRoomWall4_:15 1";//鼠标中键获得方块
/*tileEntity[15] = "";//方块实体值*/
toolClass[15] = "axe";//破坏工具类型

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
textureFileXN[15] = "WoodenDecayingRoomWall0_1.png";//西面贴图
textureFileXP[15] = "WoodenDecayingRoomWall0_1.png";//东面贴图
textureFileYN[15] = "WoodenDecayingRoomWall0_1.png";//底部贴图
textureFileYP[15] = "WoodenDecayingRoomWall0_1.png";//顶部贴图
textureFileZN[15] = "WoodenDecayingRoomWall0_1.png";//北面贴图
textureFileZP[15] = "WoodenDecayingRoomWall0_1.png";//南面贴图

/*触发器*/
onClicked[15] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onNeighborChange[15] = "mod.loadScript('WoodenDecayingRoomLinkTextures.js');";