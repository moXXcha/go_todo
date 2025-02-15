package main

import (
	"todo_app/database"
	"todo_app/router"
	"todo_app/model"

)

func main() {
	db := database.InitDB()
	db.AutoMigrate(&model.User{})

	router := router.Web()
	router.Run("0.0.0.0:8081")
}