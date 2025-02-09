package router

import (
	"net/http"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Web() *gin.Engine {
	r := gin.Default()
	r.Use(cors.Default())
	r.POST("/api/login", func(c *gin.Context) {
        user := map[string]interface{}{
            "test":   1,
        }
        c.JSON(http.StatusOK, user)
    })

	return r
}