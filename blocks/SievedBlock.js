/*筛后方块*/
/*通用属性*/
creativeTab = "_Stone";//所在标签
material = "sand";//材料类型
maxStack = 64;//最大堆叠
name = "SievedBlock";//名称
opacity = 255;//遮光率
slipperiness = 0.6;//粗糙度
stepSound = "sand";//行走声音
tickrate = "1";//方块更新速率
blocksPiston = true;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = false;//是否使用透明纹理

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "";//掉落物
expDrop[0] = "2";//经验掉落
fireSpreadSpeed[0] = 10;//火焰蔓延速度
flammability[0] = 30;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 1.0;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8来自§c腐殖土";//显示信息
light[0] = 0;//光照强度
pick[0] = "SievedBlock:0 1";//鼠标中键获得方块
resistance[0] = 0;//爆炸抗性
tileEntity[0] = "entitySievedBlock";//方块实体值
toolClass[0] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] =false;//是否能被精准采集
hasCollision[0] = true;//是否有碰撞箱
hasTileEntity[0] = true;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = false;//是否能成为树干
tileTransparent[0] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[0] = "SievedBlock0.png";//西面贴图
textureFileXP[0] = "SievedBlock0.png";//东面贴图
textureFileYN[0] = "SievedBlock0.png";//底部贴图
textureFileYP[0] = "SievedBlock0.png";//顶部贴图
textureFileZN[0] = "SievedBlock0.png";//北面贴图
textureFileZP[0] = "SievedBlock0.png";//南面贴图

/*触发器*/
onBreak[0] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),0);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),0);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),0);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),0);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),0);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),0);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),0);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "";//掉落物
expDrop[1] = "2";//经验掉落
fireSpreadSpeed[1] = 10;//火焰蔓延速度
flammability[1] = 30;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 1.0;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8来自§1沼泽泥";//显示信息
light[1] = 0;//光照强度
pick[1] = "SievedBlock:1 1";//鼠标中键获得方块
resistance[1] = 0;//爆炸抗性
tileEntity[1] = "entitySievedBlock";//方块实体值
toolClass[1] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[1] = true;//是否添加到创造标签下
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = true;//是否能被放置在墙面上
canSilkHarvest[1] = false;//是否能被精准采集
hasCollision[1] = true;//是否有碰撞箱
hasTileEntity[1] = true;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = false;//是否能成为树干
tileTransparent[1] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[1] = "SievedBlock1.png";//西面贴图
textureFileXP[1] = "SievedBlock1.png";//东面贴图
textureFileYN[1] = "SievedBlock1.png";//底部贴图
textureFileYP[1] = "SievedBlock1.png";//顶部贴图
textureFileZN[1] = "SievedBlock1.png";//北面贴图
textureFileZP[1] = "SievedBlock1.png";//南面贴图

/*触发器*/
onBreak[1] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),1);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),1);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),1);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),1);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),1);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),1);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),1);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2*/
/*属性*/
drop[2] = "";//掉落物
expDrop[2] = "2";//经验掉落
fireSpreadSpeed[2] = 10;//火焰蔓延速度
flammability[2] = 30;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 1.0;//空手破坏时间
harvestLevel[2] = 0;//挖掘等级
information[2] = "§8来自§2淤泥";//显示信息
light[2] = 0;//光照强度
pick[2] = "SievedBlock:2 1";//鼠标中键获得方块
resistance[2] = 0;//爆炸抗性
tileEntity[2] = "entitySievedBlock";//方块实体值
toolClass[2] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[2] = true;//是否添加到创造标签下
canPlaceOnCeiling[2] = true;//是否能被放置在天花板上
canPlaceOnFloor[2] = true;//是否能被放置在地板上
canPlaceOnWall[2] = true;//是否能被放置在墙面上
canSilkHarvest[2] = false;//是否能被精准采集
hasCollision[2] = true;//是否有碰撞箱
hasTileEntity[2] = true;//是否有方块实体值
isBeaconBase[2] = false;//是否能成为信标基座
isBurning[2] = false;//是否能点燃并造成火焰伤害
isFireSource[2] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[2] = false;//是否能成为树干
tileTransparent[2] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[2] = "SievedBlock2.png";//西面贴图
textureFileXP[2] = "SievedBlock2.png";//东面贴图
textureFileYN[2] = "SievedBlock2.png";//底部贴图
textureFileYP[2] = "SievedBlock2.png";//顶部贴图
textureFileZN[2] = "SievedBlock2.png";//北面贴图
textureFileZP[2] = "SievedBlock2.png";//南面贴图

