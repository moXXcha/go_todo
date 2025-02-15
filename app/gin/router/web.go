package router

import (
	"net/http"
	"todo_app/controller"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Web() *gin.Engine {
	r := gin.Default()
	r.Use(cors.Default())
	r.POST("/api/login", func(c *gin.Context) {
		user := map[string]interface{}{
			"test": 1,
		}
		c.JSON(http.StatusOK, user)
	})
	r.POST("/api/test", controller.TestControler)
	r.POST("/api/create", controller.TodoCreate)
	r.GET("/api/get/todos", controller.GetAllTodo)
	r.POST("/api/create/acount", controller.CreateAcount)

	return r
}
