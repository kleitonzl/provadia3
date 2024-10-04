import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import conn from '../config/conn.js';


export const registerUser = (req, res) => {
////😭😭😭😭
};


export const loginUser = (req, res) => {
    const { email, password } = req.body;

    const sql = 'select * from users WHERE email = ?';
    conn.query(sql, [email], (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ message: 'Autenticação falhou' });
        }

        const user = results[0];

        
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Autenticação falhou' });
        }

      
        const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    });
};
