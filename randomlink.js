const room1 = "https://meet.google.com/thd-oipn-fse"
const room2 = "https://meet.google.com/pnm-eazo-huh"
const room3 = "https://meet.google.com/jjp-pkev-jmz"
const room4 = "https://meet.google.com/wrf-dfii-kku"

const rooms = [room1, room2, room3, room4]

const generateLink = () => {
    const room = rooms[Math.floor(Math.random() * rooms.length)]
    return room;
};

document.getElementById("linkElementId").href = generateLink();