import { Request, Response } from 'express';
const route = require('express').Router();
route.get('./mesannonces',
    (req: Request, res: Response) => {
        res.send('<p>Bonjour Question</p>')
    })
export default route;