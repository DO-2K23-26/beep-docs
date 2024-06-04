## Migrations avec Adonis

Mais késako ?

Ce sont des mutations de base de données (bdd) documentées, par exemple : pour retirer une 
colonne d’une table, on ne se connecte pas directement sur la bdd en prod pour supprimer la colonne, MAIS on peut plutôt écrire un document contenant des instructions SQL. Cela permet de tracer de re-run ou rollback les commandes à n’importe quel moment. Les modifications sur la base de données sont alors facilement tracées, et à la portée des développeurs. De plus, lors des tests, les migrations peuvent être lancées sur les db de test pour s’assurer que leur schéma est compatible avec le code source
