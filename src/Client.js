import fetch from 'node-fetch'
import Error from './error'
import events from './event'
import fs from 'fs'
const out = fs.createWriteStream('./stdout.log');
const err = fs.createWriteStream('./stderr.log');
const logger = new console.Console(out, err);

const params = {
                name: String,
                user: Number,
                egg: Number,
                nest: Number,
                startup: String,
                docker_image: String,
                environment: {},
                limits: {
                    memory: Number,
                    swap: Number,
                    disk: Number,
                    io: Number,
                    cpu: Number
                },
                feature_limits: {
                    databases: Number,
                    allocations: Number,
                    backups: Number,
                },
                deploy: {
                    locations: [],
                    dedicated_ip: Boolean,
                    port_range: []
                },
            }
/**
 * @class Client
 */
class Client extends events {

/**
 * @constructor 
 * @constructs Client
 * @param {object} ops The option in the constructor
 * @param {string} ops.api The api key 
 * @param {string} ops.url The panel url
 * @example const client = new Client({ api: 'key', url: 'example.in'})
 */
 constructor(ops) {
	 super();
	
	 			if(typeof ops !== 'object') throw new Error('Expected options to be object recieved' + typeof ops)
if(!ops.url) throw new Error('No domain given in the constructor')
if(typeof ops.url !== 'string')  throw new Error('Expected domain to be string recieved' + typeof ops.url)
const httpregex = new RegExp(`/(https?:\/\/[^\s]+)/g`)
 if (!ops.url.match(httpregex)) {
    throw new Error('Not a valid domain')
  }
if(!ops.api) throw new Error('No api key found')
if(typeof ops.api !== 'string')  throw new Error('Expected domain to be string recieved' + typeof ops.api)
this.api = ops.api
this.url = ops.url
 }

