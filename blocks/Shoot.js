/*枝芽（方块）*/
/*通用属性*/
creativeTab = "_Wood";//所在标签
material = "plants";//材料类型
maxStack = 64;//最大堆叠
name = "Shoot";//名称
opacity = 0;//遮光率
slipperiness = 0.6;//粗糙度
stepSound = "grass";//行走声音
tickrate = "100";//方块更新速率
blocksPiston = false;//是否能被活塞推动
semiTransparent = false;//是否使用半透明纹理
transparent = false;//是否使用透明纹理

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
drop[0] = "minecraft:deadbush";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 50;//火焰蔓延速度
flammability[0] = 80;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 0.8;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8草木皆兵";//显示信息
light[0] = 0;//光照强度
pick[0] = "jinshucraft:itemShoot:0";//鼠标中键获得方块
resistance[0] = 0;//爆炸抗性
tileEntity[0] = "entityShoot";//方块实体值
toolClass[0] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[0] = false;//是否添加到创造标签下
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] = false;//是否能被精准采集
hasCollision[0] = false;//是否有碰撞箱
hasTileEntity[0] = true;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = false;//是否能成为树干
tileTransparent[0] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[0] = "Shoot0.png";
textureFileXP[0] = "Shoot0.png";
textureFileYN[0] = "Shoot0.png";
textureFileYP[0] = "Shoot0.png";
textureFileZN[0] = "Shoot0.png";
textureFileZP[0] = "Shoot0.png";

/*触发器*/
onPlacedByPlayer[0] = "mod.loadScript('ShootPlaced.js');";
onUpdate[0] = "mod.loadScript('ShootGrow.js');";
onNeighborChange[0] = "mod.loadScript('ShootNeighborChange.js');";
onDestroyedByPlayer[0] = "var i=0;mod.loadScript('ShootBreak.js');"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "minecraft:deadbush";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 50;//火焰蔓延速度
flammability[1] = 80;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 0.8;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8草木皆兵";//显示信息
light[1] = 0;//光照强度
pick[1] = "jinshucraft:itemShoot:1";//鼠标中键获得方块
resistance[1] = 0;//爆炸抗性
tileEntity[1] = "entityShoot";//方块实体值
toolClass[1] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[1] = false;//是否添加到创造标签下
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = true;//是否能被放置在墙面上
canSilkHarvest[1] = false;//是否能被精准采集
hasCollision[1] = false;//是否有碰撞箱
hasTileEntity[1] = true;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = false;//是否能成为树干
tileTransparent[1] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[1] = "Shoot1.png";
textureFileXP[1] = "Shoot1.png";
textureFileYN[1] = "Shoot1.png";
textureFileYP[1] = "Shoot1.png";
textureFileZN[1] = "Shoot1.png";
textureFileZP[1] = "Shoot1.png";

/*触发器*/
onPlacedByPlayer[1] = "mod.loadScript('ShootPlaced.js');";
onUpdate[1] = "mod.loadScript('ShootGrow.js');";
onNeighborChange[1] = "mod.loadScript('ShootNeighborChange.js');";
onDestroyedByPlayer[1] = "var i=1;mod.loadScript('ShootBreak.js');"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据2*/
/*属性*/
drop[2] = "minecraft:deadbush";//掉落物
expDrop[2] = "0";//经验掉落
fireSpreadSpeed[2] = 50;//火焰蔓延速度
flammability[2] = 80;//易燃性
fortuneModifier[2] = 0;//时运采集增产
hardness[2] = 0.8;//空手破坏时间
harvestLevel[2] = 0;//挖掘等级
information[2] = "§8草木皆兵";//显示信息
light[2] = 0;//光照强度
pick[2] = "jinshucraft:itemShoot:2";//鼠标中键获得方块
resistance[2] = 0;//爆炸抗性
tileEntity[2] = "entityShoot";//方块实体值
toolClass[2] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[2] = false;//是否添加到创造标签下
canPlaceOnCeiling[2] = true;//是否能被放置在天花板上
canPlaceOnFloor[2] = true;//是否能被放置在地板上
canPlaceOnWall[2] = true;//是否能被放置在墙面上
canSilkHarvest[2] = false;//是否能被精准采集
hasCollision[2] = false;//是否有碰撞箱
hasTileEntity[2] = true;//是否有方块实体值
isBeaconBase[2] = false;//是否能成为信标基座
isBurning[2] = false;//是否能点燃并造成火焰伤害
isFireSource[2] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[2] = false;//是否能成为树干
tileTransparent[2] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[2] = "Shoot2.png";
textureFileXP[2] = "Shoot2.png";
textureFileYN[2] = "Shoot2.png";
textureFileYP[2] = "Shoot2.png";
textureFileZN[2] = "Shoot2.png";
textureFileZP[2] = "Shoot2.png";

