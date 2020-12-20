require('dotenv').config()
const knex = require('knex')
const FoldersService = require('./folders/folders-service')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL,
})

FoldersService.getAllFolders(knexInstance)
    .then(folders => console.log(folders))
    .then(() =>
        FoldersService.insertFolder(knexInstance, {
            name: 'New Name',
        })
    )
    .then(newFolder => {
        console.log(newFolder)
        return FoldersService.updateFolder(knexInstance,
            newFolder.id,
            { name: 'Updated name' }
        ).then(() => FoldersService.getById(knexInstance, newFolder.id))
    })
    .then(folder => {
        console.log(folder)
        return FoldersService.deleteFolder(knexInstance, folder.id)
    })