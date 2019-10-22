# A Little Help

Use A Little Help to create tasks that you need help with, or browse others' tasks and offer to help them.

## Prerequisites

Make sure you have installed:
  * Ruby, version 2.2.2 or newer
  * Postgres
  * Rails

You can check in the terminal:

```bash
ruby -v
rails -v
postgres -V
```

This should output some information on the installed versions.
If not, you can refer to the [Ruby](https://www.ruby-lang.org/en/documentation/installation/), [Postgres](https://www.postgresql.org/) and [Rails](https://guides.rubyonrails.org/v5.0/getting_started.html) documentation.

## Getting Started

Fork and clone this repository.
Start Postgres.

## Installation

### Backend

On a terminal window, move into the backend directory of this project. Use the gem manager [bundler](https://bundler.io/) to install all dependencies. Create, migrate and seed the database. Start the Rails server. To do all this, run these commands, one at the time.

```bash
cd backend
bundle install
rails db:create
rails db:migrate
rails db:seed
rails start
```

### Frontend

On a new terminal tab, navigate to the frontend directory inside the root directory of the project. Use the package manager [npm](https://www.npmjs.com/) to install all dependencies and start the server on port 3001.

```bash
cd frontend
npm install
npm start
```
Visit localhost:3001.

#### All good to go!

### Notes

This app is optimised for mobile use, please change your browser's device settings accordingly.
