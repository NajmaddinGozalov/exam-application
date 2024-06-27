export function makeId() {
    var id = '';
    var d = new Date();
    id += d.getFullYear();
    id += d.getMonth() + 1;
    id += d.getDate();
    id += d.getDay();
    id += d.getHours();
    id += d.getMinutes();
    id += d.getSeconds();
    id += d.getMilliseconds();
    return parseInt(id, 10);
}