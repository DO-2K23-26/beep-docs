# Migrations
## Définition

Database migrations are documented changes to the database structure, allowing for controlled and traceable modifications. 
For example, instead of directly connecting to the production database to delete a column, you can write a migration file 
containing SQL instructions.

**_This offers several advantages:_**

### Traceability
>Each modification is recorded, allowing you to know who did what and when.
### Rollback and Re-run
>Migrations can be replayed or undone at any time, facilitating error management or the need for modifications.
### Consistency
>Ensures that all databases (production, test, development) are synchronized and consistent.

## Usage with Adonis

#### Creating a Migration:
Use the Adonis CLI command to create a migration file.
```bash
node ace make:migration nom_de_la_migration
```

The filename will include a timestamp to ensure uniqueness.
In this file, define the changes to be made (adding, removing columns, modifying data types, etc.).

#### Running Migrations:
Migrations are executed with the following command, which applies the changes to the database:
```bash
node ace migration:run
```

#### Rolling Back Migrations:
If there is an issue, migrations can be undone with the following command:
```bash
node ace migration:rollback
```

#### Example Structure of a Migration File

A typical migration file in Adonis might look like this:
```bash
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').primary()
      table.string('username', 254).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.string('profile_picture').notNullable()

      table.timestamp('verified_at').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
```

In this example, the up method contains the instructions to create the users table, while the down method contains the instructions to drop it, allowing for easy rollback if necessary.

### Seeding the Database

Seeding allows you to populate the database with initial data. This is particularly useful for setting up a database with default or sample data for testing or development.

#### Creating a Seed:

Use the Adonis CLI command to create a seed file.
```bash
node ace make:seed seed_name
```

#### Running Seeds:

Seeds are executed with the following command, which populates the database with the specified data:
```bash
node ace db:seed
```

#### Example Structure of a Seed File

A typical seed file in Adonis might look like this:

```bash
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        username: 'admin',
        email: 'admin@example.com',
        password: 'password',
        profile_picture: 'admin.png',
      },
      {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password',
        profile_picture: 'user1.png',
      }
    ])
  }
}
```

In this example, the run method manually creates an admin user and a regular user. Seeding helps ensure that your database has the necessary data to function correctly from the start.

### Additional Commands

#### Refresh Migrations:

To refresh the database, you can run the following command, which rolls back all migrations and re-runs them:
```bash
node ace migration:refresh
```

#### Resetting Migrations:

To reset the database, you can run the following command, which rolls back all migrations:
```bash
node ace migration:reset
```

#### Refreshing Migrations and Seeding:

To refresh the database and re-run seeds, you can run the following command:
```bash
node ace migration:refresh --seed
```
