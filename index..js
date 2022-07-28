const mineflayer = require('mineflayer')
// const autoeat = require("mineflayer-auto-eat")

const bot = mineflayer.createBot({
  host: 'ir.skyblock.uz',
  // port: 59386,
  username: 'Jesse'
})

// // Load the plugin
// bot.loadPlugin(autoeat)

// bot.once("spawn", () => {
//   bot.autoEat.options.priority = "foodPoints"
//   bot.autoEat.options.bannedFood = []
//   bot.autoEat.options.eatingTimeout = 3
// })

// // The bot eats food automatically and emits these events when it starts eating and stops eating.

// bot.on("autoeat_started", () => {
//   console.log("Auto Eat started!")
// })

// bot.on("autoeat_stopped", () => {
//   console.log("Auto Eat stopped!")
// })

// bot.on("health", () => {
//   if (bot.food === 20) bot.autoEat.disable()
    
//   // Disable the plugin if the bot is at 20 food points
//   else bot.autoEat.enable() // Else enable the plugin again
// })

bot.once("spawn", () => {
  bot.chat("/login plokplok");
})

bot.on('chat', async (username, message) => {
    if (username === bot.username) return
    switch (message) {
      case 'digjesse':
        dig()
        break
        
      case 'stopdigjesse':
        stopdig()
        break
    }
})

async function dig() {
  if (bot.targetDigBlock) {
    bot.chat('already digging')
  }
  if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
    var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0]; 
  if (pickaxe) await bot.equip(pickaxe, 'hand')
  }
  var block = bot.blockAtCursor(4);
  if (!block) return setTimeout (function () { dig(); }, 100);
  await bot.dig(block, 'ignore')
  dig()
}

// const autoEat = async () => {
//   const result = await dig()
// }