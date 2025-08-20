import express from 'express'
import {errorPage} from '../controller/errorController.js'

const errorRouter = express.Router();

errorRouter.all("/*",errorPage);

export default errorRouter;