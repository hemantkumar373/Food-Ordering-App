import express from 'express'
import fs from 'fs'
import path from 'path'

const router=express.Router();


function resolveFile(fpath){
    return new Promise((resolve,reject)=>{
        fs.readFile(fpath,'utf-8',(err,data)=>{
            if(err)reject(err);
            resolve(JSON.parse(data))
        })
    })
}
const dataPath=path.join('dataset','allo-fullstack-Assignment-Dataset.json')
console.log(dataPath);
router.get('/data',async (req,res)=>{
    try {
        const data=await resolveFile(dataPath)
        res.status(200).json(data)
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Data Not Fetched",
        })
    }
})

export default router;