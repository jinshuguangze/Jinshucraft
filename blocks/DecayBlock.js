/*腐化方块*/
/*通用属性*/
creativeTab = "_Wood";//所在标签
material = "grass";//材料类型
maxStack = 64;//最大堆叠
name = "DecayBlock";//名称
opacity = 255;//遮光率
slipperiness = 0.6;//粗糙度
stepSound = "grass";//行走声音
tickrate = "5";//方块更新速率
blocksPiston = true;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = false;//是否使用透明纹理

/*特殊*/
hasAntiGravity[0] = false;
hasAntiGravity[1] = false;
hasAntiGravity[2] = false;
hasAntiGravity[3] = false;
hasAntiGravity[4] = false;
hasAntiGravity[5] = false;
hasAntiGravity[6] = false;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "jinshucraft:itemPineNeedles 6";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 10;//火焰蔓延速度
flammability[0] = 30;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 0.8;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8细菌好多，别碰它";//显示信息
light[0] = 0;//光照强度
pick[0] = "DecayBlock:0 1";//鼠标中键获得方块
resistance[0] = 0;//爆炸抗性
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
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
textureFileXN[0] = "DecayBlock0.png";//西面贴图
textureFileXP[0] = "DecayBlock0.png";//东面贴图
textureFileYN[0] = "DecayBlock0.png";//底部贴图
textureFileYP[0] = "DecayBlock0.png";//顶部贴图
textureFileZN[0] = "DecayBlock0.png";//北面贴图
textureFileZP[0] = "DecayBlock0.png";//南面贴图

/*触发器*/
onClicked[0] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onUpdate[0] = "mod.loadScript('DecayingCheck.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "jinshucraft:itemCocoaLeaves 3";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 10;//火焰蔓延速度
flammability[1] = 30;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 0.8;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8细菌好多，别碰它";//显示信息
light[1] = 0;//光照强度
pick[1] = "DecayBlock:1 1";//鼠标中键获得方块
resistance[1] = 0;//爆炸抗性
/*tileEntity[1] = "";//方块实体值*/
toolClass[1] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[1] = true;//是否添加到创造标签下
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
textureFileXN[1] = "DecayBlock1.png";//西面贴图
textureFileXP[1] = "DecayBlock1.png";//东面贴图
textureFileYN[1] = "DecayBlock1.png";//底部贴图
textureFileYP[1] = "DecayBlock1.png";//顶部贴图
textureFileZN[1] = "DecayBlock1.png";//北面贴图
textureFileZP[1] = "DecayBlock1.png";//南面贴图

/*触发器*/
onClicked[1] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onUpdate[1] = "mod.loadScript('DecayingCheck.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2*/
/*属性*/
drop[2] = "minecraft:deadbush 4";//掉落物
expDrop[2] = "0";//经验掉落
fireSpreadSpeed[2] = 10;//火焰蔓延速度
flammability[2] = 30;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 0.8;//空手破坏时间
harvestLevel[2] = 0;//挖掘等级
information[2] = "§8细菌好多，别碰它";//显示信息
light[2] = 0;//光照强度
pick[2] = "DecayBlock:2 1";//鼠标中键获得方块
resistance[2] = 0;//爆炸抗性
/*tileEntity[2] = "";//方块实体值*/
toolClass[2] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[2] = true;//是否添加到创造标签下
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
textureFileXN[2] = "DecayBlock2.png";//西面贴图
textureFileXP[2] = "DecayBlock2.png";//东面贴图
textureFileYN[2] = "DecayBlock2.png";//底部贴图
textureFileYP[2] = "DecayBlock2.png";//顶部贴图
textureFileZN[2] = "DecayBlock2.png";//北面贴图
textureFileZP[2] = "DecayBlock2.png";//南面贴图

/*触发器*/
onClicked[2] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onUpdate[2] = "mod.loadScript('DecayingCheck.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3*/
/*属性*/
drop[3] = "minecraft:deadbush 3";//掉落物
expDrop[3] = "0";//经验掉落
fireSpreadSpeed[3] = 10;//火焰蔓延速度
flammability[3] = 30;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 0.8;//空手破坏时间
harvestLevel[3] = 0;//挖掘等级
information[3] = "§8细菌好多，别碰它";//显示信息
light[3] = 0;//光照强度
pick[3] = "DecayBlock:3 1";//鼠标中键获得方块
resistance[3] = 0;//爆炸抗性
/*tileEntity[3] = "";//方块实体值*/
toolClass[3] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[3] = true;//是否添加到创造标签下
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
textureFileXN[3] = "DecayBlock3.png";//西面贴图
textureFileXP[3] = "DecayBlock3.png";//东面贴图
textureFileYN[3] = "DecayBlock3.png";//底部贴图
textureFileYP[3] = "DecayBlock3.png";//顶部贴图
textureFileZN[3] = "DecayBlock3.png";//北面贴图
textureFileZP[3] = "DecayBlock3.png";//南面贴图

