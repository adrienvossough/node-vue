class ApiService {
    constructor(protocol, host, port, T, endpoint = "") {
        this.protocol = protocol
        this.host = host
        this.port = port
        this.T = T
        this.endpoint = endpoint
    }

    getAll = async () => {
        return fetch(`${this.protocol}://${this.host}:${this.port}/api/${this.endpoint}`).then(resp => resp.json()).then(json => json.map(elem => new this.T(elem)))
    }
}

export default ApiService