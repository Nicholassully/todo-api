 const express = require(`express`);
 const cors = require('cors');
 const bodyParser = require('body-parser');

  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  const PORT = 3001;

  const todoList = [];

 app.get('/api/todos', function (req, res) {
    res.json({"todos": todoList});
  });

  app.post('/api/todos', function (req, res){
    const newTodoItem = req.body;
    todoList.push(newTodoItem);
    res.json(newTodoItem);
  });


 app.listen(PORT, function(){
    console.log(`I'm listening on ${PORT}`);
  });
