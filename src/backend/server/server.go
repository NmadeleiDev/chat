package server

import (
	"chat_backend/server/handlers"
	"github.com/gorilla/mux"
	log "github.com/sirupsen/logrus"
	"net/http"
)

func StartServer(port string) {
	router := mux.NewRouter()

	// user account handlers
	router.HandleFunc("/signup", handlers.SignUpHandler)
	router.HandleFunc("/signin", handlers.SignInHandler)
	router.HandleFunc("/signout", handlers.SignOutHandler)
	router.HandleFunc("/unregister", handlers.UnregisterHandler)

	// chat interface handlers
	router.HandleFunc("/user", handlers.GetUserDataHandler)
	router.HandleFunc("/chat", handlers.CreateChatHandler)
	router.HandleFunc("/all_users", handlers.GetAllUsersHandler)
	router.HandleFunc("/name", handlers.SaveChatNameHandler)
	router.HandleFunc("/period", handlers.SaveChatStorePeriodHandler)
	router.HandleFunc("/add", handlers.AddUserToChatHandler)
	router.HandleFunc("/leave", handlers.LeaveChatHandler)
	router.HandleFunc("/messages", handlers.GetChatMessagesHandler)
	router.HandleFunc("/last", handlers.UpdateLastReadMessageHandler)

	// files handling
	router.HandleFunc("/file", handlers.RequestFileHandler)

	//router.HandleFunc("/pool_join", handlers.JoinUserToPool)
	router.HandleFunc("/pool", handlers.ManagePoolHandler)

	// ws handlers
	router.HandleFunc("/connect", handlers.ChatSocketHandler)

	log.Info("Listening ", port)
	if err := http.ListenAndServe(":"+port, router); err != nil {
		log.Fatal("Server error: ", err)
	}
}
