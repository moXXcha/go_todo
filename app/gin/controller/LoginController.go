package controller

import (
	"encoding/hex"
	"fmt"
	"net/http"
	"todo_app/database"
	"todo_app/model"
	"todo_app/usecase"
	"todo_app/util"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/sessions"
)

type LoginRequestBody struct {
	Email string
	Password string
}

func LoginController(c *gin.Context) {

	store := util.SessionStore()

	var requestBody LoginRequestBody
	if err := c.ShouldBindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var users []model.User
	db := database.InitDB()

	db.Where(model.User{Email: requestBody.Email}).First(&users)

	if len(users) == 0{
		c.JSON(409, gin.H{
			"message": "アカウントが見つかんないっす",
		})
		panic("not found your acount")
	}

	temp := usecase.PasswordHashAction(requestBody.Password)
	hashedPass := hex.EncodeToString(temp) 

	if users[0].Password != hashedPass {
		c.JSON(403, gin.H{
			"message": "パスワード違うっす",
		})
		panic("not much password")
	}

	session, err := store.Get(c.Request, "session")
	if err != nil {
		c.JSON(500, gin.H{
			"message": "セッションエラー",
		})
		panic("session error")
	}
	session.Options = &sessions.Options{
		Path: "/",
	}
	session.Values["user_email"] = requestBody.Email
	session.Save(c.Request, c.Writer)

	fmt.Println("ログイン成功")
}