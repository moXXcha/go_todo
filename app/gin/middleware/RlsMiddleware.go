package middleware

import "gorm.io/gorm"

func RlsMiddleware(userId int) func(db *gorm.DB) *gorm.DB {
    return func(db *gorm.DB) *gorm.DB {
        return db.Where("user_id = ?", userId)
    }
}