package controller

import (
	"fmt"
	"todo_app/util"

	"github.com/gin-gonic/gin"
)

func LogoutController(c *gin.Context) {
	store := util.SessionStore()
	session, err := store.Get(c.Request, "session")
	if err != nil {
		c.JSON(500, gin.H{"message": "session error"})
		return
	}

	session.Options.MaxAge = -1 // セッションを無効化
	session.Values = nil         // メモリ上のセッション値もクリア

	// 🔥 手動でクッキーを削除 (Set-Cookie が2つ送られないように)
	c.SetCookie("session", "", -1, "/", "", false, true)

	fmt.Println(session.Values) // 出力: <nil> 期待される
	c.JSON(200, gin.H{"message": "logout successful"})

}
