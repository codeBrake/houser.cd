
module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(house => {
            res.status(200).send(house)
        })
    },
    addHouse: (req, res) => {
        const db = req.app.get('db')
        db.add_house().then(house => {
            res.status(200).send(house)
        })
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        
    }

    
}