# Server running
### Local
- Run `npm run start:local`
### Production
- Run `npm run start:prod`

# Logging
- Run `pm2 logs`

# Database seeding
- Create a seeder file in database/seeds folder
- Write an *`async function`* named **`run`** and implements database seeding logic inside it.
- Export the `named function` (not default).
- Run " `npm install -g .` " for the first time to install mmtdb command
- Change directory (cd) at project root
- Run `mmtdb db:seed` to seed database

  ## `To View available command list`
  - Run " `mmtdb -l` " or " `mmtdb --list` ".

  ## `For help`
  - Run " `mmtdb --help` ".

# Routes
- Reurn jwt token if success
  ```
   POST /api/v1/portal-users/login
   content-type application/json

   params 
   email, password
  ```
- Return portal users list (jwt must be provided and   must be super admin)
  ```
   GET /api/v1/portal-users
  ```