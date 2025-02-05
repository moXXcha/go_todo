package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Web() *gin.Engine {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, "http://localhost:5173")
	})

	return r
}