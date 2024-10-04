import { Router } from "express";
import { authenticateToken } from '../middleware/authMiddleware.js'; 

const router = Router();


router.get('/', authenticateToken, (req, res) => {
    const sql = `SELECT * FROM palestrantes`;

    conn.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});



export default router;
