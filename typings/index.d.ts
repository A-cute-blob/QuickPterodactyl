
const EventEmitter = require("events").EventEmitter;
/**
 * @class Client    
 */
class Client extends EventEmitter {
/**
 *  
 * @constructs Client
 * @param {object} ops The option in the constructor
 * @param {string} ops.api The api key 
 * @param {string} ops.url The panel url
 * @example const client = new Client({ api: 'key', url: 'example.in'})
 */
    constructor(ops: Object);
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
    public server_create(ops: object): object;
     /**
	* Deletes a server
	* @param {number} id The id of the server
	* @returns {object} res
	* @example client.server_delete(1)
  */
    public server_delete(id: number): object;
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

/**
 * @class User
 */ 
class User extends EventEmitter {
    	    /**
	 * Creates user instance
	 * @constructor
	 * @param {object} ops The options of constructor
	 * @param {string} ops.url The domain
	 *  @param {string} ops.api The api
	 * @example const { User } = require('ptero.js')
	 * const user = new User({ url: 'abc.com', api: 'abc'})
	 */
constructor(ops: object);
	    /**
 * Creates a account in the panel
 * @param {object} ops The options used in creating
 * @param {string} ops.username The username of the User
 * @param {string} ops.email The email of the user
 * @param {string} ops.password The password of the User
 * @param {string} ops.first_name The first name of the User
 * @param {string} ops.last_name The last name of the User
 * @param {boolean} ops.root_admin Whether the user is admin or Not
 * @param {string} ops.language The default language of the user
 * @example user.create({ username: 'abc', email: 'abc@gmail.com', password: 'abc', first_name: 'bla bla', last_name: 'bla-bla', root_admin: false, language: 'en' })
 * @returns {any} res The response from the ptero api

 */
public create(ops: object): object;
	    /**
 * Updates a account in the panel
 * @param {number} id The id of the user
 * @param {object} ops The options used in updating
 * @param {string} ops.username The username of the User
 * @param {string} ops.email The email of the user
 * @param {string} ops.password The password of the User
 * @param {string} ops.first_name The first name of the User
 * @param {string} ops.last_name The last name of the User
 * @param {boolean} ops.root_admin Whether the user is admin or Not
 * @param {string} ops.language The default language of the user
 * @example user.update(1, { username: 'abc', email: 'abc@gmail.com', password: 'abc', first_name: 'bla bla', last_name: 'bla-bla', root_admin: false, language: 'en' })
 * @returns {any} res The response from the ptero api
 */
public update(id: number, ops: object): object;
   /**
		 * Deletes a account in the panel
		 * @param {number} id The id of the user
		 * @example user.delete(1)
		 * @returns {any} res The response from the ptero api
		 */

public delete(id: number): object;
 /**
		 * Checks a account in the panel
		 * @param {number} id The id of the user
		 * @example user.details(1)
		 * @returns {any} res The response from the ptero api
		 */
	   
public details(id: number): object;
   /**
				 * Emitted when account is deleted
				 * @event User#accountDelete
				 * @emits {any} res The response Emitted
				 * @example user.on('accountDelete', async res => {
				 * console.log(res)
				 * })
				 */
				 /**
				 * Emitted when account is checked
				 * @event User#accountCheck
				 * @emits {any} res The response Emitted
				 * @example user.on('accountCheck', async res => {
				 * console.log(res)
				 * })
				 */

	    /**  Emitted when account is updated
				 * @event User#accountUpdate
				 * @emits {any} res The response Emitted
				 * @example user.on('accountUpdate', async res => {
				 * console.log(res)
				 * })
				 */
				 /**
				 * Emitted when account is created
				 * @event User#accountCreate
				 * @emits {any} res The response Emitted
				 * @example user.on('accountCreate', async res => {
				 * console.log(res)
				 * })
				 */
}

export default {
    Client: Client,
    User: User
}