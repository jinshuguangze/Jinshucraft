/*松果（萌芽的）*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[0] = "";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 30;//火焰蔓延速度
flammability[0] = 50;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 0.2;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8据说这东西有药用价值？";//显示信息
light[0] = 0;//光照强度
material = "plants";//材料类型
maxStack = 64;//最大堆叠
name = "PineCone";//名称
opacity = 0;//遮光率
pick[0] = "PineCone:0 1";//鼠标中键获得方块
resistance[0] = 0.0;//爆炸抗性
slipperiness = 0.6;//粗糙度
stepSound = "grass";//行走声音
tickrate = "20";//方块更新速率
/*tileEntity = "";//方块实体值*/
toolClass[0] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[0] = false;//是否添加到创造标签下
blocksPiston = false;//是否能被活塞推动
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] = true;//是否能被精准采集
hasCollision[0] = false;//是否有碰撞箱
hasTileEntity[0] = false;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = false;//是否能成为树干
semiTransparent = false;//是否使用半透明纹理
tileTransparent[0] = true;//是否拥有连接处的渲染
transparent = false;//是否使用透明纹理

/*贴图*/
textureFileYN[0] = "PineCone0.png"

/*触发器*/
onUpdate[0] = "if(Math.floor(Math.random()*2000)==0&&world.getBlockLightLevel(position)>=9){mod.loadScript('PineConeGrow1.js');}";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*松果（青涩的）*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[1] = "";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 40;//火焰蔓延速度
flammability[1] = 60;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 0.2;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8据说这东西有药用价值？";//显示信息
light[1] = 0;//光照强度
material = "plants";//材料类型
maxStack = 64;//最大堆叠
name = "PineCone";//名称
opacity = 0;//遮光率
pick[1] = "PineCone:1 1";//鼠标中键获得方块
resistance[1] = 0.0;//爆炸抗性
slipperiness = 0.6;//粗糙度
stepSound = "grass";//行走声音
tickrate = "20";//方块更新速率
/*tileEntity[0] = "";//方块实体值*/
toolClass[1] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[1] = false;//是否添加到创造标签下
blocksPiston = false;//是否能被活塞推动
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = true;//是否能被放置在墙面上
canSilkHarvest[1] = true;//是否能被精准采集
hasCollision[1] = false;//是否有碰撞箱
hasTileEntity[1] = false;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = false;//是否能成为树干
semiTransparent = false;//是否使用半透明纹理
tileTransparent[1] = true;//是否拥有连接处的渲染
transparent = false;//是否使用透明纹理

/*贴图*/
textureFileYN[1] = "PineCone1.png"

/*触发器*/
onUpdate[1] = "if(Math.floor(Math.random()*2000)==0&&world.getBlockLightLevel(position)>=9){mod.loadScript('PineConeGrow2.js');}";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*松果（成长的）*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[2] = "";//掉落物
expDrop[2] = "0";//经验掉落
fireSpreadSpeed[2] = 50;//火焰蔓延速度
flammability[2] = 70;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 0.2;//空手破坏时间
harvestLevel[2] = 0;//挖掘等级
information[2] = "§8据说这东西有药用价值？";//显示信息
light[2] = 0;//光照强度
material = "plants";//材料类型
maxStack = 64;//最大堆叠
name = "PineCone";//名称
opacity = 0;//遮光率
pick[2] = "PineCone:2 1";//鼠标中键获得方块
resistance[2] = 0.0;//爆炸抗性
slipperiness = 0.6;//粗糙度
stepSound = "grass";//行走声音
tickrate = "20";//方块更新速率
/*tileEntity = "";//方块实体值*/
toolClass[2] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[2] = false;//是否添加到创造标签下
blocksPiston = false;//是否能被活塞推动
canPlaceOnCeiling[2] = true;//是否能被放置在天花板上
canPlaceOnFloor[2] = true;//是否能被放置在地板上
canPlaceOnWall[2] = true;//是否能被放置在墙面上
canSilkHarvest[2] = true;//是否能被精准采集
hasCollision[2] = false;//是否有碰撞箱
hasTileEntity[2] = false;//是否有方块实体值
isBeaconBase[2] = false;//是否能成为信标基座
isBurning[2] = false;//是否能点燃并造成火焰伤害
isFireSource[2] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[2] = false;//是否能成为树干
semiTransparent = false;//是否使用半透明纹理
tileTransparent[2] = true;//是否拥有连接处的渲染
transparent = false;//是否使用透明纹理

