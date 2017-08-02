import axios from 'axios';

export function postTroop(troop) {
    return axios.post('http://localhost:3005/defenses', {recruit: troop}).then(res => res.status)
}