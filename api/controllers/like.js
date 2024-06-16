import jwt from "jsonwebtoken";
import { db } from "../connect.js";

export const getLikes = (req, res) => {

        const q = `
        SELECT 
            userId, 
        FROM 
          likes
        WHERE 
          postId = ?
      `;
      
        db.query(q, [req.query.postId], (err,data)=>{
            if(err) return res.status(500).json(err);
            res.status(200).json(data);
        });
   };