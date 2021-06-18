# Welcome to Cellars, Home to wine sommeliers, connoisseurs, and enthusiasts alike!

<Insert Picture Here>
  
![image of wines](https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreebackground%2Fdelicious-wine-simple-brown-banner_1038190.html&psig=AOvVaw2woQgnHOHH-L-RCq3GuvHd&ust=1624121276384000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJCY87DRofECFQAAAAAdAAAAABAP)

#### Cellars is made with a PERN stack and follows RESTful Api conventions with many of the features including CRUD functionality.
  
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
  
## Technologies Used

| Back-end    | Front-end |
| ---      | ---       |
| Javascript ES6 | JavascriptES6  |
| PostgreSQL     | React |
| Node.Js |   Redux(Flux)    |
| Express | HTML/CSS 3 |
| Sequelize | SwiperJs |
| AWS S3 |  Heroku(deployment)  |

<!-- ## React:
* Modals
* CSS Modules
* SwiperJs


## Redux:
* Logger
* Thunk -->
  
  
## Authentication measures:
1. bcryptjs
2. cors
3. csurf
4. helmet
5. cookies (XML etc.)
6. hashed passwords
7. Model scoping
8. Proxy
 
## Flux architecture:
Using a Flux architecture in combination with React/Redux allows for unidirectional data-flow. In cellars, I use this flow with Redux to efficiently store the state of my app and make it available throughout the rest of the app. I use a reducer to change the state(without mutating the original state), and React as my view layer.
<!-- ![image](https://user-images.githubusercontent.com/70147547/121962653-07a3c200-cd37-11eb-92f7-8bf73de2c88b.png) -->
 ![image](https://user-images.githubusercontent.com/70147547/121963082-a29c9c00-cd37-11eb-8bc5-74b3c0111432.png)

## Functionalities and Code snippets
### CSS: I use react modules that follow a BEM convention to keep code readable and re-usable. Ex:
```javascript
import styles from './WinesContainer.module.css'
    <div className={styles.searchBar}>
        <ul className={styles.dropdown}>
            <li className={styles.dropdown__header}>
                <ul className={styles.dropdown__options}>
                    <li className={styles.dropdown__options_li}>RED</li>
                    <li className={styles.dropdown__options_li}>White</li>
```
                  
### Back-end Queries:
#### Live search bar to filter wines by words typed
```javascript
router.get(
    '/search/:name',
    asyncHandler(async (req, res) => {
        const name = req.params.name.trim()
        const wines = await Wine.findAll({where: {name: { [Op.iLike]: `%` + name + `%` }}})
        return res.json(wines)
    })
)
```
#### Live selectors to filter wines by color, grape, country, and year
```javascript
router.post(
    '/search/:searchData',
    asyncHandler(async (req, res) => {
        const {color, grape, country, year} = req.body
        let results = [];
        if (color) results.push({color});
        if (grape) results.push({grape});
        if (country) results.push({country});
        if (year) results.push({year});
        if (name) results.push({name});
        const wines = await Wine.findAll({where: {[Op.and]:results}})
        return res.json(wines)
     })
)
```
<!--   ### Components  -->
