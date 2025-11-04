class Account {
    constructor(username, password, userId = undefined, keyAccessToken = '') {
        this.username = username;
        this.password = password;
        this.userId = userId;
        this.keyAccessToken = keyAccessToken;
    }

    // Helper method để tạo test account
    static createTestAccount() {
        return new Account('testuser', 'testpass', '12345', 'test-token');
    }

    // Chuyển đổi thành format cho API request
    toJSON() {
        return {
            username: this.username,
            password: this.password,
            userId: this.userId,
            keyAccessToken: this.keyAccessToken
        };
    }
}

module.exports = Account;