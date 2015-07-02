Based on [Udemy 10 Angular Courses](https://www.udemy.com/learn-angularjs-development/#/)

- Refactored to John Papa styleguide
- uses un-minified angular.js for better error messages
- uses CDN for angular-bootstrap  (bower errors)
<script src="https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.10.0.js"></script>
- db.createCollection('articles');     -    db.articles.insert({ title : 'Artilce one' })   
- db.categories.update({name:'Technology'}, {$set: {description: 'learn more about tech stuff'}})

### Instagram Gallery App
- ngRoute, ngResource, bootstrapLightbox, instagram API
- [Angular Lightbox](https://github.com/compact/angular-bootstrap-lightbox)
- *node server*    (simple express)
- display popular photos, click on photo to create lightbox.  Uses angular.forEach() to scroll through

### AutoFind
- MEAN.js               (me, 4444)
- *Update ui-bootstrap* to version 0.12
- Fetch and Display cars
- CRUD for cars
- public/modules/core...
- new *cars* module   -  copy from articles, make changes
- create cars collection and insert some data in mongo shell
- add $scope.find() to core controller to populate front page with cars
- - use car.name notation on edit-car.html view

### Knowledgebase
- MEAN stack app, scaffold using Express
- ngRoute, Bootstrap  (starter html template)
- CRUD app for articles w/ categories