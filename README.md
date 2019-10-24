# A Little Help

Use A Little Help to create tasks that you need help with, or browse others' tasks and offer to help them.

![](A-little-help-gif.gif){ size=1 }

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

You will also need a Google API key for this project. You can get one on the [Google API website](https://cloud.google.com/maps-platform/). Your project needs to enable the Maps Javascript API,Places API and Geocoding API.

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

On a new terminal tab, navigate to the frontend directory inside the root directory of the project. Use the package manager [npm](https://www.npmjs.com/) to install all dependencies. 

```bash
cd frontend
npm install
```

#### Google API

Once you have a key, that needs to be inserted inside two files:
the **index.html** file of this project, inside the **script tag**, where it says 'YOUR API KEY', then save:

```bash
<!-- insert your API key in the script tag beneath -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR API KEY&libraries=places"></script>
```

Same thing at the bottom of the **MapContainer.js** file, in the export statement, then save:

```bash
// insert your API key beneath
export default GoogleApiWrapper({
  apiKey: "YOUR API KEY" // leave the inverted commas
})(MapContainer);
```


Start the server on port 3001.
```bash
npm start
```

Visit localhost:3001.


#### All good to go!

### Notes

This app is optimised for mobile use, please change your browser's device settings accordingly.
