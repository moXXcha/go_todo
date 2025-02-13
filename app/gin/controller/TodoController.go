package controller

import (
	"fmt"
	"net/http"
	"todo_app/database"
	"todo_app/model"

	"github.com/gin-gonic/gin"
)



type TodoCreateRequestBody struct {
	Title string
	Description string
}

func TodoCreate(c *gin.Context) {
	var requestBody TodoCreateRequestBody

	if err := c.ShouldBindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db := database.InitDB()
	todo := model.Todo{Title: requestBody.Title, Description: requestBody.Description}

	result := db.Create(&todo)

	if result.Error != nil {
		c.JSON(500, gin.H{
			"message": result.Error,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "success create todo",
	})
}

func GetAllTodo(c *gin.Context) {
	todos := []model.Todo{}
	db := database.InitDB()

	result := db.Find(&todos)
	
	if result.Error != nil {
		c.JSON(500, gin.H{
			"message": result.Error,
		})
		fmt.Println("error get todos")
	}

	c.JSON(http.StatusOK, gin.H{
		"todos": todos,
	})
	fmt.Println("success get todos")
}