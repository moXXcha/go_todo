package main

import "todo_app/router"

func main() {
	router := router.Web()
	router.Run("0.0.0.0:8081")
}