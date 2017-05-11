/*木制风干塔*/

/*属性*/
creativeTab = "_Wood";//所在标签
drop[0] = "jinshucraft:WoodenDryingRoom";//掉落物
expDrop[0] = "0";//经验掉落
fireSpreadSpeed[0] = 10;//火焰蔓延速度
flammability[0] = 30;//易燃性
fortuneModifier[0] = 0;//时运采集增产
hardness[0] = 4;//空手破坏时间
harvestLevel[0] = 0;//挖掘等级
information[0] = "§8大风呼呼的刮呀";//显示信息
light[0] = 0;//光照强度
material = "wood";//材料类型
maxStack = 64;//最大堆叠
name = "WoodenDryingRoom";//名称
opacity = 255;//遮光率
pick[0] = "WoodenDryingRoom:0 1";//鼠标中键获得方块
resistance[0] = 0.5;//爆炸抗性
slipperiness = 0.6;//粗糙度
stepSound = "wood";//行走声音
tickrate = "20";//方块更新速率
tileEntity[0] = "entityWoodenDryingRoom";//方块实体值
toolClass[0] = "axe";//破坏工具类型

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
blocksPiston = true;//是否能被活塞推动
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
textureFileXN[0] = "WoodenDryingRoom.png";//西面贴图
textureFileXP[0] = "WoodenDryingRoom.png";//东面贴图
textureFileYN[0] = "WoodenDryingRoom_Top.png";//底部贴图
textureFileYP[0] = "WoodenDryingRoom_Top.png";//顶部贴图
textureFileZN[0] = "WoodenDryingRoom.png";//北面贴图
textureFileZP[0] = "WoodenDryingRoom.png";//南面贴图

/*触发器*/
onActivated[0] = "position.y++;if(world.getBlockName(position)=='minecraft:air'){position.y--;position.x--;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.z++;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.x++;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.x++;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.z--;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.z--;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.x--;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.x--;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.y++;position.x++;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.x++;position.z++;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.x--;position.z++;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.x--;position.z--;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.z--;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.z+=2;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.x+=2;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.z-=2;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.x--;position.z++;mod.loadScript('WoodenDryingRoomWorking.js');}}}}}}}}}}}}}}}}};";
onNeighborChange[0] = "position.y++;if(world.getBlockName(position)=='jinshucraft:DryingBlock'){mod.loadScript('WoodenDryingRoomCheck.js');};";
onUpdate[0] = "position.x--;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.z--;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.x++;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.x++;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.z++;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.z++;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.x--;if(world.getBlockName(position)=='jinshucraft:PineWood'){position.x--;if(world.getBlockName(position)=='minecraft:log'&&world.getBlockMetadata(position)==0){position.z--;position.x++;mod.loadScript('WoodenDryingRoomWorking2.js');}}}}}}}};";
onPlacedByPlayer[0] = "world.setTileEntityStringData(position,'owner',player.getUsername());";