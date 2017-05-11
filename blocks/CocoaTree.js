/*可可树树苗*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[0] = "jinshucraft:CocoaTree";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 50;//火焰蔓延速度
flammability[0] = 80;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 0.5;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8哇，一个新的品种！";//显示信息
light[0] = 0;//光照强度
material = "plants";//材料类型
maxStack = 64;//最大堆叠
name = "CocoaTree";//名称
opacity = 0;//遮光率
pick[0] = "CocoaTree:0 1";//鼠标中键获得方块
resistance[0] = 0.0;//爆炸抗性
slipperiness = 0.9;//粗糙度
stepSound = "grass";//行走声音
tickrate = "20";//方块更新速率
/*tileEntity = "";//方块实体值*/
toolClass[0] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
blocksPiston = false;//是否能被活塞推动
canPlaceOnCeiling[0] = false;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = false;//是否能被放置在墙面上
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
textureFileXN[0] = "CocoaTree.png";
textureFileXP[0] = "CocoaTree.png";
textureFileYN[0] = "CocoaTree.png";
textureFileYP[0] = "CocoaTree.png";
textureFileZN[0] = "CocoaTree.png";
textureFileZP[0] = "CocoaTree.png";

/*触发器*/
onPlacedByPlayer[0] = "position.y--;if(!(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),'treePlantOn'))){position.y++;world.setBlock(position,'minecraft:air');world.spawnItem(position,'jinshucraft:CocoaTree',1,0);world.sendMessageToPlayer(player.getUsername(),'§2可可树不能种植在这里！');};";
onNeighborChange[0] = "position.y--;if(!(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),'treePlantOn'))){position.y++;world.setBlock(position,'minecraft:air');world.spawnItem(position,'jinshucraft:CocoaTree',1,0);};";
onUpdate[0] = "if(Math.random()<0.08&&world.getBlockLightLevel(position)>=9){mod.loadScript('CheckDirt.js');}";
