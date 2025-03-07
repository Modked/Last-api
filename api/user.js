const { createCanvas, loadImage } = require("canvas");

export default async function handler(req, res) {
    const { name = "Sasuke Uchiha", lvl = 10, exp = 750, avatar = "https://i.imgur.com/ZpijZpg.png" } = req.query;
    
    const userData = {
        name,
        lvl,
        exp,
        avatar,
        maxExp: 1000
    };

    res.status(200).json(userData);
}
