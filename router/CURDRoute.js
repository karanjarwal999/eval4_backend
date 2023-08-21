const express = require('express');
const CURDRoute = express.Router();
const AppointmentModal = require('../schema/Appointment')

CURDRoute.get('/', async (req, res) => {
    const {s,sort,filter} = req.query
    let data=await AppointmentModal.find()
    console.log(data)

    if(s){
        data = await data.filter((data)=>data.name.toLowerCase().includes(s))
    }
    if(filter){
        data=data.filter((data)=>data.specialization==filter)
    }
    if(sort){
        data=data.filter((data)=>data.date==sort)
    }
    res.status(200).send({ data: data})
})

CURDRoute.post('/appointments', async (req, res) => {
    let data =new AppointmentModal (req.body)
    console.log(data)
    await data.save()
    res.status(200).send({ data: data, message: 'appointments created successfully' })
})

CURDRoute.put('/update/:id', async (req, res) => {
    let post = await postModel.updateOne({ _id: req.params.id }, req.body)
    res.send({ message: "post updated successfully", post })
})

CURDRoute.delete('/delete/:id', async (req, res) => {
    let post = await AppointmentModal.deleteOne({ _id: req.params.id })
    res.send({ message: "post deleted successfully", post })
})

module.exports = CURDRoute