/*触发器*/
onPlacedByPlayer[2] = "mod.loadScript('ShootPlaced.js');";
onUpdate[2] = "mod.loadScript('ShootGrow.js');";
onNeighborChange[2] = "mod.loadScript('ShootNeighborChange.js');";
onDestroyedByPlayer[2] = "var i=2;mod.loadScript('ShootBreak.js');"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据3*/
/*属性*/
drop[3] = "minecraft:deadbush";//掉落物
expDrop[3] = "0";//经验掉落
fireSpreadSpeed[3] = 50;//火焰蔓延速度
flammability[3] = 80;//易燃性
fortuneModifier[3] = 0;//时运采集增产
hardness[3] = 0.8;//空手破坏时间
harvestLevel[3] = 0;//挖掘等级
information[3] = "§8草木皆兵";//显示信息
light[3] = 0;//光照强度
pick[3] = "jinshucraft:itemShoot:3";//鼠标中键获得方块
resistance[3] = 0;//爆炸抗性
tileEntity[3] = "entityShoot";//方块实体值
toolClass[3] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[3] = false;//是否添加到创造标签下
canPlaceOnCeiling[3] = true;//是否能被放置在天花板上
canPlaceOnFloor[3] = true;//是否能被放置在地板上
canPlaceOnWall[3] = true;//是否能被放置在墙面上
canSilkHarvest[3] = false;//是否能被精准采集
hasCollision[3] = false;//是否有碰撞箱
hasTileEntity[3] = true;//是否有方块实体值
isBeaconBase[3] = false;//是否能成为信标基座
isBurning[3] = false;//是否能点燃并造成火焰伤害
isFireSource[3] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[3] = false;//是否能成为树干
tileTransparent[3] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[3] = "Shoot3.png";
textureFileXP[3] = "Shoot3.png";
textureFileYN[3] = "Shoot3.png";
textureFileYP[3] = "Shoot3.png";
textureFileZN[3] = "Shoot3.png";
textureFileZP[3] = "Shoot3.png";

/*触发器*/
onPlacedByPlayer[3] = "mod.loadScript('ShootPlaced.js');";
onUpdate[3] = "mod.loadScript('ShootGrow.js');";
onNeighborChange[3] = "mod.loadScript('ShootNeighborChange.js');";
onDestroyedByPlayer[3] = "var i=3;mod.loadScript('ShootBreak.js');"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据4*/
/*属性*/
drop[4] = "minecraft:deadbush";//掉落物
expDrop[4] = "0";//经验掉落
fireSpreadSpeed[4] = 50;//火焰蔓延速度
flammability[4] = 80;//易燃性
fortuneModifier[4] = 0;//时运采集增产
hardness[4] = 0.8;//空手破坏时间
harvestLevel[4] = 0;//挖掘等级
information[4] = "§8草木皆兵";//显示信息
light[4] = 0;//光照强度
pick[4] = "jinshucraft:itemShoot:4";//鼠标中键获得方块
resistance[4] = 0;//爆炸抗性
tileEntity[4] = "entityShoot";//方块实体值
toolClass[4] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[4] = false;//是否添加到创造标签下
canPlaceOnCeiling[4] = true;//是否能被放置在天花板上
canPlaceOnFloor[4] = true;//是否能被放置在地板上
canPlaceOnWall[4] = true;//是否能被放置在墙面上
canSilkHarvest[4] = false;//是否能被精准采集
hasCollision[4] = false;//是否有碰撞箱
hasTileEntity[4] = true;//是否有方块实体值
isBeaconBase[4] = false;//是否能成为信标基座
isBurning[4] = false;//是否能点燃并造成火焰伤害
isFireSource[4] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[4] = false;//是否能成为树干
tileTransparent[4] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[4] = "Shoot4.png";
textureFileXP[4] = "Shoot4.png";
textureFileYN[4] = "Shoot4.png";
textureFileYP[4] = "Shoot4.png";
textureFileZN[4] = "Shoot4.png";
textureFileZP[4] = "Shoot4.png";

/*触发器*/
onPlacedByPlayer[4] = "mod.loadScript('ShootPlaced.js');";
onUpdate[4] = "mod.loadScript('ShootGrow.js');";
onNeighborChange[4] = "mod.loadScript('ShootNeighborChange.js');";
onDestroyedByPlayer[4] = "var i=4;mod.loadScript('ShootBreak.js');"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据5*/
/*属性*/
drop[5] = "minecraft:deadbush";//掉落物
expDrop[5] = "0";//经验掉落
fireSpreadSpeed[5] = 50;//火焰蔓延速度
flammability[5] = 80;//易燃性
fortuneModifier[5] = 0;//时运采集增产
hardness[5] = 0.8;//空手破坏时间
harvestLevel[5] = 0;//挖掘等级
information[5] = "§8草木皆兵";//显示信息
light[5] = 0;//光照强度
pick[5] = "jinshucraft:itemShoot:5";//鼠标中键获得方块
resistance[5] = 0;//爆炸抗性
tileEntity[5] = "entityShoot";//方块实体值
toolClass[5] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[5] = false;//是否添加到创造标签下
canPlaceOnCeiling[5] = true;//是否能被放置在天花板上
canPlaceOnFloor[5] = true;//是否能被放置在地板上
canPlaceOnWall[5] = true;//是否能被放置在墙面上
canSilkHarvest[5] = false;//是否能被精准采集
hasCollision[5] = false;//是否有碰撞箱
hasTileEntity[5] = true;//是否有方块实体值
isBeaconBase[5] = false;//是否能成为信标基座
isBurning[5] = false;//是否能点燃并造成火焰伤害
isFireSource[5] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[5] = false;//是否能成为树干
tileTransparent[5] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[5] = "Shoot5.png";
textureFileXP[5] = "Shoot5.png";
textureFileYN[5] = "Shoot5.png";
textureFileYP[5] = "Shoot5.png";
textureFileZN[5] = "Shoot5.png";
textureFileZP[5] = "Shoot5.png";

/*触发器*/
onPlacedByPlayer[5] = "mod.loadScript('ShootPlaced.js');";
onUpdate[5] = "mod.loadScript('ShootGrow.js');";
onNeighborChange[5] = "mod.loadScript('ShootNeighborChange.js');";
onDestroyedByPlayer[5] = "var i=5;mod.loadScript('ShootBreak.js');"