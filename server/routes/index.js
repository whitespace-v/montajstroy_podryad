const router = require('express').Router()

//import under-routers
const categoryRouter = require('./CategoryRouter')
const vehicleRouter = require('./VehicleRouter')
const userRouter = require('./UserRouter')

//under-routers
router.use('/category', categoryRouter)
router.use('/user', userRouter)
router.use('/vehicle', vehicleRouter)

module.exports = router