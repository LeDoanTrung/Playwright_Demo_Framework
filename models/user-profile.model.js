class UserProfile {
    constructor(userId, bio, location, website, firstName = '', lastName = '', email = '') {
        this.userId = userId;
        this.bio = bio;
        this.location = location;
        this.website = website;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }

    // Tạo profile mới với thông tin cơ bản
    static createBasicProfile(userId) {
        return new UserProfile(
            userId,
            'A photography enthusiast',
            'Vietnam',
            'https://example.com'
        );
    }

    // Method để update profile
    updateInfo(updates = {}) {
        Object.assign(this, updates);
        return this;
    }
}

module.exports = UserProfile;