/*触发器*/
onClicked[3] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onUpdate[3] = "mod.loadScript('DecayingCheck.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4*/
/*属性*/
drop[4] = "jinshucraft:itemPineCone 4";//掉落物
expDrop[4] = "0";//经验掉落
fireSpreadSpeed[4] = 10;//火焰蔓延速度
flammability[4] = 30;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 0.8;//空手破坏时间
harvestLevel[4] = 0;//挖掘等级
information[4] = "§8细菌好多，别碰它";//显示信息
light[4] = 0;//光照强度
pick[4] = "DecayBlock:4 1";//鼠标中键获得方块
resistance[4] = 0;//爆炸抗性
/*tileEntity[4] = "";//方块实体值*/
toolClass[4] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[4] = true;//是否添加到创造标签下
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
textureFileXN[4] = "DecayBlock4.png";//西面贴图
textureFileXP[4] = "DecayBlock4.png";//东面贴图
textureFileYN[4] = "DecayBlock4.png";//底部贴图
textureFileYP[4] = "DecayBlock4.png";//顶部贴图
textureFileZN[4] = "DecayBlock4.png";//北面贴图
textureFileZP[4] = "DecayBlock4.png";//南面贴图

/*触发器*/
onClicked[4] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onUpdate[4] = "mod.loadScript('DecayingCheck.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据5*/
/*属性*/
drop[5] = "minecraft:dye:3 4";//掉落物
expDrop[5] = "0";//经验掉落
fireSpreadSpeed[5] = 10;//火焰蔓延速度
flammability[5] = 30;//易燃性
fortuneModifier[5] = 0;//时运采集增产
hardness[5] = 0.8;//空手破坏时间
harvestLevel[5] = 0;//挖掘等级
information[5] = "§8细菌好多，别碰它";//显示信息
light[5] = 0;//光照强度
pick[5] = "DecayBlock:5 1";//鼠标中键获得方块
resistance[5] = 0;//爆炸抗性
/*tileEntity[5] = "";//方块实体值*/
toolClass[5] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[5] = true;//是否添加到创造标签下
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
textureFileXN[5] = "DecayBlock5.png";//西面贴图
textureFileXP[5] = "DecayBlock5.png";//东面贴图
textureFileYN[5] = "DecayBlock5.png";//底部贴图
textureFileYP[5] = "DecayBlock5.png";//顶部贴图
textureFileZN[5] = "DecayBlock5.png";//北面贴图
textureFileZP[5] = "DecayBlock5.png";//南面贴图

/*触发器*/
onClicked[5] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onUpdate[5] = "mod.loadScript('DecayingCheck.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据6*/
/*属性*/
drop[6] = "jinshucraft:itemWillowTwig 4";//掉落物
expDrop[6] = "0";//经验掉落
fireSpreadSpeed[6] = 10;//火焰蔓延速度
flammability[6] = 30;//易燃性
fortuneModifier[6] = 0;//时运采集增产
hardness[6] = 0.8;//空手破坏时间
harvestLevel[6] = 0;//挖掘等级
information[6] = "§8细菌好多，别碰它";//显示信息
light[6] = 0;//光照强度
pick[6] = "DecayBlock:6 1";//鼠标中键获得方块
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
textureFileXN[6] = "DecayBlock6.png";//西面贴图
textureFileXP[6] = "DecayBlock6.png";//东面贴图
textureFileYN[6] = "DecayBlock6.png";//底部贴图
textureFileYP[6] = "DecayBlock6.png";//顶部贴图
textureFileZN[6] = "DecayBlock6.png";//北面贴图
textureFileZP[6] = "DecayBlock6.png";//南面贴图

/*触发器*/
onClicked[6] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){mod.loadScript('DecayBlockPlace.js');};";
onUpdate[6] = "mod.loadScript('DecayingCheck.js');";

