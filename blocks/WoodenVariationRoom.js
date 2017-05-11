/*木制变异室（闲置时）*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[0] = "jinshucraft:WoodenVariationRoom";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 10;//火焰蔓延速度
flammability[0] = 30;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 4;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8这东西能变异出些什么？";//显示信息
light[0] = 0;//光照强度
material = "wood";//材料类型
maxStack = 64;//最大堆叠
name = "WoodenVariationRoom";//名称
opacity = 255;//遮光率
pick[0] = "WoodenVariationRoom:0 1";//鼠标中键获得方块
resistance[0] = 0.5;//爆炸抗性
slipperiness = 0.6;//粗糙度
stepSound = "wood";//行走声音
tickrate = "1";//方块更新速率
tileEntity[0] = "entityWoodenVariationRoom";//方块实体值
toolClass[0] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
blocksPiston = false;//是否能被活塞推动
canPlaceOnCeiling[0] = true;//是否能被放置在天花板上
canPlaceOnFloor[0] = true;//是否能被放置在地板上
canPlaceOnWall[0] = true;//是否能被放置在墙面上
canSilkHarvest[0] = true;//是否能被精准采集
hasCollision[0] = true;//是否有碰撞箱
hasTileEntity[0] = true;//是否有方块实体值
isBeaconBase[0] = false;//是否能成为信标基座
isBurning[0] = false;//是否能点燃并造成火焰伤害
isFireSource[0] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[0] = false;//是否能成为树干
semiTransparent = false;//是否使用半透明纹理
tileTransparent[0] = true;//是否拥有连接处的渲染
transparent = false;//是否使用透明纹理

/*贴图*/
textureFileXN[0] = "WoodenVariationRoom.png";//西面贴图
textureFileXP[0] = "WoodenVariationRoom.png";//东面贴图
textureFileYN[0] = "WoodenVariationRoom_Top0.png";//底部贴图
textureFileYP[0] = "WoodenVariationRoom_Top0.png";//顶部贴图
textureFileZN[0] = "WoodenVariationRoom.png";//北面贴图
textureFileZP[0] = "WoodenVariationRoom.png";//南面贴图

/*触发器*/
onActivated[0] = "position.x--;position.z--;if(world.getBlockName(position)=='minecraft:log'){position.x+=2;if(world.getBlockName(position)=='minecraft:log'){position.z+=2;if(world.getBlockName(position)=='minecraft:log'){position.x-=2;if(world.getBlockName(position)=='minecraft:log'){position.y++;if(world.getBlockName(position)=='jinshucraft:WoodenVariationRoom'){position.z--;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==8){position.z--;if(world.getBlockName(position)=='jinshucraft:WoodenVariationRoom'){position.x++;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==4){position.x++;if(world.getBlockName(position)=='jinshucraft:WoodenVariationRoom'){position.z++;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==8){position.z++;if(world.getBlockName(position)=='jinshucraft:WoodenVariationRoom'){position.x--;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==4){position.z--;position.y--;player.openGui('WoodenVariationRoomGUI', position); result = true;}}}}}}}}}}}};";
onUpdate[0] = "if(world.getContainerSlotItemName(position,1)!= 'jinshucraft:itemFuel'&&world.getContainerSlotItemName(position,1)!= null){bb=world.getContainerSlotItemName(position,1);cc=world.getContainerSlotStackSize(position,1);dd=world.getContainerSlotMetadata(position,1);if(world.getContainerSlotItemName(position,0)==bb&&world.getContainerSlotMetadata(position,0)==dd){if(world.getContainerSlotStackSize(position,0)+cc<=64){world.addToContainerSlot(position,0,cc);}else{ee=cc+world.getContainerSlotStackSize(position,0)-64;world.fillContainerSlot(position,0);position.y++;world.spawnItem(position,bb,ee,dd);}}else{if(world.getContainerSlotItemName(position,0)==null){world.setContainerSlot(position,0,bb,cc,dd);}else{position.y++;world.spawnItem(position,bb,cc,dd);}};world.removeFromContainerSlot(position,1,64);};";
onBreak[0] = "world.removeFromContainerSlot(position,1,64);";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*木制变异室（工作时）*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[1] = "jinshucraft:WoodenVariationRoom";//掉落物
expDrop[1] = "0";//经验掉落
fireSpreadSpeed[1] = 10;//火焰蔓延速度
flammability[1] = 30;//易燃性
fortuneModifier[1] = 0;//时运采集增产
hardness[1] = 4;//空手破坏时间
harvestLevel[1] = 0;//挖掘等级
information[1] = "§8这东西能变异出些什么？";//显示信息
light[1] = 6;//光照强度
material = "wood";//材料类型
maxStack = 64;//最大堆叠
name = "WoodenVariationRoom";//名称
opacity = 255;//遮光率
pick[1] = "WoodenVariationRoom:0 1";//鼠标中键获得方块
resistance[1] = 0.5;//爆炸抗性
slipperiness = 0.6;//粗糙度
stepSound = "wood";//行走声音
tickrate = "1";//方块更新速率
tileEntity[1] = "entityWoodenVariationRoom";//方块实体值
toolClass[1] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[1] = false;//是否添加到创造标签下
blocksPiston = false;//是否能被活塞推动
canPlaceOnCeiling[1] = true;//是否能被放置在天花板上
canPlaceOnFloor[1] = true;//是否能被放置在地板上
canPlaceOnWall[1] = true;//是否能被放置在墙面上
canSilkHarvest[1] = true;//是否能被精准采集
hasCollision[1] = true;//是否有碰撞箱
hasTileEntity[1] = true;//是否有方块实体值
isBeaconBase[1] = false;//是否能成为信标基座
isBurning[1] = false;//是否能点燃并造成火焰伤害
isFireSource[1] = false;//是否火焰在此方块上燃烧不会熄灭
isWood[1] = false;//是否能成为树干
semiTransparent = false;//是否使用半透明纹理
tileTransparent[1] = true;//是否拥有连接处的渲染
transparent = false;//是否使用透明纹理