/*触发器*/
onBreak[2] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),2);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),2);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),2);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),2);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),2);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),2);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),2);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3*/
/*属性*/
drop[3] = "";//掉落物
expDrop[3] = "2";//经验掉落
fireSpreadSpeed[3] = 10;//火焰蔓延速度
flammability[3] = 30;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 1.0;//空手破坏时间
harvestLevel[3] = 0;//挖掘等级
information[3] = "§8来自§3泥巴";//显示信息
light[3] = 0;//光照强度
pick[3] = "SievedBlock:3 1";//鼠标中键获得方块
resistance[3] = 0;//爆炸抗性
tileEntity[3] = "entitySievedBlock";//方块实体值
toolClass[3] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[3] = true;//是否添加到创造标签下
canPlaceOnCeiling[3] = true;//是否能被放置在天花板上
canPlaceOnFloor[3] = true;//是否能被放置在地板上
canPlaceOnWall[3] = true;//是否能被放置在墙面上
canSilkHarvest[3] = false;//是否能被精准采集
hasCollision[3] = true;//是否有碰撞箱
hasTileEntity[3] = true;//是否有方块实体值
isBeaconBase[3] = false;//是否能成为信标基座
isBurning[3] = false;//是否能点燃并造成火焰伤害
isFireSource[3] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[3] = false;//是否能成为树干
tileTransparent[3] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[3] = "SievedBlock3.png";//西面贴图
textureFileXP[3] = "SievedBlock3.png";//东面贴图
textureFileYN[3] = "SievedBlock3.png";//底部贴图
textureFileYP[3] = "SievedBlock3.png";//顶部贴图
textureFileZN[3] = "SievedBlock3.png";//北面贴图
textureFileZP[3] = "SievedBlock3.png";//南面贴图

/*触发器*/
onBreak[3] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),3);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),3);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),3);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),3);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),3);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),3);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),3);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4*/
/*属性*/
drop[4] = "";//掉落物
expDrop[4] = "2";//经验掉落
fireSpreadSpeed[4] = 10;//火焰蔓延速度
flammability[4] = 30;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 1.0;//空手破坏时间
harvestLevel[4] = 0;//挖掘等级
information[4] = "§8来自§5肥沃泥土";//显示信息
light[4] = 0;//光照强度
pick[4] = "SievedBlock:4 1";//鼠标中键获得方块
resistance[4] = 0;//爆炸抗性
tileEntity[4] = "entitySievedBlock";//方块实体值
toolClass[4] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[4] = true;//是否添加到创造标签下
canPlaceOnCeiling[4] = true;//是否能被放置在天花板上
canPlaceOnFloor[4] = true;//是否能被放置在地板上
canPlaceOnWall[4] = true;//是否能被放置在墙面上
canSilkHarvest[4] =false;//是否能被精准采集
hasCollision[4] = true;//是否有碰撞箱
hasTileEntity[4] = true;//是否有方块实体值
isBeaconBase[4] = false;//是否能成为信标基座
isBurning[4] = false;//是否能点燃并造成火焰伤害
isFireSource[4] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[4] = false;//是否能成为树干
tileTransparent[4] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[4] = "SievedBlock4.png";//西面贴图
textureFileXP[4] = "SievedBlock4.png";//东面贴图
textureFileYN[4] = "SievedBlock4.png";//底部贴图
textureFileYP[4] = "SievedBlock4.png";//顶部贴图
textureFileZN[4] = "SievedBlock4.png";//北面贴图
textureFileZP[4] = "SievedBlock4.png";//南面贴图

