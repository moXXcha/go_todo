package controller

import (
	"encoding/hex"
	"fmt"
	"net/http"
	"todo_app/database"
	"todo_app/model"
	"crypto/sha256"

	"github.com/gin-gonic/gin"
)

type CreateAcountRequestBody struct {
	Email    string
	Password string
}

func CreateAcount(c *gin.Context) {
	var requestBody CreateAcountRequestBody

	if err := c.ShouldBindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var users []model.User
	db := database.InitDB()

	db.Where(model.User{Email: requestBody.Email}).First(&users)

	if len(users) > 0{
		c.JSON(409, gin.H{
			"message": "すでにアカウントある",
		})
		panic("allready created acount")
	}

	temp := getSHA256Binary(requestBody.Password)
	hashedPass := hex.EncodeToString(temp) 

	user := model.User{Email: requestBody.Email, Password: hashedPass}
	result := db.Create(&user)

	if result.Error != nil {
		c.JSON(500, gin.H{
			"message": result.Error,
		})
		panic(result.Error)
	}

	c.JSON(http.StatusOK, gin.H{
		"email": requestBody.Email,
	})
	fmt.Println("successfuly create acount")
}

func getSHA256Binary(input string) []byte {
	hash := sha256.Sum256([]byte(input))
	return hash[:] // 配列をスライスに変換
}