/*石制培育台*/

/*通用属性*/
creativeTab = "_Stone";//所在标签
material = "rock";//材料类型
maxStack = 64;//最大堆叠
name = "StoneNurtureBench";//名称
opacity = 255;//遮光率
slipperiness = 0.6;//粗糙度
stepSound = "stone";//行走声音
tickrate = "60";//方块更新速率
blocksPiston = false;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = false;//是否使用透明纹理

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "jinshucraft:StoneNurtureBench";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 5;//火焰蔓延速度
flammability[0] = 10;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 3.5;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8健康状态";//显示信息
light[0] = 0;//光照强度
pick[0] = "StoneNurtureBench:0 1";//鼠标中键获得方块
resistance[0] = 0.0;//爆炸抗性
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] = false;//是否能被精准采集
hasCollision[0] = true;//是否有碰撞箱
hasTileEntity[0] = false;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = false;//是否能成为树干
tileTransparent[0] = true;//是否拥有连接处的渲染


/*贴图*/
textureFileXN[0] = "StoneNurtureBench.png";//西面贴图
textureFileXP[0] = "StoneNurtureBench.png";//东面贴图
textureFileYN[0] = "StoneWorkingTable_Bottom.png";//底部贴图
textureFileYP[0] = "StoneNurtureBench_Top.png";//顶部贴图
textureFileZN[0] = "StoneNurtureBench.png";//北面贴图
textureFileZP[0] = "StoneNurtureBench.png";//南面贴图

/*触发器*/
onClicked[0] = "mod.loadScript('StoneNurtureBenchPlant.js');";
onActivated[0] = "if(player.getItemName(player.getCurrentSlot())==null){world.setBlockAndMetadata(position,'jinshucraft:StoneWorkingTable',8);world.spawnItem(position,'minecraft:dirt',1,0);};";
onUpdate[0] = "mod.loadScript('StoneNurtureBenchUpdate.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1(缺水状态)*/
/*属性*/
drop[1] = "jinshucraft:StoneNurtureBench:1";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 5;//火焰蔓延速度
flammability[1] = 10;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 3.5;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8缺水状态";//显示信息
light[1] = 0;//光照强度
pick[1] = "StoneNurtureBench:1 1";//鼠标中键获得方块
resistance[1] = 0.0;//爆炸抗性
/*tileEntity[1] = "";//方块实体值*/
toolClass[1] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[1] = true;//是否添加到创造标签下
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = true;//是否能被放置在墙面上
canSilkHarvest[1] = false;//是否能被精准采集
hasCollision[1] = true;//是否有碰撞箱
hasTileEntity[1] = false;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = false;//是否能成为树干
tileTransparent[1] = true;//是否拥有连接处的渲染


/*贴图*/
textureFileXN[1] = "StoneNurtureBench_waterless.png";//西面贴图
textureFileXP[1] = "StoneNurtureBench_waterless.png";//东面贴图
textureFileYN[1] = "StoneWorkingTable_Bottom.png";//底部贴图
textureFileYP[1] = "StoneNurtureBench_waterless_Top.png";//顶部贴图
textureFileZN[1] = "StoneNurtureBench_waterless.png";//北面贴图
textureFileZP[1] = "StoneNurtureBench_waterless.png";//南面贴图

/*触发器*/
onClicked[1] = "mod.loadScript('StoneNurtureBenchPlant.js');";
onActivated[1] = "if(player.getItemName(player.getCurrentSlot())=='jinshucraft:itemLeavesBucket_water'){position.y++;mod.loadScript('BonemealHandler.js');position.y--;world.setBlock(position,'jinshucraft:StoneNurtureBench');player.removeFromSlot(player.getCurrentSlot(),1);player.add('jinshucraft:itemLeavesBucket',1,0);};";
onUpdate[1] = "mod.loadScript('StoneNurtureBenchUpdate.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2(杂草状态)*/
/*属性*/
drop[2] = "jinshucraft:StoneNurtureBench:2";//掉落物
expDrop[2] = "0";//经验掉落
fireSpreadSpeed[2] = 5;//火焰蔓延速度
flammability[2] = 10;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 3.5;//空手破坏时间
harvestLevel[2] = 0;//挖掘等级
information[2] = "§8杂草状态";//显示信息
light[2] = 0;//光照强度
pick[2] = "StoneNurtureBench:2 1";//鼠标中键获得方块
resistance[2] = 0.0;//爆炸抗性
/*tileEntity[2] = "";//方块实体值*/
toolClass[2] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[2] = true;//是否添加到创造标签下
canPlaceOnCeiling[2] = true;//是否能被放置在天花板上
canPlaceOnFloor[2] = true;//是否能被放置在地板上
canPlaceOnWall[2] = true;//是否能被放置在墙面上
canSilkHarvest[2] = false;//是否能被精准采集
hasCollision[2] = true;//是否有碰撞箱
hasTileEntity[2] = false;//是否有方块实体值
isBeaconBase[2] = false;//是否能成为信标基座
isBurning[2] = false;//是否能点燃并造成火焰伤害
isFireSource[2] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[2] = false;//是否能成为树干
tileTransparent[2] = true;//是否拥有连接处的渲染


/*贴图*/
textureFileXN[2] = "StoneNurtureBench_grass.png";//西面贴图
textureFileXP[2] = "StoneNurtureBench_grass.png";//东面贴图
textureFileYN[2] = "StoneWorkingTable_Bottom.png";//底部贴图
textureFileYP[2] = "StoneNurtureBench_grass_Top.png";//顶部贴图
textureFileZN[2] = "StoneNurtureBench_grass.png";//北面贴图
textureFileZP[2] = "StoneNurtureBench_grass.png";//南面贴图

