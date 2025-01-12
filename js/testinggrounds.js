addLayer("T", {
    name: "Test", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
                points: new Decimal(0),
    }},
    color: "#0055ff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Test", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1e307, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "T", description: "T: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],   upgrades: {  11: {
        title: "Multiply",
        description: "Multiplies points.",
        cost: new Decimal(0),

    },
    12: {
        title: "Power",
        description: "Power points.",
        cost: new Decimal(0),

    },
    13: {
        title: "More",
        description: "It grows more.",
        cost: new Decimal(0),

    },
    14: {
        title: "ULTIMATE",
        description: "The formula is quite good.",
        cost: new Decimal(0),

    },
    15: {
        title: "Tetrate",
        description: "MAXIMUM POWER.",
        cost: new Decimal(0),

    },
    16: {
        title: "Tetrate Master",
        description: "INFINITY POWER.",
        cost: new Decimal(0),

    },
    17: {
        title: "Ultimate power",
        description: "BEYOND TRANSCENDENT POWER.",
        cost: new Decimal(0),

    },


    }
})    