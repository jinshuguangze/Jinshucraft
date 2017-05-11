/*新方块*/
mod.addBlock("WoodenWorkingTable.js", "normal");
mod.addBlock("PineTree.js", "crossTexture");
mod.addBlock("PineWood.js", "post");
mod.addBlock("SkinnedPineWood.js", "post");
mod.addBlock("TurpentinePineWood.js", "post");
mod.addBlock("PineNeedles.js", "normal");
mod.addBlock("PineCone.js", "crossTexture");
mod.addBlock("WoodenVariationRoom.js", "normal");
mod.addBlock("VariationSapling.js", "crossTexture");
mod.addBlock("WoodenDryingRoom.js", "normal");
mod.addBlock("DryingBlock.js", "normal");
mod.addBlock("DriedLeaves.js", "normal");
mod.addBlock("WoodenNurtureBench.js", "normal");
mod.addBlock("Shoot.js", "crossTexture");
mod.addBlock("CocoaWood.js", "facing");
mod.addBlock("CocoaLeaves.js", "normal");
mod.addBlock("CocoaTree.js", "crossTexture");
mod.addBlock("DecayBlock.js", "gravity");
mod.addBlock("DecayingBlock.js", "gravity");
mod.addBlock("WoodenDecayingRoom.js", "normal");
mod.addBlock("WoodenDecayingRoomWall1_.js", "normal");
mod.addBlock("WoodenDecayingRoomWall2_.js", "normal");
mod.addBlock("WoodenDecayingRoomWall3_.js", "normal");
mod.addBlock("WoodenDecayingRoomWall4_.js", "normal");
mod.addBlock("WoodenDecayingRoomOutput.js", "normal");
mod.addBlock("LeavesTank.js", "normal");
mod.addBlock("DecayedBlock.js", "gravity");
mod.addBlock("WoodenSieveFrame.js", "wall");
mod.addBlock("LeavesSieveNet.js", "normal");
mod.addBlock("SievedBlock.js", "normal");
mod.addBlock("StoneWorkingTable.js", "normal");
mod.addBlock("StoneVariationRoom.js", "normal");
mod.addBlock("StoneDryingRoom.js", "normal");
mod.addBlock("StoneDryingRoomWall.js", "wall");
mod.addBlock("StoneDecayingRoom.js", "normal");
mod.addBlock("StoneDecayingRoomWall1_.js", "normal");
mod.addBlock("StoneDecayingRoomWall2_.js", "normal");
mod.addBlock("StoneDecayingRoomWall3_.js", "normal");
mod.addBlock("StoneDecayingRoomWall4_.js", "normal");
mod.addBlock("StoneDecayingRoomOutput.js", "normal");
mod.addBlock("StoneNurtureBench.js", "normal");
mod.addBlock("WillowTwigSieveNet.js", "normal");
mod.addBlock("SkinnedPalmWood.js", "post");
mod.addBlock("LeavesTankFixed.js", "normal");
mod.addBlock("ShootBottomBlock.js", "carpet");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*新物品*/
mod.addItem("itemTestTool.js", "normal");
mod.addItem("itemPineCone.js", "food");
mod.addItem("itemFuel.js", "normal");
mod.addItem("itemPineNeedles.js", "food");
mod.addItem("itemDriedLeaves.js", "normal");
mod.addItem("itemWood.js", "normal");
mod.addItem("itemShoot.js", "normal");
mod.addItem("itemCocoaLeaves.js", "normal");
mod.addItem("itemLeavesBucket.js", "normal");
mod.addItem("itemLeavesBucket_water.js", "normal");
mod.addItem("itemSmallFlint.js", "normal");
mod.addItem("itemNet.js", "normal");
mod.addItem("itemGravel_Lump.js", "normal");
mod.addItem("itemGravel_Normal.js", "normal");
mod.addItem("itemGravel_Small.js", "normal");
mod.addItem("itemGravel_Crushed.js", "normal");
mod.addItem("itemGravel_Drossy.js", "normal");
mod.addItem("itemGravel_Dust.js", "normal");
mod.addItem("itemSoil.js", "normal");
mod.addItem("itemWoodenExplorationDrill.js", "normal");
mod.addItem("itemStoneExplorationDrill.js", "normal");
mod.addItem("itemStoneKnife.js", "normal");
mod.addItem("itemBark.js", "normal");
mod.addItem("itemLeavesBucket_turpentine.js", "normal");
mod.addItem("itemGrassHelmet.js", "armor");
mod.addItem("itemGrassPlate.js", "armor");
mod.addItem("itemGrassLegs.js", "armor");
mod.addItem("itemGrassBoots.js", "armor");
mod.addItem("itemWillowTwig.js", "normal");
mod.addItem("itemTransformation0.js", "normal");
mod.addItem("itemDriedBark.js", "normal");
mod.addItem("itemGodPower.js", "normal");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*新界面*/
mod.addGui("WoodenWorkingTableGUI.js", "crafting");
mod.addGui("WoodenWorkingTableGUI_durability.js", "crafting");
mod.addGui("WoodenVariationRoomGUI.js", "furnace");
mod.addGui("StoneWorkingTableGUI.js", "crafting");
mod.addGui("StoneVariationRoomGUI.js", "furnace");
mod.addGui("StoneDecayingRoomGUI.js", "chest");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*新方块实体*/
mod.addTileEntity("entityWoodenWorkingTable.js", "normal");
mod.addTileEntity("entityWoodenVariationRoom.js", "furnace");
mod.addTileEntity("entityWoodenDryingRoom.js", "normal");
mod.addTileEntity("entityDryingBlock.js", "normal");
mod.addTileEntity("entityWoodenDecayingRoom.js", "normal");
mod.addTileEntity("entityLeavesSieveNet0.js", "normal");
mod.addTileEntity("entityLeavesSieveNet1.js", "normal");
mod.addTileEntity("entitySievedBlock.js", "normal");
mod.addTileEntity("entityStoneVariationRoom.js", "furnace");
mod.addTileEntity("entityStoneDryingRoom.js", "normal");
mod.addTileEntity("entityStoneDryingRoomWall.js", "normal");
mod.addTileEntity("entityStoneDecayingRoom.js", "chestBlock");
mod.addTileEntity("entityWillowTwigSieveNet0.js", "normal");
mod.addTileEntity("entityWillowTwigSieveNet1.js", "normal");
mod.addTileEntity("entityShootBottomBlock.js", "normal");
mod.addTileEntity("entityShoot.js", "normal");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*新脚本*/
mod.registerBonemealHandler("BonemealHandler.js");
mod.registerIngameRenderer("IngameRenderer.js");
mod.registerCraftingHandler("CraftingHandler.js");
mod.loadScript("WoodenWorkingTableScript.js");
mod.loadScript("WoodenWorkingTableScript_advanced.js");
mod.loadScript("WoodenWorkingTableScript_randomAdd.js");
mod.loadScript("WoodenVariationRoomScript.js");
mod.loadScript("StoneWorkingTableScript.js");
mod.loadScript("StoneWorkingTableScript_randomAdd.js");
mod.loadScript("StoneVariationRoomScript.js");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*新设置*/
config.addStringProperty("GamePath","global","default disk","\u5982\u679c\u4f60\u4e0d\u60f3\u5c06\u672c\u6574\u5408\u76f4\u63a5\u653e\u7f6e\u5230\u78c1\u76d8\u4e0b\u002c\u8bf7\u8bbe\u7f6e\u8def\u5f84\u002e\u0020\u0028\u4f8b\u5b50\u003a\u0020\u0044\u003a\u002f\u65b0\u5efa\u6587\u4ef6\u5939\u002f\u65b0\u5efa\u6587\u4ef6\u5939\u002f\u004b\u0061\u0072\u006d\u0061\u0032\u0029\u0020\u005b\u9ed8\u8ba4\u503c\u003a\u0064\u0065\u0066\u0061\u0075\u006c\u0074\u0020\u0064\u0069\u0073\u006b\u005d");
//config.addIntProperty("ResolutionX","global","1280","\u5206\u8fa8\u7387\u7684\u0078\u503c\u002e\u0020\u005b\u9ed8\u8ba4\u503c\u003a\u0031\u0032\u0038\u0030\u005d");
//config.addIntProperty("ResolutionY","global","768","\u5206\u8fa8\u7387\u7684\u0079\u503c\u002e\u0020\u005b\u9ed8\u8ba4\u503c\u003a\u0037\u0036\u0038\u005d");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*新标签页*/
mod.addCreativeTab("_Wood", "jinshucraft:PineWood:0");
mod.addCreativeTab("_Stone", "jinshucraft:itemSmallFlint:0");