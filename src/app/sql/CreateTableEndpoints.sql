CREATE TABLE Endpoints
(
    endpoint_id SERIAL PRIMARY KEY,
    method VARCHAR(10) NOT NULL,
    endpoint VARCHAR(255) NOT NULL,
    description text
);

INSERT INTO public.endpoints (method, endpoint, description) VALUES
('GET', '/', 'Retrieve all available endpoints'),
('GET', '/resume', 'Retrieve all resume data'),
('GET', '/experience', 'Retrieve all experience data'),
('GET', '/education', 'Retrieve all education data'),
('GET', '/skills', 'Retrieve all skills data'),
('GET', '/comments', 'Retrieve all comments posted to my resume'),
('POST', '/comments', 'Create a new comment entry on my resume');
