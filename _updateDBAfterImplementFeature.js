/*
    update database after some implementation is done. call this api in 
    https://doctors-portal-server-rosy.vercel.app/addPrice and it add price automatic in database.
    app.get('/addPrice', async(req, res) =>{
            const filter = {}
            const options = {
                upsert: true
            }
            const updatedDoc = {
                $set: {
                    price: 99
                }
            }
            const result = await appointmentOptionCollection.updateMany(filter,updatedDoc,options);
            res.send(result)
        })

*/