class Logger {
	constructor(name) {
		this.count = 0;
		this.name = name;
	}

	log (message) {
		this.count++;
		console.log(`[ ${name} ] message`)
	}
}

module.exports = new Logger('DEFAULT')  // Aqui está exportando el objeto
module.exports.Logger = Logger   // Aqui está exportando la clase