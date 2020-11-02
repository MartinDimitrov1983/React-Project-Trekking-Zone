const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        // const length = req.query.length ? parseInt(req.query.length) : 20
        // .sort('-created_at').limit(length)
        models.Trek.find().populate('author')
            .then((treks) => res.send(treks))
            .catch(next);
    },

    detail: (req, res, next) => {
        // const length = req.query.length ? parseInt(req.query.length) : 20
        // .sort('-created_at').limit(length)
        const id = req.params.id;
        models.Trek.findOne({_id : id}).populate('author')
            .then((treks) => res.send(treks))
            .catch(next);
    },

    post: (req, res, next) => {
        const { location, dateTime, description, imageUrl } = req.body;
        const { _id } = req.user;


        models.Trek.create({ location, dateTime, description, imageUrl, likes: 0, author: _id })
            .then((createdTrek) => {

                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { treks: createdTrek } }),
                    models.Trek.findOne({ _id: createdTrek._id })
                ]);
            })
            .then(([modifiedObj, trekObj]) => {
                res.send(trekObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description, imageUrl, location, dateTime, likes } = req.body;
        models.Trek.updateOne({ _id: id }, { description, imageUrl, location, dateTime, likes })
            .then((updatedTrek) => res.send(updatedTrek))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Trek.deleteOne({ _id: id })
            .then((removedTrek) => res.send(removedTrek))
            .catch(next)
    }
};