 /**
	* Creates a server
	* @param {object} ops The options required for creating a server
	* @param {string} ops.name The name of the server
	* @param {number} ops.user The id of the user 
	* @param {number} ops.egg The id of the egg
	* @param {number} ops.nest The nest id
	* @param {string} ops.startup The startup command
	* @param {string} ops.docker_image The docker Image
	* @param {object} ops.environment The environment option
	* @param {object} ops.limits The limits of the server
	* @param {number} ops.limits.memory The memory limit of the server
	* @param {number} ops.limits.swap The swap limit of the server
	* @param {number} ops.limits.disk The disk limit of the server
	* @param {number} ops.limits.io The io limit of the server
	* @param {number} ops.limits.cpu The cpu limits of the server
	* @param {object} ops.feature_limits The feature limits of the server
	* @param {number} ops.feature_limits.databases The database limit of the server
	* @param {number} ops.feature_limits.allocations The allocation limit of the server
	* @param {number} ops.feature_limits.backups The backup limit of the server
	* @param {object} ops.deploy The deploy parameters
	* @param {array} ops.deploy.locations The locations of the serber
	* @param {boolean} ops.deploy.dedicated_ip State whether the server is on  a dedicated ip
	* @param {array} ops.deploy.port_range The port range of the server
	* @returns {object} res 
	* @example await client.server_create({
                name: 'lol',
                user: 1,
                egg: 1,
                nest: 1,
                startup: 'node index.js',
                docker_image: 'la la la',
                environment: {},
                limits: {
                    memory: 1,
                    swap: 1,
                    disk: 1,
                    io: 1,
                    cpu: 1
                },
                feature_limits: {
                    databases: 1,
                    allocations: 1,
                    backups: 1,
                },
                deploy: {
                    locations: [],
                    dedicated_ip: true,
                    port_range: []
                },
            })
  */
 static async server_create(ops=params) {
if(!ops) throw new Error('Options not provided')
if(typeof(ops) !== 'object') throw new Error('Excepted options to be object recieved ' + typeof(ops))
if(!ops.name) throw new Error('No name found')
if(typeof(ops.name) !== 'string') throw new Error('Excepted name to be string recieved ' + typeof(ops.name))
if(!ops.name) throw new Error('No user found')
if(typeof(ops.user) !== 'number') throw new Error('Excepted user to be number recieved ' + typeof(ops.user))
if(!ops.egg) throw new Error('No egg found')
if(typeof(ops.egg) !== 'number') throw new Error('Excepted egg to be number recieved ' + typeof(ops.egg))
if(!ops.nest) throw new Error('No nest found')
if(typeof(ops.nest) !== 'number') throw new Error('Excepted nest to be number recieved ' + typeof(ops.nest))
if(!ops.startup) throw new Error('No startup found')
if(typeof(ops.name) !== 'string') throw new Error('Excepted startup to be string recieved ' + typeof(ops.startup))
if(!ops.docker_image) throw new Error('No docker_image found')
if(typeof(ops.docker_image) !== 'string') throw new Error('Excepted docker_image to be string recieved ' + typeof(ops.docker_image))
if(!ops.environment) logger.warn('No environments found')
if(ops.environment && typeof(ops.environment) !== 'object') throw new Error('Excepted environment to be object recieved ' + typeof(ops.environment))
if(!ops.limits) throw new Error('Limits not provided')
if(typeof(ops.limits) !== 'object') throw new Error('Excepted limits to be object recieved ' + typeof(ops.limits))
if(!ops.limits.memory) throw new Error('No memory provided')
if(typeof(ops.limits.memory) !== 'number') throw new Error('Excepted memory to be number recieved ' + typeof(ops.limits.memory))
if(!ops.limits.swap) throw new Error('No swap provided')
if(typeof(ops.limits.swap) !== 'number') throw new Error('Excepted swap to be number recieved ' + typeof(ops.limits.swap))
if(!ops.limits.disk) throw new Error('No disk provided')
if(typeof(ops.limits.disk) !== 'number') throw new Error('Excepted disk to be number recieved ' + typeof(ops.limits.disk))
if(!ops.feature_limits) throw new Error('Limits not provided')
if(typeof(ops.feature_limits) !== 'object') throw new Error('Excepted feature_limits to be object recieved ' + typeof(ops.feature_limits))
if(!ops.feature_limits.databases) throw new Error('No database limit provided')
if(typeof(ops.feature_limits.databases) !== 'number') throw new Error('Excepted databases to be number recieved ' + typeof(ops.feature_limits.databases))
if(!ops.feature_limits.databases) throw new Error('No allocations limit provided')
if(typeof(ops.feature_limits.allocations) !== 'number') throw new Error('Excepted allocations to be number recieved ' + typeof(ops.feature_limits.allocations))
if(!ops.feature_limits.backups) throw new Error('No backups limit provided')
if(typeof(ops.feature_limits.backups) !== 'number') throw new Error('Excepted backups to be number recieved ' + typeof(ops.feature_limits.backups))
if(!ops.deploy) logger.warn('No deploy options found')
if(ops.deploy && typeof(ops.deploy) !== 'object') throw new Error('Excepted deploy options to be object recieved ' + typeof(ops.deploy))
if(!ops.deploy.dedicated_ip) throw new Error('Please provided if its a dedicated ip or not')
if(typeof(ops.deploy.dedicated_ip) !== 'boolean') throw new Error('Excepted dedicated ip option to be boolean recieved ' + typeof(ops.deploy.dedicated_ip))
if(!ops.deploy.locations ) throw new Error('Please provide locations option')
if(! Array.isArray(ops.deploy.locations)) throw new Error('Location option is not a valid array')
if(!ops.deploy.port_range ) throw new Error('Please provide port range option')
if(! Array.isArray(ops.deploy.port_range)) throw new Error('Port range option is not a valid array')
const auth = { Bearer: this.api}
const bearer = JSON.stringify(auth)
await fetch(`${this.url}/api/application/servers`, {
	        method: 'post',
          body:    JSON.stringify(ops),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', "Authorization":  "Bearer "+ this.api },

}).then(res => {
	if(res.status === 403) throw new Error('Not a valid api')
this.emit('serverCreate', res)
	return res

}).catch(e => { throw new Error(e.message) })
 }
 /**
	* Deletes a server
	* @param {number} id The id of the server
	* @returns {object} res
	* @example client.server_delete(1)
  */

static async server_delete(id) {
			if(!id) throw new Error('Please provide a id')
			if(typeof(id) !== 'number') throw new Error('The id is not a number')
const auth = { Bearer: this.api}
const bearer = JSON.stringify(auth)
await fetch(`${this.url}/api/application/servers/${id}`, {
	        method: 'delete',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', "Authorization":  "Bearer "+ this.api },

}).then(res => {
	if(res.status === 403) throw new Error('Not a valid api')
this.emit('serverDelete', res)
	return res

}).catch(e => { throw new Error(e.message) })
}
/**
 * Emitted when server is created 
 * @event Client#serverCreate
 * @emits {any} res The response from the ptero api
 * @example Client.on('serverCreate', async (res) => {
 * console.log('Created a server' + '\n' + res)}) 
 */
/**
 * Emitted when server is deleted 
 * @event Client#serverDelete
 * @returns {any} res The resrponse from the ptero api
 * @example Client.on('serverDelete', async (res) => {
 * console.log('Created a server' + '\n' + res)}) 
 */
}

export default Client;