package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"

	"todo_app/database"
	"todo_app/model"
)

type TestRequestBody struct {
	Text string `json:"text"` // JSON フィールドにマッピング
}

func TestControler(c *gin.Context) {

	var requestBody TestRequestBody

	// JSON ボディをバインドして取り出す
	if err := c.ShouldBindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db := database.InitDB()
	test := model.Test{Text: requestBody.Text}
	result := db.Create(&test)

	if result.Error != nil {
		c.JSON(500, gin.H{
			"message": result.Error,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"message": requestBody,
	})
}
