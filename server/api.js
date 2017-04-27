const express = require('express');
const router = express.Router();
const db = require('./db');
const fn = () => {};

router.get('/api/getArticle', (req, res) => {
  const _id = req.query.id;
  db.Article.findOne({_id}, (err, doc) => {
    if (err) {
      console.log(err)
    } else if (doc) {
      res.send(doc)
    }
  })
});

router.get('/api/getArticles', (req, res) => {
  db.Article.find(null, 'title date content category', (err, doc) => {
    if (err) {
      console.log(err)
    } else if (doc) {
      res.send(JSON.stringify(doc))
    }
  })
});
router.get('/api/getArticlesMenus', (req, res) => {
  db.Article.find(null, 'title date content category', (err, doc) => {
    if (err) {
      console.log(err)
    } else if (doc) {
      // let jsonDoc = JSON.stringify(doc);
      // var menuCategory = [{category: '任务'},{category: '新品录入'},{category: '入出库'},{category: '品牌方收货'},{category: '退货'}
      //   ,{category: '库存查询'},{category: '货架'},{category: '订单'},{category: '物品'},{category: '发货'},{category: '运单'}];
      //
      // for (var i = 0, len = jsonDoc.length; i < len; i++) {
      //   for (var j = 0, lenj = menuCategory.length; j < lenj; j++) {
      //     if( jsonDoc[i].category == menuCategory[j].category ){
      //       let menus = menuCategory[j].submenu = [];
      //       menus.push(jsonDoc[i])
      //     }
      //   }
      // }
      // res.send(JSON.stringify(menuCategory))
      res.send(JSON.stringify(doc))
    }
  })
});

router.post('/api/login', (req, res) => {
  const {name, pwd} = req.body;
  db.User.findOne({name}, 'pwd', (err, doc) => {
    switch (true) {
      case !!err:
        console.log(err);
        break;
      case !doc:
        res.send({state: 0, msg: '账号不存在'});
        break;
      case doc.pwd === pwd:
        res.send({state: 1, msg: '登陆成功'});
        break;
      case doc.pwd !== pwd:
        res.send({state: 2, msg: '密码错误'});
        break;
      default :
        res.send({state: 3, msg: '未知错误'})
    }
  })
});

router.post('/api/saveArticle', (req, res) => {
  const id = req.body._id;
  const article = {
    title: req.body.title,
    date: req.body.date,
    content: req.body.content,
    category: req.body.category
  };
  if (id) {
    db.Article.findByIdAndUpdate(id, article, fn)
  } else {
    new db.Article(article).save()
  }
  res.status(200).end()
});

router.post('/api/deleteArticle', (req, res) => {
  db.Article.findByIdAndRemove(req.body.id, fn);
  res.status(200).end()
});

router.post('/api/getLinks', (req, res) => {
  db.Link.find(null, 'name category href', (err, doc) => {
    if (err) {
      console.log(err)
    } else if (doc) {
      res.send(doc)
    }
  })
});

router.post('/api/saveLinks', (req, res) => {
  const links = req.body || [];
  db.Link.remove(null, fn);
  const promises = links.map(({name, href, category}) => new db.Link({name, href, category}).save());
  Promise.all(promises)
    .then(() => res.status(200).end())
    .catch(() => res.status(500).end())
});
router.post('/api/savePwd', (req, res) => {
  const {name, pwd} = req.body;
  db.User.findOneAndUpdate({name}, {pwd}, fn);
  res.status(200).end()
});

router.post('/api/getMenus', (req, res) => {
  db.Link.find(null, 'name category href', (err, doc) => {
    if (err) {
      console.log(err)
    } else if (doc) {
      res.send(doc)
    }
  })
});
module.exports = router;
