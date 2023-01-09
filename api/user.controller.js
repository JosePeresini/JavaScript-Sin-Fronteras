const User = {
    get: (req, res) => {
        res.status(200).send('This is a piggy');
    },
    list: (req, res) => {
        res.status(200).send('Hello Piggy');
    },
    create: (req, res) => {
        res.status(201).send('Create Piggy');
    },
    update: (req, res) => {
        res.status(204).send('Actualize Piggys');
    },
    destroy: (req, res) => {
        res.status(204).send('Delete Piggy');
    }
}

module.exports = User;