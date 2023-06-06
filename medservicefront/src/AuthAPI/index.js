export const AuthAPI = {
    async login(login, password, role) {
        const response = await fetch(`http://localhost:8000/api/${role}s/`);
        if (!response.ok) {
            const error = new Error(response.code);
            error.status = response.status;
            throw error;
        }

        const result = await response.json();
        const data = [...result['hydra:member']];

        const user = data.find(item => item.email === login && item.password === password);

        if (!user) {
            const error = new Error('Пользователь не найден');
            error.status = 404;
            throw error;
        }

        return user;
    }
}