CREATE TABLE Resume (
    resume_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    summary TEXT,
    website VARCHAR(100),
    linkedin VARCHAR(100),
    github VARCHAR(100),
    location VARCHAR(100)
);

CREATE TABLE Experience (
    experience_id SERIAL PRIMARY KEY,
    resume_id INT REFERENCES Resume(resume_id),
    title VARCHAR(100),
    company VARCHAR(100),
    location VARCHAR(100),
    start_date DATE,
    end_date DATE,
    description TEXT
);

CREATE TABLE Education (
    education_id SERIAL PRIMARY KEY,
    resume_id INT REFERENCES Resume(resume_id),
    degree VARCHAR(100),
    institution VARCHAR(100),
    location VARCHAR(100),
    start_date DATE,
    end_date DATE,
    description TEXT
);

CREATE TABLE Skills (
    skill_id SERIAL PRIMARY KEY,
    resume_id INT REFERENCES Resume(resume_id),
    skill_name VARCHAR(100),
    proficiency_level VARCHAR(20)
);
