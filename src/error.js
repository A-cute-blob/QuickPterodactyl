/**
 * @class Err
 * @classdesc The Error Managing module
 * @extends Error
 */
class Err extends Error {
	constructor(message) {
		super();
		Error.captureStackTrace(this, this.constructor);
        this.name = 'QuickPteroDactyl Error';
        this.message = message;
	}
}
export default Err