package router

import (
	"todo_app/controller"
	"todo_app/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Web() *gin.Engine {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}))
	r.POST("/api/login", controller.LoginController)
	r.POST("/api/create/acount", controller.CreateAcount)

	auth := r.Group("/api/auth")
	auth.Use(middleware.AuthMiddleware)
	{
		auth.POST("/test", controller.TestControler)
		auth.POST("/create", controller.TodoCreate)
		auth.GET("/get/todos", controller.GetAllTodo)
		auth.POST("/logout", controller.LogoutController)
		auth.GET("/get/todo/detail", controller.GetTodo)
		auth.PATCH("/edit/todo", controller.EditTodo)
	}

	return r
}
