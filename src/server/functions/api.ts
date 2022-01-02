import express, { json, Request, Response, urlencoded } from 'express'
import passport from 'passport'
import cors from 'cors'
import serverless from 'serverless-http'
import mongoose from 'mongoose'
import * as archiveRoutes from '../routes/archive'
import * as userAccountRoutes from '../routes/account'
// import * as twitterRoutes from '../routes/twitter'
// import * as notificationRoutes from '../routes/notification'
import { SERVER_CONFIG } from '../config/server'
import { web3Strategy, deserializeUser, serializeUser } from '../strategies/web3'
import session from 'express-session'

// Basic Express configuration
const server = express()
const router = express.Router()
server.use(json())
server.use(urlencoded())
server.use(cors())

// Connect db
mongoose.connect(SERVER_CONFIG.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
mongoose.connection.on('error', err => {
  console.error('err', err)
})
mongoose.connection.on('connected', (err, res) => {
  console.log('mongoose is connected')
})

// Routes
router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Service up and running!')
})

archiveRoutes.register(router)
userAccountRoutes.register(router)
// twitterRoutes.register(router)
// notificationRoutes.register(router)

// Express-sessions
if (!SERVER_CONFIG.SESSION_SECRET) throw new Error('Required SESSION_SECRET not found.')
if (SERVER_CONFIG.NODE_ENV === 'production') {
  console.log('Configuring secure session cookies. Requires an https-enabled website.')
  server.use(session({ secret: SERVER_CONFIG.SESSION_SECRET, cookie: { secure: true } }))
} else {
  server.use(session({ secret: SERVER_CONFIG.SESSION_SECRET }))
}

// Passport configuration
passport.use('web3', web3Strategy)
server.use(passport.initialize())
server.use(passport.session())

passport.serializeUser(serializeUser)
passport.deserializeUser(deserializeUser)

server.get('/api/cache-test', (req, res) => {
  console.log(req.user, 'req user');

  setTimeout(() => {
    res.json(Math.random() * 100);
  }, 2000);
})

server.use('/api', router)

export const handler = serverless(server)
