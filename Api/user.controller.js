const user = {
    get: (req, res) => {
        res.status(200).send('Este es un chanchito')
    },
    list: (req, res) => {
        res.status(200).send('Hola chanchito')
    },
    create: (req, res) => {
        res.status(201).send('Creando un chanchito')
    },
    update: (req, res) => {
        res.status(204).send('Actualzando chanchito')
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminando chanchito')
    }
}

module.exports = user