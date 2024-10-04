import express from 'express';
import { registrarParticipante, listarMeusEventos } from '../controller/participanteController.js';
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/registrar', registrarParticipante); 
router.get('/meus-eventos', authenticateToken, listarMeusEventos); 
export default router;
