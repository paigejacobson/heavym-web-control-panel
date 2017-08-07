// require osc-js package
const OSC = require('osc-js')

// set up a UDP port to listen on 7000
const config = { udpClient: { port: 7000 } }

// declare a new OSC object using the OSC.BridgePlugin
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

// Open our OSC port
osc.open();
osc.on('open', () => {
  console.log("osc port open");
})
