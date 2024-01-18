const express= require("express")
const { GetData, PostData, UpdateData, RemoveData, GetparticulerData } = require("../controller/admin")

const Router= express.Router()

Router.route("/getdata").get(GetData)
Router.route("/addData").post(PostData)
Router.route("/editdata/:id").put(UpdateData)
Router.route("/removedata/:id").delete(RemoveData)
Router.route("/Getparticulardata/:id").get(GetparticulerData)

module.exports= Router