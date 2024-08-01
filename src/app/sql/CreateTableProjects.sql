CREATE TABLE Projects (
    project_id SERIAL PRIMARY KEY,
    resume_id INT REFERENCES Resume(resume_id),
	project_name VARCHAR(100),
    description TEXT
);

INSERT INTO public.projects (resume_id, project_name, description) VALUES
(1, 'Resume API', 'Turned my resume into api where users can access information via http requests'),
(1, 'Esthetician Website with Square Integration', 'Built an esthetician business website that integrates Squareup API');