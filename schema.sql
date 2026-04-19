CREATE TABLE complaints (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    complaint TEXT,
    status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