/*贴图*/
textureFileYN[2] = "PineCone2.png"

/*触发器*/
onUpdate[2] = "if(Math.floor(Math.random()*2000)==0&&world.getBlockLightLevel(position)>=9){mod.loadScript('PineConeGrow3.js');}";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*松果（快成熟的）*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[3] = "";//掉落物
expDrop[3] = "0";//经验掉落
fireSpreadSpeed[3] = 60;//火焰蔓延速度
flammability[3] = 80;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 0.2;//空手破坏时间
harvestLevel[3] = 0;//挖掘等级
information[3] = "§8据说这东西有药用价值？";//显示信息
light[3] = 0;//光照强度
material = "plants";//材料类型
maxStack = 64;//最大堆叠
name = "PineCone";//名称
opacity = 3;//遮光率
pick[3] = "PineCone:3 1";//鼠标中键获得方块
resistance[3] = 0.0;//爆炸抗性
slipperiness = 0.6;//粗糙度
stepSound = "grass";//行走声音
tickrate = "20";//方块更新速率
/*tileEntity = "";//方块实体值*/
toolClass[3] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[3] = false;//是否添加到创造标签下
blocksPiston = false;//是否能被活塞推动
canPlaceOnCeiling[3] = true;//是否能被放置在天花板上
canPlaceOnFloor[3] = true;//是否能被放置在地板上
canPlaceOnWall[3] = true;//是否能被放置在墙面上
canSilkHarvest[3] = true;//是否能被精准采集
hasCollision[3] = false;//是否有碰撞箱
hasTileEntity[3] = false;//是否有方块实体值
isBeaconBase[3] = false;//是否能成为信标基座
isBurning[3] = false;//是否能点燃并造成火焰伤害
isFireSource[3] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[3] = false;//是否能成为树干
semiTransparent = false;//是否使用半透明纹理
tileTransparent[3] = true;//是否拥有连接处的渲染
transparent = false;//是否使用透明纹理

/*贴图*/
textureFileYN[3] = "PineCone3.png"

/*触发器*/
onUpdate[3] = "if(Math.floor(Math.random()*2000)==0&&world.getBlockLightLevel(position)>=9){mod.loadScript('PineConeGrow4.js');}";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*松果（成熟的）*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[4] = "jinshucraft:itemPineCone 1";//掉落物
expDrop[4] = "0";//经验掉落
fireSpreadSpeed[4] = 70;//火焰蔓延速度
flammability[4] = 90;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 0.2;//空手破坏时间
harvestLevel[4] = 0;//挖掘等级
information[4] = "§8据说这东西有药用价值？";//显示信息
light[4] = 0;//光照强度
material = "plants";//材料类型
maxStack = 64;//最大堆叠
name = "PineCone";//名称
opacity = 3;//遮光率
pick[4] = "PineCone:4 1";//鼠标中键获得方块
resistance[4] = 0.0;//爆炸抗性
slipperiness = 0.6;//粗糙度
stepSound = "grass";//行走声音
tickrate = "20";//方块更新速率
/*tileEntity = "";//方块实体值*/
toolClass[4] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[4] = false;//是否添加到创造标签下
blocksPiston = false;//是否能被活塞推动
canPlaceOnCeiling[4] = true;//是否能被放置在天花板上
canPlaceOnFloor[4] = true;//是否能被放置在地板上
canPlaceOnWall[4] = true;//是否能被放置在墙面上
canSilkHarvest[4] = true;//是否能被精准采集
hasCollision[4] = false;//是否有碰撞箱
hasTileEntity[4] = false;//是否有方块实体值
isBeaconBase[4] = false;//是否能成为信标基座
isBurning[4] = false;//是否能点燃并造成火焰伤害
isFireSource[4] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[4] = false;//是否能成为树干
semiTransparent = false;//是否使用半透明纹理
tileTransparent[4] = true;//是否拥有连接处的渲染
transparent = false;//是否使用透明纹理

/*贴图*/
textureFileYN[4] = "PineCone4.png"

/*触发器*/
onActivated[4] = "world.setBlock(position,'minecraft:air');world.spawnItem(position,'jinshucraft:itemPineCone',1,0);";
onUpdate[4] = "if(Math.floor(Math.random()*2000)==0){world.setBlock(position,'minecraft:air');world.spawnItem(position,'jinshucraft:itemPineCone',1,0);};";