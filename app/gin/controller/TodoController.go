package controller

import (
	"fmt"
	"net/http"
	"strconv"
	"todo_app/database"
	"todo_app/model"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
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

func GetTodo(c *gin.Context) {
	todo := model.Todo{}

	id := c.Query("id")
	db := database.InitDB()

	idUint, err := strconv.ParseUint(id, 10, 32)
if err != nil {
    fmt.Println("変換エラー:", err)
    return
}


	if err := db.Where(&model.Todo{Model: gorm.Model{ID: uint(idUint)}}).First(&todo).Error; err != nil {
		c.JSON(500, gin.H{
			"message": "データ取得できませんでした",
		})
		panic("not found your data")
	}

	fmt.Println(todo)

	c.JSON(http.StatusOK, gin.H{
		"todo": todo,
	})
}