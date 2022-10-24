export const getSocketID = (io) => {
    const socket = io.sockets.adapter.rooms;
    //console.log('socket', socket);
    let socketId;
    for (let id of socket) {
        socketId = id;
    }
    let sID = socketId.toString().split(',')[0];
    return sID;
};
