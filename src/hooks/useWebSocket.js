import { io } from 'socket.io-client'

export const useWebSocket = (url) => {
    const socket = io(url)
    return socket
}