/*触发器*/
onClicked[2] = "mod.loadScript('StoneNurtureBenchPlant.js');";
onActivated[2] = "if(mod.isItemInOreDictClass(player.getItemName(player.getCurrentSlot()),player.getItemMetadata(player.getCurrentSlot()),'itemWeed')){if(Math.random()<0.2){position.y++;mod.loadScript('BonemealHandler.js');position.y--;world.setBlock(position,'jinshucraft:StoneNurtureBench');};if(Math.random()<0.05){player.removeFromSlot(player.getCurrentSlot(),1);}};";
onUpdate[2] = "mod.loadScript('StoneNurtureBenchUpdate.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3(结块状态)*/
/*属性*/
drop[3] = "jinshucraft:StoneNurtureBench:3";//掉落物
expDrop[3] = "0";//经验掉落
fireSpreadSpeed[3] = 5;//火焰蔓延速度
flammability[3] = 10;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 3.5;//空手破坏时间
harvestLevel[3] = 0;//挖掘等级
information[3] = "§8结块状态";//显示信息
light[3] = 0;//光照强度
pick[3] = "StoneNurtureBench:3 1";//鼠标中键获得方块
resistance[3] = 0.0;//爆炸抗性
/*tileEntity[3] = "";//方块实体值*/
toolClass[3] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[3] = true;//是否添加到创造标签下
canPlaceOnCeiling[3] = true;//是否能被放置在天花板上
canPlaceOnFloor[3] = true;//是否能被放置在地板上
canPlaceOnWall[3] = true;//是否能被放置在墙面上
canSilkHarvest[3] = false;//是否能被精准采集
hasCollision[3] = true;//是否有碰撞箱
hasTileEntity[3] = false;//是否有方块实体值
isBeaconBase[3] = false;//是否能成为信标基座
isBurning[3] = false;//是否能点燃并造成火焰伤害
isFireSource[3] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[3] = false;//是否能成为树干
tileTransparent[3] = true;//是否拥有连接处的渲染


/*贴图*/
textureFileXN[3] = "StoneNurtureBench_caking.png";//西面贴图
textureFileXP[3] = "StoneNurtureBench_caking.png";//东面贴图
textureFileYN[3] = "StoneWorkingTable_Bottom.png";//底部贴图
textureFileYP[3] = "StoneNurtureBench_caking_Top.png";//顶部贴图
textureFileZN[3] = "StoneNurtureBench_caking.png";//北面贴图
textureFileZP[3] = "StoneNurtureBench_caking.png";//南面贴图

/*触发器*/
onClicked[3] = "mod.loadScript('StoneNurtureBenchPlant.js');";
onActivated[3] = "if(mod.isItemInOreDictClass(player.getItemName(player.getCurrentSlot()),player.getItemMetadata(player.getCurrentSlot()),'itemHoe')){if(Math.random()<0.5){position.y++;mod.loadScript('BonemealHandler.js');position.y--;world.setBlock(position,'jinshucraft:StoneNurtureBench');};player.damageItem(player.getCurrentSlot(),1);};";
onUpdate[3] = "mod.loadScript('StoneNurtureBenchUpdate.js');";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4(缺肥状态)*/
/*属性*/
drop[4] = "jinshucraft:StoneNurtureBench:4";//掉落物
expDrop[4] = "0";//经验掉落
fireSpreadSpeed[4] = 5;//火焰蔓延速度
flammability[4] = 10;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 3.5;//空手破坏时间
harvestLevel[4] = 0;//挖掘等级
information[4] = "§8缺肥状态";//显示信息
light[4] = 0;//光照强度
pick[4] = "StoneNurtureBench:4 1";//鼠标中键获得方块
resistance[4] = 0.0;//爆炸抗性
/*tileEntity[4] = "";//方块实体值*/
toolClass[4] = "pickaxe";//破坏工具类型

/*布尔值*/
addToCreative[4] = true;//是否添加到创造标签下
canPlaceOnCeiling[4] = true;//是否能被放置在天花板上
canPlaceOnFloor[4] = true;//是否能被放置在地板上
canPlaceOnWall[4] = true;//是否能被放置在墙面上
canSilkHarvest[4] = false;//是否能被精准采集
hasCollision[4] = true;//是否有碰撞箱
hasTileEntity[4] = false;//是否有方块实体值
isBeaconBase[4] = false;//是否能成为信标基座
isBurning[4] = false;//是否能点燃并造成火焰伤害
isFireSource[4] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[4] = false;//是否能成为树干
tileTransparent[4] = true;//是否拥有连接处的渲染


/*贴图*/
textureFileXN[4] = "StoneNurtureBench_fertilizerless.png";//西面贴图
textureFileXP[4] = "StoneNurtureBench_fertilizerless.png";//东面贴图
textureFileYN[4] = "StoneWorkingTable_Bottom.png";//底部贴图
textureFileYP[4] = "StoneNurtureBench_fertilizerless_Top.png";//顶部贴图
textureFileZN[4] = "StoneNurtureBench_fertilizerless.png";//北面贴图
textureFileZP[4] = "StoneNurtureBench_fertilizerless.png";//南面贴图

/*触发器*/
onClicked[4] = "mod.loadScript('StoneNurtureBenchPlant.js');";
onActivated[4] = "if(mod.isItemInOreDictClass(player.getItemName(player.getCurrentSlot()),player.getItemMetadata(player.getCurrentSlot()),'itemfertilizer')){if(Math.random()<0.3){position.y++;mod.loadScript('BonemealHandler.js');position.y--;world.setBlock(position,'jinshucraft:StoneNurtureBench');};player.removeFromSlot(player.getCurrentSlot(),1);};";
onUpdate[4] = "mod.loadScript('StoneNurtureBenchUpdate.js');";