package database

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

type DBConfig struct {
	User string
    Password string
    Host string
    Port string
    DBName string
}

func getDBConfig() *DBConfig {
	return &DBConfig{
		User: os.Getenv("POSTGRES_USER"),
		Password: os.Getenv("POSTGRES_PASSWORD"),
		Host: os.Getenv("POSTGRES_HOST"),
		Port: os.Getenv("POSTGRES_PORT"),
		DBName: os.Getenv("POSTGRES_NAME"),
	}
}

func (c *DBConfig) buildDSN() string {
	return fmt.Sprintf(
		"postgres://%s:%s@%s:%s/%s?sslmode=disable",
		c.User, c.Password, c.Host, c.Port, c.DBName,
	)
}

func InitDB() *gorm.DB {
	config := getDBConfig()
	dsn := config.buildDSN()
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		TranslateError: true,
	})
	if err != nil {
		panic(err)
	}
	DB = db
	log.Println("データベース接続に成功しました")
	return DB
}