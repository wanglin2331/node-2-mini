module.exports = {
    getPlanes: (req,res) => {
        const dbInstance = req.app.get('db');
        const arr=[25];

        dbInstance.get_planes([8])
        .then(planes => {res.status(200).send(planes)})
        .catch(err=>{console.log(err);
                    res.status(500).send(err)
        });
    }

};