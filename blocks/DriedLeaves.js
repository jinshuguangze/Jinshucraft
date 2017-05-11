/*缺水树叶*/
/*通用属性*/
creativeTab = "_Wood";//所在标签
material = "grass";//材料类型
maxStack = 64;//最大堆叠
name = "DriedLeaves";//名称
opacity = 0;//遮光率
slipperiness = 0.6;//粗糙度
stepSound = "grass";//行走声音
tickrate = "100";//方块更新速率
blocksPiston = true;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = true;//是否使用透明纹理

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 30;//火焰蔓延速度
flammability[0] = 80;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 0.5;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8它上面已经没有了水珠";//显示信息
light[0] = 0;//光照强度
pick[0] = "DriedLeaves:0 1";//鼠标中键获得方块
resistance[0] = 0;//爆炸抗性
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "shears";//破坏工具类型

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
textureFileXN[0] = "DriedLeaves0.png";//西面贴图
textureFileXP[0] = "DriedLeaves0.png";//东面贴图
textureFileYN[0] = "DriedLeaves0.png";//底部贴图
textureFileYP[0] = "DriedLeaves0.png";//顶部贴图
textureFileZN[0] = "DriedLeaves0.png";//北面贴图
textureFileZP[0] = "DriedLeaves0.png";//南面贴图

/*触发器*/
onUpdate[0] = "if(Math.random()<0.3){mod.loadScript('LeavesDying.js')};if(world.getTime()%24000==23000){world.setBlockAndMetadata(position,'minecraft:leaves',0);};";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 30;//火焰蔓延速度
flammability[1] = 80;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 0.5;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8它上面已经没有了水珠";//显示信息
light[1] = 0;//光照强度
pick[1] = "DriedLeaves:1 1";//鼠标中键获得方块
resistance[1] = 0;//爆炸抗性
/*tileEntity[1] = "";//方块实体值*/
toolClass[1] = "shears";//破坏工具类型

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
textureFileXN[1] = "DriedLeaves1.png";//西面贴图
textureFileXP[1] = "DriedLeaves1.png";//东面贴图
textureFileYN[1] = "DriedLeaves1.png";//底部贴图
textureFileYP[1] = "DriedLeaves1.png";//顶部贴图
textureFileZN[1] = "DriedLeaves1.png";//北面贴图
textureFileZP[1] = "DriedLeaves1.png";//南面贴图

/*触发器*/
onUpdate[1] = "if(Math.random()<0.3){mod.loadScript('LeavesDying.js')};if(world.getTime()%24000==23000){world.setBlockAndMetadata(position,'jinshucraft:PineNeedles',0);};";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2*/
/*属性*/
drop[2] = "";//掉落物
expDrop[2] = "0";//经验掉落
fireSpreadSpeed[2] = 30;//火焰蔓延速度
flammability[2] = 80;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 0.5;//空手破坏时间
harvestLevel[2] = 0;//挖掘等级
information[2] = "§8它上面已经没有了水珠";//显示信息
light[2] = 0;//光照强度
pick[2] = "DriedLeaves:2 1";//鼠标中键获得方块
resistance[2] = 0;//爆炸抗性
/*tileEntity[2] = "";//方块实体值*/
toolClass[2] = "shears";//破坏工具类型

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
textureFileXN[2] = "DriedLeaves2.png";//西面贴图
textureFileXP[2] = "DriedLeaves2.png";//东面贴图
textureFileYN[2] = "DriedLeaves2.png";//底部贴图
textureFileYP[2] = "DriedLeaves2.png";//顶部贴图
textureFileZN[2] = "DriedLeaves2.png";//北面贴图
textureFileZP[2] = "DriedLeaves2.png";//南面贴图

