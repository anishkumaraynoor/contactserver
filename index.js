






const jsonServer = require('json-server')
const cors = require('cors')

const contactServer = jsonServer.create()
const router = jsonServer.router('data.json')
const middleware = jsonServer.defaults()

contactServer.use(cors())
contactServer.use(middleware)
contactServer.use(router)

const PORT = 4000
contactServer.listen(PORT,()=>{
    console.log(`contact server started port ${PORT}`);
})