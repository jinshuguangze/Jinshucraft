/*石刀*/
/*通用属性*/
/*anvilMaterial = "";//铁砧修复材料*/
/*containerItem = "";//乘装容器*/
creativeTab = "_Stone";//所在标签
damage = 2.0;//额外攻击力
effectiveBlocks = "jinshucraft:PineWood:0, jinshucraft:PineWood:1, BiomesOPlenty:logs2:3, BiomesOPlenty:logs2:7, BiomesOPlenty:logs2:11";//能有速度加成采掘方块列表
enchantability = 0;//附魔加成
/*harvestBlocks = "";//能普通速度破坏方块列表*/
harvestLevel = 0;//挖掘等级
maxDamage = 20;//最大耐久
maxStack = 1//最大堆叠
name = "itemStoneKnife";//名称
toolClass = "knife";//工具类型
full3d = false;//是否持剑型握物品
leaveContainerItem = false;//是否参与合成后残留在合成格中
repairable = false;//能否使用修复配方

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*元数据0*/
/*属性*/
efficiency[0] = 3.0;//对应方块采掘速度加成
information[0] = "§8拿你自己的胳膊试试锋不锋利";//显示信息
maxUsingDuration[0] = 1;//使用物品最大时间
usingAction[0] = "block";//使用时玩家动作

/*布尔值*/
addToCreative[0] = true;//是否添加到创造标签下
hasEffect[0] = false;//是否能附魔

/*贴图*/
textureFile[0] = "itemStoneKnife.png";

/*触发器*/
onBlockStartBreak[0] = "if(itemstack.getDamage()!=20){if(mod.isItemInOreDictClass(world.getBlockName(position),world.getBlockMetadata(position),'treeBark')){mod.loadScript('KnifeWorking.js')}};";
onBlockDestroyed[0] = "itemstack.damageItem(1);";
onUpdate[0] = "if(itemstack.getStringData('name')!='none'){mod.loadScript('KnifePlaceBlock.js');};";
