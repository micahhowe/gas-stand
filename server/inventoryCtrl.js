module.exports = {
    getInventory: (req,res) =>{
        let db = req.app.get('db') //This is connected to index.js line 14 >> app.set('db',db);
        //console.log(db) >>> This would return the entire db object which gets all sorts of good info
        db.get_all_inventory().then(inventory => {
            res.status(200).send(inventory)
        })
    },
    addInventory: (req,res) =>{
        res.sendStatus(200)
    },
    sellInventory: (req,res) =>{
        res.sendStatus(200)
    }
}