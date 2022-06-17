const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
const app = express();
let items=[1,2,3];
let workitems=[];
// app.use('view-engine', 'ejs');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  let day=date.getDate();
  res.render("list", { ListTitle: day,newitems:items });
});

app.post("/",(req,res)=>{
  var item=req.body.nextname;
  if(req.body.list === "Work"){
    workitems.push(item);
    res.redirect("/work");

  }else{
    items.push(item);
    res.redirect("/");
  }

});


/*------------------Work item-------*/
app.get("/work",(req,res)=>{
  res.render("list",{ListTitle:"Work List",newitems:workitems})
});


/*------------------About-------*/

app.get("/about",(req,res)=>{
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server started at 3000");
})