/*触发器*/
onUpdate[2] = "if(Math.random()<0.3){mod.loadScript('LeavesDying.js')};if(world.getTime()%24000==23000){world.setBlockAndMetadata(position,'jinshucraft:CocoaLeaves',0);};";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3*/
/*属性*/
drop[3] = "";//掉落物
expDrop[3] = "0";//经验掉落
fireSpreadSpeed[3] = 30;//火焰蔓延速度
flammability[3] = 80;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 0.5;//空手破坏时间
harvestLevel[3] = 0;//挖掘等级
information[3] = "§8它上面已经没有了水珠";//显示信息
light[3] = 0;//光照强度
pick[3] = "DriedLeaves:3 1";//鼠标中键获得方块
resistance[3] = 0;//爆炸抗性
/*tileEntity[3] = "";//方块实体值*/
toolClass[3] = "shears";//破坏工具类型

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
textureFileXN[3] = "DriedLeaves3.png";//西面贴图
textureFileXP[3] = "DriedLeaves3.png";//东面贴图
textureFileYN[3] = "DriedLeaves3.png";//底部贴图
textureFileYP[3] = "DriedLeaves3.png";//顶部贴图
textureFileZN[3] = "DriedLeaves3.png";//北面贴图
textureFileZP[3] = "DriedLeaves3.png";//南面贴图

/*触发器*/
onUpdate[3] = "if(Math.random()<0.3){mod.loadScript('LeavesDying.js')};if(world.getTime()%24000==23000){world.setBlockAndMetadata(position,'BiomesOPlenty:colorizedLeaves1',2);};";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4*/
/*属性*/
drop[4] = "";//掉落物
expDrop[4] = "0";//经验掉落
fireSpreadSpeed[4] = 30;//火焰蔓延速度
flammability[4] = 80;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 0.5;//空手破坏时间
harvestLevel[4] = 0;//挖掘等级
information[4] = "§8它上面已经没有了水珠";//显示信息
light[4] = 0;//光照强度
pick[4] = "DriedLeaves:4 1";//鼠标中键获得方块
resistance[4] = 0;//爆炸抗性
/*tileEntity[4] = "";//方块实体值*/
toolClass[4] = "shears";//破坏工具类型

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
textureFileXN[4] = "DriedLeaves4.png";//西面贴图
textureFileXP[4] = "DriedLeaves4.png";//东面贴图
textureFileYN[4] = "DriedLeaves4.png";//底部贴图
textureFileYP[4] = "DriedLeaves4.png";//顶部贴图
textureFileZN[4] = "DriedLeaves4.png";//北面贴图
textureFileZP[4] = "DriedLeaves4.png";//南面贴图

/*触发器*/
onUpdate[4] = "if(Math.random()<0.3){mod.loadScript('LeavesDying.js')};if(world.getTime()%24000==23000){world.setBlockAndMetadata(position,'BiomesOPlenty:colorizedLeaves2',0);};";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据5*/
/*属性*/
drop[5] = "";//掉落物
expDrop[5] = "0";//经验掉落
fireSpreadSpeed[5] = 30;//火焰蔓延速度
flammability[5] = 80;//易燃性
fortuneModifier[5] = 0;//时运采集增产
hardness[5] = 0.5;//空手破坏时间
harvestLevel[5] = 0;//挖掘等级
information[5] = "§8它上面已经没有了水珠";//显示信息
light[5] = 0;//光照强度
pick[5] = "DriedLeaves:5 1";//鼠标中键获得方块
resistance[5] = 0;//爆炸抗性
/*tileEntity[5] = "";//方块实体值*/
toolClass[5] = "shears";//破坏工具类型

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
textureFileXN[5] = "DriedLeaves5.png";//西面贴图
textureFileXP[5] = "DriedLeaves5.png";//东面贴图
textureFileYN[5] = "DriedLeaves5.png";//底部贴图
textureFileYP[5] = "DriedLeaves5.png";//顶部贴图
textureFileZN[5] = "DriedLeaves5.png";//北面贴图
textureFileZP[5] = "DriedLeaves5.png";//南面贴图

/*触发器*/
onUpdate[5] = "if(Math.random()<0.3){mod.loadScript('LeavesDying.js')};if(world.getTime()%24000==23000){world.setBlockAndMetadata(position,'minefantasy2:ironbark_leaves',0);};";
