import {getAll} from "../baseServer.js";
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('../database.db');

export const getQuizz = async (req, res) => {
    console.log(req.params.id)
    let quizzData = [] 
    await getAll(req.params.id).then(data => quizzData = data)
     return res.send(quizzData)
}