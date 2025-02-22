package usecase

import "crypto/sha256"

func PasswordHashAction(password string) []byte {
	hash := sha256.Sum256([]byte(password))
	return hash[:] // 配列をスライスに変換
}