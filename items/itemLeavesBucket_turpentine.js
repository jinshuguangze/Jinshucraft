/*树叶碗（松脂）*/

/*属性*/
/*anvilMaterial = "";//铁砧修复材料*/
/*containerItem = "";//乘装容器*/
creativeTab = "_Stone";//所在标签
damage = 0;//额外攻击力
effectiveBlocks = "";//能有速度加成采掘方块列表
efficiency[0] = 1.0;//对应方块采掘速度加成
enchantability = 0;//附魔加成
/*harvestBlocks = "";//能普通速度破坏方块列表*/
harvestLevel = 0;//挖掘等级
information[0] = "§8白色粘稠状";//显示信息
maxDamage = 0;//最大耐久
maxStack = 64//最大堆叠
maxUsingDuration[0] = 20;//使用物品最大时间
name = "itemLeavesBucket_turpentine";//名称
toolClass = "pickaxe";//工具类型
usingAction[0] = "drink";//使用时玩家动作

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
full3d = false;//是否持剑型握物品
hasEffect[0] = false;//是否能附魔
leaveContainerItem = false;//是否参与合成后残留在合成格中
repairable = false;//能否使用修复配方

/*贴图*/
textureFile[0] = "itemLeavesBucket_turpentine.png";

/*触发器*/
onUse[0] = "player.swingItem();if(world.getBlockName(position)=='jinshucraft:LeavesTank'){world.setBlockAndMetadata(position,'jinshucraft:LeavesTankFixed',world.getBlockMetadata(position));player.removeFromSlot(player.getCurrentSlot(),1);player.add('jinshucraft:itemLeavesBucket',1,0);};";