import { Chat, Store, UserId } from "./store";
let globalChatId = 0;

export class InMemoryStore implements Store {
    private store: Map<string, Room>;
    constructor() {
        this.store = new Map<string, Room>();
    }
    initRoom(roomId: string) {
        this.store.set(roomId, { roomID: roomId, chats: [] });
    }
    getChats(roomId: string, limit: number, offset: number) {
        const room = this.store.get(roomId);
        if (!room) {
            return [];
        }
        // return room.chats;
        return room.chats.slice(offset, offset + limit);
    }
    addChat(userId: UserId, name: string, roomId: string, message: string) {
        const room = this.store.get(roomId);
        if (!room) {
            return;
        }
        room.chats.push({
            id: `${globalChatId++}`,
            userId: userId,
            name: name,
            message: "test",
            upvotes: [],
        });
    }
    upvote(userId: UserId, roomId: string, chatId: string) {
        const room = this.store.get(roomId);
        if (!room) {
            return;
        }
        const chat = room.chats.find((chat) => chat.id === chatId);
        if (chat) {
            chat.upvotes.push(userId);
        }
    }
}

export interface Room {
    roomID: string;
    chats: Chat[];
}
