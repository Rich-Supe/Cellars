# Welcome to Cellars, Home to wine sommeliers, connoisseurs, and enthusiasts alike!

<Insert Picture Here>


#### Cellars is made with a PERN stack and follows RESTful Api conventions with many of the features including CRUD functionality.
  
  ## Cellars is currently down on Heroku :( please allow time while working on a fix.
  
## For a deeper dive, check the following:
  * MVP - https://github.com/Rich-Supe/Cellars/wiki/MVP-List
  * Backend Routes - https://github.com/Rich-Supe/Cellars/wiki/Backend-Routes
  * Frontend Routes - https://github.com/Rich-Supe/Cellars/wiki/Frontend-Routes
  * Database Schema - https://dbdiagram.io/d/60a59bd7b29a09603d15aa81
  
  
TO DO:
  - Review edits
  - Searchbar
  - Cellar: add delete button(useState to allow x (onclick)to remove and add cellar btn to re-route to wines page)
  - AWS3
  - Styling
  - Wine CRUD
  - Add more seeders
  
# Technologies Used

| Back-end    | Front-end |
| ---      | ---       |
| Javascript ES6 | JavascriptES6  |
| PostgreSQL     | React |
| Node.Js |   Redux(Flux)    |
| Express | HTML/CSS 3 |
| Sequelize | SwiperJs |
| AWS S3 |  Heroku(deployment)  |

## React:
* Modals
* CSS Modules
* SwiperJs


## Redux:
* Logger
* Thunk
  
 # Functionalities and Code snippets:
 Organization:
    CSS: I use react modules that follow a BEM convention to keep code readable and re-usable

```
import styles from './WinesContainer.module.css'
    <div className={styles.searchBar}>
        <ul className={styles.dropdown}>
            <li className={styles.dropdown__header}>
                <ul className={styles.dropdown__options}>
                    <li className={styles.dropdown__options_li}>RED</li>
                    <li className={styles.dropdown__options_li}>White</li>
```


# Authentication measures:
1. bcryptjs
2. cors
3. csurf
4. helmet
5. cookies (XML etc.)
6. hashed passwords
7. Model scoping
8. Proxy
