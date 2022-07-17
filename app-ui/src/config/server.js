export default function server() {
    let url;
    switch (process.env.NODE_ENV) {
        case 'production':
            url = 'http://localhost:8080';
            break;
        case 'development':
        default:
            url = 'http://localhost:3000';
    }

    return url;
}