/*贴图*/
textureFileXN[1] = "WoodenVariationRoom.png";//西面贴图
textureFileXP[1] = "WoodenVariationRoom.png";//东面贴图
textureFileYN[1] = "WoodenVariationRoom_Top1.png";//底部贴图
textureFileYP[1] = "WoodenVariationRoom_Top1.png";//顶部贴图
textureFileZN[1] = "WoodenVariationRoom.png";//北面贴图
textureFileZP[1] = "WoodenVariationRoom.png";//南面贴图

/*触发器*/
onActivated[1] = "position.x--;position.z--;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.x+=2;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.z+=2;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.x-=2;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.y++;if(world.getBlockName(position)=='jinshucraft:WoodenVariationRoom'){position.z--;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==8){position.z--;if(world.getBlockName(position)=='jinshucraft:WoodenVariationRoom'){position.x++;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==4){position.x++;if(world.getBlockName(position)=='jinshucraft:WoodenVariationRoom'){position.z++;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==8){position.z++;if(world.getBlockName(position)=='jinshucraft:WoodenVariationRoom'){position.x--;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==4){position.z--;position.y--;player.openGui('WoodenVariationRoomGUI', position); result = true;}}}}}}}}}}}};";
onUpdate[1] = "if(world.getContainerSlotItemName(position,1)!= 'jinshucraft:itemFuel'&&world.getContainerSlotItemName(position,1)!= null){bb=world.getContainerSlotItemName(position,1);cc=world.getContainerSlotStackSize(position,1);dd=world.getContainerSlotMetadata(position,1);if(world.getContainerSlotItemName(position,0)==bb&&world.getContainerSlotMetadata(position,0)==dd){if(world.getContainerSlotStackSize(position,0)+cc<=64){world.addToContainerSlot(position,0,cc);}else{ee=cc+world.getContainerSlotStackSize(position,0)-64;world.fillContainerSlot(position,0);position.y++;world.spawnItem(position,bb,ee,dd);}}else{if(world.getContainerSlotItemName(position,0)==null){world.setContainerSlot(position,0,bb,cc,dd);}else{position.y++;world.spawnItem(position,bb,cc,dd);}};world.removeFromContainerSlot(position,1,64);};";
onBreak[1] = "world.removeFromContainerSlot(position,1,64);";