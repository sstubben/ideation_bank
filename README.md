# Ideation Bank

The Ideation Bank is a web application built on the Django and Vue.js frameworks that facilitates the creation, management, and sharing of ideas. It allows users to submit new ideas, upvote or downvote existing ideas, and comment on ideas.

## Stack:

    Backend: Django
    Frontend: Vue.js
    Database: sqlite3

## Running the Backend

    Install pipenv: pip install pipenv
    Activate the virtual environment: pipenv shell
    Install project dependencies: pipenv install
    Start the Django server: python manage.py runserver

### Admin panel

    Setup admin user:
    python manage.py createsuperuser

    Start webserver
    python manage.py runserver
    Visit http://127.0.0.1/admin.

## Running the Frontend

    Ensure you have Node.js and npm installed
    Navigate to the frontend directory: cd frontend
    Install project dependencies: npm install
    Start the Vue.js development server: npm run dev

## Running Tests

    Ensure that both the backend and frontend servers are running.

### Backend:

    Activate the virtual environment: pipenv shell
    Run the tests: python manage.py test

### Frontend:

    Navigate to the frontend directory: cd frontend
    Ensure playwright test is installed: npx playwright install
    Run the integration tests: npx playwright test
