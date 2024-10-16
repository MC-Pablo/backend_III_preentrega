import UserModel from "../dao/models/user.model.js"

export default class Users {
    
    get = (params) =>{
        return UserModel.find(params);
    }

    getBy = (params) =>{
        return UserModel.findById(params)
    }

    save = (doc) =>{
        return UserModel.create(doc);
    }
    saveMany = (docs) =>{
        return UserModel.insertMany(docs)
    }

    update = (id,doc) =>{
        return UserModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return UserModel.findByIdAndDelete(id);
    }
};