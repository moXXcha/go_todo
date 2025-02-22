package middleware

import (
	"fmt"
	"todo_app/util"

	"github.com/gin-gonic/gin"
)

func AuthMiddleware(c *gin.Context) {
	store := util.SessionStore()

	session, err := store.Get(c.Request, "session")

	if err != nil {
		c.JSON(500, gin.H{
			"message": "session err",
		})
		c.Abort()
		return
	}
        
        // セッションからユーザー情報を取得
    userEmail, ok := session.Values["user_email"].(string)

	if !ok || userEmail == "" {
		c.JSON(403, gin.H{
			"message": "please login",
		})
		fmt.Println("しっぱい")
		c.Abort()
		return
	}
	fmt.Println("ログインしとる", ok, userEmail)
	c.Set("user_email", userEmail)
	c.Next()
}