/*触发器*/
onBreak[4] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),4);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),4);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),4);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),4);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),4);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),4);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),4);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据5*/
/*属性*/
drop[5] = "";//掉落物
expDrop[5] = "2";//经验掉落
fireSpreadSpeed[5] = 10;//火焰蔓延速度
flammability[5] = 30;//易燃性
fortuneModifier[5] = 0;//时运采集增产
hardness[5] = 1.0;//空手破坏时间
harvestLevel[5] = 0;//挖掘等级
information[5] = "§8来自§6泥土";//显示信息
light[5] = 0;//光照强度
pick[5] = "SievedBlock:5 1";//鼠标中键获得方块
resistance[5] = 0;//爆炸抗性
tileEntity[5] = "entitySievedBlock";//方块实体值
toolClass[5] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[5] = true;//是否添加到创造标签下
canPlaceOnCeiling[5] = true;//是否能被放置在天花板上
canPlaceOnFloor[5] = true;//是否能被放置在地板上
canPlaceOnWall[5] = true;//是否能被放置在墙面上
canSilkHarvest[5] = false;//是否能被精准采集
hasCollision[5] = true;//是否有碰撞箱
hasTileEntity[5] = true;//是否有方块实体值
isBeaconBase[5] = false;//是否能成为信标基座
isBurning[5] = false;//是否能点燃并造成火焰伤害
isFireSource[5] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[5] = false;//是否能成为树干
tileTransparent[5] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[5] = "SievedBlock5.png";//西面贴图
textureFileXP[5] = "SievedBlock5.png";//东面贴图
textureFileYN[5] = "SievedBlock5.png";//底部贴图
textureFileYP[5] = "SievedBlock5.png";//顶部贴图
textureFileZN[5] = "SievedBlock5.png";//北面贴图
textureFileZP[5] = "SievedBlock5.png";//南面贴图

/*触发器*/
onBreak[5] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),5);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),5);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),5);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),5);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),5);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),5);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),5);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据6*/
/*属性*/
drop[6] = "";//掉落物
expDrop[6] = "2";//经验掉落
fireSpreadSpeed[6] = 10;//火焰蔓延速度
flammability[6] = 30;//易燃性
fortuneModifier[6] = 0;//时运采集增产
hardness[6] = 1.0;//空手破坏时间
harvestLevel[6] = 0;//挖掘等级
information[6] = "§8来自§d干燥泥土";//显示信息
light[6] = 0;//光照强度
pick[6] = "SievedBlock:6 1";//鼠标中键获得方块
resistance[6] = 0;//爆炸抗性
tileEntity[6] = "entitySievedBlock";//方块实体值
toolClass[6] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[6] = true;//是否添加到创造标签下
canPlaceOnCeiling[6] = true;//是否能被放置在天花板上
canPlaceOnFloor[6] = true;//是否能被放置在地板上
canPlaceOnWall[6] = true;//是否能被放置在墙面上
canSilkHarvest[6] = false;//是否能被精准采集
hasCollision[6] = true;//是否有碰撞箱
hasTileEntity[6] = true;//是否有方块实体值
isBeaconBase[6] = false;//是否能成为信标基座
isBurning[6] = false;//是否能点燃并造成火焰伤害
isFireSource[6] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[6] = false;//是否能成为树干
tileTransparent[6] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[6] = "SievedBlock6.png";//西面贴图
textureFileXP[6] = "SievedBlock6.png";//东面贴图
textureFileYN[6] = "SievedBlock6.png";//底部贴图
textureFileYP[6] = "SievedBlock6.png";//顶部贴图
textureFileZN[6] = "SievedBlock6.png";//北面贴图
textureFileZP[6] = "SievedBlock6.png";//南面贴图

/*触发器*/
onBreak[6] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),6);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),6);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),6);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),6);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),6);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),6);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),6);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据7*/
/*属性*/
drop[7] = "";//掉落物
expDrop[7] = "2";//经验掉落
fireSpreadSpeed[7] = 10;//火焰蔓延速度
flammability[7] = 30;//易燃性
fortuneModifier[7] = 0;//时运采集增产
hardness[7] = 1.0;//空手破坏时间
harvestLevel[7] = 0;//挖掘等级
information[7] = "§8来自§9硬化泥土";//显示信息
light[7] = 0;//光照强度
pick[7] = "SievedBlock:7 1";//鼠标中键获得方块
resistance[7] = 0;//爆炸抗性
tileEntity[7] = "entitySievedBlock";//方块实体值
toolClass[7] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[7] = true;//是否添加到创造标签下
canPlaceOnCeiling[7] = true;//是否能被放置在天花板上
canPlaceOnFloor[7] = true;//是否能被放置在地板上
canPlaceOnWall[7] = true;//是否能被放置在墙面上
canSilkHarvest[7] = false;//是否能被精准采集
hasCollision[7] = true;//是否有碰撞箱
hasTileEntity[7] = true;//是否有方块实体值
isBeaconBase[7] = false;//是否能成为信标基座
isBurning[7] = false;//是否能点燃并造成火焰伤害
isFireSource[7] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[7] = false;//是否能成为树干
tileTransparent[7] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[7] = "SievedBlock7.png";//西面贴图
textureFileXP[7] = "SievedBlock7.png";//东面贴图
textureFileYN[7] = "SievedBlock7.png";//底部贴图
textureFileYP[7] = "SievedBlock7.png";//顶部贴图
textureFileZN[7] = "SievedBlock7.png";//北面贴图
textureFileZP[7] = "SievedBlock7.png";//南面贴图

