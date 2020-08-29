package postgres

import (
	_ "crypto/md5"
	"database/sql"
	"fileServer/types"
	"fileServer/utils"
	"fmt"
	_ "github.com/lib/pq"
	log "github.com/sirupsen/logrus"
	"math/rand"
	"os"
	"strconv"
	"time"
)

const (
	filesInfoTable  = "file_server.files_info"
	hashCost       = 14
)

var Manager types.FileInfoStorage

type FileInfoManager struct {
	connection *sql.DB
}

func (db *FileInfoManager) TrySaveFileIdToLot(fileInfo types.ClientFileInfo) bool {
	query := `
UPDATE ` + filesInfoTable + `
SET file_id=$1, file_status=1, content_type=$2, file_size=%3
WHERE lot_id=$4 AND file_status=0`
// затираем lot_token мусором сразу после сохранения файла. Таким образом, после этой операции, к нему уже ни у кого не будет доступа, пока главный сервер не поставит туда какой - нибудь новый токен, и не сообщит его авторизованному пользователю

	if _, err := db.connection.Exec(query,
		fileInfo.Id,
		fileInfo.ContentType,
		fileInfo.Size,
		fileInfo.LotId); err != nil {
		log.Errorf("Error saving file info: %v", err)
		return false
	}
	return true
}

func (db *FileInfoManager) GetFileIdFromLot(lotId, viewToken string) string {
	fileId := ""
	query := `
SELECT file_id
FROM ` + filesInfoTable + ` 
WHERE lot_id=$1 AND $2=ANY(view_tokens)`

	if err := db.connection.QueryRow(query, lotId, viewToken).Scan(&fileId); err != nil {
		log.Errorf("Error selecting file id: %v", err)
	}
	return fileId
}

func Init() {
	Manager = &FileInfoManager{}
}

func (db *FileInfoManager) MakeConnection() {
	user := os.Getenv("POSTGRES_USER")
	password := os.Getenv("POSTGRES_PASSWORD")
	host := os.Getenv("POSTGRES_HOST")
	port := os.Getenv("POSTGRES_PORT")
	dbName := os.Getenv("POSTGRES_DB")

	connStr := fmt.Sprintf("postgres://%v:%v@%v:%v/%v?sslmode=disable", user, password, host, port, dbName)
	conn, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error connecting to database: ", err)
	}
	db.connection = conn
}

func (db *FileInfoManager) CloseConnection() {
	if err := db.connection.Close(); err != nil {
		log.Error("Error closing postgres connection: ", err)
	}
}