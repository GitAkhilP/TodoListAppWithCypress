import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 6969

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.param('listName', (req, res, next, listName) => {
        if (lists.includes(listName)) {
                next()
        } else {
                res.status(400).send('Invalid List Name')
        }
})

class list {
        constructor(name) {
                this.name = name
                this.taskList = []
        }

        addItemToList(task) {
                this.taskList.push(task)
        }
}

const shoppingList = new list('Shopping')
const todoList = new list('ToDo')

var taskList = null

var lists = ['Shopping', 'ToDo']
var listObjs = [shoppingList, todoList]
var currList = 'default'

app.listen(port, () => {
        console.log(`App is running on port ${port}`)
})

app.get('/', (req, res) => {
        res.render('index.ejs', { Lists: lists, CurrList: currList })
})

app.post('/lists/:listName', (req, res) => {
        for (var i = 0; i < listObjs.length; i++) {
                if (listObjs[i].name === req.params.listName) {
                        listObjs[i].addItemToList(req.body.task)
                        taskList = listObjs[i].taskList
                }
        }
        console.log(taskList)
        res.render('index.ejs', { Task: taskList, Lists: lists, CurrList: currList })
})

app.get('/lists/:listName', (req, res) => {
        currList = req.params.listName

        for (var i = 0; i < listObjs.length; i++) {
                if (listObjs[i].name === req.params.listName) {
                        taskList = listObjs[i].taskList
                }
        }
        res.render('index.ejs', { Task: taskList, Lists: lists, CurrList: currList })
})

app.post('/lists', (req, res) => {
        lists.push(req.body.listName)
        const newList = new list(req.body.listName)
        listObjs.push(newList)
        res.render('index.ejs', { Task: taskList, Lists: lists, CurrList: currList })
})
