import { randomBytes } from "crypto";
export const playerId = Symbol("playerId");
export class Player {
    id;
    socket;
    sdp = null;
    iceCandidates = [];
    enemyId = null;
    accepting_connections = false;
    constructor({ id, socket }) {
        this.id = id;
        socket[playerId] = id;
        this.socket = socket;
        Player.instances.set(this.id, this);
    }
    reset() {
        this.enemyId = null;
        this.accepting_connections = false;
    }
    delete() {
        Player.instances.delete(this.id);
    }
    get enemy() {
        return this.enemyId ? Player.instances.get(this.enemyId) : undefined;
    }
    get hasEnemy() {
        return this.enemyId ? true : false;
    }
    static instances = new Map();
    static find(id) {
        return Player.instances.get(id);
    }
    static generateId() {
        const id = randomBytes(4).toString("base64url");
        return Player.instances.has(id) ? Player.generateId() : id;
    }
}
