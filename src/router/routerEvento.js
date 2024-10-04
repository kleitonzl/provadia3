import express from 'express';
import { criarEvento, listarEventos } from '../controller/eventoController.js';
import { enviarFeedback } from '../controller/feedbackController.js';
import { basicAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/criar', basicAuth, criarEvento); 
router.get('/agenda', listarEventos); 
router.post('/feedback', enviarFeedback); 

export default router;