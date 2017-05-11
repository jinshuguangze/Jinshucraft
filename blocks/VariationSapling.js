/*变异的树苗*/

/*通用属性*/
creativeTab = "_Wood";//所在标签
material = "plants";//材料类型
maxStack = 64;//最大堆叠
name = "VariationSapling";//名称
opacity = 0;//遮光率
slipperiness = 0.9;//粗糙度
stepSound = "grass";//行走声音
tickrate = "20";//方块更新速率
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
hardness[0] = 0.5;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8基因突变的可怜树苗|§a 一阶变异";//显示信息
light[0] = 0;//光照强度
pick[0] = "minecraft:VariationSapling:0 1";//鼠标中键获得方块
resistance[0] = 0.0;//爆炸抗性
/*tileEntity[0] = "";//方块实体值*/
toolClass[0] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
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
tileTransparent[0] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[0] = "VariationSapling0.png";
textureFileXP[0] = "VariationSapling0.png";
textureFileYN[0] = "VariationSapling0.png";
textureFileYP[0] = "VariationSapling0.png";
textureFileZN[0] = "VariationSapling0.png";
textureFileZP[0] = "VariationSapling0.png";

/*触发器*/
onPlacedByPlayer[0] = "position.y--;if(!(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),'treePlantOn'))){position.y++;world.setBlock(position,'minecraft:air');world.spawnItem(position,'jinshucraft:VariationSapling',1,0);world.sendMessageToPlayer(player.getUsername(),'§2变异的树苗不能种植在这里！');};";
onNeighborChange[0] = "position.y--;if(!(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),'treePlantOn'))){position.y++;world.setBlock(position,'minecraft:air');world.spawnItem(position,'jinshucraft:VariationSapling',1,0);};";
onUpdate[0] = "if(Math.random()<0.015){position.y--;if(!(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),'treePlantOn'))){position.y++;mod.loadScript('VariationWorking0.js');}}";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据1*/
/*属性*/
drop[1] = "minecraft:deadbush";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 50;//火焰蔓延速度
flammability[1] = 80;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 0.5;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8基因突变的可怜树苗|§a 二阶变异";//显示信息
light[1] = 0;//光照强度
pick[1] = "minecraft:VariationSapling:1 1";//鼠标中键获得方块
resistance[1] = 0.0;//爆炸抗性
/*tileEntity[1] = "";//方块实体值*/
toolClass[1] = "shears";//破坏工具类型

/*布尔值*/
addToCreative[1] = true;//是否添加到创造标签下
canPlaceOnCeiling[1] = false;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = false;//是否能被放置在墙面上
canSilkHarvest[1] = true;//是否能被精准采集
hasCollision[1] = false;//是否有碰撞箱
hasTileEntity[1] = false;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = false;//是否能成为树干
tileTransparent[1] = true;//是否拥有连接处的渲染

/*贴图*/
textureFileXN[1] = "VariationSapling1.png";
textureFileXP[1] = "VariationSapling1.png";
textureFileYN[1] = "VariationSapling1.png";
textureFileYP[1] = "VariationSapling1.png";
textureFileZN[1] = "VariationSapling1.png";
textureFileZP[1] = "VariationSapling1.png";

/*触发器*/
onPlacedByPlayer[1] = "position.y--;if(!(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),'treePlantOn'))){position.y++;world.setBlock(position,'minecraft:air');world.spawnItem(position,'jinshucraft:VariationSapling',1,1);world.sendMessageToPlayer(player.getUsername(),'§2变异的树苗不能种植在这里！');};";
onNeighborChange[1] = "position.y--;if(!(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),'treePlantOn'))){position.y++;world.setBlock(position,'minecraft:air');world.spawnItem(position,'jinshucraft:VariationSapling',1,1);};";
onUpdate[1] = "if(Math.random()<0.015){position.y--;if(!(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),'treePlantOn'))){position.y++;mod.loadScript('VariationWorking1.js');}}";