/*触发器*/
onBreak[7] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),7);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),7);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),7);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),7);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),7);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),7);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),7);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据8*/
/*属性*/
drop[8] = "";//掉落物
expDrop[8] = "2";//经验掉落
fireSpreadSpeed[8] = 10;//火焰蔓延速度
flammability[8] = 30;//易燃性
fortuneModifier[8] = 0;//时运采集增产
hardness[8] = 1.0;//空手破坏时间
harvestLevel[8] = 0;//挖掘等级
information[8] = "§8来自§a沙质泥土";//显示信息
light[8] = 0;//光照强度
pick[8] = "SievedBlock:8 1";//鼠标中键获得方块
resistance[8] = 0;//爆炸抗性
tileEntity[8] = "entitySievedBlock";//方块实体值
toolClass[8] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[8] = true;//是否添加到创造标签下
canPlaceOnCeiling[8] = true;//是否能被放置在天花板上
canPlaceOnFloor[8] = true;//是否能被放置在地板上
canPlaceOnWall[8] = true;//是否能被放置在墙面上
canSilkHarvest[8] = false;//是否能被精准采集
hasCollision[8] = true;//是否有碰撞箱
hasTileEntity[8] = true;//是否有方块实体值
isBeaconBase[8] = false;//是否能成为信标基座
isBurning[8] = false;//是否能点燃并造成火焰伤害
isFireSource[8] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[8] = false;//是否能成为树干
tileTransparent[8] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[8] = "SievedBlock8.png";//西面贴图
textureFileXP[8] = "SievedBlock8.png";//东面贴图
textureFileYN[8] = "SievedBlock8.png";//底部贴图
textureFileYP[8] = "SievedBlock8.png";//顶部贴图
textureFileZN[8] = "SievedBlock8.png";//北面贴图
textureFileZP[8] = "SievedBlock8.png";//南面贴图

/*触发器*/
onBreak[8] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),8);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),8);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),8);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),8);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),8);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),8);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),8);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据9*/
/*属性*/
drop[9] = "";//掉落物
expDrop[9] = "2";//经验掉落
fireSpreadSpeed[9] = 10;//火焰蔓延速度
flammability[9] = 30;//易燃性
fortuneModifier[9] = 0;//时运采集增产
hardness[9] = 1.0;//空手破坏时间
harvestLevel[9] = 0;//挖掘等级
information[9] = "§8来自§b粗沙";//显示信息
light[9] = 0;//光照强度
pick[9] = "SievedBlock:9 1";//鼠标中键获得方块
resistance[9] = 0;//爆炸抗性
tileEntity[9] = "entitySievedBlock";//方块实体值
toolClass[9] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[9] = true;//是否添加到创造标签下
canPlaceOnCeiling[9] = true;//是否能被放置在天花板上
canPlaceOnFloor[9] = true;//是否能被放置在地板上
canPlaceOnWall[9] = true;//是否能被放置在墙面上
canSilkHarvest[9] = false;//是否能被精准采集
hasCollision[9] = true;//是否有碰撞箱
hasTileEntity[9] = true;//是否有方块实体值
isBeaconBase[9] = false;//是否能成为信标基座
isBurning[9] = false;//是否能点燃并造成火焰伤害
isFireSource[9] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[9] = false;//是否能成为树干
tileTransparent[9] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[9] = "SievedBlock9.png";//西面贴图
textureFileXP[9] = "SievedBlock9.png";//东面贴图
textureFileYN[9] = "SievedBlock9.png";//底部贴图
textureFileYP[9] = "SievedBlock9.png";//顶部贴图
textureFileZN[9] = "SievedBlock9.png";//北面贴图
textureFileZP[9] = "SievedBlock9.png";//南面贴图

