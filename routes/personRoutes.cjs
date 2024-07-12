const express = require('express');
const mongoose = require("mongoose");
// const db =require( './../db.js');
const Person = require("../content/person.model.cjs");

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        console.log('data');
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved', response);
        res.status(200).json(response)
    } catch (error) {
        console.log("error while saving data ", error);
    }
})


router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        // const person=data.stringify();
        res.status(201).json(data)

    } catch (error) {
        console.log('error while fetching data from db', error);
        res.status(501).send('error while fetching data')
    }
})

// find worker 
router.get('/:worktype', async (req, res) => {
    try {
        const workType = req.params.worktype;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType })
            console.log('worktype response fetched');
            res.status(202).json(response)
        } else {
            res.status(404).json({ error: 'Invalid work type' })
        }
    } catch (error) {
        res.status(502).send(error, 'error while fetching worktype')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        try {
            const response = await Person.findByIdAndUpdate(personId, updatedPersonData, { new: true })
            console.log(personId, "\n updata: ", updatedPersonData, "\nres");
            console.log('data updated sucessfuly', response);
            if(!response){return res.status(404).json({ error: 'record not found' })}

            console.log('record updated sucessfully');
            res.status(203).json(response);


        }
        catch (error) {
            console.log(error,'while lookibg for updation record');
             res.status(404).json({ error: 'record not found' })
        }

    } catch (error) {
        console.log(error, 'error while updating person data');
        res.status(500).json({ error: 'internal server error' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const delId = req.params.id;
        
          try{  const response = await Person.findByIdAndDelete({ _id: delId })

                if(!response){return res.status(404).json({error:' No record found to delete'})}
                console.log('record deleted sucessfully');
                res.status(200).json({message : 'record deleted succesfully'})

    }catch(error){
        console.log(error,'error while lookibg for deletion');
        res.status(404).json({error:' No record found to delete'})
    }
         
        
    } catch (error) {
        console.log(error, 'error while deleting data');
        res.status(500).json({ error: 'Internal Server error while deleting record' })
    }

})

module.exports = router;