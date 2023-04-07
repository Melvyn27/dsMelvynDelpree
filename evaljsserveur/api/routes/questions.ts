import { Request, Response } from 'express';
const route = require('express').Router();
route.get('/',
    (req: Request, res: Response) => {
        res.send('Bonjour Question')
    })
export default route;