/*触发器*/
onBreak[9] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),9);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),9);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),9);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),9);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),9);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),9);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),9);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据10*/
/*属性*/
drop[10] = "";//掉落物
expDrop[10] = "2";//经验掉落
fireSpreadSpeed[10] = 10;//火焰蔓延速度
flammability[10] = 30;//易燃性
fortuneModifier[10] = 0;//时运采集增产
hardness[10] = 1.0;//空手破坏时间
harvestLevel[10] = 0;//挖掘等级
information[10] = "§8来自§c沙子";//显示信息
light[10] = 0;//光照强度
pick[10] = "SievedBlock:10 1";//鼠标中键获得方块
resistance[10] = 0;//爆炸抗性
tileEntity[10] = "entitySievedBlock";//方块实体值
toolClass[10] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[10] = true;//是否添加到创造标签下
canPlaceOnCeiling[10] = true;//是否能被放置在天花板上
canPlaceOnFloor[10] = true;//是否能被放置在地板上
canPlaceOnWall[10] = true;//是否能被放置在墙面上
canSilkHarvest[10] = false;//是否能被精准采集
hasCollision[10] = true;//是否有碰撞箱
hasTileEntity[10] = true;//是否有方块实体值
isBeaconBase[10] = false;//是否能成为信标基座
isBurning[10] = false;//是否能点燃并造成火焰伤害
isFireSource[10] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[10] = false;//是否能成为树干
tileTransparent[10] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[10] = "SievedBlock10.png";//西面贴图
textureFileXP[10] = "SievedBlock10.png";//东面贴图
textureFileYN[10] = "SievedBlock10.png";//底部贴图
textureFileYP[10] = "SievedBlock10.png";//顶部贴图
textureFileZN[10] = "SievedBlock10.png";//北面贴图
textureFileZP[10] = "SievedBlock10.png";//南面贴图

/*触发器*/
onBreak[10] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),10);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),10);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),10);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),10);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),10);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),10);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),10);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据11*/
/*属性*/
drop[11] = "";//掉落物
expDrop[11] = "2";//经验掉落
fireSpreadSpeed[11] = 10;//火焰蔓延速度
flammability[11] = 30;//易燃性
fortuneModifier[11] = 0;//时运采集增产
hardness[11] = 1.0;//空手破坏时间
harvestLevel[11] = 0;//挖掘等级
information[11] = "§8来自§d流沙";//显示信息
light[11] = 0;//光照强度
pick[11] = "SievedBlock:11 1";//鼠标中键获得方块
resistance[11] = 0;//爆炸抗性
tileEntity[11] = "entitySievedBlock";//方块实体值
toolClass[11] = "shovel";//破坏工具类型

/*布尔值*/
addToCreative[11] = true;//是否添加到创造标签下
canPlaceOnCeiling[11] = true;//是否能被放置在天花板上
canPlaceOnFloor[11] = true;//是否能被放置在地板上
canPlaceOnWall[11] = true;//是否能被放置在墙面上
canSilkHarvest[11] = false;//是否能被精准采集
hasCollision[11] = true;//是否有碰撞箱
hasTileEntity[11] = true;//是否有方块实体值
isBeaconBase[11] = false;//是否能成为信标基座
isBurning[11] = false;//是否能点燃并造成火焰伤害
isFireSource[11] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[11] = false;//是否能成为树干
tileTransparent[11] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[11] = "SievedBlock11.png";//西面贴图
textureFileXP[11] = "SievedBlock11.png";//东面贴图
textureFileYN[11] = "SievedBlock11.png";//底部贴图
textureFileYP[11] = "SievedBlock11.png";//顶部贴图
textureFileZN[11] = "SievedBlock11.png";//北面贴图
textureFileZP[11] = "SievedBlock11.png";//南面贴图

/*触发器*/
onBreak[11] = "world.spawnItem(position,'jinshucraft:itemGravel_Lump',world.getTileEntityStringData(position,'SievedLump'),11);world.spawnItem(position,'jinshucraft:itemGravel_Normal',world.getTileEntityStringData(position,'SievedNormal'),11);world.spawnItem(position,'jinshucraft:itemGravel_Small',world.getTileEntityStringData(position,'SievedSmall'),11);world.spawnItem(position,'jinshucraft:itemGravel_Crushed',world.getTileEntityStringData(position,'SievedCrushed'),11);world.spawnItem(position,'jinshucraft:itemGravel_Drossy',world.getTileEntityStringData(position,'SievedDrossy'),11);world.spawnItem(position,'jinshucraft:itemGravel_Dust',world.getTileEntityStringData(position,'SievedDust'),11);world.spawnItem(position,'jinshucraft:itemSoil',world.getTileEntityStringData(position,'SievedDirt'),11);";
