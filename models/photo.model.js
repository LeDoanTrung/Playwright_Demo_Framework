class Photo {
    constructor(id, description, urls, user) {
        this.id = id;
        this.description = description;
        this.urls = urls;
        this.user = user;
    }

    // Helper để tạo photo object từ API response
    static fromApiResponse(data) {
        return new Photo(
            data.id,
            data.description,
            data.urls,
            data.user
        );
    }

    // Lấy URL của ảnh theo size
    getPhotoUrl(size = 'regular') {
        return this.urls[size] || this.urls.regular;
    }
}

module.exports = Photo;